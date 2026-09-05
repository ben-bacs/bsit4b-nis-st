# WVSU CICT • CIT 245 Cyberforensics Lecture Platform

> **Authorized Academic Recreation of the CIT 245 Cyberforensics Lecture Courseware**  
> West Visayas State University (WVSU) — College of Information and Communications Technology (CICT)  
> Main Campus, Iloilo City, Philippines

---

## 🏛️ Course & Academic Attribution

- **Course**: CIT 245 — Cyberforensics (3 Units)
- **Institution**: [College of Information and Communications Technology](https://cict.wvsu.edu.ph/), West Visayas State University Main Campus, La Paz, Iloilo City, Philippines
- **Courseware Author & Faculty Instructor**: **Prof. Mark Joseph J. Solidarios**  
  *Faculty, College of Information and Communications Technology*  
  *Canonical Lecture Portal*: [https://wvsu-cict-cit245.netlify.app/](https://wvsu-cict-cit245.netlify.app/)  
  *Contact*: `markjoseph.solidarios@wvsu.edu.ph`
- **Application Architecture & Development**: **Benedict Neil D. Bacud**  
  *BS in Information Technology (BSIT 4B), WVSU CICT*

---

## ✨ Features & Enhancements

1. **100% Curriculum Content Fidelity Across All 4 Topics (170 Slides)**:
   - **Topic 00**: *Linux Essentials for Digital Forensics* (37 slides)
   - **Topic 01**: *Intro to Cyberforensics* (18 slides)
   - **Topic 04**: *Kali Linux & Technical Concepts* (55 slides)
   - **Topic 05**: *Crime Scene Investigation* (60 slides)
2. **Dual Viewing Experiences**:
   - **Study Reader Mode**: Formatted document layout with copyable terminal commands, sticky Table of Contents, responsive video embeds, zoomable media, and warning notes.
   - **Interactive Slide Deck**: Reveal-style presentation mode with keyboard arrows, spacebar, full-screen toggle (<kbd>F</kbd>), and slide scrubber.
3. **Day (Light) & Night (Dark) Mode**:
   - Instant theme switching with local storage persistence and high-contrast color schemes.
4. **Colorful Syntax Highlighting for Terminal Commands**:
   - High-contrast color tokens for forensic commands, flags, arguments, paths, and pipes.
   - **1-Click Clean Clipboard Copy**: Copies raw commands directly without prompt symbols or styling artifacts.
5. **Mobile-Optimized Landscape Presentation**:
   - Enforced landscape aspect ratio on smartphones and tablets.
   - Left / Right tap zones and horizontal swipe gestures to advance or step back through slides.
6. **Global Search Modal (<kbd>Ctrl</kbd> + <kbd>K</kbd>)**:
   - Instant fuzzy search across commands, terms, filesystems, case studies, and statutes.
7. **Consolidated Academic References & Documentation Directory (`#/about`)**:
   - Index of 19+ primary standards (NIST SP 800-86, ISO/IEC 27037, RFC 3227, RA 10175, TSK, Autopsy, etc.).

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Installation & Run
```bash
# Clone the repository
git clone https://github.com/benedictneil/wvsu-cit245-cyberforensics.git
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

1. Go to your repository settings on GitHub: **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push to `main`, and GitHub Actions will automatically deploy the site.

---

## ⚖️ Academic Disclaimer & License

This project is an authorized educational recreation created for study, revision, and accessibility enhancement purposes for CICT BSIT students at West Visayas State University. All lecture contents, syllabi, pedagogical structures, and presentation materials remain the intellectual property of **Prof. Mark Joseph J. Solidarios** and **WVSU CICT**.

