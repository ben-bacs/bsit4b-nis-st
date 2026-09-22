import React, { useState, useEffect } from 'react';
import { Search, Layers, Info, Menu, X, Calendar, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCourse } from '../../context/CourseContext';
import { CourseSwitcher } from './CourseSwitcher';

interface NavbarProps {
  onOpenSearch: () => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currentCourse, setCourseId } = useCourse();

  // Close mobile navigation drawer whenever hash route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Lock background body scrolling and bind Escape key while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Official BSIT 4B NIS/ST Brand & Course Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-750 p-1.5 shadow-md shadow-cyan-950/20 group-hover:border-cyan-500/60 transition-colors">
                <img
                  src="./assets/wvsu-cict-emblem.svg"
                  alt="WVSU CICT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden xs:block">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    BSIT 4B NIS/ST
                  </span>
                  <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/60">
                    CICT
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none mt-0.5">
                  WVSU Main Campus • Iloilo
                </p>
              </div>
            </a>

            {/* Course Switcher Pill */}
            <div className="hidden sm:block">
              <CourseSwitcher />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <a
              href="#/"
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                currentPath === '' || currentPath === '/'
                  ? 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-slate-800/80 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              Course Overview
            </a>

            {/* Topics Dropdown for Current Course */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{currentCourse.code} Topics</span>
              </button>
              <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 hidden group-hover:block transition-all z-50">
                <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 mb-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">
                    {currentCourse.title}
                  </span>
                </div>
                {currentCourse.topics.map((t) => (
                  <a
                    key={t.id}
                    href={`#/topic/${t.id}`}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                      <span>Unit / Topic {t.topicNumber}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {t.totalSlides} slides
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover/item:text-cyan-600 dark:group-hover/item:text-white truncate mt-0.5">
                      {t.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#/midterm"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                currentPath.startsWith('/midterm')
                  ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-900/60 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Exam Coverage</span>
            </a>

            <a
              href="#/reviewer"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                currentPath.startsWith('/reviewer')
                  ? 'text-cyan-800 dark:text-cyan-300 bg-cyan-100/80 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-800 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>CIT 220 Reviewer</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-600 text-white font-mono font-bold">
                Exam
              </span>
            </a>

            <a
              href="#/about"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                currentPath.startsWith('/about')
                  ? 'text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-slate-800/80 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <Info className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Attribution & References</span>
            </a>
          </nav>

          {/* Search Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Day / Night Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-800 transition-colors shadow-xs"
              title={theme === 'dark' ? 'Switch to Day (Light) Mode' : 'Switch to Night (Dark) Mode'}
              aria-label="Toggle day / night theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800 transition-colors text-xs sm:text-sm font-medium"
              title="Search curriculum (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden sm:inline">Search courses...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-rose-600 dark:text-rose-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE SLIDE-OVER DRAWER WITH BACKDROP & ACCESSIBILITY */}
      {mobileMenuOpen && (
        <>
          {/* Semi-transparent Backdrop: click to close */}
          <div
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs z-50 md:hidden transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Container: Always capped to viewport, independently scrollable */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white dark:bg-slate-950 z-[60] shadow-2xl flex flex-col md:hidden border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-150"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header with Prominent Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                  <img src="./assets/wvsu-cict-emblem.svg" alt="WVSU CICT" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-extrabold text-sm text-slate-900 dark:text-white block leading-tight">
                    BSIT 4B NIS/ST
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    WVSU CICT Main Campus
                  </span>
                </div>
              </div>

              {/* Large, High-Contrast Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-200 hover:bg-rose-100 dark:bg-slate-800 dark:hover:bg-rose-950/60 text-slate-700 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 border border-slate-300 dark:border-slate-700 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Clean Mobile Course Switcher */}
              <div className="space-y-1.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Active Course
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setCourseId('cit245');
                      setMobileMenuOpen(false);
                      window.location.hash = '#/';
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      currentCourse.id === 'cit245'
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-600 shadow-sm'
                        : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800'
                    }`}
                  >
                    <span className="block font-mono text-xs font-bold">CIT 245</span>
                    <span className="block text-[10px] truncate">Cyberforensics</span>
                  </button>

                  <button
                    onClick={() => {
                      setCourseId('cit220');
                      setMobileMenuOpen(false);
                      window.location.hash = '#/';
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      currentCourse.id === 'cit220'
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-600 shadow-sm'
                        : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-800'
                    }`}
                  >
                    <span className="block font-mono text-xs font-bold">CIT 220</span>
                    <span className="block text-[10px] truncate">IAS 2</span>
                  </button>
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="space-y-1">
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2 mb-1">
                  Main Navigation
                </span>

                <a
                  href="#/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    currentPath === '' || currentPath === '/'
                      ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-200 dark:border-cyan-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Course Overview</span>
                </a>

                <a
                  href="#/midterm"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    currentPath.startsWith('/midterm')
                      ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Exam Coverage & Syllabus</span>
                </a>

                <a
                  href="#/reviewer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    currentPath.startsWith('/reviewer')
                      ? 'bg-cyan-100 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-200 font-bold border border-cyan-300 dark:border-cyan-700'
                      : 'text-cyan-800 dark:text-cyan-300 bg-cyan-50/70 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-950'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>CIT 220 Reviewer</span>
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-600 text-white font-mono font-bold">
                    Practice
                  </span>
                </a>

                <a
                  href="#/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    currentPath.startsWith('/about')
                      ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 font-bold border border-cyan-200 dark:border-cyan-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <Info className="w-4 h-4 text-slate-500" />
                  <span>Attribution & References</span>
                </a>
              </div>

              {/* Day / Night Theme Toggle */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => toggleTheme()}
                  className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-4 h-4 text-amber-400" />
                        <span>Day Mode (Light)</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 text-cyan-600" />
                        <span>Night Mode (Dark)</span>
                      </>
                    )}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-500 uppercase border border-slate-200 dark:border-slate-700">
                    {theme}
                  </span>
                </button>
              </div>

              {/* Curriculum Units List */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
                  {currentCourse.code} Topics ({currentCourse.topics.length})
                </span>
                <div className="space-y-1">
                  {currentCourse.topics.map((t) => (
                    <a
                      key={t.id}
                      href={`#/topic/${t.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                    >
                      <span className="truncate pr-2 font-medium">Unit {t.topicNumber}: {t.title}</span>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono shrink-0">
                        {t.totalSlides} slides
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer with Explicit Big Close Button */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Close Navigation</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
