import fs from 'node:fs';

function extractSlidesContainer(html) {
  const startIdx = html.indexOf('<div class="slides">');
  if (startIdx === -1) return '';
  const afterStart = html.substring(startIdx + '<div class="slides">'.length);
  // Find the last </section>
  const lastSectionIdx = afterStart.lastIndexOf('</section>');
  if (lastSectionIdx === -1) return '';
  return afterStart.substring(0, lastSectionIdx + '</section>'.length);
}

const t1Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/12/content.md', 'utf8');
const t1SlidesStr = extractSlidesContainer(t1Raw);
console.log('T1 container length:', t1SlidesStr.length, 'section count:', (t1SlidesStr.match(/<section\b/gi) || []).length);

const t2Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/20/content.md', 'utf8');
const t2SlidesStr = extractSlidesContainer(t2Raw);
console.log('T2 container length:', t2SlidesStr.length, 'section count:', (t2SlidesStr.match(/<section\b/gi) || []).length);
