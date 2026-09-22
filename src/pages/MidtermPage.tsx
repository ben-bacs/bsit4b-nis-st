import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MIDTERM_EXAM_COVERAGE, CIT220_EXAM_COVERAGE, CIT245_TOPICS, CIT220_TOPICS } from '../content';
import { useCourse } from '../context/CourseContext';
import { Calendar, CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle, Layers } from 'lucide-react';

interface MidtermPageProps {
  onSelectTopic: (topicId: string, mode?: 'reader' | 'slides') => void;
}

export const MidtermPage: React.FC<MidtermPageProps> = ({ onSelectTopic }) => {
  const { currentCourse, currentCourseId, setCourseId, allCourses } = useCourse();

  return (
    <div className="py-6 space-y-10">
      <Breadcrumbs
        items={[{ label: currentCourse.code, href: '#/' }, { label: 'Exam Coverage', current: true }]}
        backHref="#/"
        backLabel="Course Overview"
      />

      {/* Course Switcher Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Exam Syllabus Mode</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {currentCourse.code} — {currentCourse.shortTitle}
            </div>
          </div>
        </div>

        {/* Course toggle buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 self-start sm:self-auto">
          {allCourses.map((c) => (
            <button
              key={c.id}
              onClick={() => setCourseId(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentCourseId === c.id
                  ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {c.code}
            </button>
          ))}
        </div>
      </div>

      {/* CIT 245 VIEW */}
      {currentCourseId === 'cit245' && (
        <div className="space-y-10">
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
              Detailed scope of topics, technical competencies, forensic workflows, and study recommendations for the CIT 245 Midterm Examination under Prof. Mark Joseph J. Solidarios.
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
                const topicData = CIT245_TOPICS.find((t) => t.topicNumber === cov.number);
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
      )}

      {/* CIT 220 VIEW */}
      {currentCourseId === 'cit220' && (
        <div className="space-y-10">
          {/* Header */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/80 text-cyan-800 dark:text-cyan-400 text-xs font-semibold">
              <Calendar className="w-4 h-4" />
              <span>CICT CIT 220 • Examination & Syllabus Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {CIT220_EXAM_COVERAGE.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Curriculum breakdown, competencies, core frameworks (SABSA, TOGAF, STRIDE, NIST SP 800-207), and essential concepts for CIT 220 under Prof. Chin Ann Feliprada.
            </p>
          </div>

          {/* All Units Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Course Units & Technical Competencies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CIT220_EXAM_COVERAGE.units.map((unit) => {
                const topicData = CIT220_TOPICS.find((t) => t.topicNumber === unit.number);
                return (
                  <div
                    key={unit.number}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 font-mono font-bold text-xs">
                          Unit {unit.number}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">
                          {topicData?.totalSlides || '—'} slides
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{unit.title}</h3>

                      <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                        {unit.highlights.map((item, idx) => (
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

          {/* Study Tips */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cyan-50/70 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/40 space-y-4">
            <h3 className="text-base font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span>Instructor Preparation Guidelines</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
              {CIT220_EXAM_COVERAGE.preparationTips.map((tip, idx) => (
                <li key={idx} className="leading-relaxed">{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
