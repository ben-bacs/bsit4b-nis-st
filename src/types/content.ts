export interface CourseMetadata {
  code: string;
  title: string;
  subtitle: string;
  institution: string;
  college: string;
  originalInstructor: {
    name: string;
    email: string;
    github?: string;
    facebook?: string;
    twitter?: string;
  };
  studentDeveloper: {
    name: string;
    section: string;
    role: string;
    purpose: string;
  };
  sourceUrl: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface Slide {
  id: string;
  slideNumber: number;
  title?: string;
  eyebrow?: string;
  subtitle?: string;
  byline?: string;
  lead?: string;
  isTitleSlide?: boolean;
  isSectionDivider?: boolean;
  partNumber?: string;
  rawHtml: string;
  cleanText: string;
  codeSnippets: CodeSnippet[];
  tables: TableData[];
  caveat?: string;
  speakerNotes?: string[];
  sources?: string[];
  videoUrl?: string;
  images: string[];
}

export interface Section {
  id: string;
  title: string;
  eyebrow?: string;
  summary?: string;
  slides: Slide[];
}

export interface Topic {
  id: string; // 'topic-01', 'topic-02', etc.
  slug: string; // '00-intro-to-linux', etc.
  topicNumber: string; // '00', '01', '04', '05'
  title: string;
  subtitle: string;
  description: string;
  author: string;
  originalPath: string; // '_00_intro_to_linux', etc.
  badge?: string;
  tags: string[];
  sections: Section[];
  totalSlides: number;
}

export interface Course {
  id: string; // 'cit245' | 'cit220'
  code: string; // 'CIT 245' | 'CIT 220'
  title: string; // 'Cyberforensics' | 'Information Assurance and Security 2'
  shortTitle: string; // 'Cyberforensics' | 'IAS 2'
  semester: string;
  institution: string;
  college: string;
  campus: string;
  badge: string;
  description: string;
  instructor: {
    name: string;
    title?: string;
    role?: string;
    email?: string;
    github?: string;
    facebook?: string;
    twitter?: string;
  };
  topics: Topic[];
  examCoverage?: any;
}

export interface SearchResult {
  courseId?: string;
  courseCode?: string;
  topicId: string;
  topicTitle: string;
  topicNumber: string;
  sectionId: string;
  sectionTitle: string;
  slideId: string;
  slideNumber: number;
  matchSnippet: string;
  type: 'heading' | 'code' | 'text' | 'concept';
}
