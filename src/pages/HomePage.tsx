import React, { useState } from 'react';
import {
  BookOpen,
  MonitorPlay,
  Search,
  Calendar,
  Layers,
  ArrowRight,
  Shield,
  UserCheck,
} from 'lucide-react';
import { useCourse } from '../context/CourseContext';
import { CourseSwitcher } from '../components/layout/CourseSwitcher';

interface HomePageProps {
  onSelectTopic: (topicId: string, mode?: 'reader' | 'slides') => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTopic, onOpenSearch }) => {
  const { currentCourse } = useCourse();
  const [showExamDetails, setShowExamDetails] = useState(false);

  const examCoverage = currentCourse.examCoverage;
  const totalSlides = currentCourse.topics.reduce((acc, t) => acc + t.totalSlides, 0);
  const firstTopic = currentCourse.topics[0];

  return (
    <div className="space-y-10 py-6 sm:py-8">
      {/* Platform Header & Course Switcher Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            WVSU CICT • Bachelor of Science in Information Technology
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            BSIT 4B NIS/ST Courseware Hub
          </h2>
        </div>

        {/* Hero Course Switcher */}
        <CourseSwitcher variant="hero" />
      </div>

      {/* Hero Section with Official WVSU CICT Branding */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 p-6 sm:p-10 shadow-xl dark:shadow-2xl transition-colors">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
          <div className="max-w-2xl space-y-4">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <div className="w-4 h-4 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-950 p-0.5 shrink-0">
                <img src="./assets/wvsu-cict-emblem.svg" alt="WVSU CICT" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">WVSU CICT</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold">{currentCourse.code}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {currentCourse.code}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                {currentCourse.shortTitle}
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {currentCourse.title}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {currentCourse.description}
            </p>

            {/* Instructor Credit Line */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-1 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400">
                <UserCheck className="w-3.5 h-3.5" />
              </div>
              <span>Faculty Instructor:</span>
              <strong className="text-slate-900 dark:text-white font-semibold">
                {currentCourse.instructor.name}
              </strong>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">WVSU CICT Main Campus</span>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {firstTopic && (
                <button
                  onClick={() => onSelectTopic(firstTopic.id, 'reader')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Unit {firstTopic.topicNumber} ({firstTopic.title})</span>
                </button>
              )}

              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-medium transition-colors shadow-xs"
              >
                <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Search (Ctrl+K)</span>
              </button>
            </div>
          </div>

          {/* Large Official WVSU CICT Emblem Display */}
          <div className="hidden md:flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shrink-0 shadow-xs">
            <div className="w-28 h-28 relative flex items-center justify-center p-2 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 shadow-inner">
              <img
                src="./assets/wvsu-cict-emblem.svg"
                alt="WVSU CICT Seal"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-3">College of ICT</span>
            <span className="text-[10px] text-slate-500">WVSU Main • Iloilo</span>
          </div>
        </div>
      </section>

      {/* Exam / Syllabus Coverage Guide */}
      {examCoverage && (
        <section className="rounded-2xl border border-amber-300 dark:border-amber-900/50 bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-amber-950/30 dark:via-slate-900/60 dark:to-slate-900/60 p-5 shadow-md transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800/60">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    {examCoverage.title}
                  </h2>
                  <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800 text-[10px] font-bold">
                    {currentCourse.code}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Academic syllabus guidelines and recommended study coverage for {currentCourse.code}.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowExamDetails(!showExamDetails)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-900/50 text-xs font-medium transition-colors shadow-xs"
            >
              {showExamDetails ? 'Close Guide' : 'Syllabus & Study Guide'}
            </button>
          </div>

          {showExamDetails && (
            <div className="mt-5 pt-5 border-t border-amber-200 dark:border-slate-800/80 space-y-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(examCoverage.coveredTopics || examCoverage.units || []).map((cov: any) => (
                  <div key={cov.number} className="p-3.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold text-xs">
                      <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400">
                        Unit {cov.number}
                      </span>
                      <span>{cov.title}</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc text-[11px]">
                      {cov.highlights?.map((h: string, i: number) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {examCoverage.preparationTips && (
                <div className="p-3 rounded-xl bg-amber-100/60 dark:bg-amber-950/25 border border-amber-300 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs">
                  <strong className="block font-semibold mb-1 text-amber-800 dark:text-amber-300">
                    Recommended Study Tips:
                  </strong>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                    {examCoverage.preparationTips.map((tip: string, idx: number) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Curriculum Topics Grid for Current Course */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {currentCourse.code} Course Topics
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select any topic or unit to view in Study Reader or Slide Deck mode.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-300 dark:border-cyan-800/60 font-semibold">
            {currentCourse.topics.length} Units • {totalSlides} Slides
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentCourse.topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700/80 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Topic Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 font-mono font-bold flex items-center justify-center text-xs">
                      {topic.topicNumber}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-150 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {topic.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {topic.totalSlides} slides
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-cyan-700 dark:text-cyan-400/80 font-medium mt-0.5">
                    {topic.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {topic.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {topic.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => onSelectTopic(topic.id, 'reader')}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Study Reader</span>
                </button>
                <button
                  onClick={() => onSelectTopic(topic.id, 'slides')}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-xs"
                >
                  <MonitorPlay className="w-3.5 h-3.5" />
                  <span>Slide Deck</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
