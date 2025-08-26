import api from '../utils/api';
import { lessonStorage } from '../utils/storage';
import { LessonResultForDB } from '../types/lessonResult';

// 상품(클래스/커리큘럼) 타입 정의
export interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  lecture_intro: string | null;
}

// 강의 타입 정의
export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  slides?: Slide[];
}

// export interface Slide {
//   id: number;
//   title: string;
//   content: string;
//   type: 'text' | 'code';
//   language?: string;
// }

export interface LessonItem {
  id?: number | string;
  title?: string;
  // 필요한 필드 생기면 확장
}

export interface SectionItem {
  title: string;
  progress: number;
  lessons: LessonItem[];
  concept: string;
}

export interface ClassItem {
  id: number;
  sections: SectionItem[];
}

/** 서버에서 내려오는 slide 루트 */
export interface Slide {
  id: number;
  contents: {
    class_list?: ClassItem[];
  };
}

// 강의 서비스 클래스
class LessonService {
  // temp
  // 레슨별 슬라이드 가져오기
  async getSlidesByLesson(): Promise<Slide> {
    try {
      const response = await api.lessons.getSlidesByLesson();

      if (!response?.success || !response?.data) {
        throw new Error('No data');
      }

      const raw = response.data as Slide | Slide[];

      // ✅ 배열로 오면 첫 번째만 사용 (현재 화면 요구사항)
      const slide: Slide = Array.isArray(raw) ? raw[0] : raw;

      if (!slide || typeof slide !== 'object') {
        throw new Error('Invalid slide shape');
      }
      return slide;
    } catch (error) {
      console.error('레슨별 슬라이드 가져오기 실패:', error);
      return {
        id: 0,
        contents: { class_list: [] },
      };;
    }
  }

  // 레슨별 학습 상태 및 결과 저장
  async completeLessonWithResult(params: {
    userId: number;
    myclassId: number;
    lessonId: number;
    result: any;  // curLesson 전체 JSON
  }): Promise<boolean> {
    try {
      // 입력 데이터 검증
      if (!params.userId || !params.myclassId || !params.lessonId) {
        console.error('필수 파라미터 누락:', params);
        return false;
      }

      const response = await api.myclass.complete({
        user_id: params.userId,
        myclass_id: params.myclassId,
        lesson_id: params.lessonId,
        result: params.result,
      });

      if (response.success && response.data) {
        return response.success;
      }
      return false;
    } catch (error) {
      console.error('레슨별 학습 결과 저장 실패:', error);
      return false;
    }
  }

  // 학습 결과 조회
  async getLessonResult(userId: number, lessonId: number): Promise<any> {
    try {
      const response = await api.myclass.getLessonResult(userId, lessonId);
      console.log("학습 결과 조회 서비스 response,", response);
      return response.data;
    } catch (error) {
      console.error('학습 결과 조회 실패:', error);
      return null;
    }
  }

  // 모든 강의 가져오기
  async getAllLessons(): Promise<Lesson[]> {
    try {
      const response = await api.lessons.getAll();
      if (response.success && response.data) {
        // 로컬 진행률과 병합
        const lessons = response.data as Lesson[];
        const progressData = await lessonStorage.getAllProgress();
        
        return lessons.map(lesson => ({
          ...lesson,
          progress: (progressData as any)[lesson.id] || 0,
        }));
      }
      return [];
    } catch (error) {
      console.error('강의 목록 가져오기 실패:', error);
      return [];
    }
  }

  // 내강의 가져오기
  async getMyclassById(id: number): Promise<Product[]> {
    try {
      const response = await api.lessons.getById(id);
      if (response.success && response.data) {
        const myclassList = response.data as Product[];
        //const progress = await lessonStorage.getProgress(id);
        
        return myclassList.map((myclass) => ({
          ...myclass,
          //progress: progress || 0,
        }));
      }
      return [];
    } catch (error) {
      console.error('내강의 가져오기 실패:', error);
      return [];
    }
  }

  // 강의 진행률 업데이트
  async updateProgress(lessonId: string, progress: number): Promise<boolean> {
    try {
      // 로컬 스토리지에 저장
      await lessonStorage.setProgress(lessonId, progress);
      
      // 서버에 업데이트
      const response = await api.lessons.updateProgress(lessonId, progress);
      
      if (response.success) {
        // 최근 학습한 강의에 추가
        await lessonStorage.setRecentLesson(lessonId);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('진행률 업데이트 실패:', error);
      return false;
    }
  }

  // 강의 진행률 가져오기
  async getProgress(lessonId: string): Promise<number> {
    try {
      const progress = await lessonStorage.getProgress(lessonId);
      return progress || 0;
    } catch (error) {
      console.error('진행률 가져오기 실패:', error);
      return 0;
    }
  }

  // 최근 학습한 강의 가져오기
  async getRecentLessons(): Promise<string[]> {
    try {
      const recentLessons = await lessonStorage.getRecentLessons();
      return recentLessons || [];
    } catch (error) {
      console.error('최근 강의 가져오기 실패:', error);
      return [];
    }
  }

  // 강의 검색
  async searchLessons(query: string): Promise<Lesson[]> {
    try {
      const allLessons = await this.getAllLessons();
      const lowerQuery = query.toLowerCase();
      
      return allLessons.filter(lesson =>
        lesson.title.toLowerCase().includes(lowerQuery) ||
        lesson.description.toLowerCase().includes(lowerQuery)
      );
    } catch (error) {
      console.error('강의 검색 실패:', error);
      return [];
    }
  }

  // 난이도별 강의 필터링
  async getLessonsByDifficulty(difficulty: string): Promise<Lesson[]> {
    try {
      const allLessons = await this.getAllLessons();
      
      if (difficulty === 'all') {
        return allLessons;
      }
      
      return allLessons.filter(lesson => lesson.difficulty === difficulty);
    } catch (error) {
      console.error('난이도별 강의 필터링 실패:', error);
      return [];
    }
  }

  // 완료한 강의 가져오기
  async getCompletedLessons(): Promise<Lesson[]> {
    try {
      const allLessons = await this.getAllLessons();
      return allLessons.filter(lesson => lesson.progress === 100);
    } catch (error) {
      console.error('완료한 강의 가져오기 실패:', error);
      return [];
    }
  }

  // 진행 중인 강의 가져오기
  async getInProgressLessons(): Promise<Lesson[]> {
    try {
      const allLessons = await this.getAllLessons();
      return allLessons.filter(lesson => lesson.progress > 0 && lesson.progress < 100);
    } catch (error) {
      console.error('진행 중인 강의 가져오기 실패:', error);
      return [];
    }
  }

  // 특정 강의 수강 여부 확인하기
  async getMyclass(userId: number, productId: number): Promise<boolean> {
    const res = await api.myclass.checkEnrolled(userId, productId);
    return res.success && res.data === true;
  }

  // 내강의 등록하기
  async postMyclass(userId: number, productId: number): Promise<boolean> {
    const data = { user_id: userId, product_id: productId };
    const res = await api.myclass.postMyclass(data);
    return res.success === true;
  }

  // 학습 결과 저장
  // async saveLessonResult(lessonResult: LessonResultForDB): Promise<boolean> {
  //   try {
  //     const response = await api.lessons.saveLessonResult(lessonResult);
  //     return response.success;
  //   } catch (error) {
  //     console.error('학습 결과 저장 실패:', error);
  //     return false;
  //   }
  // }
}

export default new LessonService(); 