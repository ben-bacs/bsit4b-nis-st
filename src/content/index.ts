import { TOPIC_01 } from './topics/topic-01';
import { TOPIC_02 } from './topics/topic-02';
import { TOPIC_03 } from './topics/topic-03';
import { TOPIC_04 } from './topics/topic-04';
import { TOPIC_05 } from './topics/topic-05';
import { Topic, Course, SearchResult } from '../types/content';
import { COURSE_METADATA, MIDTERM_EXAM_COVERAGE, POST_MIDTERM_TOPICS } from './course-meta';
import {
  CIT220_COURSE,
  CIT220_TOPICS,
  CIT220_METADATA,
  CIT220_EXAM_COVERAGE,
  CIT220_REVIEWER_TOPICS,
  CIT220_REVIEWER_QUESTIONS,
  ReviewerItem,
  ModifiedTrueFalseQuestion,
  MultipleChoiceQuestion,
  EnumerationQuestion,
  ReviewerTopicMeta,
  ReviewerQuestionType
} from './cit220';

export { TOPIC_01, TOPIC_02, TOPIC_03, TOPIC_04, TOPIC_05 };
export { COURSE_METADATA, MIDTERM_EXAM_COVERAGE, POST_MIDTERM_TOPICS };
export {
  CIT220_COURSE,
  CIT220_TOPICS,
  CIT220_METADATA,
  CIT220_EXAM_COVERAGE,
  CIT220_REVIEWER_TOPICS,
  CIT220_REVIEWER_QUESTIONS,
  type ReviewerItem,
  type ModifiedTrueFalseQuestion,
  type MultipleChoiceQuestion,
  type EnumerationQuestion,
  type ReviewerTopicMeta,
  type ReviewerQuestionType
};

// CIT 245 Course Topics
export const CIT245_TOPICS: Topic[] = [
  TOPIC_01,
  TOPIC_02,
  TOPIC_03,
  TOPIC_04,
  TOPIC_05,
];

// CIT 245 Course Definition
export const CIT245_COURSE: Course = {
  id: 'cit245',
  code: 'CIT 245',
  title: 'Cyberforensics',
  shortTitle: 'Cyberforensics',
  semester: 'Academic Year 2026–2027',
  institution: 'West Visayas State University',
  college: 'College of Information and Communications Technology (CICT)',
  campus: 'Main Campus, Iloilo City',
  badge: 'Investigation & Casework',
  description: 'Digital forensics methodologies, incident response, evidence preservation, crime scene investigation, and cryptographic verification.',
  instructor: {
    name: 'Prof. Mark Joseph J. Solidarios',
    title: 'Faculty Instructor',
    role: 'College of Information and Communications Technology',
    email: 'mjsolidarios@wvsu.edu.ph',
    github: 'https://github.com/mjsolidarios',
    facebook: 'https://www.facebook.com/sexynojutsuuser',
    twitter: 'https://www.twitter.com/mjsolidarios',
  },
  topics: CIT245_TOPICS,
  examCoverage: MIDTERM_EXAM_COVERAGE,
};

// Master courses registry
export const ALL_COURSES: Course[] = [
  CIT245_COURSE,
  CIT220_COURSE,
];

export const COURSES: Record<string, Course> = {
  cit245: CIT245_COURSE,
  cit220: CIT220_COURSE,
};

// Global topics list containing all topics from all courses
export const ALL_TOPICS: Topic[] = [
  ...CIT245_TOPICS,
  ...CIT220_TOPICS,
];

export function getCourseById(id: string): Course {
  return COURSES[id] || CIT245_COURSE;
}

export function getTopicById(id: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.slug === slug);
}

export function searchContent(query: string, filterCourseId?: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];

  const results: SearchResult[] = [];
  const targetCourses = filterCourseId ? [getCourseById(filterCourseId)] : ALL_COURSES;

  for (const course of targetCourses) {
    for (const topic of course.topics) {
      for (const section of topic.sections) {
        for (const slide of section.slides) {
          // Check title
          if (slide.title && slide.title.toLowerCase().includes(q)) {
            results.push({
              courseId: course.id,
              courseCode: course.code,
              topicId: topic.id,
              topicTitle: topic.title,
              topicNumber: topic.topicNumber,
              sectionId: section.id,
              sectionTitle: section.title,
              slideId: slide.id,
              slideNumber: slide.slideNumber,
              matchSnippet: slide.title,
              type: 'heading',
            });
            continue;
          }

          // Check code snippets
          let codeMatched = false;
          for (const snippet of slide.codeSnippets) {
            if (snippet.code.toLowerCase().includes(q)) {
              const lines = snippet.code.split('\n');
              const matchingLine = lines.find((l) => l.toLowerCase().includes(q)) || snippet.code.slice(0, 100);
              results.push({
                courseId: course.id,
                courseCode: course.code,
                topicId: topic.id,
                topicTitle: topic.title,
                topicNumber: topic.topicNumber,
                sectionId: section.id,
                sectionTitle: section.title,
                slideId: slide.id,
                slideNumber: slide.slideNumber,
                matchSnippet: matchingLine.trim(),
                type: 'code',
              });
              codeMatched = true;
              break;
            }
          }
          if (codeMatched) continue;

          // Check cleanText
          const textIdx = slide.cleanText.toLowerCase().indexOf(q);
          if (textIdx !== -1) {
            const start = Math.max(0, textIdx - 40);
            const end = Math.min(slide.cleanText.length, textIdx + q.length + 60);
            let snippet = slide.cleanText.substring(start, end).trim();
            if (start > 0) snippet = '...' + snippet;
            if (end < slide.cleanText.length) snippet = snippet + '...';

            results.push({
              courseId: course.id,
              courseCode: course.code,
              topicId: topic.id,
              topicTitle: topic.title,
              topicNumber: topic.topicNumber,
              sectionId: section.id,
              sectionTitle: section.title,
              slideId: slide.id,
              slideNumber: slide.slideNumber,
              matchSnippet: snippet,
              type: 'text',
            });
          }
        }
      }
    }
  }

  return results.slice(0, 30);
}
