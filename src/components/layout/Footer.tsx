import React from 'react';
import { ExternalLink, User, GraduationCap } from 'lucide-react';
import { COURSE_METADATA } from '../../content';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Course Info & Official WVSU CICT Logo */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img
                src="./assets/wvsu-cict-emblem.svg"
                alt="WVSU CICT Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {COURSE_METADATA.code} — {COURSE_METADATA.title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                WVSU CICT Main Campus • Iloilo City
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Academic recreation of the lecture courseware for study and reference.
          </p>
          <div className="pt-1">
            <a
              href={COURSE_METADATA.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors font-medium"
            >
              <span>Canonical Lecture Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Academic Course Material Authorship */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Course Material Authorship</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Original lecture curriculum by <strong className="text-slate-950 dark:text-white">{COURSE_METADATA.originalInstructor.name}</strong>,{' '}
            {COURSE_METADATA.college}, {COURSE_METADATA.institution}.
          </p>
          <p className="text-[11px] text-slate-500">
            Authorized academic recreation for educational/school purposes. Not an official production portal of WVSU.
          </p>
        </div>

        {/* Student Developer Identity */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            <User className="w-4 h-4" />
            <span>Application Developer</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
            <p className="font-semibold text-slate-950 dark:text-white">
              {COURSE_METADATA.studentDeveloper.name}
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              {COURSE_METADATA.studentDeveloper.section}
            </p>
            <p className="text-[11px] text-slate-500 italic">
              {COURSE_METADATA.studentDeveloper.role}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} CIT 245 Cyberforensics. Course material property of the instructor & WVSU CICT.
        </p>
        <div className="flex items-center gap-4">
          <a href="#/about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Attribution & References
          </a>
          <span>•</span>
          <a href="#/midterm" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Exam Coverage
          </a>
          <span>•</span>
          <a href="#/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            All Topics
          </a>
        </div>
      </div>
    </footer>
  );
};
