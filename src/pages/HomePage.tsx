import React, { useState } from 'react';
import {
  BookOpen,
  MonitorPlay,
  Search,
  Calendar,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { ALL_TOPICS, COURSE_METADATA, MIDTERM_EXAM_COVERAGE } from '../content';

interface HomePageProps {
  onSelectTopic: (topicId: string, mode?: 'reader' | 'slides') => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTopic, onOpenSearch }) => {
  const [showExamDetails, setShowExamDetails] = useState(false);

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section with Official WVSU CICT Branding */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-950 dark:to-slate-950 p-8 sm:p-12 shadow-xl dark:shadow-2xl transition-colors">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
          <div className="max-w-2xl space-y-4">
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-950 p-0.5 shrink-0">
                <img src="./assets/wvsu-cict-emblem.svg" alt="WVSU CICT" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">WVSU CICT</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span>Main Campus, Iloilo City</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              CIT 245{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                Cyberforensics
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Complete lecture presentations and study courseware for digital forensics, incident response, evidence acquisition, and modern cybercrime investigation.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectTopic('topic-01', 'reader')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>Start Topic 00 (Linux Essentials)</span>
              </button>

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

      {/* Midterm Exam Notice */}
      <section className="rounded-2xl border border-amber-300 dark:border-amber-900/50 bg-gradient-to-r from-amber-50 via-white to-amber-50 dark:from-amber-950/30 dark:via-slate-900/60 dark:to-slate-900/60 p-5 shadow-md transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800/60">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  {MIDTERM_EXAM_COVERAGE.title}
                </h2>
                <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800 text-[10px] font-bold">
                  Topics 00, 01, 04, 05
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Midterm examination exclusively covers the four active topics presented below.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowExamDetails(!showExamDetails)}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-900/50 text-xs font-medium transition-colors shadow-xs"
          >
            {showExamDetails ? 'Close Guide' : 'Exam Study Guide'}
          </button>
        </div>

        {showExamDetails && (
          <div className="mt-5 pt-5 border-t border-amber-200 dark:border-slate-800/80 space-y-4 text-xs text-slate-700 dark:text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MIDTERM_EXAM_COVERAGE.coveredTopics.map((cov) => (
                <div key={cov.number} className="p-3.5 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-bold text-xs">
                    <span className="font-mono text-[11px] px-1.5 py-0.2 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400">
                      Topic {cov.number}
                    </span>
                    <span>{cov.title}</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc text-[11px]">
                    {cov.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-amber-100/60 dark:bg-amber-950/25 border border-amber-300 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs">
              <strong className="block font-semibold mb-1 text-amber-800 dark:text-amber-300">
                Recommended Study Tips:
              </strong>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-300 text-[11px]">
                {MIDTERM_EXAM_COVERAGE.preparationTips.slice(0, 3).map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Curriculum Topics Grid */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Course Topics
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Select any topic to view in Study Reader or Presentation mode.
            </p>
          </div>
          <span className="text-xs font-mono text-cyan-800 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-300 dark:border-cyan-800/60 font-semibold">
            4 Topics • 170 Slides
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ALL_TOPICS.map((topic) => (
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
