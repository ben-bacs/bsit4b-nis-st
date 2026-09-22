import fs from 'node:fs';

const html = fs.readFileSync('scripts/topic-06-raw.html', 'utf8');
const start = html.indexOf('<div class="slides">');
const end = html.lastIndexOf('</div>');
const slidesHtml = html.substring(start, end);
const sectionRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
let match;
let count = 0;
const slides = [];

while ((match = sectionRegex.exec(slidesHtml)) !== null) {
  count++;
  slides.push({
    slideNumber: count,
    attrs: match[1],
    html: match[2].trim()
  });
}

fs.writeFileSync('scripts/topic-06-dump.json', JSON.stringify(slides, null, 2), 'utf8');
console.log('Saved', slides.length, 'slides to scripts/topic-06-dump.json');
