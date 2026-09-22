import { TOPIC_01 } from './topics/topic-01';
import { TOPIC_02 } from './topics/topic-02';
import { TOPIC_03 } from './topics/topic-03';
import { TOPIC_04 } from './topics/topic-04';
import { TOPIC_05 } from './topics/topic-05';
import { Topic, SearchResult } from '../types/content';

export { TOPIC_01 } from './topics/topic-01';
export { TOPIC_02 } from './topics/topic-02';
export { TOPIC_03 } from './topics/topic-03';
export { TOPIC_04 } from './topics/topic-04';
export { TOPIC_05 } from './topics/topic-05';
export { COURSE_METADATA, MIDTERM_EXAM_COVERAGE, POST_MIDTERM_TOPICS } from './course-meta';

export const ALL_TOPICS: Topic[] = [
  TOPIC_01,
  TOPIC_02,
  TOPIC_03,
  TOPIC_04,
  TOPIC_05,
];

export function getTopicById(id: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.id === id);
}

export function getTopicBySlug(slug: string): Topic | undefined {
  return ALL_TOPICS.find((t) => t.slug === slug);
}

export function getTopicByIndex(index: number): Topic | undefined {
  return ALL_TOPICS[index];
}

export function searchContent(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const topic of ALL_TOPICS) {
    for (const section of topic.sections) {
      for (const slide of section.slides) {
        // Check title
        if (slide.title && slide.title.toLowerCase().includes(q)) {
          results.push({
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

  return results.slice(0, 25);
}
