import fs from 'node:fs';

console.log('=== VERIFICATION OF TOPIC FILES ON DISK ===');
const topics = [
  { file: 'src/content/topics/topic-01.ts', name: 'Topic 00 - Linux Essentials' },
  { file: 'src/content/topics/topic-02.ts', name: 'Topic 01 - Intro to Cyberforensics' },
  { file: 'src/content/topics/topic-03.ts', name: 'Topic 04 - Kali Linux & Concepts' },
  { file: 'src/content/topics/topic-04.ts', name: 'Topic 05 - Crime Scene Investigation' }
];

for (const t of topics) {
  const content = fs.readFileSync(t.file, 'utf8');
  console.log(`✓ ${t.name}: ${content.length} characters on disk`);
}

// Check build output in dist
if (fs.existsSync('dist/index.html') && fs.existsSync('dist/assets')) {
  const distFiles = fs.readdirSync('dist/assets');
  console.log('✓ Production build assets present:', distFiles);
}
