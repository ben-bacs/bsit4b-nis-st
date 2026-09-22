import fs from 'node:fs';
const html = fs.readFileSync('scripts/topic-06-raw.html', 'utf8');
const imgMatches = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Images/Sources:', [...new Set(imgMatches)]);
const sectionMatches = [...html.matchAll(/<section\b[^>]*>/g)];
console.log('Total section tags:', sectionMatches.length);
const backgrounds = [...html.matchAll(/data-background=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Backgrounds:', [...new Set(backgrounds)]);
