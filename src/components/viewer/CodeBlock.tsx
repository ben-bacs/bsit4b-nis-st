import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { highlightBash } from '../../utils/highlightBash';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  return (
    <div className="my-2 sm:my-4 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-950 shadow-md font-mono text-xs sm:text-sm transition-colors">
      <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-200/80 dark:bg-slate-900/90 border-b border-slate-300 dark:border-slate-800 text-[11px] sm:text-xs text-slate-700 dark:text-slate-300">
        <div className="flex items-center gap-1.5 sm:gap-2 font-medium">
          <Terminal className="w-3.5 h-3.5 text-cyan-700 dark:text-cyan-400" />
          <span className="text-slate-800 dark:text-slate-200 font-semibold">{title || (language === 'bash' ? 'Terminal' : language.toUpperCase())}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors text-[11px] sm:text-xs shadow-xs"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-3 sm:p-4 overflow-x-auto selection:bg-cyan-500/20">
        <pre className="font-mono text-slate-900 dark:text-slate-200">
          <code>{highlightBash(code)}</code>
        </pre>
      </div>
    </div>
  );
};

