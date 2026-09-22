# BSIT 4B NIS/ST • Academic Courseware Hub

> **West Visayas State University (WVSU) — College of Information and Communications Technology (CICT)**  
> Main Campus, La Paz, Iloilo City, Philippines  
> Bachelor of Science in Information Technology (BSIT 4B) • Network and Information Security / Software Technologies

---

## 🏛️ Courses & Academic Attribution

### 1. CIT 245 — Cyberforensics (3 Units)
- **Faculty Instructor**: **Prof. Mark Joseph J. Solidarios**  
  *Faculty, College of Information and Communications Technology*  
  *Canonical Lecture Portal*: [https://wvsu-cict-cit245.netlify.app/](https://wvsu-cict-cit245.netlify.app/)  
  *Contact*: `mjsolidarios@wvsu.edu.ph`
- **Curriculum Scope**: 5 Topics • 200 Slides
  - **Topic 00**: *Linux Essentials for Digital Forensics* (37 slides)
  - **Topic 01**: *Intro to Cyberforensics* (18 slides)
  - **Topic 04**: *Kali Linux & Technical Concepts* (55 slides)
  - **Topic 05**: *Crime Scene Investigation* (60 slides)
  - **Topic 06**: *Digital Evidence Acquisition* (30 slides)

### 2. CIT 220 — Information Assurance and Security 2 (3 Units)
- **Faculty Instructor**: **Prof. Chin Ann Feliprada**  
  *Faculty, College of Information and Communications Technology*  
  *Contact*: `chinann.feliprada@wvsu.edu.ph`
- **Curriculum Scope**: 6 Units • 279 Slides
  - **Unit 01**: *Foundations of Advanced Security & Threat Modeling* (56 slides)
  - **Unit 02**: *Advanced Network and System Security (IDPS, SIEM & VPNs)* (38 slides)
  - **Unit 02.1**: *Zero Trust Architecture (ZTA)* (39 slides)
  - **Unit 02.2**: *Network Segmentation & Microsegmentation* (29 slides)
  - **Unit 03**: *Identity and Access Management (IAM)* (32 slides)
  - **Unit 04**: *Cloud Security & DevSecOps* (85 slides)

---

## 👨‍💻 Platform Engineering & Architecture

- **Application Architect & Developer**: **Benedict Neil D. Bacud**  
  *BS in Information Technology (BSIT 4B NIS/ST), WVSU CICT*

---

## ✨ Features & Enhancements

1. **Multi-Course Switching Engine**:
   - Seamlessly switch between **CIT 245 (Cyberforensics)** and **CIT 220 (IAS 2)** with state preserved in `localStorage`.
   - Accessible via the top navigation bar dropdown or the home dashboard course tabs.
2. **Total of 479 Slides across 11 Comprehensive Units/Topics**:
   - 100% curriculum fidelity extracted from official faculty presentation materials.
3. **Dual Viewing Experiences**:
   - **Study Reader Mode**: Clean document layout with copyable commands, sticky Table of Contents, responsive embeds, zoomable media, and caution notes.
   - **Interactive Slide Deck**: Reveal-style presentation mode with keyboard arrows, spacebar, full-screen toggle (<kbd>F</kbd>), and slide scrubber.
4. **Day (Light) & Night (Dark) Mode**:
   - Instant theme switching with local storage persistence and high-contrast color schemes.
5. **Colorful Syntax Highlighting for Terminal Commands**:
   - High-contrast tokens for forensic and networking commands, flags, arguments, paths, and pipes.
   - **1-Click Clean Clipboard Copy**: Copies raw commands directly without prompt symbols or styling artifacts.
6. **Mobile-Optimized Landscape Presentation**:
   - Enforced landscape aspect ratio on smartphones and tablets.
   - Left / Right tap zones and horizontal swipe gestures to advance or step back through slides.
7. **Global Search Modal (<kbd>Ctrl</kbd> + <kbd>K</kbd>)**:
   - Instant fuzzy search across commands, terms, filesystems, case studies, and statutes with course indicator badges.
8. **Consolidated Academic References & Documentation Directory (`#/about`)**:
   - Index of 20+ primary standards (NIST SP 800-207, NIST SP 800-86, ISO/IEC 27001, RFC 3227, RA 10175, SABSA, STRIDE, TSK, Autopsy, etc.).

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Installation & Run
```bash
# Clone the repository
git clone https://github.com/ben-bacs/wvsu-cit245-cyberforensics.git
cd wvsu-cit245-cyberforensics

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment to GitHub Pages

This project includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and publishes the production bundle automatically whenever changes are pushed to `main`.

---

## ⚖️ Academic Disclaimer & License

This project is an authorized educational recreation created for study, revision, and accessibility enhancement purposes for CICT BSIT students at West Visayas State University. All lecture contents, syllabi, pedagogical structures, and presentation materials remain the intellectual property of their respective course instructors (**Prof. Mark Joseph J. Solidarios**, **Prof. Chin Ann Feliprada**) and **WVSU CICT**.
