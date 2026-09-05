import React, { useState } from 'react';
import { ExternalLink, Maximize2, X } from 'lucide-react';

interface VideoEmbedProps {
  url: string;
  title: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({ url, title }) => {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg dark:shadow-xl">
      <div className="relative aspect-video w-full bg-slate-100 dark:bg-slate-950">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span className="font-medium text-slate-800 dark:text-slate-300">{title}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-cyan-700 hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
        >
          <span>Watch on YouTube</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

interface ImageEmbedProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ImageEmbed: React.FC<ImageEmbedProps> = ({ src, alt, caption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const resolvedSrc = src.startsWith('/') ? `.${src}` : src;

  return (
    <>
      <div className="my-6 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-md group">
        <div className="relative overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-center min-h-[160px]">
          <img
            src={resolvedSrc}
            alt={alt}
            className="max-h-[460px] w-auto max-w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <button
            onClick={() => setIsOpen(true)}
            className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white backdrop-blur border border-slate-300 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Expand image"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
        {caption && (
          <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400 italic">
            {caption}
          </p>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};
