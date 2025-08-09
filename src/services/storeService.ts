import api from '../utils/api';

// ----- 타입 정의 -----
export type Lesson = {
  id: number;
  order_no: number;
  name: string;
  type: string;
  description: string;
};

export type Section = {
  id: number;
  order_no: number;
  name: string;
  doc_concept: any;
  Lessons: Lesson[];
};

export type Class = {
  id: number;
  name: string;
  description: string;
  Sections: Section[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  lecture_intro: any;
  sectionCount: number;
  lessonCount: number;
  Classes: Class[];
};

export interface StoreCategory {
  id: number;
  name: string;
  description: string;
  Products: Product[];
}

// 상점 서비스 클래스
class StoreService {
  // 모든 상점 카테고리와 그에 속한 상품들 가져오기
  async getAllStores(): Promise<StoreCategory[]> {
    try {
      const response = await api.stores.getAll();
      if (response.success && response.data) {
        const stores = response.data as StoreCategory[];
        return stores;
      }
      return [];
    } catch (error) {
      console.error('상점 불러오기 실패:', error);
      return [];
    }
  }
}

export default new StoreService();