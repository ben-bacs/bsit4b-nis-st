import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { COURSE_METADATA, ALL_TOPICS } from '../content';
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
  category: 'standards' | 'tools' | 'linux' | 'cases';
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
    title: "NIST SP 800-86: Guide to Integrating Forensic Techniques into Incident Response",
    category: "standards",
    authorOrOrg: "National Institute of Standards and Technology (NIST)",
    description: "Standard publication providing in-depth recommendations on the forensic process: Collection, Examination, Analysis, and Reporting across filesystems, networks, and volatile operating systems.",
    url: "https://csrc.nist.gov/publications/detail/sp/800-86/final",
    citation: "Kent, K., Chevalier, S., Grance, T., & Dang, H. (2006). NIST SP 800-86"
  },
  {
    title: "ISO/IEC 27037:2012 — Guidelines for Identification, Collection, Acquisition and Preservation of Digital Evidence",
    category: "standards",
    authorOrOrg: "International Organization for Standardization (ISO/IEC)",
    description: "International standard specifying measures and chain-of-custody protocols to maintain the integrity and forensic validity of digital evidence.",
    url: "https://www.iso.org/standard/44381.html",
    citation: "ISO/IEC 27037:2012 Information technology — Security techniques"
  },
  {
    title: "RFC 3227: Guidelines for Evidence Collection and Archiving",
    category: "standards",
    authorOrOrg: "Internet Engineering Task Force (IETF)",
    description: "Canonical standard establishing the digital forensic Order of Volatility: registers/cache, routing tables/ARP cache/process tables, kernel statistics/memory, temporary file systems, disk, remote logging/monitoring, and physical topology/media.",
    url: "https://datatracker.ietf.org/doc/html/rfc3227",
    citation: "Brezinski, D., & Killalea, T. (2002). RFC 3227"
  },
  {
    title: "Locard's Exchange Principle",
    category: "standards",
    authorOrOrg: "Dr. Edmond Locard (Forensic Pioneer)",
    description: "Foundational tenet of forensic science: 'Every contact leaves a trace.' In digital systems, any interaction between suspect, victim, machine, or network invariably deposits or modifies digital artifacts.",
    citation: "Locard, E. (1934). La police et les méthodes scientifiques"
  },
  {
    title: "Electronic Crime Scene Investigation: A Guide for First Responders (Second Edition)",
    category: "standards",
    authorOrOrg: "U.S. National Institute of Justice (NIJ)",
    description: "Comprehensive operational manual outlining immediate responder protocols, electronic device handling, scene perimeter containment, and volatile power considerations.",
    url: "https://www.ojp.gov/pdffiles1/nij/219941.pdf",
    citation: "NIJ Special Report NCJ 219941 (2008)"
  },
  {
    title: "ACPO Good Practice Guide for Digital Evidence",
    category: "standards",
    authorOrOrg: "Association of Chief Police Officers (UK)",
    description: "Four core principles for evidence handling: (1) no action should change data, (2) if unavoidable, person must be competent and explain impact, (3) create audit trail of all processes, (4) officer in charge has responsibility.",
    citation: "ACPO Digital Evidence Guidelines v5"
  },

  // Tooling & Software
  {
    title: "Kali Linux Forensics Mode & Live Environment",
    category: "tools",
    authorOrOrg: "OffSec / Kali Linux Development Team",
    description: "Live forensic distribution booted with kernel parameters ensuring no auto-mounting of connected partitions and no utilization of internal swap space (zero-write guarantee).",
    url: "https://www.kali.org/docs/general-use/kali-linux-forensics-mode/",
    citation: "OffSec Documentation: kali-tools-forensics & live bootloader configuration"
  },
  {
    title: "The Sleuth Kit (TSK) Command-Line Forensic Suite",
    category: "tools",
    authorOrOrg: "Brian Carrier",
    description: "Open-source forensic library and utilities for media management, partition analysis (mmls), filesystem metadata analysis (fsstat), directory browsing (fls), inode inspection (istat), and file content extraction (icat).",
    url: "https://www.sleuthkit.org/sleuthkit/",
    citation: "Carrier, B. (2005). File System Forensic Analysis. Addison-Wesley"
  },
  {
    title: "GNU ddrescue & NIST Computer Forensic Tool Testing (CFTT)",
    category: "tools",
    authorOrOrg: "GNU Project / Antonio Diaz Diaz & NIST",
    description: "Specialized data recovery copying tool using intelligent mapfile algorithms for sector-by-sector drive acquisition, tested against NIST CFTT specifications for bit-stream disk imaging accuracy.",
    url: "https://www.gnu.org/software/ddrescue/ddrescue.html",
    citation: "NIST CFTT Disk Imaging Specification Test Results"
  },
  {
    title: "FTK Imager (Command-Line & Desktop Forensic Acquisition)",
    category: "tools",
    authorOrOrg: "Exterro / AccessData",
    description: "Industry-standard forensic imaging utility for acquiring raw dd, E01 (Expert Witness Format), and SMART images with embedded MD5 and SHA-1/SHA-256 cryptographic verification.",
    url: "https://www.exterro.com/ftk-imager",
    citation: "AccessData / Exterro FTK Imager Technical Documentation"
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
  {
    title: "Volatility 3 Memory Forensics Framework",
    category: "tools",
    authorOrOrg: "The Volatility Foundation",
    description: "Advanced Python-based framework for extracting volatile memory artifacts from RAM dumps (processes, DLLs, active network sockets, injected code, cached credentials).",
    url: "https://github.com/volatilityfoundation/volatility3",
    citation: "Volatility Foundation Documentation and Architecture Guides"
  },
  {
    title: "Wireshark & Libpcap Network Analysis Engine",
    category: "tools",
    authorOrOrg: "Wireshark Foundation",
    description: "Protocol analysis and deep packet inspection suite for capturing and decoding pcap/pcapng forensic traces across Ethernet, IP, TCP, UDP, TLS, and application layers.",
    url: "https://www.wireshark.org/docs/",
    citation: "Wireshark User's Guide & Packet Capture File Format Specifications"
  },

  // Linux & System Specifications
  {
    title: "Filesystem Hierarchy Standard (FHS 3.0)",
    category: "linux",
    authorOrOrg: "Linux Foundation",
    description: "Standard defines the directory structure and directory contents in Linux distributions, delineating volatile state paths (/proc, /sys), system logs (/var/log), configurations (/etc), and device nodes (/dev).",
    url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html",
    citation: "Linux Foundation Filesystem Hierarchy Standard version 3.0 (2015)"
  },
  {
    title: "Linux System Manuals & Core Forensics Utilities (man7.org)",
    category: "linux",
    authorOrOrg: "Michael Kerrisk (Linux man-pages maintainer)",
    description: "Authoritative specifications for: mount(8), losetup(8), lsblk(8), blockdev(8), fdisk(8), find(1), grep(1), stat(1), script(1), ps(1), ss(8), ip(8), lsof(8), and journalctl(1).",
    url: "https://man7.org/linux/man-pages/",
    citation: "Linux Kernel Organization: The Linux man-pages project"
  },
  {
    title: "RFC 5737: IPv4 Address Blocks Reserved for Documentation",
    category: "linux",
    authorOrOrg: "Internet Engineering Task Force (IETF)",
    description: "Specifies three IPv4 unicast address blocks reserved specifically for documentation and educational examples to prevent collision with operational networks: TEST-NET-1 (192.0.2.0/24), TEST-NET-2 (198.51.100.0/24), and TEST-NET-3 (203.0.113.0/24).",
    url: "https://datatracker.ietf.org/doc/html/rfc5737",
    citation: "Arkko, J., Cotton, M., & Vegoda, L. (2010). RFC 5737"
  },
  {
    title: "RFC 3849: IPv6 Address Prefix Reserved for Documentation",
    category: "linux",
    authorOrOrg: "Internet Engineering Task Force (IETF)",
    description: "Allocates the 2001:db8::/32 IPv6 prefix exclusively for documentation, academic case studies, and configuration guides.",
    url: "https://datatracker.ietf.org/doc/html/rfc3849",
    citation: "Huston, G., Lord, A., & Smith, P. (2004). RFC 3849"
  },

  // Case Studies & Incident Analysis
  {
    title: "Philippine COMELEC 'Comeleak' Voter Database Breach (2016)",
    category: "cases",
    authorOrOrg: "National Privacy Commission (NPC) / CERT-PH",
    description: "Largest government data breach in Philippine history, where 55+ million voter records and biometric hashes were exfiltrated via SQL injection. Cited as primary casework on perimeter security, database logging, and chain-of-custody.",
    citation: "NPC CID Case No. 16-001 (National Privacy Commission Decision, 2017)"
  },
  {
    title: "WVSU MIS Network Intrusion Forensic Incident Report (2016)",
    category: "cases",
    authorOrOrg: "WVSU Management Information System (MIS) / CICT",
    description: "Real-world university incident study examining unauthorized access vectors, compromised web server access logs, pivot points, and incident response containment protocols.",
    citation: "CIT 245 Institutional Case Study Archives, West Visayas State University"
  },
  {
    title: "Anthropic Threat Intelligence: GTG-1002 AI Swarm Threat Vector (2026)",
    category: "cases",
    authorOrOrg: "Anthropic Security Research & Threat Intelligence",
    description: "Detailed forensic post-mortem of automated AI agent swarm exploitation targeting infrastructure, credential spraying, and autonomous lateral movement.",
    citation: "Anthropic Security Advisory & Forensic Threat Intelligence Report (2026)"
  },
  {
    title: "Hugging Face Model Hub Repository Breach & Token Compromise (2026)",
    category: "cases",
    authorOrOrg: "Hugging Face Security Team & Independent Forensics",
    description: "Forensic examination of compromised developer access tokens, supply chain dependency injection, and ephemeral container tampering detection.",
    citation: "Hugging Face Incident Response & Technical Post-Mortem (2026)"
  },
];

export const AboutPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReferences =
    activeCategory === 'all'
      ? MASTER_REFERENCES
      : MASTER_REFERENCES.filter((ref) => ref.category === activeCategory);

  return (
    <div className="py-6 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[{ label: 'CIT 245', href: '#/' }, { label: 'Attribution & References', current: true }]}
        backHref="#/"
        backLabel="Course Overview"
      />

      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 p-8 sm:p-12 shadow-xl dark:shadow-2xl transition-colors">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            {/* Official Institutional Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs shadow-xs">
              <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-950 p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src="./assets/wvsu-cict-emblem.svg"
                  alt="WVSU CICT Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">West Visayas State University</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-medium">College of ICT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Course Attribution &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                Primary Documentation
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Authorized academic courseware recreation for <strong className="text-slate-950 dark:text-white">CIT 245 Cyberforensics</strong>. This page establishes course authorship attribution, academic authorization, and a consolidated repository of all primary standards, legal frameworks, and tool manuals cited across the curriculum.
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
          <span>Academic Authorship & Project Roles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original Course Author Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl flex flex-col justify-between space-y-5 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-800 dark:text-cyan-400 font-bold block">
                    Original Courseware & Lecture Author
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {COURSE_METADATA.originalInstructor.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Faculty Instructor at the <strong className="text-slate-950 dark:text-white">{COURSE_METADATA.college}</strong>, {COURSE_METADATA.institution}. Conceptualized and authored the original CIT 245 cyberforensics lecture syllabus, Reveal.js presentation materials, laboratory exercises, and incident case studies.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COURSE_METADATA.originalInstructor.email}`}
                  className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline truncate"
                >
                  {COURSE_METADATA.originalInstructor.email}
                </a>
              </div>

              {COURSE_METADATA.originalInstructor.github && (
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <a
                    href={COURSE_METADATA.originalInstructor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline truncate"
                  >
                    {COURSE_METADATA.originalInstructor.github}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <a
                  href={COURSE_METADATA.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline truncate"
                >
                  {COURSE_METADATA.sourceUrl}
                </a>
              </div>
            </div>
          </div>

          {/* Application Developer Card */}
          <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl flex flex-col justify-between space-y-5 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-400 border border-teal-200 dark:border-teal-800/60 shadow-xs">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-teal-800 dark:text-teal-400 font-bold block">
                    Software Architecture & Academic Recreation
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {COURSE_METADATA.studentDeveloper.name}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Student developer, <strong className="text-slate-950 dark:text-white">{COURSE_METADATA.studentDeveloper.section}</strong>, {COURSE_METADATA.college}, {COURSE_METADATA.institution}. Developed the modern React/TypeScript presentation application, dual study modes (Reader & Slide Deck), keyboard shortcuts, and full-text curriculum search engine.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center justify-between">
                <span>Academic Role:</span>
                <span className="font-semibold text-slate-900 dark:text-slate-200">{COURSE_METADATA.studentDeveloper.role}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Institution:</span>
                <span className="text-slate-700 dark:text-slate-300">WVSU Main Campus, Iloilo City</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Project Scope:</span>
                <span className="text-slate-700 dark:text-slate-300">100% Content Fidelity (Zero Omissions)</span>
              </div>
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
              Course References & Primary Documentation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              All external sources, RFCs, NIST standards, Philippine statutes, Linux manual pages, and tool references cited in lecture slides are centrally curated below.
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
              All ({MASTER_REFERENCES.length})
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
              onClick={() => setActiveCategory('tools')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'tools'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Forensic Tools
            </button>
            <button
              onClick={() => setActiveCategory('linux')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'linux'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Linux & RFCs
            </button>
            <button
              onClick={() => setActiveCategory('cases')}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === 'cases'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Case Studies
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
                    {ref.category === 'tools' && 'Forensic Software'}
                    {ref.category === 'linux' && 'Linux / RFC Spec'}
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

      {/* Academic Disclaimer & Fair Use */}
      <div className="p-7 rounded-3xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <span>Academic Fair Use, Content Fidelity, & Institutional Purpose</span>
        </h3>
        <p>
          This web application was engineered strictly as an educational study interface for students of West Visayas State University College of Information and Communications Technology. All content, technical terminology, terminal commands, tables, and incident case studies from the canonical course site (<code>{COURSE_METADATA.sourceUrl}</code>) have been preserved with 100% fidelity.
        </p>
        <p>
          The application enhances the original Reveal.js slide deck format with dual-mode responsive viewing (Study Reader mode for continuous reading and Slide Deck mode for presentation), full-text search with instant highlight matching, single-click command copying, and an uncluttered visual hierarchy designed for maximum legibility.
        </p>
      </div>

      {/* Curriculum Quick Navigation */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Active Curriculum Directory ({ALL_TOPICS.reduce((acc, t) => acc + t.totalSlides, 0)} Slides across {ALL_TOPICS.length} Topics)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {ALL_TOPICS.map((topic) => (
            <a
              key={topic.id}
              href={`#/topic/${topic.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 hover:bg-slate-50 dark:hover:bg-slate-850 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-cyan-800 dark:text-cyan-400">
                  Topic {topic.topicNumber}
                </span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  {topic.totalSlides} slides
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {topic.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                {topic.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

