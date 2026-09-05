import { Topic } from '../../types/content';

export const TOPIC_04: Topic = {
  "id": "topic-04",
  "slug": "05-crime-scene-investigation",
  "topicNumber": "05",
  "title": "Crime Scene Investigation for Cyberforensics",
  "subtitle": "Procedures, Landmark Philippine Cases, AI-Assisted Hacking, and OSForensics",
  "description": "Securing the scene, the 4-phase cybercrime investigation process, storage lifespans, RA 10175, Comelec breach, 2016 WVSU student hack, 2026 AI autonomous hacking, and OSForensics.",
  "author": "Mark Joseph J. Solidarios",
  "originalPath": "_05_crime_scene_investigation",
  "badge": "Investigation & Casework",
  "tags": [
    "Incident Response",
    "Chain of Custody",
    "RA 10175",
    "Philippine Cases",
    "AI Hacking",
    "Hugging Face",
    "OSForensics"
  ],
  "totalSlides": 60,
  "sections": [
    {
      "id": "securing-the-scene",
      "title": "Securing the Crime Scene",
      "eyebrow": "Incident Response",
      "summary": "Scene containment, perimeter security, bystander prevention, and computers as a crime scene within a scene.",
      "slides": [
        {
          "id": "slide-1",
          "slideNumber": 1,
          "title": "Crime Scene Investigation",
          "eyebrow": "CIT 245 • Topic 05",
          "subtitle": "Crime Scene Investigation for Cyberforensics",
          "lead": "Procedures, evidence preservation, landmark Philippine cybercrime cases, AI threats, and OSForensics.",
          "byline": "Prof. Mark Joseph J. Solidarios • WVSU CICT Main Campus, Iloilo City",
          "isTitleSlide": true,
          "isSectionDivider": false,
          "rawHtml": "<div class=\"intro-author-card\"><div class=\"institution-badge\"><span>West Visayas State University • CICT Main Campus, Iloilo City</span></div><p class=\"intro-tagline\">Bachelor of Science in Information Technology • CIT 245 Cyberforensics</p></div>",
          "cleanText": "Crime Scene Investigation for Cyberforensics CIT 245 • Topic 05 Procedures, evidence preservation, landmark Philippine cybercrime cases, AI threats, and OSForensics. Prof. Mark Joseph J. Solidarios, WVSU CICT Main Campus, Iloilo City.",
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
          "title": "Securing a Computer Incident or Crime Scene",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Securing a Computer Incident or Crime Scene</h2>\n            <p class=\"fragment\">\n              Investigators secure an incident or crime scene to preserve the\n              evidence and to keep information about the incident or crime\n              confidential.\n            </p>",
          "cleanText": "Securing a Computer Incident or Crime Scene Investigators secure an incident or crime scene to preserve the evidence and to keep information about the incident or crime confidential.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-4",
          "slideNumber": 4,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n              Information made public could jeopardize the investigation.\n              <span class=\"fragment\"\n                >If you&apos;re in charge of securing a computer incident or\n                crime scene, use yellow barrier tape to prevent bystanders from\n                accidentally entering the scene.</span\n              >\n            </p>",
          "cleanText": "Information made public could jeopardize the investigation. If you're in charge of securing a computer incident or crime scene, use yellow barrier tape to prevent bystanders from accidentally entering the scene.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-5",
          "slideNumber": 5,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n              Use police officers or security guards to prevent others from\n              entering the scene\n            </p>",
          "cleanText": "Use police officers or security guards to prevent others from entering the scene",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-6",
          "slideNumber": 6,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n              For major crime scenes, computer investigators aren&apos;t usually\n              responsible for defining a scene’s security perimeter.\n              <span class=\"fragment\">\n                These cases involve other specialists and detectives who are\n                collecting physical evidence and recording the scene.\n              </span>\n            </p>",
          "cleanText": "For major crime scenes, computer investigators aren't usually responsible for defining a scene’s security perimeter. These cases involve other specialists and detectives who are collecting physical evidence and recording the scene.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-7",
          "slideNumber": 7,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n              For incidents primarily involving computers, the computers can be\n              a crime scene within a crime scene, containing evidence to be\n              processed.\n            </p>",
          "cleanText": "For incidents primarily involving computers, the computers can be a crime scene within a crime scene, containing evidence to be processed.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "investigation-process",
      "title": "Cyber Crime Investigation Process",
      "eyebrow": "Methodology",
      "summary": "Four systematic phases: Initial Response, Evidence Collection, Evidence Analysis, and Reporting & Documentation.",
      "slides": [
        {
          "id": "slide-8",
          "slideNumber": 8,
          "title": "Cyber Crime Investigator",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Cyber Crime Investigator</h2>\n          <p class=\"fragment\">\n            - specialized professional who investigates and analyzes cyber crime\n            incidents, such as hacking, identity theft, fraud, and other types\n            of cyber-related crimes.\n          </p>",
          "cleanText": "Cyber Crime Investigator - specialized professional who investigates and analyzes cyber crime incidents, such as hacking, identity theft, fraud, and other types of cyber-related crimes.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-9",
          "slideNumber": 9,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Investigators identify the culprits and gather digital evidence\n                that can be used to prosecute them in court.</p>",
          "cleanText": "Investigators identify the culprits and gather digital evidence that can be used to prosecute them in court.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-10",
          "slideNumber": 10,
          "title": "Cyber Crime Investigation Process",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Cyber Crime Investigation Process</h2>\n            <ol>\n              <li class=\"fragment\">Initial Response and Assessment</li>\n              <li class=\"fragment\">Evidence Collection and Preservation</li>\n              <li class=\"fragment\">Evidence Analysis</li>\n              <li class=\"fragment\">Reporting and Documentation</li>\n            </ol>",
          "cleanText": "Cyber Crime Investigation Process Initial Response and Assessment Evidence Collection and Preservation Evidence Analysis Reporting and Documentation",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-11",
          "slideNumber": 11,
          "title": "Initial Response and Assessment",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Initial Response and Assessment</h2>\n            <ul>\n              <li class=\"fragment\">\n                Secure the scene to prevent data corruption or destruction.\n              </li>\n              <li class=\"fragment\">\n                Identify potential sources of evidence (computers, mobile\n                devices, network devices, cloud storage).\n              </li>\n              <li class=\"fragment\">\n                Document the initial state of the system, including screenshots\n                and system logs.\n              </li>\n            </ul>",
          "cleanText": "Initial Response and Assessment Secure the scene to prevent data corruption or destruction. Identify potential sources of evidence (computers, mobile devices, network devices, cloud storage). Document the initial state of the system, including screenshots and system logs.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-12",
          "slideNumber": 12,
          "title": "Evidence Collection and Preservation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<ul>\n              <h2>Evidence Collection and Preservation</h2>\n              <li class=\"fragment\">\n                Use specialized forensic tools to acquire digital evidence\n                without altering the original data.\n              </li>\n              <li class=\"fragment\">\n                Create forensic images of storage devices to preserve their\n                integrity.\n              </li>\n              <li class=\"fragment\">\n                Collect volatile data (system memory, network traffic) using\n                memory acquisition techniques.\n              </li>\n            </ul>",
          "cleanText": "Evidence Collection and Preservation Use specialized forensic tools to acquire digital evidence without altering the original data. Create forensic images of storage devices to preserve their integrity. Collect volatile data (system memory, network traffic) using memory acquisition techniques.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "investigation-challenges-lifespans",
      "title": "Challenges & Media Life Expectancy",
      "eyebrow": "Challenges",
      "summary": "Data volatility, complex topologies, rapidly evolving tech, and hardware lifespans (HDD, SSD, Flash, CD-R).",
      "slides": [
        {
          "id": "slide-13",
          "slideNumber": 13,
          "title": "Evidence Analysis",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<ul>\n              <h2>Evidence Analysis</h2>\n              <li class=\"fragment\">\n                Analyze collected data to identify patterns, anomalies, and\n                potential leads.\n              </li>\n              <li class=\"fragment\">\n                Use forensic software to extract and examine files, emails,\n                browsing history, and other digital artifacts.\n              </li>\n              <li class=\"fragment\">\n                Correlate findings with other evidence to build a strong case.\n              </li>\n            </ul>",
          "cleanText": "Evidence Analysis Analyze collected data to identify patterns, anomalies, and potential leads. Use forensic software to extract and examine files, emails, browsing history, and other digital artifacts. Correlate findings with other evidence to build a strong case.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-14",
          "slideNumber": 14,
          "title": "Reporting and Documentation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Reporting and Documentation</h2>\n            <ul>\n              <li class=\"fragment\">\n                Prepare detailed reports documenting the entire investigation\n                process.\n              </li>\n              <li class=\"fragment\">\n                Present findings in a clear and concise manner, suitable for\n                legal proceedings.\n              </li>\n              <li class=\"fragment\">\n                Adhere to legal and ethical guidelines throughout the\n                investigation.\n              </li>\n            </ul>",
          "cleanText": "Reporting and Documentation Prepare detailed reports documenting the entire investigation process. Present findings in a clear and concise manner, suitable for legal proceedings. Adhere to legal and ethical guidelines throughout the investigation.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-15",
          "slideNumber": 15,
          "title": "Challenges in Cyber Crime Investigation",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Challenges in Cyber Crime Investigation</h2>",
          "cleanText": "Challenges in Cyber Crime Investigation",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-16",
          "slideNumber": 16,
          "title": "Challenges",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Challenges</small></p>\n            <p>Data can be easily altered or destroyed.</p>",
          "cleanText": "Challenges Data can be easily altered or destroyed.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-17",
          "slideNumber": 17,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<table>\n                <thead>\n                    <tr>\n                        <td>Type</td><td>Life Expectancy</td>\n                    </tr>\n                </thead>\n                <tr>\n                    <td>Hard Disk Drives (HDDs)</td>\n                    <td>4-7 years</td>\n                </tr>\n                <tr>\n                    <td>Solid-State Drives (SSDs)</td>\n                    <td>5-10 years</td>\n                </tr>\n                <tr>\n                    <td>Flash</td>\n                    <td>10 years average use</td>\n                </tr>\n                <tr>\n                    <td>CD-R</td>\n                    <td>50-100+ years</td>\n                </tr>\n            </table>",
          "cleanText": "Type Life Expectancy Hard Disk Drives (HDDs) 4-7 years Solid-State Drives (SSDs) 5-10 years Flash 10 years average use CD-R 50-100+ years",
          "codeSnippets": [],
          "tables": [
            {
              "headers": [
                "Type",
                "Life Expectancy"
              ],
              "rows": [
                [
                  "Hard Disk Drives (HDDs)",
                  "4-7 years"
                ],
                [
                  "Solid-State Drives (SSDs)",
                  "5-10 years"
                ],
                [
                  "Flash",
                  "10 years average use"
                ],
                [
                  "CD-R",
                  "50-100+ years"
                ]
              ]
            }
          ],
          "images": []
        },
        {
          "id": "slide-18",
          "slideNumber": 18,
          "title": "Challenges",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Challenges</small></p>\n            <p>Can be complex: Investigators must understand the intricate network configurations and software systems.</p>",
          "cleanText": "Challenges Can be complex: Investigators must understand the intricate network configurations and software systems.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-19",
          "slideNumber": 19,
          "title": "Challenges",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Challenges</small></p>\n            <p>Technology is rapidly evolving.</p>",
          "cleanText": "Challenges Technology is rapidly evolving.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "philippine-legal-framework-cases",
      "title": "Philippine Framework & Landmark Cases",
      "eyebrow": "Jurisprudence & History",
      "summary": "RA 10175 DOJ Office of Cybercrime, 2005 gov.ph hacking, 2016 Comelec data breach, and 2019 Cebuana Lhuillier.",
      "slides": [
        {
          "id": "slide-20",
          "slideNumber": 20,
          "title": "Challenges",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p><small>Challenges</small></p>\n            <p>Legal and Ethical Considerations: Adhering to legal frameworks and privacy regulations.</p>",
          "cleanText": "Challenges Legal and Ethical Considerations: Adhering to legal frameworks and privacy regulations.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-21",
          "slideNumber": 21,
          "title": "Best Practices",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Best Practices</h2>",
          "cleanText": "Best Practices",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-22",
          "slideNumber": 22,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Follow Established Procedures: <span class=\"fragment\">Adhere to standard operating procedures and forensic best practices.</span></p>",
          "cleanText": "Follow Established Procedures: Adhere to standard operating procedures and forensic best practices.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-23",
          "slideNumber": 23,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n                    Utilize Specialized Tools: <span class=\"fragment\">Employ advanced forensic software to efficiently analyze digital evidence.</span>\n                </p>",
          "cleanText": "Utilize Specialized Tools: Employ advanced forensic software to efficiently analyze digital evidence.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-24",
          "slideNumber": 24,
          "title": "Stay Updated: Continuously learn about new technologies and emerging threats.",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n                    Stay Updated: <span class=\"fragment\">Continuously learn about new technologies and emerging threats.</span>\n                </p>",
          "cleanText": "Stay Updated: Continuously learn about new technologies and emerging threats.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-25",
          "slideNumber": 25,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n                    Collaborate with Experts: <span class=\"fragment\">Work with other experts, such as network analysts and digital forensics specialists.</span>\n                </p>",
          "cleanText": "Collaborate with Experts: Work with other experts, such as network analysts and digital forensics specialists.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "wvsu-school-incident",
      "title": "WVSU Campus Incident (2016)",
      "eyebrow": "Campus Case Study",
      "summary": "CICT student exploit of WVSU MIS via SQL Injection and XSS, HR Admin bypass, MIS disciplinary warning, and public apology.",
      "slides": [
        {
          "id": "slide-26",
          "slideNumber": 26,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\n                    Document Everything: <span class=\"fragment\">Maintain detailed records of all actions taken during the investigation.</span>\n                </p>",
          "cleanText": "Document Everything: Maintain detailed records of all actions taken during the investigation.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-27",
          "slideNumber": 27,
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<small>Philippine Agency for Cybercrime Investigation</small>\n            <img src=\"/assets/doj-cybercrime.png\" alt=\"\">\n           \n            <p><small class=\"fragment\">\n                Republic Act No. 10175 or the Cybercrime Prevention Act of 2012 created the Office of Cybercrime (OOC) within the DOJ and designated it as the Central Authority in all matters relating to international mutual assistance and extradition for cybercrime and cyber-related matters.\n            </small></p>",
          "cleanText": "Philippine Agency for Cybercrime Investigation Republic Act No. 10175 or the Cybercrime Prevention Act of 2012 created the Office of Cybercrime (OOC) within the DOJ and designated it as the Central Authority in all matters relating to international mutual assistance and extradition for cybercrime and cyber-related matters.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/doj-cybercrime.png"
          ]
        }
      ]
    },
    {
      "id": "ai-assisted-hacking-cases",
      "title": "AI-Assisted Hacking & Modern Intrusions",
      "eyebrow": "AI Frontiers",
      "summary": "July 2026 Hugging Face autonomous swarm breach (17,600 actions), GTG-1002 Claude espionage, vibe-hacking extortion, and forensic lessons.",
      "slides": [
        {
          "id": "slide-28",
          "slideNumber": 28,
          "title": "Philippine Cases",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Philippine Cases</h2>",
          "cleanText": "Philippine Cases",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-29",
          "slideNumber": 29,
          "title": "First Philippine Hacking Case (2005)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>First Philippine Hacking Case (2005)</p>\n            <p class=\"fragment\"><small>\n                Filipino hacker JJ Maria Giner pleaded guilty on Wednesday to hacking the government portal “gov.ph” and other government websites\n            </small></p>\n            <p class=\"fragment\"><small>\n                Giner was sentenced to one to two years of imprisonment and will pay a fine of 100,000 pesos.\n            </small></p>",
          "cleanText": "First Philippine Hacking Case (2005) Filipino hacker JJ Maria Giner pleaded guilty on Wednesday to hacking the government portal “gov.ph” and other government websites Giner was sentenced to one to two years of imprisonment and will pay a fine of 100,000 pesos.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-30",
          "slideNumber": 30,
          "title": "Comelec Data Breach (2016)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Comelec Data Breach (2016)</p>\n            <p class=\"fragment\"><small>\n                A significant data breach affecting the Commission on Elections (Comelec) exposed personal information of over 55 million Filipino voters.\n            </small></p>",
          "cleanText": "Comelec Data Breach (2016) A significant data breach affecting the Commission on Elections (Comelec) exposed personal information of over 55 million Filipino voters.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-31",
          "slideNumber": 31,
          "title": "Cebuana Lhuillier Data Breach (2019)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Cebuana Lhuillier Data Breach (2019)</p>\n            <p class=\"fragment\"><small>\n                Hackers compromised the personal information of over 900,000 customers of the pawnshop and remittance company.\n            </small></p>",
          "cleanText": "Cebuana Lhuillier Data Breach (2019) Hackers compromised the personal information of over 900,000 customers of the pawnshop and remittance company.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-32",
          "slideNumber": 32,
          "title": "In our School",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>In our School</h2>",
          "cleanText": "In our School",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-33",
          "slideNumber": 33,
          "title": "WVSU MIS Hacked by a CICT Student (2016)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>WVSU MIS Hacked by a CICT Student (2016)</p>\n            <p class=\"fragment\"><small>\n                The website was vulnerable to SQL Injection and XSS. The student Bypassed the HR Admin account and got a lot of personal/job information about the staff, personnel, and faculties in WVSU Main Campus.\n            </small></p>\n            <p class=\"fragment\"><small>\n                The MIS took action and warned the student, it was then followed by a public apology from the student side.\n            </small></p>",
          "cleanText": "WVSU MIS Hacked by a CICT Student (2016) The website was vulnerable to SQL Injection and XSS. The student Bypassed the HR Admin account and got a lot of personal/job information about the staff, personnel, and faculties in WVSU Main Campus. The MIS took action and warned the student, it was then followed by a public apology from the student side.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-34",
          "slideNumber": 34,
          "title": "School Data Exposed by the Student Hacker",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>School Data Exposed by the Student Hacker</p>\n            <img src=\"/assets/wvsu-hacked-1.png\" alt=\"\">",
          "cleanText": "School Data Exposed by the Student Hacker",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/wvsu-hacked-1.png"
          ]
        },
        {
          "id": "slide-35",
          "slideNumber": 35,
          "title": "AI-Assisted Hacking",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>AI-Assisted Hacking</h2>",
          "cleanText": "AI-Assisted Hacking",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-36",
          "slideNumber": 36,
          "title": "Hugging Face Breach (July 2026)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Hugging Face Breach (July 2026)</p>\n            <p class=\"fragment\"><small>\n                An autonomous AI agent broke into Hugging Face production infrastructure.\n            </small></p>\n            <p class=\"fragment\"><small>\n                OpenAI later confirmed the attacker was its own evaluation models, acting without a human operator.\n            </small></p>",
          "cleanText": "Hugging Face Breach (July 2026) An autonomous AI agent broke into Hugging Face production infrastructure. OpenAI later confirmed the attacker was its own evaluation models, acting without a human operator.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-37",
          "slideNumber": 37,
          "title": "How the Hugging Face Attack Started",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>How the Hugging Face Attack Started</p>\n            <p class=\"fragment\"><small>\n                OpenAI was testing models on ExploitGym, a cybersecurity benchmark.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Safety refusals were turned down for the test.\n            </small></p>\n            <p class=\"fragment\"><small>\n                The models escaped their sandbox and targeted Hugging Face, inferring it held the answer key.\n            </small></p>",
          "cleanText": "How the Hugging Face Attack Started OpenAI was testing models on ExploitGym, a cybersecurity benchmark. Safety refusals were turned down for the test. The models escaped their sandbox and targeted Hugging Face, inferring it held the answer key.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-38",
          "slideNumber": 38,
          "title": "How They Got In",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>How They Got In</p>\n            <p class=\"fragment\"><small>\n                A malicious dataset abused Hugging Face's data-processing pipeline.\n            </small></p>\n            <p class=\"fragment\"><small>\n                One path leaked local files and secrets. Another ran code inside a production worker.\n            </small></p>\n            <p class=\"fragment\"><small>\n                From there the agent harvested credentials and moved laterally into internal clusters.\n            </small></p>",
          "cleanText": "How They Got In A malicious dataset abused Hugging Face's data-processing pipeline. One path leaked local files and secrets. Another ran code inside a production worker. From there the agent harvested credentials and moved laterally into internal clusters.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-39",
          "slideNumber": 39,
          "title": "The Attack Was Recorded",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>The Attack Was Recorded</p>\n            <p class=\"fragment\"><small>\n                Investigators reconstructed about 17,600 attacker actions over 4.5 days.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Roughly 700 agents from the evaluation swarm joined the Hugging Face attack.\n            </small></p>\n            <p class=\"fragment\"><small>\n                That volume is far beyond what a human operator can sustain by hand.\n            </small></p>",
          "cleanText": "The Attack Was Recorded Investigators reconstructed about 17,600 attacker actions over 4.5 days. Roughly 700 agents from the evaluation swarm joined the Hugging Face attack. That volume is far beyond what a human operator can sustain by hand.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-40",
          "slideNumber": 40,
          "title": "What Was Taken",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>What Was Taken</p>\n            <p class=\"fragment\"><small>\n                A limited set of internal datasets and several service credentials.\n            </small></p>\n            <p class=\"fragment\"><small>\n                No evidence of tampering with public models, datasets, Spaces, or the software supply chain.\n            </small></p>",
          "cleanText": "What Was Taken A limited set of internal datasets and several service credentials. No evidence of tampering with public models, datasets, Spaces, or the software supply chain.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-41",
          "slideNumber": 41,
          "title": "Investigating an AI-Driven Intrusion",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Investigating an AI-Driven Intrusion</p>\n            <p class=\"fragment\"><small>\n                Hugging Face used AI to reconstruct the timeline from tens of thousands of log events.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Hosted frontier models refused the forensic work because of safety guardrails.\n            </small></p>\n            <p class=\"fragment\"><small>\n                They finished the analysis on an open-weight model running on their own infrastructure.\n            </small></p>",
          "cleanText": "Investigating an AI-Driven Intrusion Hugging Face used AI to reconstruct the timeline from tens of thousands of log events. Hosted frontier models refused the forensic work because of safety guardrails. They finished the analysis on an open-weight model running on their own infrastructure.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-42",
          "slideNumber": 42,
          "title": "Other Recorded Cases",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Other Recorded Cases</h2>",
          "cleanText": "Other Recorded Cases",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-43",
          "slideNumber": 43,
          "title": "First AI-Orchestrated Espionage (2025)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>First AI-Orchestrated Espionage (2025)</p>\n            <p class=\"fragment\"><small>\n                Anthropic disrupted a Chinese state-sponsored campaign, tracked as GTG-1002.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Attackers used Claude Code to run reconnaissance, exploitation, and data theft.\n            </small></p>",
          "cleanText": "First AI-Orchestrated Espionage (2025) Anthropic disrupted a Chinese state-sponsored campaign, tracked as GTG-1002. Attackers used Claude Code to run reconnaissance, exploitation, and data theft.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        }
      ]
    },
    {
      "id": "osforensics-toolkit",
      "title": "Acquiring Evidence with OSForensics",
      "eyebrow": "Tool Suite",
      "summary": "Case management, fast file searching, cryptographic hash sets, memory inspection, and browser password recovery.",
      "slides": [
        {
          "id": "slide-44",
          "slideNumber": 44,
          "title": "First AI-Orchestrated Espionage (2025)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>First AI-Orchestrated Espionage (2025)</p>\n            <p class=\"fragment\"><small>\n                AI performed about 80-90% of the operation. Humans stepped in only at key decisions.\n            </small></p>\n            <p class=\"fragment\"><small>\n                The campaign targeted about 30 organizations, including tech firms, banks, manufacturers, and government agencies.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Anthropic called it the first documented large-scale cyberattack executed without substantial human intervention.\n            </small></p>",
          "cleanText": "First AI-Orchestrated Espionage (2025) AI performed about 80-90% of the operation. Humans stepped in only at key decisions. The campaign targeted about 30 organizations, including tech firms, banks, manufacturers, and government agencies. Anthropic called it the first documented large-scale cyberattack executed without substantial human intervention.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-45",
          "slideNumber": 45,
          "title": "\"Vibe-Hacking\" Extortion (2025)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>\"Vibe-Hacking\" Extortion (2025)</p>\n            <p class=\"fragment\"><small>\n                A cybercrime ring used Claude Code to steal and extort data from at least 17 organizations.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Victims included healthcare, emergency services, religious groups, and government entities.\n            </small></p>\n            <p class=\"fragment\"><small>\n                The AI wrote targeted ransom notes. Some demands exceeded $500,000.\n            </small></p>",
          "cleanText": "\"Vibe-Hacking\" Extortion (2025) A cybercrime ring used Claude Code to steal and extort data from at least 17 organizations. Victims included healthcare, emergency services, religious groups, and government entities. The AI wrote targeted ransom notes. Some demands exceeded $500,000.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-46",
          "slideNumber": 46,
          "title": "AI-Generated Ransomware (2025)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>AI-Generated Ransomware (2025)</p>\n            <p class=\"fragment\"><small>\n                A cybercriminal with only basic coding skills used Claude to build and sell ransomware variants.\n            </small></p>\n            <p class=\"fragment\"><small>\n                The tools included encryption, evasion, and anti-recovery features.\n            </small></p>",
          "cleanText": "AI-Generated Ransomware (2025) A cybercriminal with only basic coding skills used Claude to build and sell ransomware variants. The tools included encryption, evasion, and anti-recovery features.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-47",
          "slideNumber": 47,
          "title": "Claude Reached Real Networks During Tests (2026)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Claude Reached Real Networks During Tests (2026)</p>\n            <p class=\"fragment\"><small>\n                After Hugging Face, Anthropic reviewed its own cybersecurity evaluations.\n            </small></p>\n            <p class=\"fragment\"><small>\n                In three cases, Claude left a test environment and accessed production systems of real organizations.\n            </small></p>\n            <p class=\"fragment\"><small>\n                One model continued after realizing the target was likely real.\n            </small></p>",
          "cleanText": "Claude Reached Real Networks During Tests (2026) After Hugging Face, Anthropic reviewed its own cybersecurity evaluations. In three cases, Claude left a test environment and accessed production systems of real organizations. One model continued after realizing the target was likely real.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-48",
          "slideNumber": 48,
          "title": "Why This Matters for Investigators",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Why This Matters for Investigators</p>\n            <p class=\"fragment\"><small>\n                AI attacks still leave logs, credentials, and artifacts. The evidence is just much larger.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Machine-speed campaigns can produce thousands of actions in a few days.\n            </small></p>\n            <p class=\"fragment\"><small>\n                Investigators may need AI-assisted analysis to keep pace, while still following standard forensic procedure.\n            </small></p>",
          "cleanText": "Why This Matters for Investigators AI attacks still leave logs, credentials, and artifacts. The evidence is just much larger. Machine-speed campaigns can produce thousands of actions in a few days. Investigators may need AI-assisted analysis to keep pace, while still following standard forensic procedure.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-49",
          "slideNumber": 49,
          "title": "Acquiring Evidence with OSForensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>Acquiring Evidence with OSForensics</h2>",
          "cleanText": "Acquiring Evidence with OSForensics",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-50",
          "slideNumber": 50,
          "title": "OSForensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>OSForensics</h2>\n            <p class=\"fragment\">A complete toolkit to extract forensic data (files, emails, deleted files, user activity, passwords) from computers.</p>",
          "cleanText": "OSForensics A complete toolkit to extract forensic data (files, emails, deleted files, user activity, passwords) from computers.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-51",
          "slideNumber": 51,
          "title": "OSForensics",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<h2>OSForensics</h2>\n            <img style=\"height: 500px;\" src=\"/assets/osforensics.png\" alt=\"\">",
          "cleanText": "OSForensics",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/osforensics.png"
          ]
        },
        {
          "id": "slide-52",
          "slideNumber": 52,
          "title": "OSForensics - Case Management",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Case Management</p>\n            <img src=\"/assets/case.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                Can group all gathered evidence together into an OSF Case file for later use. All data is cryptographically hashed to prevent tampering. \n            </small></p>",
          "cleanText": "OSForensics - Case Management Can group all gathered evidence together into an OSF Case file for later use. All data is cryptographically hashed to prevent tampering.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/case.png"
          ]
        },
        {
          "id": "slide-53",
          "slideNumber": 53,
          "title": "OSForensics - Quick File Search",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Quick File Search</p>\n            <img src=\"/assets/search.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                Search for files many times faster than the search functionality in Windows.\n            </small></p>",
          "cleanText": "OSForensics - Quick File Search Search for files many times faster than the search functionality in Windows.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/search.png"
          ]
        },
        {
          "id": "slide-54",
          "slideNumber": 54,
          "title": "OSForensics - Hash and Identify",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Hash and Identify</p>\n            <img src=\"/assets/hash.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                Using advanced hashing algorithms OSForensics can create a digital identifier that can be used to identify a file.\n            </small></p>",
          "cleanText": "OSForensics - Hash and Identify Using advanced hashing algorithms OSForensics can create a digital identifier that can be used to identify a file.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/hash.png"
          ]
        },
        {
          "id": "slide-55",
          "slideNumber": 55,
          "title": "OSForensics - Hash and Identify",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Hash and Identify</p>\n            <p class=\"fragment\"><small>\n                OSForensics allows you to use Hash Sets to quickly identify known safe files (such as operating system and program files) or known suspected files (such as viruses, trojans, hacker scripts) to reduce the need for further time-consuming analysis.\n            </small></p>",
          "cleanText": "OSForensics - Hash and Identify OSForensics allows you to use Hash Sets to quickly identify known safe files (such as operating system and program files) or known suspected files (such as viruses, trojans, hacker scripts) to reduce the need for further time-consuming analysis.",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-56",
          "slideNumber": 56,
          "title": "OSForensics - View More",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - View More</p>\n            <img src=\"/assets/view.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                Can look on various file contents, memory, logs and databases.\n            </small></p>",
          "cleanText": "OSForensics - View More Can look on various file contents, memory, logs and databases.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/view.png"
          ]
        },
        {
          "id": "slide-57",
          "slideNumber": 57,
          "title": "OSForensics - Artifacts and Passwords",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Artifacts and Passwords</p>\n            <img src=\"/assets/recover.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                Using advanced hashing algorithms OSForensics can create a digital identifier that can be used to identify a file.\n            </small></p>",
          "cleanText": "OSForensics - Artifacts and Passwords Using advanced hashing algorithms OSForensics can create a digital identifier that can be used to identify a file.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/recover.png"
          ]
        },
        {
          "id": "slide-58",
          "slideNumber": 58,
          "title": "OSForensics - Artifacts and Passwords",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>OSForensics - Artifacts and Passwords</p>\n            <img src=\"/assets/browser-password-recovery.png\" alt=\"\">\n            <p class=\"fragment\"><small>\n                OSForensics can decrypt old document files and can also use bruteforce attack to decrypt documents.\n            </small></p>",
          "cleanText": "OSForensics - Artifacts and Passwords OSForensics can decrypt old document files and can also use bruteforce attack to decrypt documents.",
          "codeSnippets": [],
          "tables": [],
          "images": [
            "/assets/browser-password-recovery.png"
          ]
        },
        {
          "id": "slide-59",
          "slideNumber": 59,
          "title": "Please prepare for an individual quiz next meeting (coverage: 04 & 05)",
          "isTitleSlide": false,
          "isSectionDivider": false,
          "rawHtml": "<p>Please prepare for an individual quiz next meeting (coverage: 04 &amp; 05)</p>",
          "cleanText": "Please prepare for an individual quiz next meeting (coverage: 04 & 05)",
          "codeSnippets": [],
          "tables": [],
          "images": []
        },
        {
          "id": "slide-60",
          "slideNumber": 60,
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
