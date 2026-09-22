import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/search/SearchModal';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';
import { AboutPage } from './pages/AboutPage';
import { MidtermPage } from './pages/MidtermPage';
import { ReviewerPage } from './pages/ReviewerPage';
import { getTopicById, ALL_TOPICS } from './content';
import { ThemeProvider } from './context/ThemeContext';
import { CourseProvider, useCourse } from './context/CourseContext';

const AppContent: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [searchOpen, setSearchOpen] = useState(false);
  const { currentCourse } = useCourse();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Parse current route
  const hashWithoutHash = currentHash.replace(/^#/, '');
  const [path, queryString] = hashWithoutHash.split('?');
  const searchParams = new URLSearchParams(queryString || '');
  const modeParam = (searchParams.get('mode') as 'reader' | 'slides') || 'reader';
  const slideParam = searchParams.get('slide') || undefined;

  const navigateTo = (newHash: string) => {
    window.location.hash = newHash;
  };

  const handleSelectTopic = (topicId: string, mode: 'reader' | 'slides' = 'reader') => {
    navigateTo(`#/topic/${topicId}?mode=${mode}`);
  };

  const handleSearchNavigate = (topicId: string, slideId?: string) => {
    if (slideId) {
      navigateTo(`#/topic/${topicId}?mode=reader&slide=${slideId}`);
    } else {
      navigateTo(`#/topic/${topicId}?mode=reader`);
    }
  };

  // Render current page
  let content = <HomePage onSelectTopic={handleSelectTopic} onOpenSearch={() => setSearchOpen(true)} />;

  if (path.startsWith('/topic/')) {
    const topicId = path.replace('/topic/', '');
    const topic = getTopicById(topicId) || currentCourse.topics[0] || ALL_TOPICS[0];
    content = (
      <TopicPage
        topic={topic}
        initialMode={modeParam}
        initialSlideId={slideParam}
        onNavigateTopic={handleSelectTopic}
      />
    );
  } else if (path.startsWith('/about')) {
    content = <AboutPage />;
  } else if (path.startsWith('/midterm')) {
    content = <MidtermPage onSelectTopic={handleSelectTopic} />;
  } else if (path.startsWith('/reviewer')) {
    content = <ReviewerPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar onOpenSearch={() => setSearchOpen(true)} currentPath={path} />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSearchNavigate}
      />

      {/* Footer & Attribution */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CourseProvider>
        <AppContent />
      </CourseProvider>
    </ThemeProvider>
  );
};

export default App;
