import React from 'react';
import { Topic } from '../../types/content';
import { CodeBlock } from './CodeBlock';
import { VideoEmbed, ImageEmbed } from './MediaEmbed';
import { AlertCircle } from 'lucide-react';
import { cleanSlideHtml } from '../../utils/cleanHtml';

interface ReaderViewProps {
  topic: Topic;
  targetSlideId?: string;
}

export const ReaderView: React.FC<ReaderViewProps> = ({ topic, targetSlideId }) => {
  return (
    <div className="space-y-16 pb-12">
      {topic.sections.map((section, secIdx) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24 space-y-8 pb-10 border-b border-slate-200 dark:border-slate-800/60 last:border-none"
        >
          {/* Section Banner Header */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-400 mb-2">
              <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800/60">
                Section {secIdx + 1}
              </span>
              {section.eyebrow && <span>• {section.eyebrow}</span>}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {section.title}
            </h2>
            {section.summary && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                {section.summary}
              </p>
            )}
          </div>

          {/* Clean Content Cards */}
          <div className="space-y-6">
            {section.slides.map((slide) => {
              const isTarget = targetSlideId === slide.id;
              const cleanedHtml = cleanSlideHtml(slide.rawHtml, slide);
              const slideTitle = (slide.title || '').trim();
              const slideSub = (slide.subtitle || '').trim();
              const slideLead = (slide.lead || '').trim();
              const showSubtitle = Boolean(slideSub && slideSub !== slideTitle);
              const showLead = Boolean(slideLead && slideLead !== slideSub && slideLead !== slideTitle);

              return (
                <article
                  key={slide.id}
                  id={slide.id}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all scroll-mt-28 ${
                    isTarget
                      ? 'bg-cyan-50/50 dark:bg-slate-900/90 border-cyan-500/80 ring-2 ring-cyan-500/20 shadow-md dark:shadow-xl'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-xs hover:shadow-md'
                  }`}
                >
                  {/* Subtle Slide Indicator */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-200 dark:border-slate-800/50 text-[11px]">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                        #{slide.slideNumber}
                      </span>
                      {slide.eyebrow && (
                        <span>• {slide.eyebrow}</span>
                      )}
                    </div>
                    {slide.partNumber && (
                      <span className="font-mono text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/40 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800/40 text-[10px]">
                        {slide.partNumber}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  {slide.title && (
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                      {slide.title}
                    </h3>
                  )}

                  {showSubtitle && (
                    <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300/90 mb-3">
                      {slide.subtitle}
                    </p>
                  )}

                  {showLead && (
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mb-4 leading-relaxed">
                      {slide.lead}
                    </p>
                  )}

                  {/* Code Snippets with 1-Click Copy */}
                  {slide.codeSnippets.length > 0 && (
                    <div className="space-y-4 my-4">
                      {slide.codeSnippets.map((snippet, cIdx) => (
                        <CodeBlock
                          key={cIdx}
                          code={snippet.code}
                          language={snippet.language}
                        />
                      ))}
                    </div>
                  )}

                  {/* Video Embeds */}
                  {slide.videoUrl && (
                    <VideoEmbed
                      url={slide.videoUrl}
                      title={slide.title || 'Video Demonstration'}
                    />
                  )}

                  {/* Images */}
                  {slide.images.length > 0 && !slide.rawHtml.includes('icon') && (
                    <div className="my-4 grid grid-cols-1 gap-4">
                      {slide.images.map((img, iIdx) => (
                        <ImageEmbed
                          key={iIdx}
                          src={img}
                          alt={slide.title || 'Slide Illustration'}
                        />
                      ))}
                    </div>
                  )}

                  {/* Structured Tables */}
                  {slide.tables.length > 0 && (
                    <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs">
                      {slide.tables.map((tbl, tIdx) => (
                        <table key={tIdx} className="w-full text-left text-xs sm:text-sm">
                          {tbl.headers.length > 0 && (
                            <thead className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-cyan-800 dark:text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                              <tr>
                                {tbl.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="py-3 px-4">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                          )}
                          <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
                            {tbl.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`py-3 px-4 text-slate-700 dark:text-slate-300 ${
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

                  {/* Non-redundant HTML body content (timeline, workflow, split, definitions) */}
                  {cleanedHtml ? (
                    <div
                      className="lecture-prose my-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: cleanedHtml }}
                    />
                  ) : null}

                  {/* Cautionary Rule Box (clean and distinct, rendered only once) */}
                  {slide.caveat && (
                    <div className="mt-4 p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/25 border border-amber-300 dark:border-amber-800/40 flex items-start gap-3 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
                      <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-semibold text-amber-800 dark:text-amber-300 mr-1.5">Note:</span>
                        <span>{slide.caveat}</span>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

        </section>
      ))}
    </div>
  );
};
