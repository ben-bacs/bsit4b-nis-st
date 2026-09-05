import React, { useState } from 'react';
import { Search, Layers, Info, Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { ALL_TOPICS } from '../../content';
import { useTheme } from '../../context/ThemeContext';

interface NavbarProps {
  onOpenSearch: () => void;
  currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Official WVSU CICT Logo & Brand */}
          <a href="#/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 p-1.5 shadow-md shadow-cyan-950/20 group-hover:border-cyan-500/60 transition-colors">
              <img
                src="./assets/wvsu-cict-emblem.svg"
                alt="WVSU CICT Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  CIT 245 Cyberforensics
                </span>
                <span className="hidden xs:inline-block text-[10px] font-semibold tracking-wider px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800/60">
                  CICT
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none mt-0.5">
                WVSU Main Campus • Iloilo City
              </p>
            </div>
          </a>

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

            {/* Topics Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors">
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Topics</span>
              </button>
              <div className="absolute left-0 mt-1 w-72 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 hidden group-hover:block transition-all z-50">
                {ALL_TOPICS.map((t) => (
                  <a
                    key={t.id}
                    href={`#/topic/${t.id}`}
                    className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group/item"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                      <span>Topic {t.topicNumber}</span>
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
              <span className="hidden sm:inline">Search lecture...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-3">
          <div className="flex flex-col space-y-1">
            <a
              href="#/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 font-medium"
            >
              Course Overview
            </a>
            <a
              href="#/midterm"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 font-medium"
            >
              Midterm Exam Coverage
            </a>
            <a
              href="#/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 font-medium"
            >
              Attribution & References
            </a>

            {/* Mobile Theme Toggle Button */}
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors font-medium text-left"
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
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-150 dark:bg-slate-800 text-slate-500 uppercase">
                {theme}
              </span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2">
              Topics
            </p>
            <div className="space-y-1">
              {ALL_TOPICS.map((t) => (
                <a
                  key={t.id}
                  href={`#/topic/${t.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                >
                  <span className="truncate">Topic {t.topicNumber}: {t.title}</span>
                  <span className="text-xs text-slate-500 font-mono">{t.totalSlides} slides</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

