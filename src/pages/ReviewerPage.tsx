import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import {
  CIT220_REVIEWER_TOPICS,
  CIT220_REVIEWER_QUESTIONS,
  ReviewerItem,
  ModifiedTrueFalseQuestion,
  MultipleChoiceQuestion,
  EnumerationQuestion,
  ReviewerQuestionType
} from '../content';
import { useCourse } from '../context/CourseContext';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  EyeOff,
  Printer,
  Sparkles,
  Filter,
  Check,
  ChevronDown,
  BookOpen,
  ListOrdered,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ReviewerPage: React.FC = () => {
  const { currentCourse, setCourseId } = useCourse();

  // Selected filter states
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all'); // 'all' | 'modified_true_false' | 'multiple_choice' | 'enumeration'
  const [studyMode, setStudyMode] = useState<boolean>(false);

  // User responses state
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [revealedEnumerations, setRevealedEnumerations] = useState<Record<string, boolean>>({});
  const [enumSelfScores, setEnumSelfScores] = useState<Record<string, boolean>>({});

  // Filtered question set
  const filteredQuestions = useMemo(() => {
    return CIT220_REVIEWER_QUESTIONS.filter((q) => {
      const matchTopic = selectedTopicId === 'all' || q.topicId === selectedTopicId;
      const matchType = selectedType === 'all' || q.type === selectedType;
      return matchTopic && matchType;
    });
  }, [selectedTopicId, selectedType]);

  // Statistics
  const stats = useMemo(() => {
    const total = CIT220_REVIEWER_QUESTIONS.length;
    const mtfCount = CIT220_REVIEWER_QUESTIONS.filter((q) => q.type === 'modified_true_false').length;
    const mcCount = CIT220_REVIEWER_QUESTIONS.filter((q) => q.type === 'multiple_choice').length;
    const enumCount = CIT220_REVIEWER_QUESTIONS.filter((q) => q.type === 'enumeration').length;

    let correctCount = 0;
    let answeredCount = 0;

    CIT220_REVIEWER_QUESTIONS.forEach((q) => {
      if (q.type === 'modified_true_false') {
        if (userAnswers[q.id] !== undefined) {
          answeredCount++;
          if (userAnswers[q.id] === q.isTrue) correctCount++;
        }
      } else if (q.type === 'multiple_choice') {
        if (userAnswers[q.id] !== undefined) {
          answeredCount++;
          if (userAnswers[q.id] === q.correctAnswer) correctCount++;
        }
      } else if (q.type === 'enumeration') {
        if (enumSelfScores[q.id] !== undefined) {
          answeredCount++;
          if (enumSelfScores[q.id]) correctCount++;
        }
      }
    });

    return { total, mtfCount, mcCount, enumCount, correctCount, answeredCount };
  }, [userAnswers, enumSelfScores]);

  // Handlers
  const handleAnswerMTF = (id: string, ans: boolean) => {
    setUserAnswers((prev) => ({ ...prev, [id]: ans }));
  };

  const handleAnswerMC = (id: string, key: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({ ...prev, [id]: key }));
  };

  const toggleEnumReveal = (id: string) => {
    setRevealedEnumerations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEnumScore = (id: string, isCorrect: boolean) => {
    setEnumSelfScores((prev) => ({ ...prev, [id]: isCorrect }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setRevealedEnumerations({});
    setEnumSelfScores({});
  };

  const handleRevealAll = () => {
    setStudyMode((prev) => !prev);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'CIT 220 IAS 2', href: '#/' },
          { label: 'Comprehensive Exam Reviewer', current: true }
        ]}
        backHref="#/"
        backLabel="Course Overview"
      />

      {/* Header Banner */}
      <div className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-cyan-50/40 to-white dark:from-slate-900 dark:via-cyan-950/20 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>CIT 220 • Official Examination Reviewer</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold">
              AY 2026–2027
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 font-bold">
              Prof. Chin Ann Feliprada
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            CIT 220 Comprehensive Exam Reviewer
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Curriculum practice grounded <strong className="text-slate-900 dark:text-white">verbatim</strong> in course presentation slides across all 12 units and topics. Test your mastery with Modified True or False, Multiple Choice, and Enumeration exercises.
          </p>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Total Questions</span>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white">{stats.total} Items</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">Modified T/F</span>
            <span className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400">{stats.mtfCount} Items</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider block">Multiple Choice</span>
            <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">{stats.mcCount} Items</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">Enumeration</span>
            <span className="text-xl font-extrabold text-amber-600 dark:text-amber-400">{stats.enumCount} Items</span>
          </div>
        </div>
      </div>

      {/* Control & Filter Toolbar */}
      <div className="sticky top-20 z-30 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg space-y-3 print:hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Test Type Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 overflow-x-auto">
            {[
              { id: 'all', label: 'All Modes', count: stats.total },
              { id: 'modified_true_false', label: 'Modified T/F', count: stats.mtfCount },
              { id: 'multiple_choice', label: 'Multiple Choice', count: stats.mcCount },
              { id: 'enumeration', label: 'Enumeration', count: stats.enumCount },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedType === tab.id
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              onClick={handleRevealAll}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                studyMode
                  ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {studyMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{studyMode ? 'Hide Answers' : 'Study Mode (Reveal All)'}</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Reset all answer choices"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Print reviewer question sheet"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>
        </div>

        {/* Topic Selector Filter */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Topic:</span>
          </span>

          <button
            onClick={() => setSelectedTopicId('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedTopicId === 'all'
                ? 'bg-cyan-600 text-white font-bold'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All 12 Topics
          </button>

          {CIT220_REVIEWER_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedTopicId === topic.id
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {topic.number}. {topic.title}
            </button>
          ))}
        </div>

        {/* Live Score Counter */}
        {stats.answeredCount > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="text-slate-600 dark:text-slate-400">
                Attempted: <strong className="text-slate-900 dark:text-white">{stats.answeredCount}</strong> / {filteredQuestions.length}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                ✓ {stats.correctCount} Correct
              </span>
              <span className="text-rose-700 dark:text-rose-400 font-bold">
                ✕ {stats.answeredCount - stats.correctCount} Incorrect
              </span>
            </div>
            <div className="font-mono font-bold text-cyan-700 dark:text-cyan-400">
              {Math.round((stats.correctCount / stats.answeredCount) * 100)}% Accuracy
            </div>
          </div>
        )}
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
            <HelpCircle className="w-10 h-10 mx-auto text-slate-400 mb-2" />
            <p className="font-medium text-sm">No questions match the current filter selection.</p>
          </div>
        ) : (
          filteredQuestions.map((q, index) => {
            if (q.type === 'modified_true_false') {
              return (
                <ModifiedTrueFalseCard
                  key={q.id}
                  question={q}
                  index={index + 1}
                  userAnswer={userAnswers[q.id]}
                  onAnswer={(ans) => handleAnswerMTF(q.id, ans)}
                  studyMode={studyMode}
                />
              );
            } else if (q.type === 'multiple_choice') {
              return (
                <MultipleChoiceCard
                  key={q.id}
                  question={q}
                  index={index + 1}
                  userAnswer={userAnswers[q.id]}
                  onAnswer={(key) => handleAnswerMC(q.id, key)}
                  studyMode={studyMode}
                />
              );
            } else if (q.type === 'enumeration') {
              return (
                <EnumerationCard
                  key={q.id}
                  question={q}
                  index={index + 1}
                  isRevealed={studyMode || !!revealedEnumerations[q.id]}
                  onToggleReveal={() => toggleEnumReveal(q.id)}
                  selfScore={enumSelfScores[q.id]}
                  onSelfScore={(correct) => handleEnumScore(q.id, correct)}
                  studyMode={studyMode}
                />
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

// ==========================================
// COMPONENT: MODIFIED TRUE OR FALSE CARD
// ==========================================
interface MTFCardProps {
  question: ModifiedTrueFalseQuestion;
  index: number;
  userAnswer?: boolean;
  onAnswer: (ans: boolean) => void;
  studyMode: boolean;
}

const ModifiedTrueFalseCard: React.FC<MTFCardProps> = ({
  question,
  index,
  userAnswer,
  onAnswer,
  studyMode
}) => {
  const isAnswered = userAnswer !== undefined;
  const isCorrect = isAnswered && userAnswer === question.isTrue;

  // Split statement to underline the specific term
  const parts = question.statement.split(question.underlinedTerm);

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-5 transition-all">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 text-xs font-mono font-bold">
            Question #{index}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            Modified True or False
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 text-xs font-medium">
            {question.topicTitle}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Source: {question.sourceSlide}
        </span>
      </div>

      {/* Statement with Underlined Term */}
      <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
        {parts.length === 2 ? (
          <>
            {parts[0]}
            <span className="underline decoration-2 decoration-cyan-500 font-bold bg-cyan-50 dark:bg-cyan-950/50 px-1 rounded text-cyan-900 dark:text-cyan-300">
              {question.underlinedTerm}
            </span>
            {parts[1]}
          </>
        ) : (
          question.statement
        )}
      </div>

      <p className="text-xs text-slate-500 italic">
        Direction: If the underlined term makes the statement true, choose TRUE. If false, choose FALSE and note the verbatim correction.
      </p>

      {/* Answer Choice Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => onAnswer(true)}
          className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            userAnswer === true
              ? question.isTrue
                ? 'bg-emerald-500 border-emerald-600 text-white shadow-md'
                : 'bg-rose-500 border-rose-600 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <span>TRUE</span>
          {userAnswer === true && (question.isTrue ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />)}
        </button>

        <button
          onClick={() => onAnswer(false)}
          className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            userAnswer === false
              ? !question.isTrue
                ? 'bg-emerald-500 border-emerald-600 text-white shadow-md'
                : 'bg-rose-500 border-rose-600 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <span>FALSE</span>
          {userAnswer === false && (!question.isTrue ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />)}
        </button>
      </div>

      {/* Feedback & Verbatim Correction Panel */}
      {(isAnswered || studyMode) && (
        <div
          className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-2 transition-all ${
            question.isTrue
              ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-300'
              : 'bg-amber-50/80 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/60 text-amber-950 dark:text-amber-300'
          }`}
        >
          <div className="flex items-center gap-2 font-bold">
            {question.isTrue ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Correct Answer: TRUE (Statement is accurate as written)</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>
                  Correct Answer: FALSE — Change "<strong className="underline">{question.underlinedTerm}</strong>" to{' '}
                  <span className="font-extrabold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                    "{question.correction}"
                  </span>
                </span>
              </>
            )}
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed pl-6 border-l-2 border-slate-300 dark:border-slate-700">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

// ==========================================
// COMPONENT: MULTIPLE CHOICE CARD
// ==========================================
interface MCCardProps {
  question: MultipleChoiceQuestion;
  index: number;
  userAnswer?: 'A' | 'B' | 'C' | 'D';
  onAnswer: (key: 'A' | 'B' | 'C' | 'D') => void;
  studyMode: boolean;
}

const MultipleChoiceCard: React.FC<MCCardProps> = ({
  question,
  index,
  userAnswer,
  onAnswer,
  studyMode
}) => {
  const isAnswered = userAnswer !== undefined;

  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-5 transition-all">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-800 text-xs font-mono font-bold">
            Question #{index}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            Multiple Choice
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 text-xs font-medium">
            {question.topicTitle}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Source: {question.sourceSlide}
        </span>
      </div>

      {/* Question Text */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
        {question.question}
      </h3>

      {/* Options List */}
      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const isSelected = userAnswer === opt.key;
          const isCorrect = opt.key === question.correctAnswer;
          const showAsCorrect = (isAnswered || studyMode) && isCorrect;
          const showAsWrong = isSelected && !isCorrect;

          return (
            <button
              key={opt.key}
              onClick={() => onAnswer(opt.key)}
              className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                showAsCorrect
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-600 text-emerald-950 dark:text-emerald-200 font-semibold shadow-xs'
                  : showAsWrong
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 dark:border-rose-600 text-rose-950 dark:text-rose-200 shadow-xs'
                  : isSelected
                  ? 'bg-cyan-50 dark:bg-cyan-950 border-cyan-500 text-cyan-950 dark:text-cyan-200'
                  : 'bg-white dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                  showAsCorrect
                    ? 'bg-emerald-600 text-white'
                    : showAsWrong
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {opt.key}
              </span>
              <span className="flex-1 leading-relaxed pt-0.5">{opt.text}</span>
              {showAsCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />}
              {showAsWrong && <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Explanation Box */}
      {(isAnswered || studyMode) && (
        <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <div className="font-bold text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Correct Answer: Option {question.correctAnswer}</span>
          </div>
          <p className="leading-relaxed pl-5">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

// ==========================================
// COMPONENT: ENUMERATION CARD
// ==========================================
interface EnumCardProps {
  question: EnumerationQuestion;
  index: number;
  isRevealed: boolean;
  onToggleReveal: () => void;
  selfScore?: boolean;
  onSelfScore: (correct: boolean) => void;
  studyMode: boolean;
}

const EnumerationCard: React.FC<EnumCardProps> = ({
  question,
  index,
  isRevealed,
  onToggleReveal,
  selfScore,
  onSelfScore,
  studyMode
}) => {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-5 transition-all">
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800 text-xs font-mono font-bold">
            Question #{index}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
            Enumeration
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 text-xs font-medium">
            {question.topicTitle}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Source: {question.sourceSlide}
        </span>
      </div>

      {/* Question Prompt */}
      <div className="space-y-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {question.question}
        </h3>
        <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
          Expected Count: {question.expectedCount} items
        </p>
      </div>

      {/* Reveal Answer Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <button
          onClick={onToggleReveal}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
        >
          {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{isRevealed ? 'Hide Enumeration Key' : 'Reveal Answer Key'}</span>
        </button>

        {isRevealed && !studyMode && (
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500">Self-Check:</span>
            <button
              onClick={() => onSelfScore(true)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                selfScore === true
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>Mastered (+1)</span>
            </button>
            <button
              onClick={() => onSelfScore(false)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
                selfScore === false
                  ? 'bg-rose-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Needs Practice</span>
            </button>
          </div>
        )}
      </div>

      {/* Enumerated Key Items */}
      {isRevealed && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 space-y-3">
          <div className="text-xs font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
            <ListOrdered className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Verbatim Slide Answer Key ({question.items.length} items):</span>
          </div>

          <ol className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 list-decimal pl-5">
            {question.items.map((item, idx) => (
              <li key={idx} className="leading-relaxed font-medium">
                {item}
              </li>
            ))}
          </ol>

          {question.explanation && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1 border-t border-amber-200/60 dark:border-amber-900/40">
              Note: {question.explanation}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

