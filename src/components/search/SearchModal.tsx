import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Terminal, BookOpen, ChevronRight, Hash } from 'lucide-react';
import { searchContent } from '../../content';
import { SearchResult } from '../../types/content';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (topicId: string, slideId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const r = searchContent(query);
    setResults(r);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      const res = results[selectedIndex];
      onNavigate(res.topicId, res.slideId);
      onClose();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, terms, filesystems, case studies... (e.g. ddrescue, TRIM, Hugging Face, Autopsy)"
            className="w-full bg-transparent border-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:ring-0"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/40">
          {query.length > 0 && query.length < 2 && (
            <div className="py-8 text-center text-xs text-slate-500">
              Type at least 2 characters to search across all topics...
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="py-12 text-center text-slate-600 dark:text-slate-400 text-sm">
              <p>No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Try searching for commands like <code>lsblk</code>, <code>chmod</code>, <code>stat</code>, or concepts like <code>TRIM</code>, <code>carving</code>, <code>Comelec</code>.
              </p>
            </div>
          )}

          {results.map((res, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <div
                key={`${res.topicId}-${res.slideId}-${idx}`}
                onClick={() => {
                  onNavigate(res.topicId, res.slideId);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-300 dark:border-cyan-800/60'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div
                  className={`mt-0.5 p-2 rounded-lg shrink-0 ${
                    res.type === 'code'
                      ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800/40'
                      : 'bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-950/60 dark:text-cyan-400 dark:border-cyan-800/40'
                  }`}
                >
                  {res.type === 'code' ? (
                    <Terminal className="w-4 h-4" />
                  ) : (
                    <BookOpen className="w-4 h-4" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="text-cyan-700 dark:text-cyan-400 font-semibold">
                      Topic {res.topicNumber}
                    </span>
                    <span>•</span>
                    <span className="truncate">{res.sectionTitle}</span>
                    <span>•</span>
                    <span>Slide {res.slideNumber}</span>
                  </div>

                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5 truncate">
                    {res.topicTitle}
                  </p>

                  <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 font-mono bg-slate-100 dark:bg-slate-950/60 p-1.5 rounded border border-slate-200 dark:border-slate-800/60 break-all">
                    {res.matchSnippet}
                  </p>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 self-center shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300 font-mono">↑</kbd>{' '}
              <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300 font-mono">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300 font-mono">Enter</kbd> to jump
            </span>
          </div>
          <span>{results.length} matches found</span>
        </div>
      </div>
    </div>
  );
};
