import { CourseMetadata } from '../types/content';

export const COURSE_METADATA: CourseMetadata = {
  code: 'CIT 245',
  title: 'Cyberforensics',
  subtitle: 'Professional Lecture Presentations & Study Courseware',
  institution: 'West Visayas State University',
  college: 'College of Information and Communications Technology (CICT)',
  originalInstructor: {
    name: 'Mark Joseph J. Solidarios',
    email: 'mjsolidarios@wvsu.edu.ph',
    github: 'https://github.com/mjsolidarios',
    facebook: 'https://www.facebook.com/sexynojutsuuser',
    twitter: 'https://www.twitter.com/mjsolidarios',
  },
  studentDeveloper: {
    name: 'Benedict Neil D. Bacud',
    section: 'BSIT 4B',
    role: 'Application Architect & Frontend Developer',
    purpose: 'Academic / Educational Recreation with Enhanced Software Architecture & UX',
  },
  sourceUrl: 'https://wvsu-cict-cit245.netlify.app/',
};

export const MIDTERM_EXAM_COVERAGE = {
  title: 'Midterm Exam Coverage',
  date: 'October 2026',
  coveredTopics: [
    {
      number: '00',
      title: 'Linux Essentials for Digital Forensics',
      highlights: [
        'Terminal navigation & file manipulation (ls, pwd, cd, find, grep)',
        'Permissions (chmod, chown, umask) & process management (ps, systemctl)',
        'NIST SP 800-86 5-stage digital forensics workflow',
        'Acquisition with ddrescue & image integrity verification (sha256sum)',
        'TSK inspection (mmls, fsstat, fls, istat, icat) & volatile data capture',
      ],
    },
    {
      number: '01',
      title: 'Intro to Cyberforensics',
      highlights: [
        'Definitions: Digital Forensics vs. Cyberforensics',
        'Computer-Based Crime vs. Computer-Facilitated Crime',
        'Forensics historical evolution (1835 Goddard to 2000 FBI RCFL)',
        'Four stages: Acquire, Analyze, Evaluate, Present',
        'OSSTMM framework and digital forensic tool capabilities (Autopsy, TestDisk, Kali)',
      ],
    },
    {
      number: '04',
      title: 'Kali Linux and Technical Concepts',
      highlights: [
        'Forensic Carving (magic bytes, magicrescue, scalpel, scrounge-ntfs)',
        'Forensic Imaging (guymager multithreading) & PDF forensics (pdfid, pdf-parser)',
        'Character Encodings (ASCII 128 code points vs. Unicode) & Hex file signatures',
        'File System comparisons (NTFS, FAT32, exFAT, ext4, APFS) & Data Measurement units',
        'SSD TRIM behavior vs HDD pointer deletion & External Recovery process',
      ],
    },
    {
      number: '05',
      title: 'Crime Scene Investigation',
      highlights: [
        'Securing the incident scene (isolation, perimeter, barrier tape)',
        '4-phase Cyber Crime Investigation process',
        'Storage media lifespan (HDD 4-7 yrs, SSD 5-10 yrs, Flash 10 yrs, CD-R 50-100+ yrs)',
        'Philippine legal framework: RA 10175 & DOJ Office of Cybercrime (OOC)',
        'Landmark cases (2005 gov.ph, 2016 Comelec, 2016 WVSU MIS student hack)',
        'Modern AI hacking cases (2026 Hugging Face breach, GTG-1002, vibe-hacking)',
        'Evidence acquisition with OSForensics (Case management, Hash Sets, Password recovery)',
      ],
    },
  ],
  notCoveredTopics: [
    { number: '02', title: 'Python for Cyberforensics' },
    { number: '03', title: 'Python Challenges in Cyberforensics' },
  ],
  preparationTips: [
    'Review all terminal commands and know why options like -o noload, -type f, and --partscan are critical.',
    'Understand file headers/signatures: file extension can be spoofed; magic numbers reveal reality.',
    'Memorize the timeline of digital forensics standards (FBI CART, IACIS, IOCE, G8, RCFL).',
    'Review the differences in SSD TRIM wear leveling vs HDD physical deletion pointers.',
    'Understand the volatile order of evidence and live response documentation protocols.',
  ],
};

export const POST_MIDTERM_TOPICS = [
  {
    number: '06',
    title: 'Digital Evidence Acquisition',
    highlights: [
      'Forensic image file formats (Raw .dd/.001, AFF .afd/.afm, EnCase .E01)',
      'Forensic image file validation & MD5/SHA-256 cryptographic fingerprints',
      'Acquiring volatile memory (RAM artifacts, live acquisition, unstructured memory)',
      'Acquiring nonvolatile memory (Static disk acquisition & dead imaging)',
      'Hardware write-blockers & Windows StorageDevicePolicies registry write-protection',
      'Forensic media sanitization & wiping (Moo0 Disk Wiper, dd zero-fill)',
      'Hands-on acquisition with PassMark OSForensics',
    ],
  },
];

