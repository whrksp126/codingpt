// 학습 결과 상세 정보 타입
export interface DetailedResult {
  slideIndex: number;
  moduleIndex: number;
  questionIndex?: number;
  fileIndex?: number;
  answerIndex?: number;
  type: 'multipleChoice' | 'codeFillTheGap';
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  options?: any[];
  fileContent?: string;
}

// 학습 결과 요약 타입
export interface LessonResult {
  totalQuestions: number;
  correctAnswers: number;
  accuracyRate: number;
  experiencePoints: number;
  detailedResults: DetailedResult[];
  lessonTitle: string;
  completedAt: string;
}

// DB 저장용 학습 결과 타입
export interface LessonResultForDB {
  userId: number;
  lessonId: string;
  lessonTitle: string;
  accuracyRate: number;
  experiencePoints: number;
  totalQuestions: number;
  correctAnswers: number;
  detailedResults: DetailedResult[];
  completedAt: string;
  lessonData: any; // 전체 레슨 데이터
}
