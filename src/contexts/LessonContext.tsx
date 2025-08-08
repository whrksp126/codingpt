import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import lessonService from '../services/lessonService';
import { useUser } from './UserContext';

export interface LessonStatus {
  id: number;
  myclass_id: number;
  lesson_id: number;
  status: number;
}

export interface Lesson {
  id: number;
  order_no: number;
  name: string;
  type: string;
  description: string;
}

export interface Section {
  id: number;
  order_no: number;
  name: string;
  doc_concept: Record<string, any>;
  Lessons: Lesson[];
}

export interface Class {
  id: number;
  name: string;
  description: string;
  Sections: Section[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  lecture_intro: any;
  Classes: Class[];
  myclass_id: number;
  status: LessonStatus[];
}

export interface LessonContextType {
  lessons: Product[];
  setLessons: React.Dispatch<React.SetStateAction<Product[]>>;
  loading: boolean;
  reloadLessons: () => Promise<void>; // 외부에서 수동 갱신용
}

const LessonContext = createContext<LessonContextType | undefined>(undefined);

// export const LessonProvider: React.FC<LessonProviderProps> = ({ children }) => {
export const LessonProvider = ({ children }: { children: React.ReactNode }) => {
  const { user, loading: userLoading } = useUser();
  const [lessons, setLessons] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 앱 시작 시 한 번만 백엔드에서 데이터 로딩
  const loadLessonData = async () => {
    // user가 없으면 데이터를 로딩하지 않음
    if (!user?.id) {
      console.log('⚠️ [LessonContext] user 정보가 없어서 lesson 데이터를 로딩하지 않습니다.');
      setLessons([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      console.log('🚀 [LessonContext] 레슨 데이터 로딩 시작, user id:', user.id);
      const data = await lessonService.getMyclassById(user.id);
      console.log('✅ [LessonContext] 레슨 데이터 로딩 완료:', data);
      setLessons(data as Product[]);
    } catch (error) {
      console.error('❌ [LessonContext] 레슨 데이터 로딩 실패:', error);
      setLessons([]);
    } finally {
      setLoading(false);
    }
  };

  // user가 변경될 때마다 lesson 데이터를 다시 로딩
  useEffect(() => {
    if (userLoading) {
      // UserContext가 아직 로딩 중이면 기다림
      return;
    }
    
    loadLessonData();
  }, [user, userLoading]);

  return (
    <LessonContext.Provider value={{ lessons, setLessons, loading, reloadLessons: loadLessonData }}>
      {children}
    </LessonContext.Provider>
  );
};

export const useLesson = (): LessonContextType => {
  const context = useContext(LessonContext);
  if (!context) throw new Error('useLesson must be used within a LessonProvider');
  return context;
};