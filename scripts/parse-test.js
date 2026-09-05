import fs from 'node:fs';

const raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/12/content.md', 'utf8');
const slidesHtml = raw.split('<div class="slides">')[1].split('</div>\n    </div>')[0];
console.log('Slides HTML length:', slidesHtml.length);
