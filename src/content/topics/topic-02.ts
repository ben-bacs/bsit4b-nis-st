import { Topic } from '../../types/content';

export const TOPIC_02: Topic = {
  "id": "topic-02",
  "slug": "01-intro-cyberforensics",
  "topicNumber": "01",
  "title": "Intro to Cyberforensics",
  "subtitle": "An Introduction to Digital Forensics, History, and Applications",
  "description": "An introductory presentation on Cyberforensics, covering its definition, history, uses, and essential tools.",
  "author": "Mark Joseph J. Solidarios",
  "originalPath": "_01_intro_cyberforensics",
  "badge": "Core Concepts",
  "tags": [
    "Cyberforensics",
    "History",
    "Timeline",
    "OSSTMM",
    "Autopsy",
    "TestDisk",
    "Stages"
  ],
  "totalSlides": 18,
  "sections": [
    {
      "id": "foundations-definitions",
      "title": "Foundations & Definitions",
      "eyebrow": "Concepts",
      "summary": "Distinguishing Digital Forensics from Cyberforensics and classifying forms of cybercrime.",
      "slides": [
        {
          "id": "slide-1",
          "slideNumber": 1,
          "title": "Cyberforensics",
          "eyebrow": "CIT 245 • Topic 01",
          "subtitle": "An Introduction to Digital Forensics, History, and Applications",
          "lead": "Foundational concepts, legal distinctions, historical milestones from 1835 to 2000, OSSTMM methodology, and essential investigative tools.",
          "byline": "Prof. Mark Joseph J. Solidarios • WVSU CICT Main Campus, Iloilo City",
          "isTitleSlide": true,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"intro-author-card\"><div class=\"institution-badge\"><span>West Visayas State University • CICT Main Campus, Iloilo City</span></div><p class=\"intro-tagline\">Bachelor of Science in Information Technology • CIT 245 Cyberforensics</p></div>",
          "cleanText": "Cyberforensics An Introduction to Digital Forensics, History, and Applications. Foundational concepts, legal distinctions, historical milestones from 1835 to 2000, OSSTMM methodology, and essential investigative tools. Prof. Mark Joseph J. Solidarios, WVSU CICT Main Campus, Iloilo City.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-2",
          "slideNumber": 2,
          "title": "Presentation Guide & Navigation Controls",
          "eyebrow": "Orientation",
          "subtitle": "How to navigate and explore this lecture module",
          "lead": "Use the following controls and shortcuts to navigate the presentation:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"controls-guide-grid\"><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>←</kbd> <kbd>→</kbd> or <kbd>Space</kbd></div><strong>Slide Navigation</strong><p>Advance or go back through slides using keyboard arrows, spacebar, or on-screen controls.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>F</kbd></div><strong>Fullscreen Presentation</strong><p>Toggle fullscreen mode for a distraction-free lecture viewing experience on desktop or tablet.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><span class=\"badge-tag\">Tap Left / Right</span></div><strong>Touch &amp; Swipe Zones</strong><p>On mobile devices, tap the left or right edges of the screen, or swipe horizontally to navigate.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>Ctrl</kbd> + <kbd>K</kbd></div><strong>Global Search &amp; Reader</strong><p>Search all topics, commands, and cases instantly, or toggle into Study Reader mode for full notes.</p></div></div>",
          "cleanText": "Presentation Guide & Navigation Controls. How to navigate and explore this lecture module. Use keyboard arrows, F for fullscreen, tap zones on mobile, and Ctrl+K to search.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-3",
          "slideNumber": 3,
          "title": "What is Digital Forensics?",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>What is Digital Forensics?</h2>\n          <p class=\"fragment\">\n            The art and science of recovering and analyzing contents found on\n            digital devices such as desktops, notebooks, tablets, smartphones,\n            and secondary storage media.\n          </p>",
          "cleanText": "What is Digital Forensics? The art and science of recovering and analyzing contents found on digital devices such as desktops, notebooks, tablets, smartphones, and secondary storage media.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-4",
          "slideNumber": 4,
          "title": "What is Cyberforensics?",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>What is Cyberforensics?</h2>\n          <p class=\"fragment\">\n            Specializes in the detection and investigation of cybercrime\n            exclusively—gathering, analyzing, and preserving digital evidence\n            to resolve clues and threats across cyberspace.\n          </p>",
          "cleanText": "What is Cyberforensics? Specializes in the detection and investigation of cybercrime exclusively—gathering, analyzing, and preserving digital evidence to resolve clues and threats across cyberspace.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-5",
          "slideNumber": 5,
          "title": "Cybercrime: Detection and Prevention",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Cybercrime</h2>\n          <p class=\"fragment\">Detection and Prevention in Forensic Practice</p>",
          "cleanText": "Cybercrime Detection and Prevention in Forensic Practice",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "evolution-timeline",
      "title": "The Evolution of Forensics (1835 - 2000)",
      "eyebrow": "History",
      "summary": "From Scotland Yard ballistics to the FBI Computer Analysis and Response Team and international standards.",
      "slides": [
        {
          "id": "slide-6",
          "slideNumber": 6,
          "title": "Two Forms of Cybercrime",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Two Forms of Cybercrime</h2>\n          <div class=\"fragment left\" data-fragment-index=\"1\">\n            <p><i class=\"fas fa-laptop\"></i> Computer-Based Crime</p>\n            <p>\n              <small>\n                Criminal activity conducted purely on computers (e.g.,\n              cyber-bullying, spam, child pornography).\n              </small>\n            </p>\n          </div>\n          <div class=\"fragment left\" data-fragment-index=\"2\">\n            <p><i class=\"fas fa-user-friends\"></i> Computer-Facilitated Crime</p>\n            <p>\n            <small>\n              \"Real world\" crime facilitated by computers (e.g., fraud,\n              planning criminal activities).\n            </small>\n            </p>\n          </div>",
          "cleanText": "Two Forms of Cybercrime Computer-Based Crime Criminal activity conducted purely on computers (e.g., cyber-bullying, spam, child pornography). Computer-Facilitated Crime \"Real world\" crime facilitated by computers (e.g., fraud, planning criminal activities).",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-7",
          "slideNumber": 7,
          "title": "The Evolution of Forensics: The Early Days",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>The Evolution of Forensics: The Early Days</h2>\n          <div class=\"timeline\">\n            <div class=\"timeline-item fragment\" data-fragment-index=\"1\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-history\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1835</h3>\n                <p>\n                  Henry Goddard of Scotland Yard uses physical analysis to\n                  connect a bullet to a murder weapon.\n                </p>\n              </div>\n            </div>\n            <div class=\"timeline-item fragment\" data-fragment-index=\"2\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-vial\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1836</h3>\n                <p>\n                  James Marsh develops a chemical test for arsenic, used in a\n                  murder trial.\n                </p>\n              </div>\n            </div>\n          </div>",
          "cleanText": "The Evolution of Forensics: The Early Days 1835 Henry Goddard of Scotland Yard uses physical analysis to connect a bullet to a murder weapon. 1836 James Marsh develops a chemical test for arsenic, used in a murder trial.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-8",
          "slideNumber": 8,
          "title": "The Evolution of Forensics: The Early Days (Cont.)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>The Evolution of Forensics: The Early Days (Cont.)</h2>\n          <div class=\"timeline\">\n            <div class=\"timeline-item fragment\" data-fragment-index=\"1\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-dna\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1930</h3>\n                <p>\n                  Karl Landsteiner wins the Nobel Prize for classifying human\n                  blood groups.\n                </p>\n              </div>\n            </div>\n            <div class=\"timeline-item fragment\" data-fragment-index=\"2\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-server\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1984</h3>\n                <p>\n                  The FBI's Magnetic Media program (later CART) is created,\n                  marking the beginning of computer forensics.\n                </p>\n              </div>\n            </div>\n          </div>",
          "cleanText": "The Evolution of Forensics: The Early Days (Cont.) 1930 Karl Landsteiner wins the Nobel Prize for classifying human blood groups. 1984 The FBI's Magnetic Media program (later CART) is created, marking the beginning of computer forensics.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-9",
          "slideNumber": 9,
          "title": "The Birth of Computer Forensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>The Birth of Computer Forensics</h2>\n          <div class=\"timeline\">\n            <div class=\"timeline-item fragment\" data-fragment-index=\"1\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-users\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1988</h3>\n                <p>\n                  The International Association of Computer Investigative\n                  Specialists (IACIS) is formed.\n                </p>\n              </div>\n            </div>\n            <div class=\"timeline-item fragment\" data-fragment-index=\"2\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-globe\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1995</h3>\n                <p>\n                  The International Organization on Computer Evidence (IOCE) is\n                  formed.\n                </p>\n              </div>\n            </div>\n          </div>",
          "cleanText": "The Birth of Computer Forensics 1988 The International Association of Computer Investigative Specialists (IACIS) is formed. 1995 The International Organization on Computer Evidence (IOCE) is formed.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-10",
          "slideNumber": 10,
          "title": "The Rise of International Standards",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>The Rise of International Standards</h2>\n          <div class=\"timeline\">\n            <div class=\"timeline-item fragment\" data-fragment-index=\"1\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-gavel\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1997</h3>\n                <p>\n                  G8 nations declare that \"Law enforcement personnel must be\n                  trained and equipped to address high-tech crimes\".\n                </p>\n              </div>\n            </div>\n            <div class=\"timeline-item fragment\" data-fragment-index=\"2\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-handshake\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>1998</h3>\n                <p>\n                  G8 appoints IICE to create international principles for\n                  digital evidence. First INTERPOL Forensic Science Symposium\n                  held.\n                </p>\n              </div>\n            </div>\n          </div>",
          "cleanText": "The Rise of International Standards 1997 G8 nations declare that \"Law enforcement personnel must be trained and equipped to address high-tech crimes\". 1998 G8 appoints IICE to create international principles for digital evidence. First INTERPOL Forensic Science Symposium held.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-11",
          "slideNumber": 11,
          "title": "The Rise of International Standards (Cont.)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>The Rise of International Standards (Cont.)</h2>\n          <div class=\"timeline\">\n            <div class=\"timeline-item fragment\" data-fragment-index=\"1\">\n              <div class=\"timeline-icon\">\n                <i class=\"fas fa-building\"></i>\n              </div>\n              <div class=\"timeline-content\">\n                <h3>2000</h3>\n                <p>\n                  First FBI Regional Computer Forensic Laboratory established.\n                </p>\n              </div>\n            </div>\n          </div>",
          "cleanText": "The Rise of International Standards (Cont.) 2000 First FBI Regional Computer Forensic Laboratory established.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "stages-and-applications",
      "title": "Cyberforensics Stages & Uses",
      "eyebrow": "Methodology",
      "summary": "The 4 forensic stages (Acquire, Analyze, Evaluate, Present), OSSTMM methodology, and investigative use cases.",
      "slides": [
        {
          "id": "slide-12",
          "slideNumber": 12,
          "title": "Cyberforensics Stages",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Cyberforensics Stages</h2>\n          <div class=\"fragment\" data-fragment-index=\"1\">\n            <p>\n              <i class=\"fas fa-search\"></i> Acquire: Identifying and Preserving\n            </p>\n          </div>\n          <div class=\"fragment\" data-fragment-index=\"2\">\n            <p>\n              <i class=\"fas fa-microscope\"></i> Analyze: Technical Analysis\n            </p>\n          </div>\n          <div class=\"fragment\" data-fragment-index=\"3\">\n            <p>\n              <i class=\"fas fa-balance-scale\"></i> Evaluate: What the Lawyers Do\n            </p>\n          </div>\n          <div class=\"fragment\" data-fragment-index=\"4\">\n            <p>\n              <i class=\"fas fa-gavel\"></i> Present: Legally acceptable digital\n              evidence\n            </p>\n          </div>",
          "cleanText": "Cyberforensics Stages Acquire: Identifying and Preserving Analyze: Technical Analysis Evaluate: What the Lawyers Do Present: Legally acceptable digital evidence",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-13",
          "slideNumber": 13,
          "title": "OSSTMM",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>OSSTMM</h2>\n          <p class=\"fragment\">\n            <i class=\"fas fa-book\"></i> The Open Source Security Testing\n            Methodology Manual (OSSTMM) is a peer-reviewed methodology for\n            security auditing against regulatory and industry requirements.\n          </p>",
          "cleanText": "OSSTMM The Open Source Security Testing Methodology Manual (OSSTMM) is a peer-reviewed methodology for security auditing against regulatory and industry requirements.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-14",
          "slideNumber": 14,
          "title": "Uses of Cyberforensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Uses of Cyberforensics</h2>\n          <ul>\n            <li class=\"fragment\">\n              <i class=\"fas fa-copyright\"></i> Intellectual Property theft\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-user-secret\"></i> Industrial espionage\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-briefcase\"></i> Employment disputes\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-money-bill-wave\"></i> Fraud investigations\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-signature\"></i> Forgeries\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-file-invoice-dollar\"></i> Bankruptcy\n              investigations\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-envelope\"></i> Inappropriate email and internet\n              use\n            </li>\n            <li class=\"fragment\">\n              <i class=\"fas fa-check-double\"></i> Regulatory compliance\n            </li>\n          </ul>",
          "cleanText": "Uses of Cyberforensics Intellectual Property theft Industrial espionage Employment disputes Fraud investigations Forgeries Bankruptcy investigations Inappropriate email and internet use Regulatory compliance",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "forensic-tools-demonstrations",
      "title": "Essential Tools & Demonstrations",
      "eyebrow": "Tools",
      "summary": "Video demonstrations and practical overviews of Autopsy, TestDisk, and Kali Linux.",
      "slides": [
        {
          "id": "slide-15",
          "slideNumber": 15,
          "title": "Tool: Autopsy",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2><i class=\"fas fa-tools\"></i> Tool: Autopsy</h2>\n          <p class=\"fragment\">\n            A popular open-source digital forensics platform for analyzing hard\n            drives and smartphones.\n          </p>\n          <iframe\n            width=\"1134\"\n            height=\"500\"\n            src=\"https://www.youtube.com/embed/uRK7xWsZ2TU\"\n            title=\"Computer Forensics: Using Autopsy To Investigate a Local Hard Drive\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n            referrerpolicy=\"strict-origin-when-cross-origin\"\n            allowfullscreen\n          ></iframe>",
          "cleanText": "Tool: Autopsy A popular open-source digital forensics platform for analyzing hard drives and smartphones.",
          "codeSnippets": [],
          "tables": [],
          "videoUrl": "https://www.youtube.com/embed/uRK7xWsZ2TU",
          "images": []
        },
        {
          "id": "slide-16",
          "slideNumber": 16,
          "title": "Tool: Testdisk",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2><i class=\"fas fa-tools\"></i> Tool: Testdisk</h2>\n          <p class=\"fragment\">\n            A powerful free data recovery software designed to help recover lost\n            partitions and/or make non-booting disks bootable again.\n          </p>\n          <iframe\n            width=\"1134\"\n            height=\"500\"\n            src=\"https://www.youtube.com/embed/0hrnvhapQn8\"\n            title=\"How to Recover Files From a Corrupt Hard Drive using TestDisk\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n            referrerpolicy=\"strict-origin-when-cross-origin\"\n            allowfullscreen\n          ></iframe>",
          "cleanText": "Tool: Testdisk A powerful free data recovery software designed to help recover lost partitions and/or make non-booting disks bootable again.",
          "codeSnippets": [],
          "tables": [],
          "videoUrl": "https://www.youtube.com/embed/0hrnvhapQn8",
          "images": []
        },
        {
          "id": "slide-17",
          "slideNumber": 17,
          "title": "Tool: Kali Linux",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2><i class=\"fas fa-tools\"></i> Tool: Kali Linux</h2>\n          <p class=\"fragment\">\n            A Debian-based Linux distribution aimed at advanced Penetration\n            Testing and Security Auditing. It comes preinstalled with numerous\n            forensic tools.\n          </p>\n          <iframe\n            width=\"1134\"\n            height=\"500\"\n            src=\"https://www.youtube.com/embed/psyDZ9ytlwc\"\n            title=\"What Is Kali Linux? | What Is Kali Linux And How To Use It? | Kali Linux Tutorial | Simplilearn\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n            referrerpolicy=\"strict-origin-when-cross-origin\"\n            allowfullscreen\n          ></iframe>",
          "cleanText": "Tool: Kali Linux A Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. It comes preinstalled with numerous forensic tools.",
          "codeSnippets": [],
          "tables": [],
          "videoUrl": "https://www.youtube.com/embed/psyDZ9ytlwc",
          "images": []
        },
        {
          "id": "slide-18",
          "slideNumber": 18,
          "title": "Thank You!",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Thank You!</h2>\n          <p>\n            <small\n              >This presentation is made with\n              <i class=\"fas fa-heart\"></i> and\n              <strong>HTML 5</strong></small\n            >\n          </p>",
          "cleanText": "Thank You! This presentation is made with and HTML 5",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    }
  ]
};
