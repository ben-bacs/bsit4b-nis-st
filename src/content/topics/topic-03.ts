import { Topic } from '../../types/content';

export const TOPIC_03: Topic = {
  "id": "topic-03",
  "slug": "04-kali-linux-and-technical-concepts",
  "topicNumber": "04",
  "title": "Kali Linux & Technical Concepts",
  "subtitle": "Kali Linux Tools and Computing Concepts for Digital Forensics",
  "description": "Deep dive into forensic carving, forensic imaging, file systems, character encodings, hex analysis, and memory structures.",
  "author": "Mark Joseph J. Solidarios",
  "originalPath": "_04_kali_linux_and_technical_concepts",
  "badge": "Technical In-Depth",
  "tags": [
    "Kali Linux",
    "Carving",
    "Scalpel",
    "Magic Rescue",
    "Hex Analysis",
    "File Systems",
    "SSD TRIM"
  ],
  "totalSlides": 55,
  "sections": [
    {
      "id": "forensic-carving",
      "title": "Forensic Carving & Extraction Tools",
      "eyebrow": "Carving",
      "summary": "Magic bytes pattern recognition with magicrescue, scalpel, and scrounge-ntfs.",
      "slides": [
        {
          "id": "slide-1",
          "slideNumber": 1,
          "title": "Kali Linux for Cyberforensics",
          "eyebrow": "CIT 245 • Topic 04",
          "subtitle": "Kali Linux Tools and Computing Concepts for Digital Forensics",
          "lead": "Deep dive into forensic carving, forensic imaging, file systems, character encodings, hex analysis, and memory structures.",
          "byline": "Prof. Mark Joseph J. Solidarios • WVSU CICT Main Campus, Iloilo City",
          "isTitleSlide": true,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"intro-author-card\"><div class=\"institution-badge\"><span>West Visayas State University • CICT Main Campus, Iloilo City</span></div><p class=\"intro-tagline\">Bachelor of Science in Information Technology • CIT 245 Cyberforensics</p></div>",
          "cleanText": "Kali Linux for Cyberforensics CIT 245 • Topic 04 Kali Linux Tools and Computing Concepts for Digital Forensics. Deep dive into forensic carving, forensic imaging, file systems, character encodings, hex analysis, and memory structures. Prof. Mark Joseph J. Solidarios, WVSU CICT Main Campus, Iloilo City.",
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
          "title": "Forensic Carving",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Forensic Carving</h2>\n          <p class=\"fragment\">\n            File carving is like piecing together a puzzle by recognizing and\n            collecting specific patterns in a vast sea of data. It's a valuable\n            technique for situations where traditional recovery methods fall\n            short.\n          </p>",
          "cleanText": "Forensic Carving File carving is like piecing together a puzzle by recognizing and collecting specific patterns in a vast sea of data. It's a valuable technique for situations where traditional recovery methods fall short.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-4",
          "slideNumber": 4,
          "title": "magicrescue",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/magicrescue-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>magicrescue</h2>",
          "cleanText": "magicrescue",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/magicrescue-logo.svg"
          ]
        },
        {
          "id": "slide-5",
          "slideNumber": 5,
          "title": "magicrescue",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small> Forensic Carving </small></p>\n          <hr />\n          <h2>magicrescue</h2>\n          <p class=\"fragment\">\n            Magic Rescue scans a block device for file types it knows how to\n            recover and calls an external program to extract them. It looks at\n            “magic bytes” (file patterns) in file contents, so it can be used\n            both as an undelete utility and for recovering a corrupted drive or\n            partition. As long as the file data is there, it will find it.\n          </p>",
          "cleanText": "Forensic Carving magicrescue Magic Rescue scans a block device for file types it knows how to recover and calls an external program to extract them. It looks at “magic bytes” (file patterns) in file contents, so it can be used both as an undelete utility and for recovering a corrupted drive or partition. As long as the file data is there, it will find it.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-6",
          "slideNumber": 6,
          "title": "Forensic Carving > magicrescue",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small> Forensic Carving &gt; magicrescue </small></p>\n          <hr />\n          <p class=\"fragment\">\n            Magic Rescue uses files called ‘recipes’. These files have strings\n            and commands to identify and extract data from devices or forensics\n            images. So, you can write your own recipes. Currently, there are the\n            following recipes: avi, canon-cr2, elf, flac, gpl, gzip, jpeg-exif,\n            jpeg-jfif, mbox, mbox-mozilla-inbox, mbox-mozilla-sent, mp3-id3v1,\n            mp3-id3v2, msoffice, nikon-raw, perl, png, ppm, sqlite and zip.\n          </p>",
          "cleanText": "Forensic Carving > magicrescue Magic Rescue uses files called ‘recipes’. These files have strings and commands to identify and extract data from devices or forensics images. So, you can write your own recipes. Currently, there are the following recipes: avi, canon-cr2, elf, flac, gpl, gzip, jpeg-exif, jpeg-jfif, mbox, mbox-mozilla-inbox, mbox-mozilla-sent, mp3-id3v1, mp3-id3v2, msoffice, nikon-raw, perl, png, ppm, sqlite and zip.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-7",
          "slideNumber": 7,
          "title": "Forensic Carving > magicrescue",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small> Forensic Carving &gt; magicrescue </small></p>\n          <hr />\n          <img src=\"/assets/kali-2.png\" alt=\"\" srcset=\"\" />",
          "cleanText": "Forensic Carving > magicrescue",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/kali-2.png"
          ]
        },
        {
          "id": "slide-8",
          "slideNumber": 8,
          "title": "scalpel",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/scalpel-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>scalpel</h2>",
          "cleanText": "scalpel",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/scalpel-logo.svg"
          ]
        },
        {
          "id": "slide-9",
          "slideNumber": 9,
          "title": "scalpel",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small> Forensic Carving </small></p>\n          <hr />\n          <h2>scalpel</h2>\n          <p class=\"fragment\">\n            scalpel is a fast file carver that reads a database of header and\n            footer definitions and extracts matching files from a set of image\n            files or raw device files.\n          </p>",
          "cleanText": "Forensic Carving scalpel scalpel is a fast file carver that reads a database of header and footer definitions and extracts matching files from a set of image files or raw device files.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-10",
          "slideNumber": 10,
          "title": "Forensic Carving > scalpel",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Carving &gt; scalpel</small></p>\n          <hr />\n          <p class=\"fragment\">\n            scalpel is filesystem-independent and will carve files from FAT16,\n            FAT32, exFAT, NTFS, Ext2, Ext3, Ext4, JFS, XFS, ReiserFS, raw\n            partitions, etc.\n          </p>",
          "cleanText": "Forensic Carving > scalpel scalpel is filesystem-independent and will carve files from FAT16, FAT32, exFAT, NTFS, Ext2, Ext3, Ext4, JFS, XFS, ReiserFS, raw partitions, etc.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-11",
          "slideNumber": 11,
          "title": "Forensic Carving > scalpel",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Carving &gt; scalpel</small></p>\n          <hr />\n          <p class=\"fragment\">\n            scalpel is a complete rewrite of the Foremost 0.69 file carver and\n            is useful for both digital forensics investigations and file\n            recovery.\n          </p>",
          "cleanText": "Forensic Carving > scalpel scalpel is a complete rewrite of the Foremost 0.69 file carver and is useful for both digital forensics investigations and file recovery.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-12",
          "slideNumber": 12,
          "title": "Forensic Carving > scalpel",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Carving &gt; scalpel</small></p>\n          <hr />\n          <img src=\"/assets/kali-3.png\" alt=\"\" srcset=\"\" />",
          "cleanText": "Forensic Carving > scalpel",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/kali-3.png"
          ]
        },
        {
          "id": "slide-13",
          "slideNumber": 13,
          "title": "scrounge-ntfs",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/scrounge-ntfs-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>scrounge-ntfs</h2>",
          "cleanText": "scrounge-ntfs",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/scrounge-ntfs-logo.svg"
          ]
        },
        {
          "id": "slide-14",
          "slideNumber": 14,
          "title": "scrounge-ntfs",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Carving &gt; scrounge-ntfs</small></p>\n          <hr />\n          <h2>scrounge-ntfs</h2>\n          <p class=\"fragment\">\n            Scrounge NTFS is a data recovery program for NTFS filesystems. It\n            reads each block of the hard disk and try to rebuild the original\n            filesystem tree into a directory.\n          </p>",
          "cleanText": "Forensic Carving > scrounge-ntfs scrounge-ntfs Scrounge NTFS is a data recovery program for NTFS filesystems. It reads each block of the hard disk and try to rebuild the original filesystem tree into a directory.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-15",
          "slideNumber": 15,
          "title": "Forensic Carving > scrounge-ntfs",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Carving &gt; scrounge-ntfs</small></p>\n          <hr />\n          <img src=\"/assets/kali-5.png\" alt=\"\" srcset=\"\" />",
          "cleanText": "Forensic Carving > scrounge-ntfs",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/kali-5.png"
          ]
        },
        {
          "id": "slide-16",
          "slideNumber": 16,
          "title": "Forensic Imaging",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Forensic Imaging</h2>\n          <p class=\"fragment\">\n            Process of making an exact copy of digital storage media for the\n            purposes of preserving its contents and structure for later\n            analysis.\n          </p>",
          "cleanText": "Forensic Imaging Process of making an exact copy of digital storage media for the purposes of preserving its contents and structure for later analysis.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "imaging-and-pdf-forensics",
      "title": "Forensic Imaging & PDF Forensics",
      "eyebrow": "Tools",
      "summary": "High-speed multithreaded imaging with Guymager, PDF keyword parsing, and The Sleuth Kit / Autopsy.",
      "slides": [
        {
          "id": "slide-17",
          "slideNumber": 17,
          "title": "guymager",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/guymager-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>guymager</h2>",
          "cleanText": "guymager",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/guymager-logo.svg"
          ]
        },
        {
          "id": "slide-18",
          "slideNumber": 18,
          "title": "guymager",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Imaging &gt; guymager</small></p>\n          <hr />\n          <h2>guymager</h2>\n          <p class=\"fragment\">\n            The forensic imager contained in this package, guymager, was\n            designed to support different image file formats, to be most\n            user-friendly and to run really fast. It has a high speed\n            multi-threaded engine using parallel compression for best\n            performance on multi-processor and hyper-threading machines.\n          </p>",
          "cleanText": "Forensic Imaging > guymager guymager The forensic imager contained in this package, guymager, was designed to support different image file formats, to be most user-friendly and to run really fast. It has a high speed multi-threaded engine using parallel compression for best performance on multi-processor and hyper-threading machines.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-19",
          "slideNumber": 19,
          "title": "Forensic Imaging > guymager",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Forensic Imaging &gt; guymager</small></p>\n          <hr />\n          <img src=\"/assets/kali-6.png\" alt=\"\" srcset=\"\" />",
          "cleanText": "Forensic Imaging > guymager",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/kali-6.png"
          ]
        },
        {
          "id": "slide-20",
          "slideNumber": 20,
          "title": "PDF Forensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>PDF Forensics</h2>\n          <p class=\"fragment\">\n            Aimed at analyzing PDF documents and extract deep information which\n            is typically not visible to common users.\n          </p>",
          "cleanText": "PDF Forensics Aimed at analyzing PDF documents and extract deep information which is typically not visible to common users.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-21",
          "slideNumber": 21,
          "title": "pdfid",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/pdfid-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>pdfid</h2>",
          "cleanText": "pdfid",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/pdfid-logo.svg"
          ]
        },
        {
          "id": "slide-22",
          "slideNumber": 22,
          "title": "pdfid",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>PDF Forensics &gt; pdfid</small></p>\n          <hr />\n          <h2>pdfid</h2>\n          <p class=\"fragment\">\n            This tool is not a PDF parser, but it will scan a file to look for\n            certain PDF keywords, allowing you to identify PDF documents that\n            contain (for example) JavaScript or execute an action when opened.\n            PDFiD will also handle name obfuscation.\n          </p>",
          "cleanText": "PDF Forensics > pdfid pdfid This tool is not a PDF parser, but it will scan a file to look for certain PDF keywords, allowing you to identify PDF documents that contain (for example) JavaScript or execute an action when opened. PDFiD will also handle name obfuscation.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-23",
          "slideNumber": 23,
          "title": "pdf-parser",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/pdf-parser-logo.svg\" alt=\"\" srcset=\"\" />\n          <h2>pdf-parser</h2>",
          "cleanText": "pdf-parser",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/pdf-parser-logo.svg"
          ]
        },
        {
          "id": "slide-24",
          "slideNumber": 24,
          "title": "pdf-parser",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>PDF Forensics &gt; pdf-parser</small></p>\n          <hr />\n          <h2>pdf-parser</h2>\n          <p class=\"fragment\">\n            This tool will parse a PDF document to identify the fundamental\n            elements used in the analyzed file. It will not render a PDF\n            document.\n          </p>",
          "cleanText": "PDF Forensics > pdf-parser pdf-parser This tool will parse a PDF document to identify the fundamental elements used in the analyzed file. It will not render a PDF document.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-25",
          "slideNumber": 25,
          "title": "Sleuth Kit",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Sleuth Kit</h2>\n          <p class=\"fragment\">\n            The Sleuth Kit is a library and collection of Unix- and\n            Windows-based utilities for extracting data from disk drives and\n            other storage so as to facilitate the forensic analysis of computer\n            systems\n          </p>",
          "cleanText": "Sleuth Kit The Sleuth Kit is a library and collection of Unix- and Windows-based utilities for extracting data from disk drives and other storage so as to facilitate the forensic analysis of computer systems",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-26",
          "slideNumber": 26,
          "title": "Autopsy",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<img src=\"/assets/autopsy-logo.svg\" alt=\"\" srcset=\"\" />\n          <p>Autopsy</p>",
          "cleanText": "Autopsy",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/autopsy-logo.svg"
          ]
        }
      ]
    },
    {
      "id": "character-encodings-file-signatures",
      "title": "Character Encoding & File Signatures",
      "eyebrow": "Technical Concepts",
      "summary": "ASCII (128 code points) vs. Unicode, magic byte signatures in the first 20 bytes, and hex editing investigation.",
      "slides": [
        {
          "id": "slide-27",
          "slideNumber": 27,
          "title": "Sleuth Kit >autopsy",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Sleuth Kit &gt;autopsy</small></p>\n          <p class=\"fragment\">\n            The Autopsy Forensic Browser is a graphical interface to the command\n            line digital forensic analysis tools in The Sleuth Kit. Together,\n            The Sleuth Kit and Autopsy provide many of the same features as\n            commercial digital forensics tools for the analysis of Windows and\n            UNIX file systems (NTFS, FAT, FFS, EXT2FS, and EXT3FS).\n          </p>",
          "cleanText": "Sleuth Kit >autopsy The Autopsy Forensic Browser is a graphical interface to the command line digital forensic analysis tools in The Sleuth Kit. Together, The Sleuth Kit and Autopsy provide many of the same features as commercial digital forensics tools for the analysis of Windows and UNIX file systems (NTFS, FAT, FFS, EXT2FS, and EXT3FS).",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-28",
          "slideNumber": 28,
          "title": "Sleuth Kit >autopsy",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Sleuth Kit &gt;autopsy</small></p>\n          <img src=\"/assets/kali-8.png\" alt=\"\" srcset=\"\" />",
          "cleanText": "Sleuth Kit >autopsy",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/kali-8.png"
          ]
        },
        {
          "id": "slide-29",
          "slideNumber": 29,
          "title": "Essential Technical Concepts",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Essential Technical Concepts</h2>\n          <p>\n           <small> Conducting a digital forensics investigation requires a thorough\n            understanding of some of the main technical concepts of computing.</small>\n          </p>",
          "cleanText": "Essential Technical Concepts Conducting a digital forensics investigation requires a thorough understanding of some of the main technical concepts of computing.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-30",
          "slideNumber": 30,
          "title": "Computer Character Encoding Schema",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Computer Character Encoding Schema</h2>\n          <p class=\"fragment\">\n            Computers use character encoding schema to convert binary numbers\n            into meaningful text that a human can read .\n          </p>",
          "cleanText": "Computer Character Encoding Schema Computers use character encoding schema to convert binary numbers into meaningful text that a human can read .",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-31",
          "slideNumber": 31,
          "title": "ASCII",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>ASCII</h2>\n            <p class=\"fragment\">\n                Also known as American Standard Code for Information Interchange. <span class=\"fragment\"> ASCII codes represent text in computers, telecommunications equipment, and other devices. </span><span class=\"fragment\">ASCII has just 128 code points, of which only 95 are printable characters, which severely limit its scope.</span>\n            </p>",
          "cleanText": "ASCII Also known as American Standard Code for Information Interchange. ASCII codes represent text in computers, telecommunications equipment, and other devices. ASCII has just 128 code points, of which only 95 are printable characters, which severely limit its scope.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-32",
          "slideNumber": 32,
          "title": "Unicode",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Unicode</h2>\n            <p class=\"fragment\">\n                Unicode encoding, created by The Unicode Consortium, is a widely used character-encoding schema that provides a unique number for every character from any international language.\n            </p>",
          "cleanText": "Unicode Unicode encoding, created by The Unicode Consortium, is a widely used character-encoding schema that provides a unique number for every character from any international language.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-33",
          "slideNumber": 33,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"fragment\">\n                Understanding how computers store and represent data is essential in digital forensics\n            </p>",
          "cleanText": "Understanding how computers store and represent data is essential in digital forensics",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-34",
          "slideNumber": 34,
          "title": "File Structure",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>File Structure</h2>\n            <p class=\"fragment\">\n                Digital files are composed of a sequence of bits: each file type has a particular encoding scheme (file format) that describes how information is stored within this file. \n            </p>",
          "cleanText": "File Structure Digital files are composed of a sequence of bits: each file type has a particular encoding scheme (file format) that describes how information is stored within this file.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-35",
          "slideNumber": 35,
          "title": "Revelation: Digital Concealment",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Revelation: Digital Concealment</h2>\n            <p class=\"fragment\">\n              As forensic investigators, one cannot depend on file extension alone. Most digital files have a signature that is located in the first 20 bytes of the file <span class=\"fragment\">- you can check this signature by opening the subject file using a text editor</span>.\n            </p>",
          "cleanText": "Revelation: Digital Concealment As forensic investigators, one cannot depend on file extension alone. Most digital files have a signature that is located in the first 20 bytes of the file - you can check this signature by opening the subject file using a text editor .",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "storage-and-filesystem-architectures",
      "title": "Storage Types, Partitions & File Systems",
      "eyebrow": "Architecture",
      "summary": "Volatile vs nonvolatile memory, primary/secondary storage, partitions, and comprehensive comparative file system tables.",
      "slides": [
        {
          "id": "slide-36",
          "slideNumber": 36,
          "title": "A hex editor (https://hexed.it/)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>A hex editor (https://hexed.it/)</p>\n            <img src=\"/assets/hex.png\" alt=\"\">",
          "cleanText": "A hex editor (https://hexed.it/)",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/hex.png"
          ]
        },
        {
          "id": "slide-37",
          "slideNumber": 37,
          "title": "File Contents",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>File Contents</h2>\n            <img src=\"/assets/hex2.png\" alt=\"\">",
          "cleanText": "File Contents",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/hex2.png"
          ]
        },
        {
          "id": "slide-38",
          "slideNumber": 38,
          "title": "Investigation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Investigation</h2>\n            <img src=\"/assets/hex3.png\" alt=\"\">",
          "cleanText": "Investigation",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/hex3.png"
          ]
        },
        {
          "id": "slide-39",
          "slideNumber": 39,
          "title": "Other Hex Editing Tools",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Other Hex Editing Tools</h2>",
          "cleanText": "Other Hex Editing Tools",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-40",
          "slideNumber": 40,
          "title": "Digital File Metadata",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Digital File Metadata</h2>\n            <p class=\"fragment\">\n                Metadata is data about data. Most digital file types have metadata associated with them.\n            </p>",
          "cleanText": "Digital File Metadata Metadata is data about data. Most digital file types have metadata associated with them.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-41",
          "slideNumber": 41,
          "title": "Metadata Investigation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Metadata Investigation</h2>\n            <p class=\"fragment\">\n                From a digital forensics perspective, metadata can be very useful in many cases.\n                <span class=\"fragment\">Example: Tracking different authors of a file (e.g., an MS Office file) through the associated metadata. </span>\n            </p>",
          "cleanText": "Metadata Investigation From a digital forensics perspective, metadata can be very useful in many cases. Example: Tracking different authors of a file (e.g., an MS Office file) through the associated metadata.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "data-recovery-ssd-trim",
      "title": "Data Recovery Considerations & SSD TRIM",
      "eyebrow": "Recovery",
      "summary": "HDD pointer deletion versus SSD TRIM instant unallocation, and the 4-stage external recovery process.",
      "slides": [
        {
          "id": "slide-42",
          "slideNumber": 42,
          "title": "Hash Analysis",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Hash Analysis</h2>\n            <p class=\"fragment\">\n                Hashing is an important concept in the digital forensic field; actually, you must calculate any digital evidence hash value (whether it is a hard disk image or a single file) you acquire during your investigation to prove that the acquired data (i.e., the digital evidence) has not been tampered with.\n            </p>",
          "cleanText": "Hash Analysis Hashing is an important concept in the digital forensic field; actually, you must calculate any digital evidence hash value (whether it is a hard disk image or a single file) you acquire during your investigation to prove that the acquired data (i.e., the digital evidence) has not been tampered with.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-43",
          "slideNumber": 43,
          "title": "Volatile & Nonvolatile Memory",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Volatile &amp; Nonvolatile Memory</h2>\n            <ul>\n                <li class=\"fragment\">Volatile memory keeps information for a short time; actually, it needs power to retain\n                    data, but when power is turned off, it loses its information quickly. </li>\n                <li class=\"fragment\">Nonvolatile memory can retain data for long time, even after power is turned off. It is\n                    usually used for long-term persistent storage.</li>\n            </ul>",
          "cleanText": "Volatile & Nonvolatile Memory Volatile memory keeps information for a short time; actually, it needs power to retain data, but when power is turned off, it loses its information quickly. Nonvolatile memory can retain data for long time, even after power is turned off. It is usually used for long-term persistent storage.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-44",
          "slideNumber": 44,
          "title": "Types of Computer Storage",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Types of Computer Storage</h2>\n            <p class=\"fragment\">\n                Primary Storage\n            </p>\n            <p><small class=\"fragment\">\n                Also known as main storage and system storage, this type has a volatile memory\nthat loses stored data when power is turned off. \n            </small></p>",
          "cleanText": "Types of Computer Storage Primary Storage Also known as main storage and system storage, this type has a volatile memory that loses stored data when power is turned off.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-45",
          "slideNumber": 45,
          "title": "Secondary Storage",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"fragment\">\n              Secondary Storage\n            </p>\n            <p><small class=\"fragment\">\n                Secondary storage is also known as external memory or auxiliary memory. This is\nnonvolatile memory that retains its contents, whether there is power or not. It is used for\nlong-term data retention. \n            </small></p>",
          "cleanText": "Secondary Storage Secondary storage is also known as external memory or auxiliary memory. This is nonvolatile memory that retains its contents, whether there is power or not. It is used for long-term data retention.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-46",
          "slideNumber": 46,
          "title": "Partition",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Partition</h2>\n            <p class=\"fragment\">\n                A partition is a section on the disk. There are two types on partition for a disk: Primary and Extended - A primary partition will hold operating system booting\n                files, while the extended partition, can be subdivided into 24 logical partitions; however, newer file systems can surpass the limit of 24 logical partitions.\n            </p>",
          "cleanText": "Partition A partition is a section on the disk. There are two types on partition for a disk: Primary and Extended - A primary partition will hold operating system booting files, while the extended partition, can be subdivided into 24 logical partitions; however, newer file systems can surpass the limit of 24 logical partitions.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-47",
          "slideNumber": 47,
          "title": "File System Types",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>File System Types</p>\n            <small class=\"fragment\">\n                <table>\n                    <tr>\n                      <th>Feature</th>\n                      <th>NTFS</th>\n                      <th>FAT32</th>\n                      <th>exFAT</th>\n                      <th>EXT4</th>\n                      <th>APFS</th>\n                    </tr>\n                    <tr>\n                      <td>Journaling</td>\n                      <td>Yes</td>\n                      <td>No</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                    </tr>\n                    <tr>\n                      <td>Large File Support</td>\n                      <td>Yes</td>\n                      <td>Limited (4GB)</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                    </tr>\n                    <tr>\n                      <td>Large Partition Support</td>\n                      <td>Yes</td>\n                      <td>Limited (32GB)</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                    </tr>\n                    <tr>\n                      <td>Security Features</td>\n                      <td>Yes (ACLs)</td>\n                      <td>No</td>\n                      <td>Limited</td>\n                      <td>Yes (ACLs)</td>\n                      <td>Yes (ACLs)</td>\n                    </tr>\n                    <tr>\n                      <td>Compression</td>\n                      <td>Yes</td>\n                      <td>No</td>\n                      <td>No</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                    </tr>\n                    <tr>\n                      <td>Encryption</td>\n                      <td>Yes</td>\n                      <td>No</td>\n                      <td>No</td>\n                      <td>Yes</td>\n                      <td>Yes</td>\n                    </tr>\n                    <tr>\n                      <td>Fragmentation Resistance</td>\n                      <td>Good</td>\n                      <td>Poor</td>\n                      <td>Good</td>\n                      <td>Good</td>\n                      <td>Good</td>\n                    </tr>\n                    <tr>\n                      <td>Performance</td>\n                      <td>Good</td>\n                      <td>Fair</td>\n                      <td>Good</td>\n                      <td>Good</td>\n                      <td>Excellent</td>\n                    </tr>\n                    <tr>\n                      <td>Compatibility</td>\n                      <td>Primarily Windows</td>\n                      <td>Windows, macOS, Linux</td>\n                      <td>Windows, macOS, Linux</td>\n                      <td>Primarily Linux</td>\n                      <td>Primarily macOS</td>\n                    </tr>\n                  </table>\n                </small>",
          "cleanText": "File System Types Feature NTFS FAT32 exFAT EXT4 APFS Journaling Yes No Yes Yes Yes Large File Support Yes Limited (4GB) Yes Yes Yes Large Partition Support Yes Limited (32GB) Yes Yes Yes Security Features Yes (ACLs) No Limited Yes (ACLs) Yes (ACLs) Compression Yes No No Yes Yes Encryption Yes No No Yes Yes Fragmentation Resistance Good Poor Good Good Good Performance Good Fair Good Good Excellent Compatibility Primarily Windows Windows, macOS, Linux Windows, macOS, Linux Primarily Linux Primarily macOS",
          "codeSnippets": [],
          "tables": [
            {
              "headers": [
                "Feature",
                "NTFS",
                "FAT32",
                "exFAT",
                "EXT4",
                "APFS"
              ],
              "rows": [
                [
                  "Journaling",
                  "Yes",
                  "No",
                  "Yes",
                  "Yes",
                  "Yes"
                ],
                [
                  "Large File Support",
                  "Yes",
                  "Limited (4GB)",
                  "Yes",
                  "Yes",
                  "Yes"
                ],
                [
                  "Large Partition Support",
                  "Yes",
                  "Limited (32GB)",
                  "Yes",
                  "Yes",
                  "Yes"
                ],
                [
                  "Security Features",
                  "Yes (ACLs)",
                  "No",
                  "Limited",
                  "Yes (ACLs)",
                  "Yes (ACLs)"
                ],
                [
                  "Compression",
                  "Yes",
                  "No",
                  "No",
                  "Yes",
                  "Yes"
                ],
                [
                  "Encryption",
                  "Yes",
                  "No",
                  "No",
                  "Yes",
                  "Yes"
                ],
                [
                  "Fragmentation Resistance",
                  "Good",
                  "Poor",
                  "Good",
                  "Good",
                  "Good"
                ],
                [
                  "Performance",
                  "Good",
                  "Fair",
                  "Good",
                  "Good",
                  "Excellent"
                ],
                [
                  "Compatibility",
                  "Primarily Windows",
                  "Windows, macOS, Linux",
                  "Windows, macOS, Linux",
                  "Primarily Linux",
                  "Primarily macOS"
                ]
              ]
            }
          ],
          "images": []
        },
        {
          "id": "slide-48",
          "slideNumber": 48,
          "title": "Common File Systems and Their Meanings",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Common File Systems and Their Meanings</p>\n            <small class=\"fragment\">\n                <table>\n                    <tr>\n                      <th>File System</th>\n                      <th>Platform</th>\n                      <th>Key Features</th>\n                    </tr>\n                    <tr>\n                      <td>NTFS (New Technology File System)</td>\n                      <td>Windows</td>\n                      <td>Robust, supports encryption, compression, and access control lists (ACLs)</td>\n                    </tr>\n                    <tr>\n                      <td>FAT32 (File Allocation Table 32)</td>\n                      <td>Windows, macOS, Linux</td>\n                      <td>Simple, compatible, but limited in file and partition size</td>\n                    </tr>\n                    <tr>\n                      <td>exFAT (Extended File Allocation Table)</td>\n                      <td>Windows, macOS, Linux</td>\n                      <td>Supports larger files and partitions, good for external storage</td>\n                    </tr>\n                    <tr>\n                      <td>APFS (Apple File System)</td>\n                      <td>macOS</td>\n                      <td>High performance, encryption, snapshots, and space sharing</td>\n                    </tr>\n                    <tr>\n                      <td>ext4 (Fourth Extended File System)</td>\n                      <td>Linux</td>\n                      <td>Supports large files, journaling, encryption, and compression</td>\n                    </tr>\n                    <tr>\n                      <td>XFS (X Filesystem)</td>\n                      <td>Linux</td>\n                      <td>High-performance file system for large file systems and heavy workloads</td>\n                    </tr>\n                  </table>\n            </small>",
          "cleanText": "Common File Systems and Their Meanings File System Platform Key Features NTFS (New Technology File System) Windows Robust, supports encryption, compression, and access control lists (ACLs) FAT32 (File Allocation Table 32) Windows, macOS, Linux Simple, compatible, but limited in file and partition size exFAT (Extended File Allocation Table) Windows, macOS, Linux Supports larger files and partitions, good for external storage APFS (Apple File System) macOS High performance, encryption, snapshots, and space sharing ext4 (Fourth Extended File System) Linux Supports large files, journaling, encryption, and compression XFS (X Filesystem) Linux High-performance file system for large file systems and heavy workloads",
          "codeSnippets": [],
          "tables": [
            {
              "headers": [
                "File System",
                "Platform",
                "Key Features"
              ],
              "rows": [
                [
                  "NTFS (New Technology File System)",
                  "Windows",
                  "Robust, supports encryption, compression, and access control lists (ACLs)"
                ],
                [
                  "FAT32 (File Allocation Table 32)",
                  "Windows, macOS, Linux",
                  "Simple, compatible, but limited in file and partition size"
                ],
                [
                  "exFAT (Extended File Allocation Table)",
                  "Windows, macOS, Linux",
                  "Supports larger files and partitions, good for external storage"
                ],
                [
                  "APFS (Apple File System)",
                  "macOS",
                  "High performance, encryption, snapshots, and space sharing"
                ],
                [
                  "ext4 (Fourth Extended File System)",
                  "Linux",
                  "Supports large files, journaling, encryption, and compression"
                ],
                [
                  "XFS (X Filesystem)",
                  "Linux",
                  "High-performance file system for large file systems and heavy workloads"
                ]
              ]
            }
          ],
          "images": []
        },
        {
          "id": "slide-49",
          "slideNumber": 49,
          "title": "Data Measurement Units",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Data Measurement Units</p>\n            <small class=\"fragment\">\n                <table>\n                    <tr>\n                      <th>Unit</th>\n                      <th>Symbol</th>\n                      <th>Equivalent</th>\n                    </tr>\n                    <tr>\n                      <td>Bit</td>\n                      <td>b</td>\n                      <td>Binary digit (0 or 1)</td>\n                    </tr>\n                    <tr>\n                      <td>Byte</td>\n                      <td>B</td>\n                      <td>8 bits</td>\n                    </tr>\n                    <tr>\n                      <td>Kilobyte</td>\n                      <td>KB</td>\n                      <td>1024 bytes (approximately 1000 bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Megabyte</td>\n                      <td>MB</td>\n                      <td>1024 kilobytes (approximately 1 million bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Gigabyte</td>\n                      <td>GB</td>\n                      <td>1024 megabytes (approximately 1 billion bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Terabyte</td>\n                      <td>TB</td>\n                      <td>1024 gigabytes (approximately 1 trillion bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Petabyte</td>\n                      <td>PB</td>\n                      <td>1024 terabytes (approximately 1 quadrillion bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Exabyte</td>\n                      <td>EB</td>\n                      <td>1024 petabytes (approximately 1 quintillion bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Zettabyte</td>\n                      <td>ZB</td>\n                      <td>1024 exabytes (approximately 1 sextillion bytes)</td>\n                    </tr>\n                    <tr>\n                      <td>Yottabyte</td>\n                      <td>YB</td>\n                      <td>1024 zettabytes (approximately 1 septillion bytes)</td>\n                    </tr>\n                  </table>\n            </small>",
          "cleanText": "Data Measurement Units Unit Symbol Equivalent Bit b Binary digit (0 or 1) Byte B 8 bits Kilobyte KB 1024 bytes (approximately 1000 bytes) Megabyte MB 1024 kilobytes (approximately 1 million bytes) Gigabyte GB 1024 megabytes (approximately 1 billion bytes) Terabyte TB 1024 gigabytes (approximately 1 trillion bytes) Petabyte PB 1024 terabytes (approximately 1 quadrillion bytes) Exabyte EB 1024 petabytes (approximately 1 quintillion bytes) Zettabyte ZB 1024 exabytes (approximately 1 sextillion bytes) Yottabyte YB 1024 zettabytes (approximately 1 septillion bytes)",
          "codeSnippets": [],
          "tables": [
            {
              "headers": [
                "Unit",
                "Symbol",
                "Equivalent"
              ],
              "rows": [
                [
                  "Bit",
                  "b",
                  "Binary digit (0 or 1)"
                ],
                [
                  "Byte",
                  "B",
                  "8 bits"
                ],
                [
                  "Kilobyte",
                  "KB",
                  "1024 bytes (approximately 1000 bytes)"
                ],
                [
                  "Megabyte",
                  "MB",
                  "1024 kilobytes (approximately 1 million bytes)"
                ],
                [
                  "Gigabyte",
                  "GB",
                  "1024 megabytes (approximately 1 billion bytes)"
                ],
                [
                  "Terabyte",
                  "TB",
                  "1024 gigabytes (approximately 1 trillion bytes)"
                ],
                [
                  "Petabyte",
                  "PB",
                  "1024 terabytes (approximately 1 quadrillion bytes)"
                ],
                [
                  "Exabyte",
                  "EB",
                  "1024 petabytes (approximately 1 quintillion bytes)"
                ],
                [
                  "Zettabyte",
                  "ZB",
                  "1024 exabytes (approximately 1 sextillion bytes)"
                ],
                [
                  "Yottabyte",
                  "YB",
                  "1024 zettabytes (approximately 1 septillion bytes)"
                ]
              ]
            }
          ],
          "images": []
        },
        {
          "id": "slide-50",
          "slideNumber": 50,
          "title": "Data Recovery Considerations",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Data Recovery Considerations</h2>",
          "cleanText": "Data Recovery Considerations",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-51",
          "slideNumber": 51,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"fragment\">\n                    Recovering data from SSD is more difficult than it is from HDD, and sometimes it is not\n                    possible at all. For instance, when you delete a file on an HDD, the subject file data will\n                    not get deleted immediately; instead, the HDD will only delete the pointer to this file,\n                    marking its space on the disk as free. The subject file data will get deleted only when the\n                    operating system needs to write new data on its location.\n                </p>",
          "cleanText": "Recovering data from SSD is more difficult than it is from HDD, and sometimes it is not possible at all. For instance, when you delete a file on an HDD, the subject file data will not get deleted immediately; instead, the HDD will only delete the pointer to this file, marking its space on the disk as free. The subject file data will get deleted only when the operating system needs to write new data on its location.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-52",
          "slideNumber": 52,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p class=\"fragment\">\n                    The SSD uses a different mechanism to handle deleted files; for instance, when\n                    a user deletes a file, the SSD will utilize the TRIM command, which works to delete a\n                    subject file instantly, leaving its location free for another file to occupy. Each operating\n                    system type implements the TRIM command differently: some OS will execute it\n                    immediately after a user deletes a file, while others will execute it at regular intervals\n                </p>",
          "cleanText": "The SSD uses a different mechanism to handle deleted files; for instance, when a user deletes a file, the SSD will utilize the TRIM command, which works to delete a subject file instantly, leaving its location free for another file to occupy. Each operating system type implements the TRIM command differently: some OS will execute it immediately after a user deletes a file, while others will execute it at regular intervals",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-53",
          "slideNumber": 53,
          "title": "Data Recovery",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Data Recovery</h2>\n            <p class=\"fragment\">\n              External Method\n            </p>",
          "cleanText": "Data Recovery External Method",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-54",
          "slideNumber": 54,
          "title": "Process",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Process</h2>\n            <ul>\n              <li class=\"fragment\">Disk Removal</li>\n              <li class=\"fragment\">Disk Enclosure</li>\n              <li class=\"fragment\">Image Creation</li>\n              <li class=\"fragment\">Data Recovery</li>\n            </ul>",
          "cleanText": "Process Disk Removal Disk Enclosure Image Creation Data Recovery",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-55",
          "slideNumber": 55,
          "title": "Thank You!",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Thank You!</h2>\n          <p>\n            <small\n              >This presentation is made of\n              <i class=\"fa glyphicon glyphicon-heart\"></i> and\n              <strong>HTML 5</strong>\n            </small>\n          </p>",
          "cleanText": "Thank You! This presentation is made of and HTML 5",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    }
  ]
};
