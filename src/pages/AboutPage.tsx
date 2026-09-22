import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { COURSE_METADATA, ALL_TOPICS, COURSES } from '../content';
import {
  Shield,
  GraduationCap,
  User,
  ExternalLink,
  Mail,
  Github,
  Globe,
  FileText,
  BookOpen,
  Scale,
  Terminal,
  Cpu,
  BookmarkCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ReferenceItem {
  title: string;
  category: 'standards' | 'tools' | 'linux' | 'cases' | 'cloud-iam';
  authorOrOrg: string;
  description: string;
  url?: string;
  citation?: string;
}

const MASTER_REFERENCES: ReferenceItem[] = [
  // Legal & Standards
  {
    title: "Republic Act No. 10175 — Cybercrime Prevention Act of 2012",
    category: "standards",
    authorOrOrg: "Congress of the Philippines",
    description: "Defines cybercrime offenses (illegal access, data interference, system interference, identity theft, cybersex, child pornography, libel) and establishes legal mandates for forensic warrants, interception, and search/seizure in Philippine jurisdiction.",
    url: "https://www.officialgazette.gov.ph/2012/09/12/republic-act-no-10175/",
    citation: "RA 10175, 15th Congress of the Republic of the Philippines (2012)"
  },
  {
    title: "Rules on Electronic Evidence (A.M. No. 01-7-01-SC)",
    category: "standards",
    authorOrOrg: "Supreme Court of the Philippines",
    description: "Governs the admissibility of electronic documents, electronic signatures, audio/video recordings, and computer-generated evidence in Philippine judicial proceedings.",
    url: "https://sc.judiciary.gov.ph/",
    citation: "Supreme Court of the Philippines, En Banc Resolution (2001)"
  },
  {
    title: "NIST SP 800-207: Zero Trust Architecture",
    category: "standards",
    authorOrOrg: "National Institute of Standards and Technology (NIST)",
    description: "Defines the core tenets, logical components (Policy Engine, Policy Administrator, Policy Enforcement Point), and deployment guidelines for Zero Trust network defense.",
    url: "https://csrc.nist.gov/publications/detail/sp/800-207/final",
    citation: "Rose, S., Borchert, O., Mitchell, S., & Connelly, S. (2020). NIST Special Publication 800-207"
  },
  {
    title: "NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response",
    category: "standards",
    authorOrOrg: "National Institute of Standards and Technology (NIST)",
    description: "Standard publication providing in-depth recommendations on the forensic process: Collection, Examination, Analysis, and Reporting across filesystems, networks, and volatile operating systems.",
    url: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    citation: "Kent, K., Chevalier, S., Grance, T., & Dang, H. (2006). NIST SP 800-86"
  },
  {
    title: "ISO/IEC 27001 & ISO/IEC 27005: Information Security Risk Management",
    category: "standards",
    authorOrOrg: "International Organization for Standardization (ISO/IEC)",
    description: "International benchmark for establishing an Information Security Management System (ISMS) and systematic risk assessment, evaluation, and treatment processes.",
    url: "https://www.iso.org/standard/27001",
    citation: "ISO/IEC 27005:2022 Information security, cybersecurity and privacy protection"
  },
  {
    title: "SABSA (Sherwood Applied Business Security Architecture)",
    category: "standards",
    authorOrOrg: "The SABSA Institute / John Sherwood",
    description: "Business-driven, risk-based enterprise security architecture methodology structured across contextual, conceptual, logical, physical, and component layers.",
    url: "https://sabsa.org/",
    citation: "Sherwood, J., Clark, A., & Lynas, D. (2005). Enterprise Security Architecture: A Business-Driven Approach"
  },
  {
    title: "STRIDE Threat Modeling Methodology",
    category: "standards",
    authorOrOrg: "Microsoft Security Development Lifecycle (SDL)",
    description: "Framework for classifying threats: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.",
    url: "https://learn.microsoft.com/en-us/security/engineering/stride-threat-model",
    citation: "Kohnfelder, L., & Garg, P. (1999). The threats to our products. Microsoft Internal Document"
  },
  {
    title: "RFC 3227: Guidelines for Evidence Collection and Archiving",
    category: "standards",
    authorOrOrg: "Internet Engineering Task Force (IETF)",
    description: "Canonical standard establishing the digital forensic Order of Volatility: registers/cache, routing tables, process tables, kernel memory, disk, and physical topology.",
    url: "https://datatracker.ietf.org/doc/html/rfc3227",
    citation: "Brezinski, D., & Killalea, T. (2002). RFC 3227"
  },

  // IAM & Cloud Security
  {
    title: "OAuth 2.0 Authorization Framework & OpenID Connect (OIDC)",
    category: "cloud-iam",
    authorOrOrg: "IETF & OpenID Foundation",
    description: "Standard protocols for token-based delegated authorization (OAuth 2.0) and identity assertion layer (OIDC) enabling secure federated Single Sign-On.",
    url: "https://oauth.net/2/",
    citation: "Hardt, D. (2012). The OAuth 2.0 Authorization Framework. RFC 6749"
  },
  {
    title: "Security Assertion Markup Language (SAML 2.0)",
    category: "cloud-iam",
    authorOrOrg: "OASIS Security Services Technical Committee",
    description: "XML-based standard for exchanging authentication and authorization data between identity providers (IdP) and service providers (SP).",
    url: "https://www.oasis-open.org/standards#samlv2.0",
    citation: "Cantor, S., et al. (2005). Assertions and Protocols for the OASIS SAML V2.0"
  },
  {
    title: "Cloud Security Alliance (CSA) Security Guidance & CCM",
    category: "cloud-iam",
    authorOrOrg: "Cloud Security Alliance",
    description: "Comprehensive cybersecurity controls catalog mapped across all domains of cloud architecture, multi-tenancy, CASB, CSPM, and shared responsibility.",
    url: "https://cloudsecurityalliance.org/research/cloud-controls-matrix/",
    citation: "CSA Cloud Controls Matrix (CCM v4.0)"
  },
  {
    title: "The CALMS Framework for DevSecOps",
    category: "cloud-iam",
    authorOrOrg: "Jez Humble / DevSecOps Institute",
    description: "Foundational pillars of continuous software security: Culture, Automation, Lean, Measurement, and Sharing integrated into the Secure SDLC.",
    citation: "Humble, J. & Farley, D. (2010). Continuous Delivery: Reliable Software Releases"
  },

  // Tooling & Software
  {
    title: "Kali Linux Forensics Mode & Live Environment",
    category: "tools",
    authorOrOrg: "OffSec / Kali Linux Development Team",
    description: "Live forensic distribution booted with kernel parameters ensuring no auto-mounting of connected partitions and zero-write guarantees.",
    url: "https://www.kali.org/docs/general-use/kali-linux-forensics-mode/",
    citation: "OffSec Documentation: kali-tools-forensics"
  },
  {
    title: "The Sleuth Kit (TSK) Command-Line Forensic Suite",
    category: "tools",
    authorOrOrg: "Brian Carrier",
    description: "Open-source forensic library and utilities for media management, partition analysis (mmls), filesystem metadata analysis (fsstat), directory browsing (fls), and file content extraction.",
    url: "https://www.sleuthkit.org/sleuthkit/",
    citation: "Carrier, B. (2005). File System Forensic Analysis. Addison-Wesley"
  },
  {
    title: "Advanced Forensic Format (AFF / AFF4)",
    category: "tools",
    authorOrOrg: "Simson Garfinkel & Basis Technology",
    description: "Open-source extensible container format for digital evidence images supporting zlib/LZMA compression, arbitrary metadata (.afm), multi-volume segmentation (.afd), and encryption without vendor lock-in.",
    url: "https://github.com/simsong/AFFLIBv3",
    citation: "Garfinkel, S. (2006). The Advanced Forensic Format. International Journal of Digital Evidence"
  },
  {
    title: "Expert Witness Format (EWF / EnCase E01)",
    category: "tools",
    authorOrOrg: "Guidance Software / OpenText & Joachim Metz (libewf)",
    description: "De facto standard format for forensic disk imaging across worldwide law enforcement, encapsulating case metadata, volume headers, sector-level 32-bit CRC checks, and MD5 acquisition hashes.",
    url: "https://github.com/libyal/libewf",
    citation: "Metz, J. (2008). libewf: Library and tools to support the Expert Witness Compression Format"
  },

  // Cases
  {
    title: "SolarWinds Orion Supply Chain Breach (2020)",
    category: "cases",
    authorOrOrg: "Cybersecurity and Infrastructure Security Agency (CISA)",
    description: "Landmark nation-state supply chain attack (SUNBURST backdoor) that demonstrated the failure of implicit trust and catalyzed global adoption of Zero Trust Architecture.",
    citation: "CISA Emergency Directive 21-01 (December 2020)"
  },
  {
    title: "2016 Commission on Elections (Comelec) Mega-Breach",
    category: "cases",
    authorOrOrg: "National Privacy Commission (NPC) / Anonymous Philippines",
    description: "Historical breach in Philippine cybercrime where the voter database containing 55 million records was exfiltrated and leaked.",
    citation: "NPC Case No. 16-001 (2017)"
  },
];

export const AboutPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'standards' | 'tools' | 'cloud-iam' | 'cases'>('all');

  const filteredReferences =
    activeCategory === 'all'
      ? MASTER_REFERENCES
      : MASTER_REFERENCES.filter((r) => r.category === activeCategory);

  const cit245 = COURSES['cit245'];
  const cit220 = COURSES['cit220'];

  return (
    <div className="space-y-12 py-8">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={[{ label: 'About & Authorship' }]} />

      {/* Hero Banner with Official WVSU CICT Logo */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 p-8 sm:p-12 shadow-xl dark:shadow-2xl transition-colors">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-950 p-0.5 shrink-0">
                <img src="./assets/wvsu-cict-emblem.svg" alt="WVSU CICT" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">BSIT 4B NIS/ST</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span>WVSU CICT Main Campus, Iloilo City</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                BSIT 4B NIS/ST
              </span>{' '}
              Courseware Hub
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Authorized academic courseware platform for BS in Information Technology (Network and Information Security / Software Technologies). This platform provides unified, interactive lecture notes for <strong className="text-slate-950 dark:text-white">CIT 245 (Cyberforensics)</strong> and <strong className="text-slate-950 dark:text-white">CIT 220 (Information Assurance and Security 2)</strong>.
            </p>
          </div>

          {/* Prominent Official Seal Display */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-2 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
              <img
                src="./assets/wvsu-cict-emblem.svg"
                alt="WVSU CICT Seal"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white mt-3">CICT • WVSU</span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">Main Campus, Iloilo City</span>
          </div>
        </div>
      </div>

      {/* Authorship Distinction Cards */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Faculty Instructors & Courseware Credits</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CIT 245 Instructor Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold block">
                    CIT 245 Cyberforensics
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Prof. Mark Joseph J. Solidarios
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Faculty Instructor at WVSU CICT. Conceptualized and authored the original CIT 245 cyberforensics lecture syllabus, digital acquisition guides, and investigation case studies.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 space-y-1">
              <p>Email: <span className="text-slate-700 dark:text-slate-300">mjsolidarios@wvsu.edu.ph</span></p>
              <p>Topics: <span className="font-semibold text-cyan-600">5 Topics • 200 Slides</span></p>
            </div>
          </div>

          {/* CIT 220 Instructor Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-400 border border-teal-200 dark:border-teal-800/60 shadow-xs">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400 font-bold block">
                    CIT 220 IAS 2
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Prof. Chin Ann Feliprada
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Faculty Instructor at WVSU CICT. Authored and structured the CIT 220 Information Assurance and Security 2 curriculum covering Enterprise Architecture, Zero Trust, IAM, and Cloud Security.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 space-y-1">
              <p>Email: <span className="text-slate-700 dark:text-slate-300">chinann.feliprada@wvsu.edu.ph</span></p>
              <p>Units: <span className="font-semibold text-teal-600">6 Units • 279 Slides</span></p>
            </div>
          </div>

          {/* Application Developer Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/60 shadow-xs">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-700 dark:text-indigo-400 font-bold block">
                    Platform Architect & Engineering
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Benedict Neil D. Bacud
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Student developer, <strong className="text-slate-950 dark:text-white">BSIT 4B NIS/ST</strong>, WVSU CICT. Engineered the multi-course architecture, dual Study Reader & Slide Deck engines, full-text search, and automated deployment.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-slate-500 space-y-1">
              <p>Track: <span className="text-slate-700 dark:text-slate-300">Network & Information Security / ST</span></p>
              <p>Campus: <span className="text-slate-700 dark:text-slate-300">WVSU Main Campus, Iloilo City</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Documentation & Master References Section */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-400 text-xs font-semibold mb-2">
              <BookmarkCheck className="w-4 h-4" />
              <span>Consolidated Reference Repository</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Curriculum References & Standards Directory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Primary NIST publications, ISO standards, RFC specifications, statutory laws, and cloud frameworks cited across both CIT 245 and CIT 220 courses.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start shadow-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All References
            </button>
            <button
              onClick={() => setActiveCategory('standards')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'standards'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Standards & Law
            </button>
            <button
              onClick={() => setActiveCategory('cloud-iam')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'cloud-iam'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Cloud & IAM
            </button>
            <button
              onClick={() => setActiveCategory('tools')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'tools'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Forensics Tools
            </button>
            <button
              onClick={() => setActiveCategory('cases')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'cases'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Breach Case Studies
            </button>
          </div>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredReferences.map((ref, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50/80 dark:hover:bg-slate-900/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-cyan-800 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
                    {ref.category === 'standards' && 'Standard / Statute'}
                    {ref.category === 'cloud-iam' && 'Cloud & IAM Spec'}
                    {ref.category === 'tools' && 'Security Software'}
                    {ref.category === 'cases' && 'Case Study'}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {ref.authorOrOrg}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                  {ref.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ref.description}
                </p>

                {ref.citation && (
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono italic bg-slate-50 dark:bg-slate-950/70 p-2.5 rounded-xl border border-slate-200 dark:border-slate-850">
                    {ref.citation}
                  </p>
                )}
              </div>

              {ref.url && (
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 font-medium group/link transition-colors"
                  >
                    <span>Official Publication / Specification</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Quick Navigation by Course */}
      <div className="space-y-8 pt-4">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Curriculum Courses Directory
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Complete active curriculum across all courses in the BSIT 4B NIS/ST track.
          </p>
        </div>

        {/* CIT 245 Section */}
        <div className="space-y-3 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950">
                CIT 245
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Cyberforensics (Prof. Mark Joseph J. Solidarios)
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500">5 Topics • 200 Slides</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 pt-2">
            {cit245.topics.map((topic) => (
              <a
                key={topic.id}
                href={`#/topic/${topic.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-800 dark:text-cyan-400">
                    Topic {topic.topicNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {topic.totalSlides} slides
                  </span>
                </div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                  {topic.title}
                </h5>
              </a>
            ))}
          </div>
        </div>

        {/* CIT 220 Section */}
        <div className="space-y-3 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400 px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950">
                CIT 220
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Information Assurance and Security 2 (Prof. Chin Ann Feliprada)
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-500">6 Units • 279 Slides</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 pt-2">
            {cit220.topics.map((topic) => (
              <a
                key={topic.id}
                href={`#/topic/${topic.id}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-teal-500/60 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-teal-800 dark:text-teal-400">
                    Unit {topic.topicNumber}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {topic.totalSlides} slides
                  </span>
                </div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate">
                  {topic.title}
                </h5>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
