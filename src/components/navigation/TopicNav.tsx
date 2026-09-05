import React from 'react';
import { ArrowLeft, ArrowRight, Grid, BookOpen } from 'lucide-react';
import { Topic } from '../../types/content';

interface TopicNavProps {
  prevTopic?: Topic;
  nextTopic?: Topic;
  currentMode?: 'reader' | 'slides';
}

export const TopicNav: React.FC<TopicNavProps> = ({
  prevTopic,
  nextTopic,
  currentMode = 'reader',
}) => {
  return (
    <div className="pt-10 pb-6 border-t border-slate-200 dark:border-slate-800 my-10 transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Topic */}
        {prevTopic ? (
          <a
            href={`#/topic/${prevTopic.id}?mode=${currentMode}`}
            className="group flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left shadow-xs"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                ← Previous Topic ({prevTopic.topicNumber})
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate block">
                {prevTopic.title}
              </span>
            </div>
          </a>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next Topic */}
        {nextTopic ? (
          <a
            href={`#/topic/${nextTopic.id}?mode=${currentMode}`}
            className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700 transition-all text-right sm:col-start-2 shadow-xs"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                Next Topic ({nextTopic.topicNumber}) →
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate block">
                {nextTopic.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/50 transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
        ) : (
          <a
            href="#/"
            className="group flex items-center justify-between gap-4 p-4 rounded-xl border border-emerald-300 dark:border-emerald-900/40 bg-emerald-50/80 dark:bg-emerald-950/20 hover:bg-emerald-100/80 dark:hover:bg-emerald-950/30 transition-all text-right sm:col-start-2 shadow-xs"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold block">
                Course Completed ✓
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white truncate block">
                Return to Course Overview
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
              <Grid className="w-5 h-5" />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};
