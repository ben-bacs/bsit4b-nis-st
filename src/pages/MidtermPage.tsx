import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MIDTERM_EXAM_COVERAGE, ALL_TOPICS } from '../content';
import { Calendar, CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

interface MidtermPageProps {
  onSelectTopic: (topicId: string, mode?: 'reader' | 'slides') => void;
}

export const MidtermPage: React.FC<MidtermPageProps> = ({ onSelectTopic }) => {
  return (
    <div className="py-6 space-y-12">
      <Breadcrumbs
        items={[{ label: 'CIT 245', href: '#/' }, { label: 'Midterm Exam Coverage', current: true }]}
        backHref="#/"
        backLabel="Course Overview"
      />

      {/* Header */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800/80 text-amber-800 dark:text-amber-400 text-xs font-semibold">
          <Calendar className="w-4 h-4" />
          <span>CICT CIT 245 • Examination Guide</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {MIDTERM_EXAM_COVERAGE.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Detailed scope of topics, technical competencies, forensic workflows, and study recommendations for the CIT 245 Midterm Examination.
        </p>
      </div>

      {/* Covered Topics Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>Covered Topics in Midterms</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MIDTERM_EXAM_COVERAGE.coveredTopics.map((cov) => {
            const topicData = ALL_TOPICS.find((t) => t.topicNumber === cov.number);
            return (
              <div
                key={cov.number}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 font-mono font-bold text-xs">
                      Topic {cov.number}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {topicData?.totalSlides} slides
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{cov.title}</h3>

                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {cov.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => topicData && onSelectTopic(topicData.id, 'reader')}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Study Notes</span>
                  </button>
                  <button
                    onClick={() => topicData && onSelectTopic(topicData.id, 'slides')}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>View Slides</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Non-Covered Topics Notice */}
      <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <XCircle className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          <span>Excluded / Non-Covered Topics for Midterms</span>
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          The following lecture topics were not included in the midterm exam scope per course guidelines:
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          {MIDTERM_EXAM_COVERAGE.notCoveredTopics.map((nc) => (
            <div
              key={nc.number}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono shadow-xs"
            >
              Topic {nc.number}: {nc.title}
            </div>
          ))}
        </div>
      </div>

      {/* Study Tips */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-4">
        <h3 className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <span>Instructor Preparation Guidelines</span>
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
          {MIDTERM_EXAM_COVERAGE.preparationTips.map((tip, idx) => (
            <li key={idx} className="leading-relaxed">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
