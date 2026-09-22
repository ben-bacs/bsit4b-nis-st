import { CourseMetadata } from '../../types/content';

export const CIT220_METADATA: CourseMetadata = {
  code: 'CIT 220',
  title: 'Information Assurance and Security 2',
  subtitle: 'Advanced Network Defense, Zero Trust Architecture, IAM & Cloud Security',
  institution: 'West Visayas State University',
  college: 'College of Information and Communications Technology (CICT)',
  originalInstructor: {
    name: 'Chin Ann Feliprada',
    email: 'chinann.feliprada@wvsu.edu.ph',
  },
  studentDeveloper: {
    name: 'Benedict Neil D. Bacud',
    section: 'BSIT 4B NIS/ST',
    role: 'Application Architect & Frontend Developer',
    purpose: 'Academic Platform Recreation for BSIT 4B NIS/ST Courseware Hub',
  },
  sourceUrl: 'Maam Chin Course Materials Archive',
};

export const CIT220_EXAM_COVERAGE = {
  title: 'CIT 220 Exam Coverage & Syllabus Guide',
  date: 'Academic Year 2026–2027',
  units: [
    {
      number: '01',
      title: 'Foundations of Advanced Security',
      highlights: [
        'Beyond the CIA Triad: Authentication, Authorization, Non-Repudiation',
        'Enterprise Security Architecture frameworks (SABSA business-driven & TOGAF)',
        'Threat Modeling methodologies: Attack Trees & STRIDE category breakdown',
        'Risk Management Process (Assessment, Treatment, Monitoring) & ISO 27005',
        'Threat Intelligence Lifecycle & Advanced Persistent Threats (APTs)',
        'Compliance Gap Analysis (CGA) methodology & Healthcare HIPAA case study',
      ],
    },
    {
      number: '02',
      title: 'Advanced Network & System Security',
      highlights: [
        'Intrusion Detection Systems (IDS) vs Intrusion Prevention Systems (IPS)',
        'Security Information and Event Management (SIEM) architecture & platforms',
        'Microsegmentation integration with Zero Trust defense-in-depth',
        'Virtual Private Networks (VPNs): Site-to-Site vs Remote Access & Tunneling protocols',
        'Laboratory Activity: VPN installation, routing risks, and leak mitigation',
      ],
    },
    {
      number: '02.1',
      title: 'Zero Trust Architecture (ZTA)',
      highlights: [
        'The breakdown of traditional Castle-and-Moat perimeter defenses',
        'NIST SP 800-207 core tenets: Never Trust, Always Verify; Least Privilege; Assume Breach',
        'The Five Pillars of ZTA: Identity, Device, Network, Application, and Data',
        'Continuous monitoring, dynamic behavioral evaluation, and implementation roadmap',
        'Landmark case analyses: SolarWinds Supply Chain (2020) & Microsoft Exchange Hack (2021)',
      ],
    },
    {
      number: '02.2',
      title: 'Network Segmentation & Microsegmentation',
      highlights: [
        'East-West lateral movement in modern data centers and enterprise networks',
        'VLAN-based segmentation and why physical/logical Layer 2/3 controls fall short',
        'Layer 4 application segmentation limitations and port-spoofing vulnerabilities',
        'Layer 7 microsegmentation: Process-level allowlisting and full workload visibility',
        'Step-by-step containment of lateral ransomware progression',
      ],
    },
    {
      number: '03',
      title: 'Identity and Access Management (IAM)',
      highlights: [
        'Why IAM is fundamental to securing the modern distributed enterprise',
        'The 4 A’s of IAM: Administration, Authentication, Authorization, and Audit',
        'Authentication factors: Multi-Factor Authentication (MFA), Adaptive Auth, Biometrics',
        'Federated identity technologies: SAML 2.0, OAuth 2.0, OpenID Connect (OIDC), SSO',
        'Identity Governance and Administration (IGA) & Privileged Access Management (PAM)',
      ],
    },
    {
      number: '04',
      title: 'Cloud Security & DevSecOps',
      highlights: [
        'Virtualization architectures: Type 1 vs Type 2 Hypervisors and container security',
        'Cloud Service Models (IaaS, PaaS, SaaS) & Shared Responsibility Model',
        'Cloud Infrastructure Security: Virtual private clouds, SDN, security groups',
        'Cloud Security Posture Management (CSPM) & Cloud Access Security Brokers (CASB)',
        'DevSecOps principles: CALMS framework, Lean IT, and Secure Software Development Life Cycle (SSDLC)',
      ],
    },
  ],
  preparationTips: [
    'Understand why traditional perimeter firewalls cannot inspect East-West traffic in modern cloud and virtualized data centers.',
    'Differentiate clearly between RBAC (Role-Based) and ABAC (Attribute-Based) access controls in IAM.',
    'Memorize the 6 threats in the STRIDE model and their corresponding defensive security controls.',
    'Know the Shared Responsibility division between cloud providers (AWS, Azure, GCP) and cloud customers across IaaS, PaaS, and SaaS.',
    'Review the NIST SP 800-207 Zero Trust Architecture pillars and why identity serves as the new perimeter.',
  ],
};
