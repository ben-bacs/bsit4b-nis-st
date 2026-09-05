import React, { useState, useEffect } from 'react';
import { Topic } from '../types/content';
import { ALL_TOPICS } from '../content';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { TableOfContents } from '../components/navigation/TableOfContents';
import { TopicNav } from '../components/navigation/TopicNav';
import { ScrollToTop } from '../components/navigation/ScrollToTop';
import { ReaderView } from '../components/viewer/ReaderView';
import { SlideView } from '../components/viewer/SlideView';
import { BookOpen, MonitorPlay, Layers, Shield } from 'lucide-react';

interface TopicPageProps {
  topic: Topic;
  initialMode?: 'reader' | 'slides';
  initialSlideId?: string;
  onNavigateTopic: (topicId: string, mode?: 'reader' | 'slides') => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({
  topic,
  initialMode = 'reader',
  initialSlideId,
  onNavigateTopic,
}) => {
  const [mode, setMode] = useState<'reader' | 'slides'>(initialMode);
  const [activeSectionId, setActiveSectionId] = useState(topic.sections[0]?.id || '');

  // Calculate prev and next topics
  const currentIdx = ALL_TOPICS.findIndex((t) => t.id === topic.id);
  const prevTopic = currentIdx > 0 ? ALL_TOPICS[currentIdx - 1] : undefined;
  const nextTopic = currentIdx < ALL_TOPICS.length - 1 ? ALL_TOPICS[currentIdx + 1] : undefined;

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, topic.id]);

  useEffect(() => {
    if (initialSlideId) {
      setTimeout(() => {
        const el = document.getElementById(initialSlideId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [initialSlideId, topic.id]);

  // Find initial slide index for slide view
  const allSlides = topic.sections.flatMap((s) => s.slides);
  const initialSlideIndex = initialSlideId
    ? allSlides.findIndex((s) => s.id === initialSlideId)
    : 0;

  return (
    <div className="py-6 space-y-8">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs
        items={[
          { label: 'CIT 245', href: '#/' },
          { label: `Topic ${topic.topicNumber}: ${topic.title}`, current: true },
        ]}
        backHref="#/"
        backLabel="Course Overview"
      />

      {/* Topic Header & Mode Switcher */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-colors">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-800 dark:text-cyan-400">
            <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60 uppercase">
              Topic {topic.topicNumber}
            </span>
            <span>•</span>
            <span className="text-slate-500 dark:text-slate-400">{topic.badge}</span>
            <span>•</span>
            <span className="text-slate-500 dark:text-slate-400">{topic.totalSlides} Slides</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {topic.title}
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {topic.description}
          </p>

          <p className="text-xs text-slate-500 pt-1">
            Author: <strong className="text-slate-700 dark:text-slate-400">{topic.author}</strong> (WVSU CICT)
          </p>
        </div>

        {/* Mode Toggle Controls */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shrink-0 self-start md:self-center shadow-xs">
          <button
            onClick={() => setMode('reader')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === 'reader'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Study Reader</span>
          </button>

          <button
            onClick={() => setMode('slides')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              mode === 'slides'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-900'
            }`}
          >
            <MonitorPlay className="w-4 h-4" />
            <span>Slide Deck</span>
          </button>
        </div>
      </div>

      {/* Main View Area */}
      {mode === 'reader' ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Main Document Content */}
          <div className="lg:col-span-3 min-w-0">
            <ReaderView topic={topic} targetSlideId={initialSlideId} />

            {/* Topic Stepper at Bottom */}
            <TopicNav
              prevTopic={prevTopic}
              nextTopic={nextTopic}
              currentMode="reader"
            />
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <TableOfContents
              sections={topic.sections}
              activeSectionId={activeSectionId}
              onSelectSection={setActiveSectionId}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <SlideView
            topic={topic}
            initialSlideIndex={initialSlideIndex >= 0 ? initialSlideIndex : 0}
          />

          {/* Topic Stepper */}
          <TopicNav
            prevTopic={prevTopic}
            nextTopic={nextTopic}
            currentMode="slides"
          />
        </div>
      )}

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
};
