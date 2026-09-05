import React from 'react';
import { ChevronRight, ArrowLeft, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  backHref?: string;
  backLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  backHref = '#/',
  backLabel = 'Back',
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 mb-6 text-sm shadow-xs transition-colors">
      {/* Back Button */}
      <a
        href={backHref}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/60 transition-colors text-xs font-medium"
      >
        <ArrowLeft className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
        <span>{backLabel}</span>
      </a>

      {/* Trail */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        <a
          href="#/"
          className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors"
          title="Course Home"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden xs:inline">Home</span>
        </a>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            {item.href && !item.current ? (
              <a
                href={item.href}
                className="text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors truncate max-w-[140px] sm:max-w-[200px]"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-cyan-800 dark:text-cyan-400 font-semibold truncate max-w-[140px] sm:max-w-[240px]">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};
