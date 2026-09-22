import fs from 'node:fs';

const html = fs.readFileSync('scripts/topic-06-raw.html', 'utf8');

// Extract slides container
const start = html.indexOf('<div class="slides">');
const end = html.lastIndexOf('</div>');
const slidesHtml = html.substring(start, end);

// Match sections
const sectionRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
let match;
let count = 0;

while ((match = sectionRegex.exec(slidesHtml)) !== null) {
  count++;
  const attrs = match[1];
  const content = match[2].trim();
  console.log(`=== SLIDE ${count} ===`);
  console.log(content);
  console.log('\n');
}
console.log('Total extracted slides:', count);
