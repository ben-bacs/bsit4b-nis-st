import { Topic } from '../../types/content';

export const TOPIC_05: Topic = {
  "id": "topic-05",
  "slug": "06-digital-evidence-acquisition",
  "topicNumber": "06",
  "title": "Digital Evidence Acquisition",
  "subtitle": "Acquiring Volatile and Nonvolatile Memory",
  "description": "Forensic image file formats (Raw, AFF, EnCase), cryptographic hash verification, live RAM capture, and hardware write-protected static acquisition.",
  "author": "Mark Joseph J. Solidarios",
  "originalPath": "_06_digital_evidence_acquisition",
  "badge": "Evidence Acquisition",
  "tags": [
    "Evidence Acquisition",
    "Forensic Imaging",
    "Raw DD",
    "AFF",
    "EnCase EWF",
    "MD5 Hashing",
    "Volatile Memory",
    "RAM Analysis",
    "Write Blocker",
    "Disk Sanitization",
    "OSForensics"
  ],
  "totalSlides": 30,
  "sections": [
    {
      "id": "foundations-overview",
      "title": "Acquisition Foundations & Objectives",
      "eyebrow": "Incident Response & Acquisition",
      "summary": "Core forensic investigator duties, memory hierarchy, and the evidentiary baseline for computer investigations.",
      "slides": [
        {
          "id": "slide-1",
          "slideNumber": 1,
          "title": "Digital Evidence Acquisition",
          "eyebrow": "CIT 245 • Topic 06",
          "subtitle": "Acquiring Volatile and Nonvolatile Memory",
          "lead": "Forensic image file formats, cryptographic validation, volatile RAM capture, and static storage acquisition procedures.",
          "byline": "Prof. Mark Joseph J. Solidarios • WVSU CICT Main Campus, Iloilo City",
          "isTitleSlide": true,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"intro-author-card\"><div class=\"institution-badge\"><span>West Visayas State University • CICT Main Campus, Iloilo City</span></div><p class=\"intro-tagline\">Bachelor of Science in Information Technology • CIT 245 Cyberforensics</p></div>",
          "cleanText": "Digital Evidence Acquisition: Acquiring Volatile and Nonvolatile Memory. CIT 245 • Topic 06. Forensic image file formats, cryptographic validation, volatile RAM capture, and static storage acquisition procedures. Prof. Mark Joseph J. Solidarios, WVSU CICT Main Campus, Iloilo City.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-2",
          "slideNumber": 2,
          "title": "Presentation Guide & Navigation Controls",
          "eyebrow": "Orientation",
          "subtitle": "How to navigate and explore this lecture module",
          "lead": "Use the following controls and shortcuts to navigate the presentation:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"controls-guide-grid\"><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>←</kbd> <kbd>→</kbd> or <kbd>Space</kbd></div><strong>Slide Navigation</strong><p>Advance or go back through slides using keyboard arrows, spacebar, or on-screen controls.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>F</kbd></div><strong>Fullscreen Presentation</strong><p>Toggle fullscreen mode for a distraction-free lecture viewing experience on desktop or tablet.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><span class=\"badge-tag\">Tap Left / Right</span></div><strong>Touch &amp; Swipe Zones</strong><p>On mobile devices, tap the left or right edges of the screen, or swipe horizontally to navigate.</p></div><div class=\"guide-card\"><div class=\"guide-badge\"><kbd>Ctrl</kbd> + <kbd>K</kbd></div><strong>Global Search &amp; Reader</strong><p>Search all topics, commands, and cases instantly, or toggle into Study Reader mode for full notes.</p></div></div>",
          "cleanText": "Presentation Guide & Navigation Controls. How to navigate and explore this lecture module. Use keyboard arrows, F for fullscreen, tap zones on mobile, and Ctrl+K to search.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-3",
          "slideNumber": 3,
          "title": "Core Objective of Computer Forensics",
          "eyebrow": "Core Objective",
          "subtitle": "Memory and Storage Acquisition",
          "lead": "The central responsibility that underlies all subsequent forensic examination:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">The main task of a computer forensics investigator is to acquire and analyze computing devices’ memory images.</p><div class=\"callout-card mt-3\"><p>Every step of a cyberforensic investigation depends on capturing an authentic, unaltered bit-stream copy of both volatile and nonvolatile memory before analytical examination can occur.</p></div>",
          "cleanText": "The main task of a computer forensics investigator is to acquire and analyze computing devices’ memory images. Every step of a cyberforensic investigation depends on capturing an authentic, unaltered bit-stream copy of both volatile and nonvolatile memory before analytical examination can occur.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "image-file-formats",
      "title": "Forensic Image File Formats (Raw, AFF, EnCase)",
      "eyebrow": "Forensic Image Formats",
      "summary": "Raw bitstream copies, AFF open architecture, and EnCase Expert Witness proprietary standards.",
      "slides": [
        {
          "id": "slide-4",
          "slideNumber": 4,
          "title": "Forensic Image File Formats",
          "eyebrow": "Image Formats",
          "lead": "Overview of formats used in forensic evidence preservation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Forensic Image File Format</h2><p class=\"fragment\">A forensic image can have different file formats; some are free and others are proprietary formats developed by the company behind the forensic software used to create the forensic image.</p><p class=\"mt-3 text-sm text-slate-600 dark:text-slate-400\">Choosing the proper image format affects portability, compression, built-in integrity metadata, and tool interoperability across different investigative environments.</p>",
          "cleanText": "Forensic Image File Format: A forensic image can have different file formats; some are free and others are proprietary formats developed by the company behind the forensic software used to create the forensic image. Format choice impacts portability, compression, integrity metadata, and tool interoperability.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-5",
          "slideNumber": 5,
          "title": "Raw Format (Bit-by-Bit Copy)",
          "eyebrow": "Raw Format",
          "lead": "Direct sequential sector-by-sector duplication",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Raw Format</h2><p class=\"fragment\">Raw format is a bit-by-bit copy of the raw data of the drive under investigation.</p><div class=\"info-card mt-3\"><p>Raw bitstream images contain exact sector copies including file slack, unallocated space, partition tables, and bad sectors without adding proprietary container headers or footers.</p></div>",
          "cleanText": "Raw Format: Raw format is a bit-by-bit copy of the raw data of the drive under investigation. Raw bitstream images contain exact sector copies including file slack, unallocated space, partition tables, and bad sectors without adding proprietary container headers or footers.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-6",
          "slideNumber": 6,
          "title": "Raw Format Naming Schemas",
          "eyebrow": "File Extensions",
          "lead": "Standard file extensions used for raw bitstream disk images:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Raw Format Naming Schemas</p><ul class=\"compact\"><li><code>001</code> — Segmented / split raw image parts (e.g., <code>image.001</code>, <code>image.002</code>)</li><li><code>dd</code> — Traditional UNIX <code>dd</code> / <code>ddrescue</code> bitstream image output</li><li><code>dmg</code> — Apple / macOS disk image format</li><li><code>raw</code> — Generic bit-for-bit raw forensic image</li><li><code>img</code> — General sector-by-sector disk image</li></ul>",
          "cleanText": "Raw Format Naming Schemas: 001 (segmented/split raw image parts), dd (traditional UNIX dd bitstream image), dmg (Apple disk image), raw (generic bitstream raw file), img (general sector disk image).",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Common raw acquisition commands producing .dd and .raw images\ndd if=/dev/sdb of=/evidence/suspect_drive.dd bs=64K status=progress\nddrescue -d -b 4096 /dev/sdb /evidence/suspect_drive.raw /evidence/mapfile.log"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-7",
          "slideNumber": 7,
          "title": "Advanced Forensic Format (AFF)",
          "eyebrow": "Open-Source Standards",
          "lead": "Extensible, open architecture for forensic disk images",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>AFF</h2><p class=\"fragment\">Advanced forensic format (AFF) is an open source extensible file format for forensics images; its source code can be freely integrated into other open source and propriety programs.</p><div class=\"info-card mt-3\"><p>Designed to provide an open alternative to proprietary commercial containers, AFF prevents investigator vendor lock-in and allows seamless cross-platform analysis.</p></div>",
          "cleanText": "AFF: Advanced forensic format (AFF) is an open source extensible file format for forensics images; its source code can be freely integrated into other open source and proprietary programs. Designed to prevent vendor lock-in and enable cross-platform tool support.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-8",
          "slideNumber": 8,
          "title": "Advanced Forensic Format Features",
          "eyebrow": "AFF Capabilities",
          "lead": "Compression algorithms, segmentation, encryption, and metadata",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Advanced Forensic Format</h3><ul class=\"compact\"><li>Supports two compression algorithms (<code>zlib</code> and <code>LZMA</code>)</li><li>Can be split into multiple files for spanning across storage media</li><li>Supports encryption of drive images to protect sensitive casework</li><li>AFF uses the <code>.afd</code> extension for segmented image files and <code>.afm</code> for AFF metadata.</li></ul>",
          "cleanText": "Advanced Forensic Format features: Supports two compression algorithms (zlib and LZMA), can be split into multiple files, supports encryption of drive images, AFF uses the .afd extension for segmented image files and .afm for AFF metadata.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-9",
          "slideNumber": 9,
          "title": "Expert Witness Format (EnCase)",
          "eyebrow": "Proprietary Standards",
          "lead": "The global standard for law enforcement digital investigations",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Expert Witness (EnCase)</h2><p class=\"fragment\">This is a propriety file format created by Guidance Software (now OpenText) for their famous product “EnCase Forensic,” which is widely used by law enforcement in criminal investigations around the globe.</p><div class=\"info-card mt-3\"><p>The Expert Witness Format (EWF, commonly using the <code>.E01</code> extension) incorporates a dedicated file header containing examiner notes, acquisition timestamps, and drive geometry.</p></div>",
          "cleanText": "Expert Witness (EnCase): This is a proprietary file format created by Guidance Software (now OpenText) for their famous product “EnCase Forensic,” which is widely used by law enforcement in criminal investigations around the globe. Known as EWF (.E01).",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-10",
          "slideNumber": 10,
          "title": "EnCase Capabilities & Format Comparison",
          "eyebrow": "Container Features",
          "lead": "Compression, searchability, and forensic container advantages",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>EnCase</h2><p class=\"fragment\">Can be used to store different types of digital evidence; it is compressible and searchable and the resultant image can be split into multiple files.</p><div class=\"callout-card mt-3\"><p>Unlike raw formats that contain only data sectors, EnCase containers store block-level CRC integrity checks and MD5/SHA-1 hashes throughout the file to immediately detect corruption.</p></div>",
          "cleanText": "EnCase: Can be used to store different types of digital evidence; it is compressible and searchable and the resultant image can be split into multiple files. Incorporates block-level CRC checks and embedded metadata.",
          "codeSnippets": [],
          "tables": [
            {
              "caption": "Comparison of Major Forensic Image Formats",
              "headers": ["Feature / Metric", "Raw Format (.raw, .dd, .001)", "AFF (.aff, .afd, .afm)", "EnCase / EWF (.E01, .Ex01)"],
              "rows": [
                ["Type", "Bit-by-bit stream (free/open)", "Open extensible container", "Proprietary container (OpenText)"],
                ["Embedded Metadata", "None (pure sector data)", "Supported (.afm file or stream)", "Header notes, serials, examiner ID"],
                ["Compression", "None (1:1 identical byte size)", "zlib and LZMA algorithms", "Proprietary lossless compression"],
                ["Integrity Checks", "External verification only", "Built-in cryptographic hashes", "Block-by-block 32-bit CRC & MD5"],
                ["File Splitting", "Supported (.001, .002...)", "Supported (.afd segments)", "Supported (.E01, .E02...)"]
              ]
            }
          ],
          "images": []
        }
      ]
    },
    {
      "id": "validation-hashing",
      "title": "Image File Validation & Hashing",
      "eyebrow": "Integrity & Authenticity",
      "summary": "Cryptographic proof of evidence integrity, MD5 industry baseline, and electronic fingerprints.",
      "slides": [
        {
          "id": "slide-11",
          "slideNumber": 11,
          "title": "Forensic Image File Validation",
          "eyebrow": "Authenticity & Integrity",
          "lead": "Proving 100% bit-level identity in the chain of custody",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Forensics Image File Validation</h3><p class=\"fragment\">Acquired forensics image files must be validated to ensure their authenticity; validation ensures that the acquired image is 100% identical to the source and that it has not been altered during the acquisition process.</p><div class=\"alert-card mt-3\"><p>Under Philippine Rules on Electronic Evidence (A.M. No. 01-7-01-SC) and international standards, evidence is inadmissible if integrity cannot be mathematically demonstrated.</p></div>",
          "cleanText": "Forensic Image File Validation: Acquired forensics image files must be validated to ensure their authenticity; validation ensures that the acquired image is 100% identical to the source and that it has not been altered during the acquisition process.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-12",
          "slideNumber": 12,
          "title": "MD5 Algorithm",
          "eyebrow": "Cryptographic Standards",
          "lead": "Industry baseline hashing algorithm for digital evidence verification",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>MD5 Algorithm</h2><p class=\"fragment\">The current industry standard for hashing digital evidence.</p><div class=\"info-card mt-3\"><p>The MD5 algorithm generates a 128-bit (32-character hexadecimal) message digest. Due to the avalanche effect, altering even a single bit in a multi-terabyte image results in a completely different hash value.</p></div>",
          "cleanText": "MD5 Algorithm: The current industry standard for hashing digital evidence. Generates a 128-bit digest where altering even a single bit completely changes the resulting hash.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Calculate MD5 hash of raw drive and acquired image file\nmd5sum /dev/sdb\nmd5sum /evidence/case001_sdb.raw\n\n# Modern forensics also computes SHA-256 for defense in depth\nsha256sum /evidence/case001_sdb.raw"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-13",
          "slideNumber": 13,
          "title": "Hashing as the Acceptable Industry Standard",
          "eyebrow": "Validation Standards",
          "lead": "Universal acceptance of cryptographic hashing in judicial proceedings",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">Hashing is the acceptable standard in the computer forensics industry to validate acquired forensics images.</p><div class=\"callout-card mt-3\"><p>Forensic imaging tools calculate the hash value of the physical disk on-the-fly and compare it against the hash of the generated image file. A match confirms flawless bitstream duplication.</p></div>",
          "cleanText": "Hashing is the acceptable standard in the computer forensics industry to validate acquired forensics images. Computing and comparing source and image hashes proves flawless bitstream duplication.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-14",
          "slideNumber": 14,
          "title": "Hash Value as an Electronic Fingerprint",
          "eyebrow": "Forensic Identifier",
          "lead": "Unique mathematical representation of digital evidence",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">Hash value is considered as an electronic fingerprint of the resultant image file.</p><div class=\"info-card mt-3\"><p>Just as no two humans share identical physical fingerprints, no two distinct datasets will produce identical cryptographic hashes. Any difference indicates data modification, bad sectors, or corruption.</p></div>",
          "cleanText": "Hash value is considered as an electronic fingerprint of the resultant image file. Just as physical fingerprints uniquely identify individuals, cryptographic hashes uniquely identify digital evidence.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "volatile-memory-ram",
      "title": "Live Acquisition: Volatile Memory (RAM)",
      "eyebrow": "Live Forensics",
      "summary": "Live memory acquisition, RAM artifacts (keys, passwords, processes), and unstructured memory architecture.",
      "slides": [
        {
          "id": "slide-15",
          "slideNumber": 15,
          "title": "Acquiring Volatile Memory (Live Acquisition)",
          "eyebrow": "Live Acquisition",
          "lead": "Capturing transient evidence that never writes to persistent disk",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Acquiring Volatile Memory (Live Acquisition)</h3><p class=\"fragment\">Live acquisition has become an integral part of any digital investigation type. For instance, there are many types of digital artifacts which only reside on RAM memory, with nothing written to the hard drive to indicate its presence.</p><div class=\"alert-card mt-3\"><p><strong>Order of Volatility (RFC 3227):</strong> Volatile memory is lost when power is disconnected. Pulling the power cord destroys encryption keys, active malware, and open network sockets instantly.</p></div>",
          "cleanText": "Acquiring Volatile Memory (Live Acquisition): Live acquisition has become an integral part of any digital investigation type. There are many types of digital artifacts which only reside on RAM memory, with nothing written to the hard drive to indicate its presence. Disconnecting power permanently erases this data.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-16",
          "slideNumber": 16,
          "title": "Types of Information in RAM (Part 1)",
          "eyebrow": "RAM Artifacts",
          "partNumber": "Part 1",
          "lead": "Cryptographic material, active execution states, and network sockets",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Types of Information on the RAM (P1)</p><ul class=\"compact\"><li><strong>Cryptographic keys:</strong> Plaintext BitLocker, VeraCrypt, and TLS session keys loaded in active memory</li><li><strong>Processes running:</strong> Active execution trees, injected malicious threads, and parent-child relationships</li><li><strong>Executed console commands:</strong> Bash history buffers, PowerShell cmdlet invocations, and CMD inputs</li><li><strong>Clipboard contents:</strong> Recent copy-paste buffers containing passwords, tokens, or private text</li><li><strong>Network information:</strong> Open sockets, active TCP/UDP connections, listening ports, and ARP tables</li></ul>",
          "cleanText": "Types of Information on the RAM (P1): Cryptographic keys, processes running, executed console commands, clipboard contents, network information.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-17",
          "slideNumber": 17,
          "title": "Types of Information in RAM (Part 2)",
          "eyebrow": "RAM Artifacts",
          "partNumber": "Part 2",
          "lead": "Decrypted contents, registry hives, and browser cache remnants",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Types of Information on the RAM (P2)</p><ul class=\"compact\"><li><strong>Decrypted contents:</strong> Encrypted documents, database queries, and secure emails decrypted in user space</li><li><strong>Registry hives:</strong> Active registry hives and volatile memory-resident configuration keys</li><li><strong>Text files and images:</strong> Unsaved document drafts, image thumbnails, and open PDF buffers</li><li><strong>Deleted files:</strong> Transient memory remnants of recently unlinked files before garbage collection</li><li><strong>Web browsing logs:</strong> Incognito/private browsing sessions, visited URLs, and active web cookies</li></ul>",
          "cleanText": "Types of Information on the RAM (P2): Decrypted contents, registry hives, text files and images, deleted files, web browsing logs.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-18",
          "slideNumber": 18,
          "title": "Types of Information in RAM (Part 3)",
          "eyebrow": "RAM Artifacts",
          "partNumber": "Part 3",
          "lead": "Active credentials, exploit payloads, and stealthy in-memory malware",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"eyebrow\">Types of Information on the RAM (P3)</p><ul class=\"compact\"><li><strong>Open/active registry keys:</strong> Dynamic kernel handles and locked hardware device interfaces</li><li><strong>Internet account passwords:</strong> Plaintext account credentials cached during web authentication</li><li><strong>Instant messages:</strong> Unencrypted messaging transcripts from Telegram, WhatsApp, Discord, or Slack</li><li><strong>Exploit-related information:</strong> Shellcode buffers, stack overflow artifacts, and memory pointers</li><li><strong>Malware (rootkits and trojan horses):</strong> Fileless malware executing exclusively within RAM structures</li><li><strong>Evidence of activity:</strong> Transient activity not typically stored on the local hard disk</li></ul>",
          "cleanText": "Types of Information on the RAM (P3): Open/active registry keys, internet account passwords, instant messages, exploit-related information, malware (rootkits and trojan horses), evidence of activity not typically stored on the local hard disk.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-19",
          "slideNumber": 19,
          "title": "RAM Storage vs Hard Drive Architecture",
          "eyebrow": "Memory Architecture",
          "lead": "Why volatile acquisition requires specialized memory forensics tooling",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">Acquiring volatile memory is similar to acquiring hard drive data; however, it uses different tools, because unlike hard drives, data are not stored in a structured way in the RAM memory.</p><div class=\"info-card mt-3\"><p>Hard drives utilize structured filesystems (NTFS, ext4) with partitions, directory indexes, and inodes. In contrast, physical RAM is dynamically mapped into virtual memory pages and paging files, requiring kernel drivers (e.g., WinPmem, LiME) and analysis frameworks (e.g., Volatility, Rekall).</p></div>",
          "cleanText": "Acquiring volatile memory is similar to acquiring hard drive data; however, it uses different tools, because unlike hard drives, data are not stored in a structured way in the RAM memory. Hard drives use structured filesystems while RAM uses dynamically allocated memory pages.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "nonvolatile-static-disk",
      "title": "Static Acquisition: Nonvolatile Storage & Sanitization",
      "eyebrow": "Static Acquisition",
      "summary": "Nonvolatile disk imaging, hardware write blockers, Windows registry write protection, and media sanitization with Moo0.",
      "slides": [
        {
          "id": "slide-20",
          "slideNumber": 20,
          "title": "Acquiring Nonvolatile Memory (Static Acquisition)",
          "eyebrow": "Static Acquisition",
          "lead": "Capturing persistent storage media in a powered-off forensic state",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Acquiring Nonvolatile Memory (Static Acquisition)</h3><p class=\"fragment\">Capturing hard drive images is considered the main part of any computer forensic investigation, as most data that may contain inculpatory or exculpatory evidence will most probably be residing there.</p><div class=\"info-card mt-3\"><p>Static acquisition occurs when the target storage medium is removed or powered down, preventing the operating system from updating file access dates or writing temporary logs.</p></div>",
          "cleanText": "Acquiring Nonvolatile Memory (Static Acquisition): Capturing hard drive images is considered the main part of any computer forensic investigation, as most data that may contain inculpatory or exculpatory evidence will most probably be residing there.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-21",
          "slideNumber": 21,
          "title": "Write-Protecting Suspect Media",
          "eyebrow": "Hardware & Software Controls",
          "lead": "Mandatory prevention of evidence modification during workstation attachment",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "caveat": "Before acquiring the hard drive image, you need to write-protect the suspect hard drive before attaching it to your forensic workstation. A hardware write blocker is preferred over the software solutions.",
          "rawHtml": "<p class=\"fragment\"><b>Note:</b> Before acquiring the hard drive image, you need to write-protect the suspect hard drive before attaching it to your forensic workstation.</p><p class=\"fragment mt-3\">A hardware write blocker is preferred over the software solutions.</p><div class=\"alert-card mt-3\"><p>Connecting a suspect drive to a computer without write-blocking can cause the operating system to write hidden metadata (e.g., <code>System Volume Information</code>, <code>.Spotlight</code>, or mount journals), altering the evidence and violating chain of custody.</p></div>",
          "cleanText": "Note: Before acquiring the hard drive image, you need to write-protect the suspect hard drive before attaching it to your forensic workstation. A hardware write blocker is preferred over software solutions.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-22",
          "slideNumber": 22,
          "title": "Linux Live Boot Acquisition",
          "eyebrow": "Operating System Neutrality",
          "lead": "Booting a specialized forensic live OS to isolate suspect drives",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">Many investigators prefer to live boot from using a Linux forensic distribution and then attach a suspect drive without any danger of manipulating it with data from external sources.</p><div class=\"info-card mt-3\"><p>Forensic Linux environments (like Kali Linux in Forensics Mode, CAINE, or Paladin) disable automounting and disable internal swap space, ensuring zero write operations occur on attached physical disks.</p></div>",
          "cleanText": "Many investigators prefer to live boot from using a Linux forensic distribution and then attach a suspect drive without any danger of manipulating it with data from external sources. Forensic Linux distributions disable automounting and swap partitions.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Mount a read-only partition without replaying filesystem journals\nmount -o ro,noload /dev/sdb1 /mnt/evidence\n\n# Verify partition is mounted strictly read-only\nmount | grep evidence"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-23",
          "slideNumber": 23,
          "title": "Windows Workstation Write-Protection",
          "eyebrow": "Workstation Configuration",
          "lead": "Configuring the Windows Registry to enforce read-only USB and disk access",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">If you are using a Windows OS for your forensic workstation and you want to know how to write-protect your investigated hard drive to safely acquire its image:</p><div class=\"info-card mt-3\"><p>Windows allows software-level write-blocking by setting the <code>WriteProtect</code> DWORD value to <code>1</code> inside the <code>StorageDevicePolicies</code> registry key.</p></div>",
          "cleanText": "If you are using a Windows OS for your forensic workstation and you want to know how to write-protect your investigated hard drive to safely acquire its image: Configure the StorageDevicePolicies registry key with WriteProtect set to 1.",
          "codeSnippets": [
            {
              "language": "ini",
              "code": "Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies]\n\"WriteProtect\"=dword:00000001"
            },
            {
              "language": "powershell",
              "code": "# Enable Windows software write-block via PowerShell\nNew-Item -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\" -Name \"StorageDevicePolicies\" -Force\nSet-ItemProperty -Path \"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\StorageDevicePolicies\" -Name \"WriteProtect\" -Value 1 -Type DWord"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-24",
          "slideNumber": 24,
          "title": "Forensic Destination Sanitization (Wiping)",
          "eyebrow": "Forensic Cleanliness",
          "lead": "Completely erasing target media to prevent evidence cross-contamination",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"lead-statement\">When creating a disk image, the destination HDD should be forensically clean (completely wiped) before using it to store the acquired forensics image(s).</p><p class=\"fragment mt-3\">Use a wiping tool to erase any recoverable data on the forensic drive before performing the operation.</p><div class=\"alert-card mt-3\"><p>If the destination drive contains leftover fragments from prior investigations, defense counsel may argue that recovered artifacts originated from a previous case rather than the suspect drive.</p></div>",
          "cleanText": "When creating a disk image, the destination HDD should be forensically clean (completely wiped) before using it to store the acquired forensics image(s). Use a wiping tool to erase any recoverable data on the forensic drive before performing the operation.",
          "codeSnippets": [
            {
              "language": "bash",
              "code": "# Zero-fill the destination disk to ensure complete forensic wipe\ndd if=/dev/zero of=/dev/sdX bs=4M status=progress\n\n# Or wipe with NIST-compliant pseudorandom pattern\nshred -v -n 1 -z /dev/sdX"
            }
          ],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-25",
          "slideNumber": 25,
          "title": "Moo0 Disk Wiper",
          "eyebrow": "Sanitization Utilities",
          "lead": "Targeted free-space data erasure utility",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Moo0 Disk Wiper</h2><p class=\"lead-statement\">Moo0 Disk Wiper lets you easily erase all the recoverable data from the empty space of your disk drive, leaving the existing files untouched.</p><div class=\"info-card mt-3\"><p>Wiping free disk space prevents previously deleted files from being salvaged by automated carving tools, maintaining pristine, forensically sound destination media for evidence storage.</p></div>",
          "cleanText": "Moo0 Disk Wiper: Moo0 Disk Wiper lets you easily erase all the recoverable data from the empty space of your disk drive, leaving the existing files untouched. Wiping free space eliminates recoverable remnants from past usage.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-26",
          "slideNumber": 26,
          "title": "Using OSForensics for Acquisition",
          "eyebrow": "Lab Hands-On",
          "lead": "Hands-on disk imaging and verification trial lab",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Using OSForensics</h3><p class=\"lead-statement\">Have a copy from your instructor and install a trial version on your PC/Laptop.</p><div class=\"info-card mt-3\"><p>PassMark OSForensics provides the <strong>Create Disk Image</strong> feature, enabling bit-level raw or Expert Witness (E01) drive capture with integrated MD5 and SHA-256 verification hash logging.</p></div>",
          "cleanText": "Using OSForensics: Have a copy from your instructor and install a trial version on your PC/Laptop. Use OSForensics to perform bit-level drive imaging, container creation, and hash verification.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "./assets/osforensics.png"
          ]
        }
      ]
    },
    {
      "id": "summary-review",
      "title": "Acquisition Methodology Review & Lab",
      "eyebrow": "Synthesis & Review",
      "summary": "Volatile vs. nonvolatile comparison, knowledge review questions, and step-by-step evidence acquisition checklist.",
      "slides": [
        {
          "id": "slide-27",
          "slideNumber": 27,
          "title": "Acquisition Methodology Summary",
          "eyebrow": "Module Summary",
          "lead": "Comprehensive comparison between volatile and nonvolatile memory acquisition:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Acquisition Methodology Summary</h3><p>A systematic comparison of digital evidence acquisition techniques, targets, and forensic constraints:</p>",
          "cleanText": "Acquisition Methodology Summary: Comprehensive comparison of Volatile (RAM) vs Nonvolatile (Disk) memory acquisition across state, lifespan, artifacts, write-protection, formats, and verification.",
          "codeSnippets": [],
          "tables": [
            {
              "caption": "Volatile vs Nonvolatile Memory Acquisition",
              "headers": ["Characteristic", "Volatile Memory (Live RAM)", "Nonvolatile Storage (Static Disk)"],
              "rows": [
                ["System State", "System powered on and active", "System powered off or disks unmounted"],
                ["Data Lifespan", "Lost immediately upon power loss or reset", "Persists for years (magnetic/flash media)"],
                ["Key Artifacts", "Plaintext passwords, TLS/VeraCrypt keys, sockets", "Installed OS files, event logs, deleted files"],
                ["Write-Protection", "Software safety; avoid launching unverified tools", "Physical hardware write blocker or registry key"],
                ["File Formats", "Raw memory dump (.raw, .dmp), LiME format", "Raw (.001, .dd), AFF (.afd), EnCase (.E01)"],
                ["Verification", "Pre/post acquisition memory hashing", "Direct hash matching between disk and image"]
              ]
            }
          ],
          "images": []
        },
        {
          "id": "slide-28",
          "slideNumber": 28,
          "title": "Knowledge Check & Review Questions",
          "eyebrow": "Review & Reflection",
          "lead": "Critical questions for exam review and laboratory preparation:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Knowledge Check: Digital Evidence Acquisition</h3><ol class=\"compact\"><li><strong>Order of Volatility:</strong> Why must volatile RAM memory be acquired before powering off the computer to examine the hard disk?</li><li><strong>Integrity Proof:</strong> How does an investigator mathematically prove that an acquired image file is identical to the suspect drive in court?</li><li><strong>Write Blockers:</strong> Why are hardware write blockers preferred over software write blockers?</li><li><strong>Container Formats:</strong> What advantages do EnCase (<code>.E01</code>) and AFF offer over plain raw <code>dd</code> bitstream copies?</li><li><strong>Drive Sanitization:</strong> Why must a destination hard drive be forensically wiped before storing evidence?</li></ol>",
          "cleanText": "Knowledge Check: Digital Evidence Acquisition. 1. Order of Volatility: Why must RAM be captured first? 2. Integrity Proof: How to prove image is 100% identical? 3. Write Blockers: Why hardware over software? 4. Container Formats: Advantages of EnCase and AFF over raw dd? 5. Drive Sanitization: Why must destination drives be sanitized?",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-29",
          "slideNumber": 29,
          "title": "Forensic Acquisition Standard Checklist",
          "eyebrow": "Procedural Checklist",
          "lead": "Standard operational steps for legally defensible evidence acquisition:",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h3>Forensic Acquisition Checklist</h3><ul class=\"compact\"><li><strong>Step 1 — Document Scene:</strong> Photograph physical system state, cable connections, screen displays, and peripheral devices.</li><li><strong>Step 2 — Assess Volatility:</strong> If system is live and RAM is critical, capture volatile memory first to sanitized external media using trusted binaries.</li><li><strong>Step 3 — Write Protection:</strong> Connect suspect storage drive to forensic workstation exclusively through a hardware write blocker.</li><li><strong>Step 4 — Prepare Destination:</strong> Verify destination drive has been forensically wiped (zero-filled) and compute pre-run hash.</li><li><strong>Step 5 — Bitstream Acquisition:</strong> Execute forensic bitstream imaging (Raw, AFF, or EnCase E01) with logging enabled.</li><li><strong>Step 6 — Dual Verification:</strong> Calculate MD5 and SHA-256 hashes of both source drive and destination image. Verify 100% hash match.</li><li><strong>Step 7 — Chain of Custody:</strong> Log serial numbers, dates, times, hash digests, investigator names, and seal in anti-static evidence bags.</li></ul>",
          "cleanText": "Forensic Acquisition Checklist: Step 1 Document Scene, Step 2 Assess Volatility (capture RAM first if live), Step 3 Write Protection (hardware write blocker), Step 4 Prepare Destination (forensically wiped), Step 5 Bitstream Acquisition (Raw/AFF/E01), Step 6 Dual Verification (MD5 & SHA-256 match), Step 7 Chain of Custody (evidence bags & logs).",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-30",
          "slideNumber": 30,
          "title": "Module Completion & Acknowledgments",
          "eyebrow": "CIT 245 • Cyberforensics",
          "subtitle": "Topic 06 Complete",
          "lead": "Digital Evidence Acquisition — Volatile & Nonvolatile Memory Preservation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"intro-author-card\"><div class=\"institution-badge\"><span>West Visayas State University • CICT Main Campus, Iloilo City</span></div><h2>Thank You!</h2><p class=\"intro-tagline\">CIT 245 Cyberforensics • Module 06 Complete</p><p class=\"mt-4 text-xs text-slate-500\">Curriculum design by Prof. Mark Joseph J. Solidarios • WVSU CICT</p></div>",
          "cleanText": "Thank You! CIT 245 Cyberforensics. Module 06 Complete: Digital Evidence Acquisition. West Visayas State University, CICT Main Campus, Iloilo City. Curriculum design by Prof. Mark Joseph J. Solidarios.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    }
  ]
};

