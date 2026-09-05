import fs from 'node:fs';

const t1Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/12/content.md', 'utf8');
const countOpen = (t1Raw.match(/<section\b/gi) || []).length;
const countClose = (t1Raw.match(/<\/section>/gi) || []).length;
console.log(`Topic 01 section tags: open=${countOpen}, close=${countClose}`);

const t2Raw = fs.readFileSync('C:/Users/ACER/.gemini/antigravity/brain/8c8834ed-2adc-4c81-bf84-3d5f7411156f/.system_generated/steps/20/content.md', 'utf8');
const countOpen2 = (t2Raw.match(/<section\b/gi) || []).length;
const countClose2 = (t2Raw.match(/<\/section>/gi) || []).length;
console.log(`Topic 02 section tags: open=${countOpen2}, close=${countClose2}`);
