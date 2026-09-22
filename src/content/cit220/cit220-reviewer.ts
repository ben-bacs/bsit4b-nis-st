export type ReviewerQuestionType = 'modified_true_false' | 'multiple_choice' | 'enumeration';

export interface ReviewerTopicMeta {
  id: string;
  number: string;
  title: string;
  unitRef: string;
}

export interface ModifiedTrueFalseQuestion {
  id: string;
  type: 'modified_true_false';
  topicId: string;
  topicTitle: string;
  statement: string;
  underlinedTerm: string;
  isTrue: boolean;
  correction?: string;
  sourceSlide: string;
  explanation: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple_choice';
  topicId: string;
  topicTitle: string;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  sourceSlide: string;
  explanation: string;
}

export interface EnumerationQuestion {
  id: string;
  type: 'enumeration';
  topicId: string;
  topicTitle: string;
  question: string;
  expectedCount: number;
  items: string[];
  sourceSlide: string;
  explanation?: string;
}

export type ReviewerItem = ModifiedTrueFalseQuestion | MultipleChoiceQuestion | EnumerationQuestion;

export const CIT220_REVIEWER_TOPICS: ReviewerTopicMeta[] = [
  { id: 'vpn', number: '01', title: 'Types of VPN, VPN Risk and Mitigation Strategies', unitRef: 'Unit 2b' },
  { id: 'ssdlc', number: '02', title: 'SSDLC Life Cycle', unitRef: 'Unit 4' },
  { id: 'threat_intel', number: '03', title: 'Threat Intelligence Lifecycle & APTs', unitRef: 'Unit 1' },
  { id: 'gap_analysis', number: '04', title: 'Compliance Gap Analysis (CGA)', unitRef: 'Unit 1' },
  { id: 'threat_modeling', number: '05', title: 'Threat Modeling & STRIDE', unitRef: 'Unit 1' },
  { id: 'zta_principles', number: '06', title: 'ZTA Core Principles', unitRef: 'Unit 2 ZTA' },
  { id: 'zta_breaches', number: '07', title: 'ZTA Breaches Case Studies', unitRef: 'Unit 2 ZTA' },
  { id: 'iam', number: '08', title: 'Identity and Access Management (IAM)', unitRef: 'Unit 3' },
  { id: 'frameworks', number: '09', title: 'Cybersecurity Frameworks', unitRef: 'Unit 1' },
  { id: 'esa', number: '10', title: 'Enterprise Security Architecture (ESA)', unitRef: 'Unit 1' },
  { id: 'cloud_security_model', number: '11', title: 'Cloud Security Model & Shared Responsibility', unitRef: 'Unit 4' },
  { id: 'ids_ips_hips', number: '12', title: 'IDS / IPS / HIPS & SIEM', unitRef: 'Unit 2b' },
];

export const CIT220_REVIEWER_QUESTIONS: ReviewerItem[] = [
  // ==========================================
  // TOPIC 1: TYPES OF VPN, VPN RISK & MITIGATIONS
  // ==========================================
  {
    id: 'mtf-vpn-1',
    type: 'modified_true_false',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    statement: 'A Site-to-Site VPN allows individual users to connect to a private network, with examples including Cisco AnyConnect and Access Server by OpenVPN.',
    underlinedTerm: 'Site-to-Site VPN',
    isTrue: false,
    correction: 'Remote Access VPN',
    sourceSlide: 'Unit 2b - Slide 29',
    explanation: 'Per Unit 2b Slide 29: "Remote Access VPN allows individual users to connect to a private network (e.g. Cisco AnyConnect, Access Server by OpenVPN). Site-to-Site VPN connects two or more separate networks, such as different office branches, to create a unified network."'
  },
  {
    id: 'mtf-vpn-2',
    type: 'modified_true_false',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    statement: 'To mitigate VPN risks, organizations should verify that their VPN uses strong encryption protocols like AES-256 and enforce multi-factor authentication (MFA).',
    underlinedTerm: 'AES-256',
    isTrue: true,
    sourceSlide: 'Unit 2b - Slide 34',
    explanation: 'Per Unit 2b Slide 34: "How to Mitigate Risks: Enable strong authentication (MFA), Secure your devices, and Use strong encryption: Verify that your VPN uses strong encryption protocols like AES-256."'
  },
  {
    id: 'mc-vpn-1',
    type: 'multiple_choice',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    question: 'Which VPN protocol is described in the lecture slides as a "newer, faster, and more modern VPN protocol"?',
    options: [
      { key: 'A', text: 'OpenVPN' },
      { key: 'B', text: 'WireGuard' },
      { key: 'C', text: 'L2TP/IPsec' },
      { key: 'D', text: 'SSL/TLS' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 2b - Slide 28',
    explanation: 'Unit 2b Slide 28 explicitly defines: "WireGuard: A newer, faster, and more modern VPN protocol."'
  },
  {
    id: 'mc-vpn-2',
    type: 'multiple_choice',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    question: 'According to the lecture, which risk occurs when an attacker intercepts communications between your device and the VPN server to steal or manipulate data?',
    options: [
      { key: 'A', text: 'Data Leaks' },
      { key: 'B', text: 'Dropped Connections' },
      { key: 'C', text: 'Man-in-the-Middle (MitM) Attacks' },
      { key: 'D', text: 'Server Vulnerabilities' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 2b - Slide 32',
    explanation: 'Unit 2b Slide 32 defines Man-in-the-Middle (MitM) Attacks verbatim: "Attackers can intercept communications between your device and the VPN server, allowing them to steal or manipulate data."'
  },
  {
    id: 'enum-vpn-1',
    type: 'enumeration',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    question: 'Enumerate the five (5) strategies to mitigate VPN risks as specified in Unit 2b.',
    expectedCount: 5,
    items: [
      'Choose a reputable VPN provider (Opt for a paid VPN with a strict no-logs policy that has been independently audited)',
      'Enable strong authentication (Use multi-factor authentication [MFA])',
      'Secure your devices (Ensure devices are free from malware and regularly updated)',
      'Use strong encryption (Verify protocols like AES-256)',
      'Beware of free VPNs (Avoid free VPN services that compromise security and privacy)'
    ],
    sourceSlide: 'Unit 2b - Slide 34',
    explanation: 'Listed on Unit 2b Slide 34 under "How to Mitigate Risks".'
  },
  {
    id: 'enum-vpn-2',
    type: 'enumeration',
    topicId: 'vpn',
    topicTitle: 'Types of VPN, VPN Risk and Mitigation Strategies',
    question: 'Enumerate the seven (7) specific risks of using a VPN identified in the course materials.',
    expectedCount: 7,
    items: [
      'Data Leaks',
      'Malware and Virus Risk',
      'Man-in-the-Middle (MitM) Attacks',
      'Untrustworthy VPNs',
      'Weak Encryption/Protocols',
      'Server Vulnerabilities',
      'Dropped Connections'
    ],
    sourceSlide: 'Unit 2b - Slides 32–33',
    explanation: 'Unit 2b Slides 32–33 delineate these exact seven specific operational risks.'
  },

  // ==========================================
  // TOPIC 2: SSDLC LIFE CYCLE
  // ==========================================
  {
    id: 'mtf-ssdlc-1',
    type: 'modified_true_false',
    topicId: 'ssdlc',
    topicTitle: 'SSDLC Life Cycle',
    statement: 'In the SSDLC Requirements and Analysis phase, security practices include using static analysis tools to identify potential vulnerabilities and following secure coding standards.',
    underlinedTerm: 'Requirements and Analysis',
    isTrue: false,
    correction: 'Development',
    sourceSlide: 'Unit 4 - Slide 84',
    explanation: 'Per Unit 4 Slide 84: "Development: Follow secure coding practices to ensure that the software is developed with security, includes using static analysis tools to identify potential vulnerabilities, following secure coding standards, and conducting regular code reviews."'
  },
  {
    id: 'mtf-ssdlc-2',
    type: 'modified_true_false',
    topicId: 'ssdlc',
    topicTitle: 'SSDLC Life Cycle',
    statement: 'The goal of the SSDLC is to identify and mitigate potential security vulnerabilities and threats in the software development process, so that the final product is as secure as possible.',
    underlinedTerm: 'SSDLC',
    isTrue: true,
    sourceSlide: 'Unit 4 - Slide 81',
    explanation: 'Verbatim from Unit 4 Slide 81: "The goal of the SSDLC is to identify and mitigate potential security vulnerabilities and threats in the software development process, so that the final product is as secure as possible."'
  },
  {
    id: 'mc-ssdlc-1',
    type: 'multiple_choice',
    topicId: 'ssdlc',
    topicTitle: 'SSDLC Life Cycle',
    question: 'In which phase of the SSDLC is developing a threat model specifically conducted to identify potential attacks and determine how the software will protect against them?',
    options: [
      { key: 'A', text: 'Planning' },
      { key: 'B', text: 'Requirements and Analysis' },
      { key: 'C', text: 'Design and Prototyping' },
      { key: 'D', text: 'Deployment' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 4 - Slide 83',
    explanation: 'Unit 4 Slide 83 states: "Requirements and Analysis: Define the security requirements which includes developing a threat model to identify potential attacks and determining how the software will protect against them."'
  },
  {
    id: 'mc-ssdlc-2',
    type: 'multiple_choice',
    topicId: 'ssdlc',
    topicTitle: 'SSDLC Life Cycle',
    question: 'Which phase of the SSDLC focuses on regularly patching the software to fix vulnerabilities, monitoring for security issues, and conducting regular security reviews over time?',
    options: [
      { key: 'A', text: 'Deployment' },
      { key: 'B', text: 'Design and Prototyping' },
      { key: 'C', text: 'Maintenance' },
      { key: 'D', text: 'Development' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 4 - Slide 84',
    explanation: 'Unit 4 Slide 84 defines Maintenance: "Regularly patching the software is conducted to fix vulnerabilities, monitoring the software for security issues, and conducting regular security reviews to ensure that the software remains secure over time."'
  },
  {
    id: 'enum-ssdlc-1',
    type: 'enumeration',
    topicId: 'ssdlc',
    topicTitle: 'SSDLC Life Cycle',
    question: 'Enumerate the six (6) phases of the Secure Software Development Life Cycle (SSDLC) in sequential order as outlined in Unit 4.',
    expectedCount: 6,
    items: [
      'Planning',
      'Requirements and Analysis',
      'Design and Prototyping',
      'Development',
      'Deployment',
      'Maintenance'
    ],
    sourceSlide: 'Unit 4 - Slides 83–84',
    explanation: 'Unit 4 Slides 83–84 detail these six sequential phases.'
  },

  // ==========================================
  // TOPIC 3: THREAT INTELLIGENCE LIFECYCLE & APTS
  // ==========================================
  {
    id: 'mtf-ti-1',
    type: 'modified_true_false',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    statement: 'In the Threat Intelligence Lifecycle, the Analysis phase is dedicated to normalizing and structuring the collected raw data.',
    underlinedTerm: 'Analysis',
    isTrue: false,
    correction: 'Processing',
    sourceSlide: 'Unit 1 - Slide 25',
    explanation: 'Per Unit 1 Slide 25: "Processing: Normalizing and structuring the data. Analysis: Extracting insights."'
  },
  {
    id: 'mtf-ti-2',
    type: 'modified_true_false',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    statement: 'Advanced Persistent Threats (APTs) are highly sophisticated, prolonged attacks where an intruder establishes a long-term presence on a network to steal sensitive data, and are often state-sponsored.',
    underlinedTerm: 'Advanced Persistent Threats (APTs)',
    isTrue: true,
    sourceSlide: 'Unit 1 - Slide 26',
    explanation: 'Verbatim from Unit 1 Slide 26: "Highly sophisticated, prolonged attacks where an intruder establishes a long-term presence on a network to steal sensitive data. APTs are often state-sponsored and target specific organizations."'
  },
  {
    id: 'mc-ti-1',
    type: 'multiple_choice',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    question: 'Which Russian intelligence-linked group is known for cyber espionage campaigns particularly targeting government and healthcare sectors?',
    options: [
      { key: 'A', text: 'Stuxnet' },
      { key: 'B', text: 'APT41' },
      { key: 'C', text: 'APT29 (Cozy Bear)' },
      { key: 'D', text: 'APT28 (Fancy Bear)' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 1 - Slide 27',
    explanation: 'Unit 1 Slide 27 specifies: "APT29 (Cozy Bear): Also linked to Russian intelligence, this group has been involved in cyber espionage campaigns, particularly targeting government and healthcare sectors."'
  },
  {
    id: 'mc-ti-2',
    type: 'multiple_choice',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    question: 'How does the lecture slide define Threat Intelligence?',
    options: [
      { key: 'A', text: 'A collection of raw firewall logs and packet captures stored in an archive.' },
      { key: 'B', text: 'The process of collecting and analyzing information about potential and current threats to an organization; not just data, but actionable insights.' },
      { key: 'C', text: 'Automated antivirus signature generation for endpoint host firewalls.' },
      { key: 'D', text: 'A mathematical formula used to calculate risk exposure factor.' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 1 - Slide 25',
    explanation: 'Unit 1 Slide 25 states verbatim: "Threat Intelligence: The process of collecting and analyzing information about potential and current threats to an organization. It\'s not just data, but actionable insights."'
  },
  {
    id: 'enum-ti-1',
    type: 'enumeration',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    question: 'Enumerate the five (5) stages of the Threat Intelligence Lifecycle in proper sequence and their descriptions.',
    expectedCount: 5,
    items: [
      'Planning (Defining requirements)',
      'Collection (Gathering raw data)',
      'Processing (Normalizing and structuring the data)',
      'Analysis (Extracting insights)',
      'Dissemination (Sharing the intelligence with stakeholders)'
    ],
    sourceSlide: 'Unit 1 - Slide 25',
    explanation: 'Exact 5-stage lifecycle presented on Unit 1 Slide 25.'
  },
  {
    id: 'enum-ti-2',
    type: 'enumeration',
    topicId: 'threat_intel',
    topicTitle: 'Threat Intelligence Lifecycle & APTs',
    question: 'Enumerate the four (4) landmark APT examples discussed in Unit 1.',
    expectedCount: 4,
    items: [
      'Stuxnet (Targeted and damaged Iran\'s nuclear facilities, demonstrating physical damage from cyberattacks)',
      'APT41 (Chinese state-sponsored group engaging in both espionage and financially motivated attacks)',
      'APT29 [Cozy Bear] (Linked to Russian intelligence, targeting government and healthcare sectors)',
      'APT28 [Fancy Bear] (Linked to Russian military intelligence, political entities and election interference)'
    ],
    sourceSlide: 'Unit 1 - Slide 27',
    explanation: 'Listed on Unit 1 Slide 27 under "Advance Persistent Threats Examples".'
  },

  // ==========================================
  // TOPIC 4: COMPLIANCE GAP ANALYSIS (CGA)
  // ==========================================
  {
    id: 'mtf-cga-1',
    type: 'modified_true_false',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    statement: 'In the Compliance Gap Analysis healthcare scenario, the clinic determines that SOX is the applicable regulation governing patient protected health information.',
    underlinedTerm: 'SOX',
    isTrue: false,
    correction: 'HIPAA',
    sourceSlide: 'Unit 1 - Slide 47',
    explanation: 'Per Unit 1 Slide 47: "1. IDENTIFY THE APPLICABLE REGULATIONS: The clinic needs to determine which regulations apply to their operations, such as HIPAA (Health Insurance Portability and Accountability Act)."'
  },
  {
    id: 'mtf-cga-2',
    type: 'modified_true_false',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    statement: 'Root Cause Analysis in a Compliance Gap Analysis involves understanding why the identified discrepancies and compliance gaps exist.',
    underlinedTerm: 'Root Cause Analysis',
    isTrue: true,
    sourceSlide: 'Unit 1 - Slide 54',
    explanation: 'Unit 1 Slide 54 defines: "Root Cause Analysis: Understanding why the gaps exist."'
  },
  {
    id: 'mc-cga-1',
    type: 'multiple_choice',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    question: 'What is the primary activity performed during Step 4 (Identify the Gaps) of the CGA healthcare scenario?',
    options: [
      { key: 'A', text: 'Interviewing stakeholders to select an enterprise architecture framework.' },
      { key: 'B', text: 'Comparing the current state with the desired state to identify areas where the clinic falls short of compliance.' },
      { key: 'C', text: 'Purchasing an off-the-shelf SIEM license from Splunk.' },
      { key: 'D', text: 'Deploying hardware Type 1 hypervisors across all clinics.' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 1 - Slide 51',
    explanation: 'Unit 1 Slide 51 states: "The clinic compares its current state with the desired state, identifying areas where it falls short of HIPAA compliance. For example, they might discover that patient data is not consistently encrypted at rest or in transit."'
  },
  {
    id: 'mc-cga-2',
    type: 'multiple_choice',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    question: 'Which key component of CGA is defined as "Clearly defining the regulations, standards, and business processes to be included in the analysis"?',
    options: [
      { key: 'A', text: 'Scope Definition' },
      { key: 'B', text: 'Remediation Planning' },
      { key: 'C', text: 'Gap Identification' },
      { key: 'D', text: 'Desired State Definition' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 1 - Slide 53',
    explanation: 'Unit 1 Slide 53 states: "Scope Definition: Clearly defining the regulations, standards, and business processes to be included in the analysis."'
  },
  {
    id: 'enum-cga-1',
    type: 'enumeration',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    question: 'Enumerate the five (5) steps in the Compliance Gap Analysis process (Healthcare Clinic Scenario) in sequential order.',
    expectedCount: 5,
    items: [
      '1. Identify the Applicable Regulations',
      '2. Define the Current State',
      '3. Define the Desired State',
      '4. Identify the Gaps',
      '5. Develop a Remediation Plan'
    ],
    sourceSlide: 'Unit 1 - Slide 45',
    explanation: 'Unit 1 Slide 45 outlines the exact five steps of the scenario.'
  },
  {
    id: 'enum-cga-2',
    type: 'enumeration',
    topicId: 'gap_analysis',
    topicTitle: 'Compliance Gap Analysis (CGA)',
    question: 'Enumerate the six (6) Key Components of Compliance Gap Analysis (CGA) listed in Unit 1.',
    expectedCount: 6,
    items: [
      'Scope Definition',
      'Current State Assessment',
      'Desired State Definition',
      'Gap Identification',
      'Root Cause Analysis',
      'Remediation Planning'
    ],
    sourceSlide: 'Unit 1 - Slides 53–54',
    explanation: 'Unit 1 Slides 53–54 define the six key components of CGA.'
  },

  // ==========================================
  // TOPIC 5: THREAT MODELING & STRIDE
  // ==========================================
  {
    id: 'mtf-tm-1',
    type: 'modified_true_false',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    statement: 'The STRIDE threat modeling methodology was originally developed by Cisco to identify security weaknesses in virtual hypervisors.',
    underlinedTerm: 'Cisco',
    isTrue: false,
    correction: 'Microsoft',
    sourceSlide: 'Unit 1 - Slide 37',
    explanation: 'Per Unit 1 Slide 37: "Developed by Microsoft, STRIDE helps security professionals and developers proactively address vulnerabilities by thinking like attackers and assessing potential risks."'
  },
  {
    id: 'mtf-tm-2',
    type: 'modified_true_false',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    statement: 'Attack Trees provide a visual representation of potential attack paths that can be used in threat modeling and risk analysis.',
    underlinedTerm: 'Attack Trees',
    isTrue: true,
    sourceSlide: 'Unit 1 - Slide 18',
    explanation: 'Unit 1 Slide 18 defines Attack Trees verbatim: "A visual representation of potential attack paths that can be used in threat modeling and risk analysis."'
  },
  {
    id: 'mc-tm-1',
    type: 'multiple_choice',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    question: 'Which of the following correctly describes the relationship between Threat Modeling and Risk Analysis?',
    options: [
      { key: 'A', text: 'Threat modeling replaces risk analysis entirely in modern cloud architectures.' },
      { key: 'B', text: 'Threat modeling systematically analyzes a system to identify potential vulnerabilities and threats, while risk analysis assesses the likelihood and impact of those threats.' },
      { key: 'C', text: 'Risk analysis identifies vulnerabilities in source code, whereas threat modeling only audits physical locks and badges.' },
      { key: 'D', text: 'Threat modeling is only applicable to hardware Type 1 hypervisors.' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 1 - Slide 16',
    explanation: 'Unit 1 Slide 16 states verbatim: "Threat modeling involves systematically analyzing a system to identify potential vulnerabilities and threats, while risk analysis assesses the likelihood and impact of those threats."'
  },
  {
    id: 'mc-tm-2',
    type: 'multiple_choice',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    question: 'According to Unit 1, which unique threats are becoming increasingly important for Large Language Model (LLM)-powered applications?',
    options: [
      { key: 'A', text: 'Data poisoning, prompt injection, and jailbreaking' },
      { key: 'B', text: 'Buffer overflows and memory leaks' },
      { key: 'C', text: 'SYN flood attacks and ARP spoofing' },
      { key: 'D', text: 'VLAN hopping and MAC flooding' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 1 - Slide 18',
    explanation: 'Unit 1 Slide 18 explicitly lists: "LLM-Specific Threats: Advanced threat modeling and risk analysis are becoming increasingly important for Large Language Model (LLM)-powered applications, addressing unique threats like data poisoning, prompt injection, and jailbreaking."'
  },
  {
    id: 'enum-tm-1',
    type: 'enumeration',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    question: 'Enumerate the six (6) threat categories of the STRIDE model.',
    expectedCount: 6,
    items: [
      'S - Spoofing (identity)',
      'T - Tampering (data)',
      'R - Repudiation',
      'I - Information Disclosure',
      'D - Denial of Service',
      'E - Elevation of Privilege'
    ],
    sourceSlide: 'Unit 1 - Slides 37–38',
    explanation: 'STRIDE mnemonic defined on Unit 1 Slides 37–38.'
  },
  {
    id: 'enum-tm-2',
    type: 'enumeration',
    topicId: 'threat_modeling',
    topicTitle: 'Threat Modeling & STRIDE',
    question: 'Enumerate the four (4) steps in Using STRIDE in Threat Modeling.',
    expectedCount: 4,
    items: [
      '1. System Modeling (Create a visual representation of the system, including components, data flows, and trust boundaries)',
      '2. Identifying Vulnerabilities (Determine how an attacker could exploit each potential threat)',
      '3. Applying STRIDE (For each element in the system model, analyze potential threats based on the six STRIDE categories)',
      '4. Mitigation (Develop security controls and countermeasures to address the identified vulnerabilities)'
    ],
    sourceSlide: 'Unit 1 - Slide 39',
    explanation: 'Unit 1 Slide 39 provides the 4 numbered steps for using STRIDE.'
  },

  // ==========================================
  // TOPIC 6: ZTA CORE PRINCIPLES
  // ==========================================
  {
    id: 'mtf-zta-1',
    type: 'modified_true_false',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    statement: 'Under Zero Trust Architecture, access verification occurs as a one-time check during initial network login.',
    underlinedTerm: 'one-time check',
    isTrue: false,
    correction: 'continuous, per-request verification',
    sourceSlide: 'Unit 2 ZTA - Slides 12, 38',
    explanation: 'Per Unit 2 ZTA Slide 38: "‘Never trust, always verify’ means continuous, per-request verification — not a one-time login check. No implicit trust is granted based on network location, ownership, or prior access."'
  },
  {
    id: 'mtf-zta-2',
    type: 'modified_true_false',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    statement: 'The Assume Breach principle mandates designing as if an attacker is already inside by limiting the blast radius, encrypting everywhere, and watching for lateral movement.',
    underlinedTerm: 'Assume Breach',
    isTrue: true,
    sourceSlide: 'Unit 2 ZTA - Slide 16',
    explanation: 'Unit 2 ZTA Slide 16 states verbatim: "CORE PRINCIPLE 03: Assume Breach — Design as if an attacker is already inside: 1 Limit blast radius, 2 Encrypt everywhere, 3 Watch for lateral movement."'
  },
  {
    id: 'mc-zta-1',
    type: 'multiple_choice',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    question: 'What is the core philosophy and motto of Least-Privilege Access in ZTA?',
    options: [
      { key: 'A', text: '"All employees can read the entire shared drive in case they ever need to."' },
      { key: 'B', text: '"Just enough access, just in time."' },
      { key: 'C', text: '"Trust everyone inside the physical corporate perimeter."' },
      { key: 'D', text: '"Authenticate once at 8:00 AM and grant unrestricted administrative access."' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 2 ZTA - Slide 14',
    explanation: 'Unit 2 ZTA Slide 14 highlights: "CORE PRINCIPLE 02: Least-Privilege Access — MINIMUM: Just enough access, just in time. Users, apps, and services get only the permissions required for their specific task."'
  },
  {
    id: 'mc-zta-2',
    type: 'multiple_choice',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    question: 'Which real-world initiative replaced VPN-based perimeter access with per-request, identity- and device-aware verification for every employee application?',
    options: [
      { key: 'A', text: 'Microsoft Active Directory' },
      { key: 'B', text: 'Google BeyondCorp' },
      { key: 'C', text: 'Cisco AnyConnect' },
      { key: 'D', text: 'Amazon AWS GovCloud' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 2 ZTA - Slide 32',
    explanation: 'Unit 2 ZTA Slide 32 highlights: "Google’s internal BeyondCorp initiative replaced VPN-based perimeter access with per-request, identity- and device-aware verification for every employee application."'
  },
  {
    id: 'enum-zta-1',
    type: 'enumeration',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    question: 'Enumerate the Four (4) Core Principles of Zero Trust Architecture (ZTA).',
    expectedCount: 4,
    items: [
      '1. Never Trust, Always Verify (Ongoing validation of users and devices throughout a session)',
      '2. Least-Privilege Access (Granting minimal access based on user\'s role; "Just enough access, just in time")',
      '3. Assume Breach (Design as if an attacker is already inside; limit blast radius, encrypt everywhere, watch lateral movement)',
      '4. Microsegmentation (Dividing the network into isolated segments with individual security controls)'
    ],
    sourceSlide: 'Unit 2 ZTA - Slide 11',
    explanation: 'Unit 2 ZTA Slide 11 lists the Four Core Principles of ZTA.'
  },
  {
    id: 'enum-zta-2',
    type: 'enumeration',
    topicId: 'zta_principles',
    topicTitle: 'ZTA Core Principles',
    question: 'Enumerate the Five (5) Pillars of Zero Trust Architecture.',
    expectedCount: 5,
    items: [
      'Pillar 1: Identity & Access Management',
      'Pillar 2: Device Trust & Posture',
      'Pillar 3: Network Segmentation',
      'Pillar 4: Application & Workload Security',
      'Pillar 5: Data Security & Encryption'
    ],
    sourceSlide: 'Unit 2 ZTA - Slide 20',
    explanation: 'Unit 2 ZTA Slide 20 explicitly lists the 5 Pillars of ZTA.'
  },

  // ==========================================
  // TOPIC 7: ZTA BREACHES CASE STUDIES
  // ==========================================
  {
    id: 'mtf-breach-1',
    type: 'modified_true_false',
    topicId: 'zta_breaches',
    topicTitle: 'ZTA Breaches Case Studies',
    statement: 'In the Meta Internal Tool Breach (2022), compromised software updates allowed attackers to infiltrate thousands of corporate networks.',
    underlinedTerm: 'Meta Internal Tool Breach',
    isTrue: false,
    correction: 'SolarWinds Supply Chain Attack (2020)',
    sourceSlide: 'Unit 2 ZTA - Slide 37',
    explanation: 'Per Unit 2 ZTA Slide 37: "SolarWinds Supply Chain Attack (2020): Compromised software updates allowed attackers to infiltrate thousands of networks, exposing gaps in vendor and third-party management." Meta\'s 2022 breach involved phishing attacks granting access to internal tools (Slide 36).'
  },
  {
    id: 'mtf-breach-2',
    type: 'modified_true_false',
    topicId: 'zta_breaches',
    topicTitle: 'ZTA Breaches Case Studies',
    statement: 'The Microsoft Exchange Hack (2021) highlighted the critical need for robust identity verification and continuous monitoring to detect unusual behavior.',
    underlinedTerm: 'Microsoft Exchange Hack (2021)',
    isTrue: true,
    sourceSlide: 'Unit 2 ZTA - Slide 36',
    explanation: 'Verbatim from Unit 2 ZTA Slide 36: "Microsoft Exchange Hack (2021): Attackers exploited vulnerabilities in Microsoft Exchange’s email servers, bypassing insufficient access controls... Implications: Highlighted the need for robust identity verification and continuous monitoring to detect unusual behavior."'
  },
  {
    id: 'mc-breach-1',
    type: 'multiple_choice',
    topicId: 'zta_breaches',
    topicTitle: 'ZTA Breaches Case Studies',
    question: 'Which breach demonstrated the critical necessity of auditing external access points and monitoring supply chain security in Zero Trust frameworks?',
    options: [
      { key: 'A', text: 'Meta’s Internal Tool Breach (2022)' },
      { key: 'B', text: 'Microsoft Exchange Hack (2021)' },
      { key: 'C', text: 'SolarWinds Supply Chain Attack (2020)' },
      { key: 'D', text: 'Stuxnet Iranian Facility Worm' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 2 ZTA - Slide 37',
    explanation: 'Unit 2 ZTA Slide 37 notes for SolarWinds: "Implications: Demonstrated the necessity of auditing external access points and monitoring supply chain security."'
  },
  {
    id: 'mc-breach-2',
    type: 'multiple_choice',
    topicId: 'zta_breaches',
    topicTitle: 'ZTA Breaches Case Studies',
    question: 'What security lesson was reinforced by Meta’s Internal Tool Breach (2022)?',
    options: [
      { key: 'A', text: 'The necessity of physical security guard dogs at data centers.' },
      { key: 'B', text: 'The importance of endpoint security and device authentication in Zero Trust frameworks.' },
      { key: 'C', text: 'The superiority of Type 2 hypervisors over bare metal.' },
      { key: 'D', text: 'The retirement of all web-based applications.' }
    ],
    correctAnswer: 'B',
    sourceSlide: 'Unit 2 ZTA - Slide 36',
    explanation: 'Unit 2 ZTA Slide 36 specifies: "Meta’s Internal Tool Breach (2022) — What Happened: Phishing attacks granted hackers access to Meta’s internal tools, underscoring the risks of inadequate device authentication. Implications: Reinforced the importance of endpoint security in Zero Trust frameworks."'
  },
  {
    id: 'enum-breach-1',
    type: 'enumeration',
    topicId: 'zta_breaches',
    topicTitle: 'ZTA Breaches Case Studies',
    question: 'Enumerate the three (3) landmark case studies of ZTA breaches presented in Unit 2 ZTA along with the core vulnerability or incident cause.',
    expectedCount: 3,
    items: [
      '1. Microsoft Exchange Hack (2021) - Attackers exploited email server vulnerabilities, bypassing insufficient access controls',
      '2. Meta’s Internal Tool Breach (2022) - Phishing attacks granted access to internal tools due to inadequate device authentication',
      '3. SolarWinds Supply Chain Attack (2020) - Compromised software updates allowed infiltration across vendor/third-party management gaps'
    ],
    sourceSlide: 'Unit 2 ZTA - Slides 36–37',
    explanation: 'Unit 2 ZTA Slides 36–37 review these three specific case studies under "The Cost of Failure: Case Studies of ZTA Breaches".'
  },

  // ==========================================
  // TOPIC 8: IDENTITY AND ACCESS MANAGEMENT (IAM)
  // ==========================================
  {
    id: 'mtf-iam-1',
    type: 'modified_true_false',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    statement: 'In the 4 A’s of IAM, Authorization tracks user activity and logs events to provide visibility into who accessed what and when.',
    underlinedTerm: 'Authorization',
    isTrue: false,
    correction: 'Audit',
    sourceSlide: 'Unit 3 - Slides 11–12',
    explanation: 'Per Unit 3 Slide 12: "Audit tracks user activity, logging events to provide visibility into who accessed what and when. Authorization determines what actions they are allowed to perform and what resources they can access based on assigned roles."'
  },
  {
    id: 'mtf-iam-2',
    type: 'modified_true_false',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    statement: 'Behavioral Authentication utilizes AI to analyze granular characteristics such as mouse-use tracking to determine whether an entity attempting access is a human or machine.',
    underlinedTerm: 'Behavioral Authentication',
    isTrue: true,
    sourceSlide: 'Unit 3 - Slide 14',
    explanation: 'Unit 3 Slide 14 defines: "Behavioral Authentication: It involves AI to figure out that the user trying to gain access to a particular resource is a human or machine... it analyzes granular characteristics, such as mouse-use tracking."'
  },
  {
    id: 'mc-iam-1',
    type: 'multiple_choice',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    question: 'Which access control model assigns permissions strictly based on an individual user’s job function within an organization?',
    options: [
      { key: 'A', text: 'Discretionary Access Control (DAC)' },
      { key: 'B', text: 'Mandatory Access Control (MAC)' },
      { key: 'C', text: 'Role-Based Access Control (RBAC)' },
      { key: 'D', text: 'Rule-Based Access Control (RBAC)' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 3 - Slide 27',
    explanation: 'Unit 3 Slide 27 states: "Role-Based Access Control (RBAC), which assigns access based on job functions."'
  },
  {
    id: 'mc-iam-2',
    type: 'multiple_choice',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    question: 'Which IAM technology is described as an open standard in which an information exchange happens between an identity provider and a service/application to ensure secure login?',
    options: [
      { key: 'A', text: 'SAML (Security Assertion Markup Language)' },
      { key: 'B', text: 'SNMP (Simple Network Management Protocol)' },
      { key: 'C', text: 'SMTP (Simple Mail Transfer Protocol)' },
      { key: 'D', text: 'ICMP (Internet Control Message Protocol)' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 3 - Slide 21',
    explanation: 'Unit 3 Slide 21 defines SAML: "It is an open standard in which an information exchange happens between an identity provider and a service/application. IAM systems often make use of it to ensure a secure login to an application."'
  },
  {
    id: 'enum-iam-1',
    type: 'enumeration',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    question: 'Enumerate the Core Components of IAM known as the "4 A\'s" along with their key functions.',
    expectedCount: 4,
    items: [
      '1. Administration (Managing user identities and associated permissions; creation, modification, deletion of accounts)',
      '2. Authentication (Verifying that a user is who they claim to be through credentials like passwords, biometrics, MFA)',
      '3. Authorization (Determining what actions users are allowed to perform and what resources they can access based on roles)',
      '4. Audit (Tracking user activity and logging events to provide visibility into who accessed what and when)'
    ],
    sourceSlide: 'Unit 3 - Slides 10–12',
    explanation: 'Unit 3 Slides 10–12 present the "4 A\'s of IAM".'
  },
  {
    id: 'enum-iam-2',
    type: 'enumeration',
    topicId: 'iam',
    topicTitle: 'Identity and Access Management (IAM)',
    question: 'Enumerate the four (4) types of user authentication discussed in Unit 3.',
    expectedCount: 4,
    items: [
      '1. Multi-factor Authentication (Combining two or more verification procedures and credentials)',
      '2. Unique Passwords (Secured string credentials adopted by users)',
      '3. Biometric Authentication (Physical characteristics verification)',
      '4. Behavioral Authentication (AI tracking of granular characteristics like mouse usage)'
    ],
    sourceSlide: 'Unit 3 - Slides 13–14',
    explanation: 'Unit 3 Slides 13–14 list these four distinct user authentication types.'
  },

  // ==========================================
  // TOPIC 9: CYBERSECURITY FRAMEWORKS
  // ==========================================
  {
    id: 'mtf-fw-1',
    type: 'modified_true_false',
    topicId: 'frameworks',
    topicTitle: 'Cybersecurity Frameworks',
    statement: 'According to the course slides, publicly traded companies often use HITRUST to comply with the Sarbanes-Oxley Act (SOX).',
    underlinedTerm: 'HITRUST',
    isTrue: false,
    correction: 'COBIT',
    sourceSlide: 'Unit 1 - Slide 31',
    explanation: 'Per Unit 1 Slide 31: "Publicly traded companies, for example, may wish to use COBIT to comply with SOX, while the healthcare sector may consider HITRUST. The ISO 27000 series, on the other hand, is applicable in public and private sectors."'
  },
  {
    id: 'mtf-fw-2',
    type: 'modified_true_false',
    topicId: 'frameworks',
    topicTitle: 'Cybersecurity Frameworks',
    statement: 'ISO 27005 is an international standard that provides guidelines for information security risk management.',
    underlinedTerm: 'ISO 27005',
    isTrue: true,
    sourceSlide: 'Unit 1 - Slide 33',
    explanation: 'Unit 1 Slide 33 states verbatim: "ISO 27005: An international standard that provides guidelines for information security risk management."'
  },
  {
    id: 'mc-fw-1',
    type: 'multiple_choice',
    topicId: 'frameworks',
    topicTitle: 'Cybersecurity Frameworks',
    question: 'How many sequential steps comprise the NIST Risk Management Framework (RMF) as outlined in Unit 1?',
    options: [
      { key: 'A', text: 'Three (3) steps' },
      { key: 'B', text: 'Four (4) steps' },
      { key: 'C', text: 'Six (6) steps' },
      { key: 'D', text: 'Ten (10) steps' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 1 - Slide 33',
    explanation: 'Unit 1 Slide 33 defines: "NIST Risk Management Framework (RMF): A six-step process (Categorize, Select, Implement, Assess, Authorize, Monitor) for managing security risks in federal information systems."'
  },
  {
    id: 'mc-fw-2',
    type: 'multiple_choice',
    topicId: 'frameworks',
    topicTitle: 'Cybersecurity Frameworks',
    question: 'Which information security framework series is described as being applicable to both public and private sectors regardless of specific industry?',
    options: [
      { key: 'A', text: 'ISO 27000 series' },
      { key: 'B', text: 'PCI-DSS' },
      { key: 'C', text: 'FERPA' },
      { key: 'D', text: 'HIPAA Security Rule' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 1 - Slide 31',
    explanation: 'Unit 1 Slide 31 explicitly highlights: "The ISO 27000 series of information security frameworks, on the other hand, is applicable in public and private sectors."'
  },
  {
    id: 'enum-fw-1',
    type: 'enumeration',
    topicId: 'frameworks',
    topicTitle: 'Cybersecurity Frameworks',
    question: 'Enumerate the six (6) steps of the NIST Risk Management Framework (RMF) in sequential order.',
    expectedCount: 6,
    items: [
      '1. Categorize',
      '2. Select',
      '3. Implement',
      '4. Assess',
      '5. Authorize',
      '6. Monitor'
    ],
    sourceSlide: 'Unit 1 - Slide 33',
    explanation: 'NIST RMF 6-step lifecycle listed on Unit 1 Slide 33.'
  },

  // ==========================================
  // TOPIC 10: ENTERPRISE SECURITY ARCHITECTURE (ESA)
  // ==========================================
  {
    id: 'mtf-esa-1',
    type: 'modified_true_false',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    statement: 'TOGAF is a security-specific framework developed independently from the Zachman Framework that links security directly to business goals from the start.',
    underlinedTerm: 'TOGAF',
    isTrue: false,
    correction: 'SABSA',
    sourceSlide: 'Unit 1 - Slides 11, 13',
    explanation: 'Per Unit 1 Slide 11 & 13: "SABSA (Sherwood Applied Business Security Architecture) is a security-specific framework that links security to business goals from the start... developed independently from the Zachman Framework. TOGAF is a widely-used enterprise architecture framework that includes a security dimension."'
  },
  {
    id: 'mtf-esa-2',
    type: 'modified_true_false',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    statement: 'Enterprise Security Architecture (ESA) is a comprehensive, strategic framework that aligns an organization’s security policies, processes, and technologies with its business goals.',
    underlinedTerm: 'Enterprise Security Architecture (ESA)',
    isTrue: true,
    sourceSlide: 'Unit 1 - Slide 7',
    explanation: 'Verbatim definition from Unit 1 Slide 7: "Enterprise Security Architecture (ESA) is a comprehensive, strategic framework that aligns an organization\'s security policies, processes, and technologies with its business goals."'
  },
  {
    id: 'mc-esa-1',
    type: 'multiple_choice',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    question: 'Which framework is defined in Unit 1 as "a model and methodology for developing a risk-driven enterprise information security architecture and service management, to support critical business processes"?',
    options: [
      { key: 'A', text: 'SABSA (Sherwood Applied Business Security Architecture)' },
      { key: 'B', text: 'TOGAF (The Open Group Architecture Framework)' },
      { key: 'C', text: 'ITIL v4' },
      { key: 'D', text: 'COBIT 5' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 1 - Slide 13',
    explanation: 'Unit 1 Slide 13 states verbatim: "SABSA (Sherwood Applied Business Security Architecture) is a model and methodology for developing a risk-driven enterprise information security architecture and service management, to support critical business processes."'
  },
  {
    id: 'mc-esa-2',
    type: 'multiple_choice',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    question: 'Which of the following is NOT one of the five reasons why ESA is important as listed in Unit 1?',
    options: [
      { key: 'A', text: 'Complex Environments' },
      { key: 'B', text: 'Evolving Threats' },
      { key: 'C', text: 'Guaranteed Elimination of All Passwords' },
      { key: 'D', text: 'Business Continuity' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 1 - Slide 9',
    explanation: 'Unit 1 Slide 9 lists five reasons: 1. Complex Environments, 2. Evolving Threats, 3. Data Protection, 4. Business Continuity, 5. Cost Savings.'
  },
  {
    id: 'enum-esa-1',
    type: 'enumeration',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    question: 'Enumerate the five (5) core reasons why Enterprise Security Architecture (ESA) is important.',
    expectedCount: 5,
    items: [
      '1. Complex Environments (Modern enterprises have vast, interconnected distributed systems)',
      '2. Evolving Threats (Dynamic and adaptable security approach required for changing threats)',
      '3. Data Protection (Protects sensitive data from unauthorized access, theft, or misuse)',
      '4. Business Continuity (Prevents and mitigates attacks so business operations continue without disruption)',
      '5. Cost Savings (Proactive security measures prevent costly data breaches and recovery efforts)'
    ],
    sourceSlide: 'Unit 1 - Slide 9',
    explanation: 'Unit 1 Slide 9 itemizes these five reasons under "WHY IS ESA IMPORTANT?".'
  },
  {
    id: 'enum-esa-2',
    type: 'enumeration',
    topicId: 'esa',
    topicTitle: 'Enterprise Security Architecture (ESA)',
    question: 'Enumerate the two (2) primary ESA frameworks highlighted in Unit 1 and differentiate their scope.',
    expectedCount: 2,
    items: [
      '1. TOGAF [The Open Group Architecture Framework] - A widely-used enterprise architecture framework that includes a security dimension',
      '2. SABSA [Sherwood Applied Business Security Architecture] - A security-specific, risk-driven framework that links security to business goals from the start'
    ],
    sourceSlide: 'Unit 1 - Slides 11–13',
    explanation: 'Unit 1 Slides 11–13 present TOGAF and SABSA as the two key ESA frameworks.'
  },

  // ==========================================
  // TOPIC 11: CLOUD SECURITY MODEL & SHARED RESPONSIBILITY
  // ==========================================
  {
    id: 'mtf-csm-1',
    type: 'modified_true_false',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    statement: 'In the Cloud Shared Responsibility Model, the Cloud Service Provider (CSP) is exclusively responsible for Data security across IaaS, PaaS, and SaaS models.',
    underlinedTerm: 'Cloud Service Provider (CSP)',
    isTrue: false,
    correction: 'Client',
    sourceSlide: 'Unit 4 - Slide 29',
    explanation: 'Per the Shared Responsibility Table on Unit 4 Slide 29: In On-premise, IaaS, PaaS, and SaaS, the security responsibility for "Data" belongs to the "Client" in all models.'
  },
  {
    id: 'mtf-csm-2',
    type: 'modified_true_false',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    statement: 'A Type 1 hypervisor (hardware virtualization) runs the guest operating system directly on a hardware platform under the control of the host system.',
    underlinedTerm: 'Type 1 hypervisor',
    isTrue: true,
    sourceSlide: 'Unit 4 - Slide 5',
    explanation: 'Unit 4 Slide 5 defines: "Hardware virtualization (type 1 hypervisor) — the guest operating system runs directly on a hardware platform, under the control of the host system."'
  },
  {
    id: 'mc-csm-1',
    type: 'multiple_choice',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    question: 'In which cloud computing model does the cloud provider manage the operating system, physical infrastructure, and network control, while the client and CSP share responsibility for identity management and applications?',
    options: [
      { key: 'A', text: 'On-premise' },
      { key: 'B', text: 'Infrastructure as a Service (IaaS)' },
      { key: 'C', text: 'Platform as a Service (PaaS)' },
      { key: 'D', text: 'Software as a Service (SaaS)' }
    ],
    correctAnswer: 'C',
    sourceSlide: 'Unit 4 - Slide 29',
    explanation: 'Unit 4 Slide 29 table specifies for PaaS: Application: Shared, Identity Management: Shared, Network Control: Shared, Operating System: CSP, Physical Infrastructure: CSP.'
  },
  {
    id: 'mc-csm-2',
    type: 'multiple_choice',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    question: 'How do Cloud Access Security Brokers (CASBs) differ from Cloud Security Posture Management (CSPMs) according to Unit 4?',
    options: [
      { key: 'A', text: 'CASBs act as checkpoints focusing on user and data security in transit, while CSPMs are infrastructure-centric, scanning for misconfigurations and compliance violations.' },
      { key: 'B', text: 'CASBs only run on Type 1 hypervisors, while CSPMs only monitor local printers.' },
      { key: 'C', text: 'CSPMs are manual spreadsheets, while CASBs replace all operating systems.' },
      { key: 'D', text: 'There is no difference; they are identical tools.' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 4 - Slide 55',
    explanation: 'Unit 4 Slide 55 notes: "CASBs act as a checkpoint between users and cloud applications, focusing on user and data security by controlling access, enforcing security policies, and protecting data in transit. CSPMs, on the other hand, are infrastructure-centric, providing visibility into cloud configurations to detect and remediate misconfigurations and compliance violations."'
  },
  {
    id: 'enum-csm-1',
    type: 'enumeration',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    question: 'Enumerate the three (3) main computing service models collectively known as XaaS (\'anything as a service\') and give one example of each from the slides.',
    expectedCount: 3,
    items: [
      '1. Software as a Service [SaaS] (Examples: Microsoft 365, Google Workspace, Salesforce)',
      '2. Platform as a Service [PaaS] (Examples: Google App Engine, AWS Elastic Beanstalk, Microsoft Azure App Service)',
      '3. Infrastructure as a Service [IaaS] (Examples: AWS EC2, Azure VMs, Google Compute Engine)'
    ],
    sourceSlide: 'Unit 4 - Slide 8',
    explanation: 'Unit 4 Slide 8 defines and gives examples for SaaS, PaaS, and IaaS.'
  },
  {
    id: 'enum-csm-2',
    type: 'enumeration',
    topicId: 'cloud_security_model',
    topicTitle: 'Cloud Security Model & Shared Responsibility',
    question: 'Enumerate the seven (7) security responsibility domains evaluated across cloud models in Unit 4 Slide 29.',
    expectedCount: 7,
    items: [
      '1. Data',
      '2. Endpoints',
      '3. Identity Management',
      '4. Application',
      '5. Network Control',
      '6. Operating System',
      '7. Physical Infrastructure'
    ],
    sourceSlide: 'Unit 4 - Slide 29',
    explanation: 'The 7 rows of the Shared Responsibility Matrix on Unit 4 Slide 29.'
  },

  // ==========================================
  // TOPIC 12: IDS / IPS / HIPS & SIEM
  // ==========================================
  {
    id: 'mtf-idps-1',
    type: 'modified_true_false',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    statement: 'An Intrusion Detection System (IDS) acts on detected threats by dropping malicious packets, blocking IP addresses, or modifying network traffic.',
    underlinedTerm: 'Intrusion Detection System (IDS)',
    isTrue: false,
    correction: 'Intrusion Prevention System (IPS)',
    sourceSlide: 'Unit 2b - Slides 4–5',
    explanation: 'Per Unit 2b Slides 4–5: "IDS generates alerts and logs suspicious activity for review by security teams. IPS acts on detected threats by blocking or mitigating malicious activity (dropping packets, blocking IP addresses, modifying traffic)."'
  },
  {
    id: 'mtf-idps-2',
    type: 'modified_true_false',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    statement: 'In Host-based microsegmentation, security agents are placed directly on each individual endpoint to enforce firewall policy controls.',
    underlinedTerm: 'Host-based',
    isTrue: true,
    sourceSlide: 'Unit 2b - Slide 18',
    explanation: 'Unit 2b Slide 18 defines: "Host-based: With this technique, agents are placed on each endpoint."'
  },
  {
    id: 'mc-idps-1',
    type: 'multiple_choice',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    question: 'Which of the following is defined in Unit 2b as a cybersecurity solution that provides real-time visibility into an organization\'s IT environment by collecting, analyzing, and correlating security logs and event data from various sources?',
    options: [
      { key: 'A', text: 'Security Information and Event Management (SIEM)' },
      { key: 'B', text: 'Network Address Translation (NAT)' },
      { key: 'C', text: 'Dynamic Host Configuration Protocol (DHCP)' },
      { key: 'D', text: 'Simple Network Management Protocol (SNMP)' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 2b - Slide 8',
    explanation: 'Unit 2b Slide 8 defines SIEM verbatim: "is a cybersecurity solution that provides real-time visibility into an organization\'s IT environment by collecting, analyzing, and correlating security logs and event data from various sources."'
  },
  {
    id: 'mc-idps-2',
    type: 'multiple_choice',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    question: 'Which popular SIEM platforms are specifically named in Unit 2b Slide 10?',
    options: [
      { key: 'A', text: 'Splunk, IBM QRadar, and ArcSight' },
      { key: 'B', text: 'Wireshark, Nmap, and Metasploit' },
      { key: 'C', text: 'Autopsy, Guymager, and Scalpel' },
      { key: 'D', text: 'OpenVPN, WireGuard, and IPsec' }
    ],
    correctAnswer: 'A',
    sourceSlide: 'Unit 2b - Slide 10',
    explanation: 'Unit 2b Slide 10 lists verbatim: "Popular SIEM platforms like Splunk, IBM QRadar, and ArcSight provide real-time threat monitoring, centralized dashboards, and automated responses."'
  },
  {
    id: 'enum-idps-1',
    type: 'enumeration',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    question: 'Enumerate the four (4) core capabilities of IDPS in Practice as detailed on Unit 2b Slide 7.',
    expectedCount: 4,
    items: [
      '1. Monitoring (Analyzing network traffic, looking for patterns matching known attack signatures or unusual behavior/anomalies)',
      '2. Alerting (Generating alerts sent to security teams for investigation and response when suspicious activity is detected)',
      '3. Prevention (IPS components automatically block or mitigate attacks before they cause harm)',
      '4. Reporting (Providing detailed logs and reports for forensic analysis and improving security policies)'
    ],
    sourceSlide: 'Unit 2b - Slide 7',
    explanation: 'Unit 2b Slide 7 defines the 4 aspects of IDPS in Practice: Monitoring, Alerting, Prevention, and Reporting.'
  },
  {
    id: 'enum-idps-2',
    type: 'enumeration',
    topicId: 'ids_ips_hips',
    topicTitle: 'IDS / IPS / HIPS & SIEM',
    question: 'Enumerate the three (3) architectural approaches/types of Microsegmentation described in Unit 2b.',
    expectedCount: 3,
    items: [
      '1. Network-based (Regulates who and what may access areas; simple to administer with little administrative work)',
      '2. Hypervisor-based (Enforces microsegmentation within the virtualization layer)',
      '3. Host-based (Agents placed directly on each endpoint)'
    ],
    sourceSlide: 'Unit 2b - Slide 18',
    explanation: 'Unit 2b Slide 18 itemizes Network-based, Hypervisor-based, and Host-based microsegmentation.'
  }
];

