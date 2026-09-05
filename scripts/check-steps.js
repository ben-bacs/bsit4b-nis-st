import fs from 'node:fs';
const path = 'C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/12/content.md';
if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, 'utf8');
  console.log('Read success, byte length:', content.length);
} else {
  console.log('Path not found');
}
