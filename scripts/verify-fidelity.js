import fs from 'node:fs';
import { ALL_TOPICS, searchContent } from '../src/content/index.ts';

console.log('=== VERIFICATION OF CONTENT FIDELITY ===');

// 1. Topic counts
console.log(`Total Topics Loaded: ${ALL_TOPICS.length}`);
for (const topic of ALL_TOPICS) {
  console.log(`- Topic ${topic.topicNumber}: "${topic.title}" (${topic.sections.length} sections, ${topic.totalSlides} slides)`);
}

// 2. Check essential terms in Topic 00
const t00Text = JSON.stringify(ALL_TOPICS[0]);
const t00Checks = ['NIST', 'ddrescue', 'mmls', 'fls', 'istat', 'icat', 'losetup', 'sha256sum', 'Failed password', 'RFC 5737'];
const t00Missing = t00Checks.filter(c => !t00Text.includes(c));
console.log(`Topic 00 checks: ${t00Missing.length === 0 ? 'ALL PASSED' : 'MISSING: ' + t00Missing.join(', ')}`);

// 3. Check essential terms in Topic 01
const t01Text = JSON.stringify(ALL_TOPICS[1]);
const t01Checks = ['Henry Goddard', 'James Marsh', 'Karl Landsteiner', 'CART', 'IACIS', 'IOCE', 'OSSTMM', 'Autopsy', 'Testdisk', 'uRK7xWsZ2TU'];
const t01Missing = t01Checks.filter(c => !t01Text.includes(c));
console.log(`Topic 01 checks: ${t01Missing.length === 0 ? 'ALL PASSED' : 'MISSING: ' + t01Missing.join(', ')}`);

// 4. Check essential terms in Topic 03 (04)
const t03Text = JSON.stringify(ALL_TOPICS[2]);
const t03Checks = ['magicrescue', 'scalpel', 'scrounge-ntfs', 'guymager', 'pdfid', 'pdf-parser', '128 code points', 'hexed.it', 'TRIM', 'Yottabyte', 'FAT32', 'exFAT', 'APFS'];
const t03Missing = t03Checks.filter(c => !t03Text.includes(c));
console.log(`Topic 03 checks: ${t03Missing.length === 0 ? 'ALL PASSED' : 'MISSING: ' + t03Missing.join(', ')}`);

// 5. Check essential terms in Topic 04 (05)
const t04Text = JSON.stringify(ALL_TOPICS[3]);
const t04Checks = ['Republic Act No. 10175', 'Office of Cybercrime', 'JJ Maria Giner', 'Comelec', 'Cebuana Lhuillier', 'WVSU MIS Hacked by a CICT Student', 'Hugging Face', 'ExploitGym', '17,600', 'GTG-1002', 'Vibe-Hacking', 'OSForensics'];
const t04Missing = t04Checks.filter(c => !t04Text.includes(c));
console.log(`Topic 04 checks: ${t04Missing.length === 0 ? 'ALL PASSED' : 'MISSING: ' + t04Missing.join(', ')}`);

// 6. Search engine test
const search1 = searchContent('ddrescue');
const search2 = searchContent('TRIM');
const search3 = searchContent('Hugging Face');
const search4 = searchContent('WVSU');
console.log(`Search engine tests:
- "ddrescue": ${search1.length} matches
- "TRIM": ${search2.length} matches
- "Hugging Face": ${search3.length} matches
- "WVSU": ${search4.length} matches
`);

// 7. Verify asset files in public/assets
let missingAssets = 0;
for (const topic of ALL_TOPICS) {
  for (const section of topic.sections) {
    for (const slide of section.slides) {
      for (const img of slide.images) {
        if (img.startsWith('/assets/')) {
          const filePath = 'public' + img;
          if (!fs.existsSync(filePath)) {
            console.log(`Missing asset: ${filePath}`);
            missingAssets++;
          }
        }
      }
    }
  }
}
console.log(`Asset integrity: ${missingAssets === 0 ? 'ALL ASSETS PRESENT ON DISK' : `${missingAssets} assets missing`}`);
