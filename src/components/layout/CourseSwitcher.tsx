import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, GraduationCap, ShieldCheck, BookOpen } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';

interface CourseSwitcherProps {
  onCourseChange?: (courseId: string) => void;
  variant?: 'navbar' | 'hero';
}

export const CourseSwitcher: React.FC<CourseSwitcherProps> = ({ onCourseChange, variant = 'navbar' }) => {
  const { currentCourse, currentCourseId, setCourseId, allCourses } = useCourse();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (courseId: string) => {
    setCourseId(courseId);
    setIsOpen(false);
    if (onCourseChange) {
      onCourseChange(courseId);
    }
  };

  if (variant === 'hero') {
    return (
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
        {allCourses.map((c) => {
          const isSelected = c.id === currentCourseId;
          const totalSlides = c.topics.reduce((acc, t) => acc + t.totalSlides, 0);
          return (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all ${
                isSelected
                  ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white font-bold shadow-md border border-slate-200 dark:border-slate-700'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-cyan-500 ring-4 ring-cyan-500/20' : 'bg-slate-400'}`} />
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono">{c.code}</span>
                  <span>•</span>
                  <span>{c.shortTitle}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-normal">
                  {c.topics.length} Units ({totalSlides} slides) • {c.instructor.name.replace('Prof. ', '')}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-750 text-xs font-semibold transition-all shadow-xs"
        aria-label="Switch Active Course"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-500 ring-2 ring-cyan-500/30" />
        <span className="font-mono text-cyan-700 dark:text-cyan-400 font-bold">{currentCourse.code}</span>
        <span className="hidden sm:inline text-slate-400 dark:text-slate-500">|</span>
        <span className="hidden sm:inline truncate max-w-[130px]">{currentCourse.shortTitle}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:left-0 sm:right-auto mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-slate-400">
              BSIT 4B Curriculum Courses
            </span>
          </div>

          <div className="space-y-1">
            {allCourses.map((course) => {
              const isSelected = course.id === currentCourseId;
              const totalSlides = course.topics.reduce((acc, t) => acc + t.totalSlides, 0);

              return (
                <button
                  key={course.id}
                  onClick={() => handleSelect(course.id)}
                  className={`w-full flex items-start justify-between p-3 rounded-xl text-left transition-colors ${
                    isSelected
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-800/60'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-transparent'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-cyan-800 dark:text-cyan-400 px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950/80">
                        {course.code}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        {course.shortTitle}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {course.title}
                    </p>

                    <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {course.instructor.name}
                      </span>
                      <span>•</span>
                      <span>{course.topics.length} topics ({totalSlides} slides)</span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
