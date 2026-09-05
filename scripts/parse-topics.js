import fs from 'node:fs';

function unescapeHtml(str) {
  return str
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function stripHtml(html) {
  return unescapeHtml(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function normalizeAssets(html) {
  return html.replace(/\.?\/?assets\//g, '/assets/');
}

function extractSlidesContainer(html) {
  const startIdx = html.indexOf('<div class="slides">');
  if (startIdx === -1) return '';
  const afterStart = html.substring(startIdx + '<div class="slides">'.length);
  const lastSectionIdx = afterStart.lastIndexOf('</section>');
  if (lastSectionIdx === -1) return '';
  return afterStart.substring(0, lastSectionIdx + '</section>'.length);
}

function parseSlides(rawHtml) {
  const rawSlidesContent = extractSlidesContainer(rawHtml);
  if (!rawSlidesContent) return [];

  const tagRegex = /<\/?section\b([^>]*)>/gi;
  let tagMatch;
  const sectionStarts = [];
  let depth = 0;
  const topSections = [];

  while ((tagMatch = tagRegex.exec(rawSlidesContent)) !== null) {
    const isClosing = tagMatch[0].startsWith('</');
    const fullTag = tagMatch[0];
    const index = tagMatch.index;

    if (!isClosing) {
      if (depth === 0) {
        sectionStarts.push({ startIndex: index, attrs: tagMatch[1], tagLength: fullTag.length });
      }
      depth++;
    } else {
      depth--;
      if (depth === 0 && sectionStarts.length > 0) {
        const start = sectionStarts.pop();
        const innerContent = rawSlidesContent.substring(start.startIndex + start.tagLength, index);
        topSections.push({ attrs: start.attrs, content: innerContent });
      }
    }
  }

  const flatSlides = [];
  for (const sec of topSections) {
    if (sec.content.includes('<section')) {
      const nestedRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
      let nestedMatch;
      while ((nestedMatch = nestedRegex.exec(sec.content)) !== null) {
        flatSlides.push({ attrs: nestedMatch[1], content: nestedMatch[2] });
      }
    } else {
      flatSlides.push(sec);
    }
  }

  return flatSlides.map((slideObj, index) => {
    let content = normalizeAssets(slideObj.content);
    
    const h1Match = content.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    const h2Match = content.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/i);
    const h3Match = content.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i);
    const eyebrowMatch = content.match(/<p class="eyebrow">([\s\S]*?)<\/p>/i);
    const subtitleMatch = content.match(/<p class="subtitle">([\s\S]*?)<\/p>/i);
    const leadMatch = content.match(/<p class="lead">([\s\S]*?)<\/p>/i);
    const bylineMatch = content.match(/<p class="byline">([\s\S]*?)<\/p>/i);
    const partMatch = content.match(/<p class="part-number">([\s\S]*?)<\/p>/i);
    const caveatMatch = content.match(/<p class="caveat">([\s\S]*?)<\/p>/i);
    
    const notesMatch = content.match(/<aside class="notes">([\s\S]*?)<\/aside>/i);
    let speakerNotes = [];
    let sources = [];
    if (notesMatch) {
      const rawNotes = notesMatch[1];
      const sourcesMatch = rawNotes.match(/\[Sources\]([\s\S]*?)\[\/Sources\]/i);
      if (sourcesMatch) {
        sources = sourcesMatch[1]
          .split('\n')
          .map(s => s.replace(/^[-*]\s*/, '').trim())
          .filter(s => s.length > 0);
      }
      const cleanedNotes = rawNotes.replace(/\[Sources\][\s\S]*?\[\/Sources\]/gi, '').trim();
      if (cleanedNotes) {
        speakerNotes = [cleanedNotes];
      }
    }

    const codeSnippets = [];
    const codeRegex = /<pre\b[^>]*><code\b(?: class="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/gi;
    let codeMatch;
    while ((codeMatch = codeRegex.exec(content)) !== null) {
      codeSnippets.push({
        language: codeMatch[1] || 'bash',
        code: unescapeHtml(codeMatch[2].trim())
      });
    }

    const tables = [];
    const tableRegex = /<table\b[^>]*>([\s\S]*?)<\/table>/gi;
    let tableMatch;
    while ((tableMatch = tableRegex.exec(content)) !== null) {
      const tableHtml = tableMatch[1];
      const rows = [];
      let headers = [];
      const rowRegex = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
      let rowMatch;
      while ((rowMatch = rowRegex.exec(tableHtml)) !== null) {
        const cells = [];
        const cellRegex = /<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi;
        let cellMatch;
        let isHeaderRow = rowMatch[1].includes('<th');
        while ((cellMatch = cellRegex.exec(rowMatch[1])) !== null) {
          cells.push(stripHtml(cellMatch[1]));
        }
        if (isHeaderRow && headers.length === 0) {
          headers = cells;
        } else if (headers.length === 0 && rows.length === 0 && cells.length > 0) {
          headers = cells;
        } else if (cells.length > 0) {
          rows.push(cells);
        }
      }
      tables.push({ headers, rows });
    }

    const iframeMatch = content.match(/<iframe\b[^>]*src="([^"]+)"[^>]*>/i);
    const videoUrl = iframeMatch ? iframeMatch[1] : undefined;

    const images = [];
    const imgRegex = /<img\b[^>]*src="([^"]+)"[^>]*>/gi;
    let imgMatch;
    while ((imgMatch = imgRegex.exec(content)) !== null) {
      images.push(imgMatch[1]);
    }

    let title = h1Match ? stripHtml(h1Match[1]) : (h2Match ? stripHtml(h2Match[1]) : (h3Match ? stripHtml(h3Match[1]) : undefined));
    if (!title) {
      const pMatch = content.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
      if (pMatch) {
        const text = stripHtml(pMatch[1]);
        if (text.length > 0 && text.length < 80) title = text;
      }
    }

    const isTitleSlide = Boolean(index === 0 || !!h1Match);
    const isSectionDivider = Boolean(!!partMatch || (slideObj.attrs && slideObj.attrs.includes('section-divider')));

    return {
      id: `slide-${index + 1}`,
      slideNumber: index + 1,
      title,
      eyebrow: eyebrowMatch ? stripHtml(eyebrowMatch[1]) : undefined,
      subtitle: subtitleMatch ? stripHtml(subtitleMatch[1]) : undefined,
      lead: leadMatch ? stripHtml(leadMatch[1]) : undefined,
      byline: bylineMatch ? stripHtml(bylineMatch[1]) : undefined,
      isTitleSlide,
      isSectionDivider,
      partNumber: partMatch ? stripHtml(partMatch[1]) : undefined,
      rawHtml: content.trim(),
      cleanText: stripHtml(content),
      codeSnippets,
      tables,
      caveat: caveatMatch ? stripHtml(caveatMatch[1]) : undefined,
      speakerNotes: speakerNotes.length > 0 ? speakerNotes : undefined,
      sources: sources.length > 0 ? sources : undefined,
      videoUrl,
      images
    };
  });
}

// TOPIC 01
const t1Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/12/content.md', 'utf8');
const t1Slides = parseSlides(t1Raw);

const topic01 = {
  id: 'topic-01',
  slug: '00-intro-to-linux',
  topicNumber: '00',
  title: 'Linux Essentials for Digital Forensics',
  subtitle: 'Learn the system. Then use it carefully in forensic work.',
  description: 'Practical Linux workflows for acquiring, verifying, examining, and documenting digital evidence.',
  author: 'Mark Joseph J. Solidarios',
  originalPath: '_00_intro_to_linux',
  badge: 'Foundations',
  tags: ['Linux', 'Kali Linux', 'CLI', 'NIST SP 800-86', 'ddrescue', 'The Sleuth Kit', 'Live Response'],
  totalSlides: t1Slides.length,
  sections: [
    {
      id: 'course-outcome',
      title: 'Course Outcome & Mental Model',
      eyebrow: 'Foundations',
      slides: t1Slides.slice(0, 2)
    },
    {
      id: 'part-1-linux-basics',
      title: 'Part 1: Linux Basics with Kali',
      eyebrow: 'Part 1',
      summary: 'Start with navigation and files, then build toward processes, networking, and remote work.',
      slides: t1Slides.slice(2, 16)
    },
    {
      id: 'part-2-forensic-application',
      title: 'Part 2: Linux Applied to Digital Forensics',
      eyebrow: 'Part 2',
      summary: 'Now the goal is not only to get an answer—it is to preserve and explain how you obtained it.',
      slides: t1Slides.slice(16)
    }
  ]
};

// TOPIC 02
const t2Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/20/content.md', 'utf8');
const t2Slides = parseSlides(t2Raw);

const topic02 = {
  id: 'topic-02',
  slug: '01-intro-cyberforensics',
  topicNumber: '01',
  title: 'Intro to Cyberforensics',
  subtitle: 'An Introduction to Digital Forensics, History, and Applications',
  description: 'An introductory presentation on Cyberforensics, covering its definition, history, uses, and essential tools.',
  author: 'Mark Joseph J. Solidarios',
  originalPath: '_01_intro_cyberforensics',
  badge: 'Core Concepts',
  tags: ['Cyberforensics', 'History', 'Timeline', 'OSSTMM', 'Autopsy', 'TestDisk', 'Stages'],
  totalSlides: t2Slides.length,
  sections: [
    {
      id: 'foundations-definitions',
      title: 'Foundations & Definitions',
      eyebrow: 'Concepts',
      summary: 'Distinguishing Digital Forensics from Cyberforensics and classifying forms of cybercrime.',
      slides: t2Slides.slice(0, 5)
    },
    {
      id: 'evolution-timeline',
      title: 'The Evolution of Forensics (1835 - 2000)',
      eyebrow: 'History',
      summary: 'From Scotland Yard ballistics to the FBI Computer Analysis and Response Team and international standards.',
      slides: t2Slides.slice(5, 11)
    },
    {
      id: 'stages-and-applications',
      title: 'Cyberforensics Stages & Uses',
      eyebrow: 'Methodology',
      summary: 'The 4 forensic stages (Acquire, Analyze, Evaluate, Present), OSSTMM methodology, and investigative use cases.',
      slides: t2Slides.slice(11, 14)
    },
    {
      id: 'forensic-tools-demonstrations',
      title: 'Essential Tools & Demonstrations',
      eyebrow: 'Tools',
      summary: 'Video demonstrations and practical overviews of Autopsy, TestDisk, and Kali Linux.',
      slides: t2Slides.slice(14)
    }
  ]
};

// TOPIC 03
const t3Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/26/content.md', 'utf8');
const t3Slides = parseSlides(t3Raw);

const topic03 = {
  id: 'topic-03',
  slug: '04-kali-linux-and-technical-concepts',
  topicNumber: '04',
  title: 'Kali Linux & Technical Concepts',
  subtitle: 'Kali Linux Tools and Computing Concepts for Digital Forensics',
  description: 'Deep dive into forensic carving, forensic imaging, file systems, character encodings, hex analysis, and memory structures.',
  author: 'Mark Joseph J. Solidarios',
  originalPath: '_04_kali_linux_and_technical_concepts',
  badge: 'Technical In-Depth',
  tags: ['Kali Linux', 'Carving', 'Scalpel', 'Magic Rescue', 'Hex Analysis', 'File Systems', 'SSD TRIM'],
  totalSlides: t3Slides.length,
  sections: [
    {
      id: 'forensic-carving',
      title: 'Forensic Carving & Extraction Tools',
      eyebrow: 'Carving',
      summary: 'Magic bytes pattern recognition with magicrescue, scalpel, and scrounge-ntfs.',
      slides: t3Slides.slice(0, 16)
    },
    {
      id: 'imaging-and-pdf-forensics',
      title: 'Forensic Imaging & PDF Forensics',
      eyebrow: 'Tools',
      summary: 'High-speed multithreaded imaging with Guymager, PDF keyword parsing, and The Sleuth Kit / Autopsy.',
      slides: t3Slides.slice(16, 26)
    },
    {
      id: 'character-encodings-file-signatures',
      title: 'Character Encoding & File Signatures',
      eyebrow: 'Technical Concepts',
      summary: 'ASCII (128 code points) vs. Unicode, magic byte signatures in the first 20 bytes, and hex editing investigation.',
      slides: t3Slides.slice(26, 35)
    },
    {
      id: 'storage-and-filesystem-architectures',
      title: 'Storage Types, Partitions & File Systems',
      eyebrow: 'Architecture',
      summary: 'Volatile vs nonvolatile memory, primary/secondary storage, partitions, and comprehensive comparative file system tables.',
      slides: t3Slides.slice(35, 41)
    },
    {
      id: 'data-recovery-ssd-trim',
      title: 'Data Recovery Considerations & SSD TRIM',
      eyebrow: 'Recovery',
      summary: 'HDD pointer deletion versus SSD TRIM instant unallocation, and the 4-stage external recovery process.',
      slides: t3Slides.slice(41)
    }
  ]
};

// TOPIC 04
const t4Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/32/content.md', 'utf8');
const t4Slides = parseSlides(t4Raw);

const topic04 = {
  id: 'topic-04',
  slug: '05-crime-scene-investigation',
  topicNumber: '05',
  title: 'Crime Scene Investigation for Cyberforensics',
  subtitle: 'Procedures, Landmark Philippine Cases, AI-Assisted Hacking, and OSForensics',
  description: 'Securing the scene, the 4-phase cybercrime investigation process, storage lifespans, RA 10175, Comelec breach, 2016 WVSU student hack, 2026 AI autonomous hacking, and OSForensics.',
  author: 'Mark Joseph J. Solidarios',
  originalPath: '_05_crime_scene_investigation',
  badge: 'Investigation & Casework',
  tags: ['Incident Response', 'Chain of Custody', 'RA 10175', 'Philippine Cases', 'AI Hacking', 'Hugging Face', 'OSForensics'],
  totalSlides: t4Slides.length,
  sections: [
    {
      id: 'securing-the-scene',
      title: 'Securing the Crime Scene',
      eyebrow: 'Incident Response',
      summary: 'Scene containment, perimeter security, bystander prevention, and computers as a crime scene within a scene.',
      slides: t4Slides.slice(0, 7)
    },
    {
      id: 'investigation-process',
      title: 'Cyber Crime Investigation Process',
      eyebrow: 'Methodology',
      summary: 'Four systematic phases: Initial Response, Evidence Collection, Evidence Analysis, and Reporting & Documentation.',
      slides: t4Slides.slice(7, 12)
    },
    {
      id: 'investigation-challenges-lifespans',
      title: 'Challenges & Media Life Expectancy',
      eyebrow: 'Challenges',
      summary: 'Data volatility, complex topologies, rapidly evolving tech, and hardware lifespans (HDD, SSD, Flash, CD-R).',
      slides: t4Slides.slice(12, 19)
    },
    {
      id: 'philippine-legal-framework-cases',
      title: 'Philippine Framework & Landmark Cases',
      eyebrow: 'Jurisprudence & History',
      summary: 'RA 10175 DOJ Office of Cybercrime, 2005 gov.ph hacking, 2016 Comelec data breach, and 2019 Cebuana Lhuillier.',
      slides: t4Slides.slice(19, 25)
    },
    {
      id: 'wvsu-school-incident',
      title: 'WVSU Campus Incident (2016)',
      eyebrow: 'Campus Case Study',
      summary: 'CICT student exploit of WVSU MIS via SQL Injection and XSS, HR Admin bypass, MIS disciplinary warning, and public apology.',
      slides: t4Slides.slice(25, 27)
    },
    {
      id: 'ai-assisted-hacking-cases',
      title: 'AI-Assisted Hacking & Modern Intrusions',
      eyebrow: 'AI Frontiers',
      summary: 'July 2026 Hugging Face autonomous swarm breach (17,600 actions), GTG-1002 Claude espionage, vibe-hacking extortion, and forensic lessons.',
      slides: t4Slides.slice(27, 43)
    },
    {
      id: 'osforensics-toolkit',
      title: 'Acquiring Evidence with OSForensics',
      eyebrow: 'Tool Suite',
      summary: 'Case management, fast file searching, cryptographic hash sets, memory inspection, and browser password recovery.',
      slides: t4Slides.slice(43)
    }
  ]
};

// Write files
fs.writeFileSync('src/content/topics/topic-01.ts', `import { Topic } from '../../types/content';\n\nexport const TOPIC_01: Topic = ${JSON.stringify(topic01, null, 2)};\n`, 'utf8');
fs.writeFileSync('src/content/topics/topic-02.ts', `import { Topic } from '../../types/content';\n\nexport const TOPIC_02: Topic = ${JSON.stringify(topic02, null, 2)};\n`, 'utf8');
fs.writeFileSync('src/content/topics/topic-03.ts', `import { Topic } from '../../types/content';\n\nexport const TOPIC_03: Topic = ${JSON.stringify(topic03, null, 2)};\n`, 'utf8');
fs.writeFileSync('src/content/topics/topic-04.ts', `import { Topic } from '../../types/content';\n\nexport const TOPIC_04: Topic = ${JSON.stringify(topic04, null, 2)};\n`, 'utf8');

console.log('Successfully regenerated topics with strict boolean flags.');
