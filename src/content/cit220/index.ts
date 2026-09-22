import { TOPIC_01 } from './topics/unit-01';
import { TOPIC_02 } from './topics/unit-02';
import { TOPIC_02_1 } from './topics/unit-02-zta';
import { TOPIC_02_2 } from './topics/unit-02-seg';
import { TOPIC_03 } from './topics/unit-03';
import { TOPIC_04 } from './topics/unit-04';
import { Topic, Course } from '../../types/content';
import { CIT220_METADATA, CIT220_EXAM_COVERAGE } from './cit220-meta';
import {
  CIT220_REVIEWER_TOPICS,
  CIT220_REVIEWER_QUESTIONS,
  ReviewerItem,
  ModifiedTrueFalseQuestion,
  MultipleChoiceQuestion,
  EnumerationQuestion,
  ReviewerTopicMeta,
  ReviewerQuestionType
} from './cit220-reviewer';

export { TOPIC_01, TOPIC_02, TOPIC_02_1, TOPIC_02_2, TOPIC_03, TOPIC_04 };
export { CIT220_METADATA, CIT220_EXAM_COVERAGE };
export {
  CIT220_REVIEWER_TOPICS,
  CIT220_REVIEWER_QUESTIONS,
  type ReviewerItem,
  type ModifiedTrueFalseQuestion,
  type MultipleChoiceQuestion,
  type EnumerationQuestion,
  type ReviewerTopicMeta,
  type ReviewerQuestionType
};

export const CIT220_TOPICS: Topic[] = [
  TOPIC_01,
  TOPIC_02,
  TOPIC_02_1,
  TOPIC_02_2,
  TOPIC_03,
  TOPIC_04,
];

export const CIT220_COURSE: Course = {
  id: 'cit220',
  code: 'CIT 220',
  title: 'Information Assurance and Security 2',
  shortTitle: 'IAS 2',
  semester: 'Academic Year 2026–2027',
  institution: 'West Visayas State University',
  college: 'College of Information and Communications Technology (CICT)',
  campus: 'Main Campus, Iloilo City',
  badge: 'Network Defense & Cloud Security',
  description: 'Advanced enterprise security architectures, Zero Trust implementation, network microsegmentation, Identity and Access Management (IAM), and cloud DevSecOps.',
  instructor: {
    name: 'Prof. Chin Ann Feliprada',
    title: 'Faculty Instructor',
    role: 'College of Information and Communications Technology',
    email: 'chinann.feliprada@wvsu.edu.ph',
  },
  topics: CIT220_TOPICS,
  examCoverage: CIT220_EXAM_COVERAGE,
};

