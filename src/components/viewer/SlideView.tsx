import React, { useState, useEffect, useRef } from 'react';
import { Topic, Slide } from '../../types/content';
import { CodeBlock } from './CodeBlock';
import { VideoEmbed, ImageEmbed } from './MediaEmbed';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  AlertCircle,
  Smartphone,
} from 'lucide-react';
import { cleanSlideHtml } from '../../utils/cleanHtml';
import { useTheme } from '../../context/ThemeContext';

interface SlideViewProps {
  topic: Topic;
  initialSlideIndex?: number;
  onSlideChange?: (index: number) => void;
}

export const SlideView: React.FC<SlideViewProps> = ({
  topic,
  initialSlideIndex = 0,
  onSlideChange,
}) => {
  const { theme } = useTheme();
  const allSlides = topic.sections.flatMap((s) => s.slides);
  const [currentIndex, setCurrentIndex] = useState(
    Math.min(Math.max(0, initialSlideIndex), allSlides.length - 1)
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const currentSlide: Slide = allSlides[currentIndex] || allSlides[0];
  const cleanedHtml = cleanSlideHtml(currentSlide?.rawHtml || '', currentSlide || {});
  const slideTitle = (currentSlide?.title || '').trim();
  const slideSub = (currentSlide?.subtitle || '').trim();
  const slideLead = (currentSlide?.lead || '').trim();
  const showSubtitle = Boolean(slideSub && slideSub !== slideTitle);
  const showLead = Boolean(slideLead && slideLead !== slideSub && slideLead !== slideTitle);

  const goToSlide = (index: number) => {
    const nextIdx = Math.min(Math.max(0, index), allSlides.length - 1);
    setCurrentIndex(nextIdx);
    if (onSlideChange) onSlideChange(nextIdx);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Monitor device orientation to provide landscape optimization hints on mobile
  useEffect(() => {
    const checkOrientation = () => {
      const portrait =
        window.matchMedia('(orientation: portrait)').matches && window.innerWidth < 768;
      setIsPortrait(portrait);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        if (containerRef.current?.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any)?.webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
        // Try locking orientation to landscape on mobile browsers
        if (screen.orientation && 'lock' in screen.orientation) {
          await (screen.orientation as any).lock('landscape').catch(() => {});
        }
      } catch {
        setIsFullscreen(true);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
        if (screen.orientation && 'unlock' in screen.orientation) {
          (screen.orientation as any).unlock();
        }
      } catch {
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(allSlides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, allSlides.length]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Horizontal swipe threshold: 40px and dominant over vertical scroll
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 overflow-hidden shadow-xl dark:shadow-2xl transition-all ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none border-none h-screen w-screen bg-slate-100 dark:bg-slate-950'
          : 'w-full aspect-[16/10] sm:aspect-[16/9] min-h-[340px] xs:min-h-[400px] sm:min-h-[520px] md:min-h-[620px]'
      }`}
    >
      {/* Mobile Landscape Orientation Notification Hint */}
      {isPortrait && !isFullscreen && (
        <div className="flex items-center justify-between px-3 py-1.5 bg-gradient-to-r from-cyan-100 via-white to-cyan-100 dark:from-cyan-950/90 dark:via-slate-900 dark:to-cyan-950/90 border-b border-cyan-300 dark:border-cyan-800/50 text-[11px] text-cyan-900 dark:text-cyan-200">
          <div className="flex items-center gap-1.5 truncate">
            <Smartphone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 rotate-90 shrink-0" />
            <span>Rotate phone to <strong>landscape</strong> for optimal slide view</span>
          </div>
          <button
            onClick={toggleFullscreen}
            className="ml-2 px-2 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold transition-colors shrink-0"
          >
            Fullscreen
          </button>
        </div>
      )}

      {/* Top Slide Control Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-200/80 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 z-30 transition-colors">
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono">
          <span className="font-bold text-cyan-800 dark:text-cyan-400 text-[11px] sm:text-xs">
            Topic {topic.topicNumber}
          </span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="text-slate-700 dark:text-slate-300 text-[11px] sm:text-xs">
            {currentIndex + 1} / {allSlides.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-[120px] xs:max-w-xs sm:max-w-md mx-2 sm:mx-4">
          <div className="h-1.5 w-full bg-slate-300 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / allSlides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Fullscreen Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-colors text-[11px] sm:text-xs shadow-xs"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
          </button>
        </div>
      </div>

      {/* Main Slide Stage with Touch & Tap Area */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex-1 flex flex-col justify-center p-3 xs:p-5 sm:p-8 md:p-12 overflow-y-auto relative bg-cover bg-center select-none transition-colors"
        style={{
          backgroundImage:
            theme === 'dark'
              ? "linear-gradient(to bottom, rgba(2, 6, 23, 0.94), rgba(2, 6, 23, 0.98)), url('./assets/bg0.jpg')"
              : "linear-gradient(to bottom, rgba(248, 250, 252, 0.96), rgba(241, 245, 249, 0.98)), url('./assets/bg0.jpg')",
        }}
      >
        {/* Left Click / Tap Zone (Previous Slide) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
          title="Previous slide (or tap left edge)"
          className={`group/tap-left absolute left-0 top-0 bottom-0 w-12 xs:w-16 sm:w-20 md:w-28 z-20 flex items-center justify-start pl-1 sm:pl-3 cursor-pointer select-none focus:outline-none transition-opacity ${
            currentIndex === 0 ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover/tap-left:opacity-100 group-active/tap-left:opacity-100 sm:opacity-30 transition-all duration-200 group-hover/tap-left:scale-110 group-active/tap-left:scale-95">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
          </div>
        </button>

        {/* Right Click / Tap Zone (Next Slide) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          disabled={currentIndex === allSlides.length - 1}
          aria-label="Next Slide"
          title="Next slide (or tap right edge)"
          className={`group/tap-right absolute right-0 top-0 bottom-0 w-12 xs:w-16 sm:w-20 md:w-28 z-20 flex items-center justify-end pr-1 sm:pr-3 cursor-pointer select-none focus:outline-none transition-opacity ${
            currentIndex === allSlides.length - 1 ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg backdrop-blur-sm opacity-0 group-hover/tap-right:opacity-100 group-active/tap-right:opacity-100 sm:opacity-30 transition-all duration-200 group-hover/tap-right:scale-110 group-active/tap-right:scale-95">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400" />
          </div>
        </button>

        {/* Slide Content Frame */}
        <div className="max-w-3xl w-full mx-auto my-auto space-y-3 sm:space-y-5 px-3 xs:px-6 sm:px-10 z-10 select-text">
          {/* Eyebrow / Part Number */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-400">
            {currentSlide.partNumber && (
              <span className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 border border-amber-300 dark:border-amber-800/40">
                {currentSlide.partNumber}
              </span>
            )}
            {currentSlide.eyebrow && <span>{currentSlide.eyebrow}</span>}
          </div>

          {/* Heading */}
          {currentSlide.title && (
            <h2
              className={`font-extrabold tracking-tight leading-tight ${
                currentSlide.isTitleSlide
                  ? theme === 'dark'
                    ? 'text-xl xs:text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300'
                    : 'text-xl xs:text-2xl sm:text-4xl md:text-5xl text-slate-900'
                  : currentSlide.isSectionDivider
                  ? 'text-lg xs:text-xl sm:text-2xl md:text-4xl text-cyan-700 dark:text-cyan-400'
                  : 'text-base xs:text-lg sm:text-2xl md:text-3xl text-slate-900 dark:text-white'
              }`}
            >
              {currentSlide.title}
            </h2>
          )}

          {/* Subtitle / Lead */}
          {showSubtitle && (
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-cyan-700 dark:text-cyan-300/90 font-medium">
              {currentSlide.subtitle}
            </p>
          )}

          {showLead && (
            <p className="text-xs xs:text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentSlide.lead}
            </p>
          )}

          {currentSlide.byline && (
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              — {currentSlide.byline}
            </p>
          )}

          {/* Code Snippets */}
          {currentSlide.codeSnippets.length > 0 && (
            <div className="space-y-3">
              {currentSlide.codeSnippets.map((snip, idx) => (
                <CodeBlock key={idx} code={snip.code} language={snip.language} />
              ))}
            </div>
          )}

          {/* Video Embed */}
          {currentSlide.videoUrl && (
            <VideoEmbed
              url={currentSlide.videoUrl}
              title={currentSlide.title || 'Demonstration'}
            />
          )}

          {/* Images */}
          {currentSlide.images.length > 0 && !currentSlide.rawHtml.includes('icon') && (
            <div className="grid grid-cols-1 gap-3">
              {currentSlide.images.map((img, idx) => (
                <ImageEmbed
                  key={idx}
                  src={img}
                  alt={currentSlide.title || 'Illustration'}
                />
              ))}
            </div>
          )}

          {/* Structured Tables */}
          {currentSlide.tables.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/80 shadow-xs">
              {currentSlide.tables.map((tbl, tIdx) => (
                <table key={tIdx} className="w-full text-left text-[11px] sm:text-xs">
                  {tbl.headers.length > 0 && (
                    <thead className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-cyan-800 dark:text-cyan-400 font-semibold uppercase text-[10px]">
                      <tr>
                        {tbl.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-2 px-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                    {tbl.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-2 px-3 text-slate-700 dark:text-slate-300 ${
                              cIdx === 0 ? 'font-semibold text-slate-900 dark:text-white' : ''
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          )}

          {/* Verbatim HTML for styled timelines & split layouts (cleaned of duplicates) */}
          {cleanedHtml ? (
            <div
              className="lecture-prose text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cleanedHtml }}
            />
          ) : null}

          {/* Caveat */}
          {currentSlide.caveat && (
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/50 flex items-start gap-2.5 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-800 dark:text-amber-300 mr-1.5">Note:</span>
                <span>{currentSlide.caveat}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 bg-slate-200/80 dark:bg-slate-900 border-t border-slate-300 dark:border-slate-800 z-30 transition-colors">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-750 disabled:opacity-30 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-transparent text-[11px] sm:text-xs font-semibold transition-colors shrink-0 shadow-xs"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Previous</span>
        </button>

        {/* Slide index slider */}
        <div className="flex items-center gap-2 sm:gap-3">
          <input
            type="range"
            min={0}
            max={allSlides.length - 1}
            value={currentIndex}
            onChange={(e) => goToSlide(parseInt(e.target.value))}
            className="w-20 xs:w-28 sm:w-44 accent-cyan-500 cursor-pointer"
            aria-label="Slide progress scrubber"
          />
          <span className="font-mono text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-semibold whitespace-nowrap">
            {currentIndex + 1} / {allSlides.length}
          </span>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === allSlides.length - 1}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 text-slate-950 font-bold text-[11px] sm:text-xs transition-colors shrink-0 shadow-xs"
        >
          <span className="hidden xs:inline">Next</span>
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
};

