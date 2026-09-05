import React, { useState } from 'react';
import { List, ChevronRight, Bookmark } from 'lucide-react';
import { Section } from '../../types/content';

interface TableOfContentsProps {
  sections: Section[];
  activeSectionId?: string;
  onSelectSection?: (sectionId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="sticky top-24 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-4 shadow-sm dark:shadow-xl backdrop-blur-sm transition-colors">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-400">
          <List className="w-4 h-4" />
          <span>Table of Contents</span>
        </div>
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium">
          {sections.length} sections
        </span>
      </div>

      <nav className="space-y-1.5 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
        {sections.map((section, idx) => {
          const isActive = activeSectionId === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                if (onSelectSection) {
                  e.preventDefault();
                  onSelectSection(section.id);
                  const el = document.getElementById(section.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`group flex items-start gap-2.5 p-2.5 rounded-xl text-xs transition-all ${
                isActive
                  ? 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 shadow-xs font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <span
                className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-mono shrink-0 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                }`}
              >
                {idx + 1}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block truncate font-medium">{section.title}</span>
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                  {section.slides.length} slides
                </span>
              </div>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
