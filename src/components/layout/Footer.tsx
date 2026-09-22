import React from 'react';
import { ExternalLink, User, GraduationCap, Shield } from 'lucide-react';
import { COURSE_METADATA } from '../../content';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 px-4 sm:px-6 lg:px-8 mt-20 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Course Info & Official WVSU CICT Logo */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img
                src="./assets/wvsu-cict-emblem.svg"
                alt="WVSU CICT Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                BSIT 4B NIS/ST Courseware Hub
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                WVSU CICT Main Campus • Iloilo City
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Academic courseware platform for Network & Information Security / Software Technologies, providing interactive lecture slides and study guides.
          </p>
          <div className="pt-1 flex flex-col gap-1 text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Active Curriculum:</span>
            <span className="text-slate-500 dark:text-slate-400">• CIT 245: Cyberforensics (Prof. Mark Joseph J. Solidarios)</span>
            <span className="text-slate-500 dark:text-slate-400">• CIT 220: IAS 2 (Prof. Chin Ann Feliprada)</span>
          </div>
        </div>

        {/* Academic Course Material Authorship */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Faculty Instructors & Course Authors</span>
          </div>
          <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <strong className="text-slate-950 dark:text-white">Prof. Mark Joseph J. Solidarios</strong>
              <p className="text-[11px] text-slate-500">Instructor for CIT 245 Cyberforensics • WVSU CICT</p>
            </div>
            <div>
              <strong className="text-slate-950 dark:text-white">Prof. Chin Ann Feliprada</strong>
              <p className="text-[11px] text-slate-500">Instructor for CIT 220 IAS 2 • WVSU CICT</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 pt-1">
            Authorized academic recreation for study and research. Intellectual property belongs to respective course instructors and WVSU CICT.
          </p>
        </div>

        {/* Student Developer Identity */}
        <div className="space-y-2.5 p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            <User className="w-4 h-4" />
            <span>Application Developer & Architect</span>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 space-y-0.5">
            <p className="font-semibold text-slate-950 dark:text-white">
              Benedict Neil D. Bacud
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              BSIT 4B NIS/ST
            </p>
            <p className="text-[11px] text-slate-500 italic">
              Platform Engineering, Full-Stack Architecture & Content Curation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} BSIT 4B NIS/ST • West Visayas State University College of ICT.
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
            Course Overview
          </a>
        </div>
      </div>
    </footer>
  );
};
