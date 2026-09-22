import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '../types/content';
import { COURSES, ALL_COURSES, CIT245_COURSE } from '../content';

interface CourseContextType {
  currentCourse: Course;
  currentCourseId: string;
  setCourseId: (id: string) => void;
  allCourses: Course[];
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCourseId, setCurrentCourseIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('bsit4b_selected_course');
      if (saved && COURSES[saved]) {
        return saved;
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    return 'cit245';
  });

  const setCourseId = (id: string) => {
    if (COURSES[id]) {
      setCurrentCourseIdState(id);
      try {
        localStorage.setItem('bsit4b_selected_course', id);
      } catch (e) {
        // Ignore
      }
    }
  };

  const currentCourse = COURSES[currentCourseId] || CIT245_COURSE;

  return (
    <CourseContext.Provider
      value={{
        currentCourse,
        currentCourseId,
        setCourseId,
        allCourses: ALL_COURSES,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
