import fs from 'node:fs';

function extractSlidesContainer(html) {
  const startIdx = html.indexOf('<div class="slides">');
  if (startIdx === -1) return '';
  const afterStart = html.substring(startIdx + '<div class="slides">'.length);
  const lastSectionIdx = afterStart.lastIndexOf('</section>');
  if (lastSectionIdx === -1) return '';
  return afterStart.substring(0, lastSectionIdx + '</section>'.length);
}

const t3Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/26/content.md', 'utf8');
console.log('T3 section count:', (extractSlidesContainer(t3Raw).match(/<section\b/gi) || []).length);

const t4Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/32/content.md', 'utf8');
console.log('T4 section count:', (extractSlidesContainer(t4Raw).match(/<section\b/gi) || []).length);
