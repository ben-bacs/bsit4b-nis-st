import fs from 'node:fs';

const files = [
  { id: 'topic-01', step: '12', name: '00 - Intro to Linux' },
  { id: 'topic-02', step: '20', name: '01 - Intro to Cyberforensics' },
  { id: 'topic-03', step: '26', name: '04 - Kali Linux & Concepts' },
  { id: 'topic-04', step: '32', name: '05 - Crime Scene Investigation' }
];

for (const f of files) {
  const content = fs.readFileSync(`C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/${f.step}/content.md`, 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : f.name;
  console.log(`${f.id}: "${title}" (length: ${content.length})`);
}
