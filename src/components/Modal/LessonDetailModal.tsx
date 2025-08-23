import { Modal, View, Text, Pressable } from 'react-native';
import { Star } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
import LessonLearningScreen from '../../screens/Lesson/LessonLearningScreen';

interface LessonDetailModalProps {
  lessonData: any;
  visible: boolean;
  onClose: () => void;
  onStart?: (payload: any) => void;   // ✅ 학습 시작(미완료 레슨)
  onReview?: (payload: any) => void;  // ✅ 복습(완료 레슨)
}

const LessonDetailModal = ({ visible, onClose, onStart, onReview, lessonData }: LessonDetailModalProps) => {
  const { navigate } = useNavigation();

  // ✅ status로 분기 (1=학습, 2=복습)
  const status: number = Number(lessonData?.status ?? 1);
  const isReview = status === 2;

  // ✅ 안전 접근
  const title = lessonData?.name ?? lessonData?.title ?? '레슨 상세';
  const slides = Array.isArray(lessonData?.Slides) ? lessonData.Slides : [];
  const firstSlide = slides[0] ?? null;
  const resultData = lessonData?.results ?? null;

  // ✅ payload 조립
  const buildStartPayload = () => {
    // 안전한 데이터 접근을 위한 null 체크
    if (!lessonData?.Slides?.[0]?.contents?.class_list?.[0]?.sections) {
      console.warn('LessonDetailModal: 필요한 데이터가 없습니다', lessonData);
      return { sliders: [] };
    }

    // LessonLearningScreen이 기대하는 데이터 구조로 변환
    const sections = lessonData.Slides[0].contents.class_list[0].sections;
    const sliders = sections.map((section: any, index: number) => ({
      id: `slide-${index}`,
      title: section.title || `슬라이드 ${index + 1}`,
      modules: section.modules || []
    }));

    return { sliders };
  };

  const buildReviewPayload = () => {
    // 안전한 데이터 접근을 위한 null 체크
    if (!resultData) {
      console.warn('LessonDetailModal: 복습 데이터가 없습니다', lessonData);
      return { sliders: [], result: null };
    }

    return {
      sliders: lessonData?.sliders || [],
      result: resultData
    };
  };

  // ✅ 공통 네비 fallback
  const navigateWithPayload = (payload: any) => {
    // 수신측 호환성을 위해 data와 lessonData 둘 다 넣어줌
    navigate('lessonLearning', { lessonData: payload });
  };

  // ✅ 시작/복습 버튼
  const handlePrimaryPress = () => {
    if (isReview) { // 복습 모드
      const payload = buildReviewPayload();
      onReview ? onReview(payload) : navigateWithPayload(payload);
    } else { // 학습 모드
      const payload = buildStartPayload();
      console.log("LessonDetailModal payload 학습,", payload);
      onStart ? onStart(payload) : navigateWithPayload(payload);
    }
    onClose();
  };

  // 진행 표시 (단순화)
  const chapterDone = isReview ? 1 : 0;
  const chapterTotal = 1;
  const barWidth = isReview ? '100%' : '0%';

  const onPressStart = () => {
    navigate('lessonLearning', { lessonData });
    onClose(); // 모달은 즉시 닫기
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="flex-col gap-[10px] w-[322px] p-[20px] rounded-[20px] bg-[#FAFAFA]">
          {/* 헤더 */}
          <View className="flex-row items-center gap-[10px]">
            <View className="flex-1 flex-col gap-[6px]">
              <Text className="text-[12px] font-[700] text-[#606060]">
                {isReview ? '복습' : '학습'}
              </Text>
              <Text className="text-[16px] font-[700] text-[#111]">{title}</Text>
            </View>
            <Star width={42} height={42} fill="#93D333" />
          </View>

          {/* 진행바 */}
          <View className="flex-col gap-[6px]">
            <View className="flex-row items-center justify-between">
              <Text className="text-[12px] font-[700] text-[#606060]">CHAPTER</Text>
              <Text className="text-[12px] font-[700] text-[#606060]">
                {chapterDone}/{chapterTotal}
              </Text>
            </View>
            <View className="h-[10px] bg-[#F5F5F5] rounded-[10px] overflow-hidden">
              <View className="h-[10px] bg-[#93D333] rounded-[10px]" style={{ width: barWidth }} />
            </View>
          </View>

          {/* 시작/복습 버튼 */}
          <Pressable
            onPress={handlePrimaryPress}
            className="flex items-center justify-center h-[40px] p-[10px] rounded-[10px] bg-[#93D333]"
          >
            <Text className="text-[18px] font-[700] text-[#fff] text-center leading-[20px]">
              {isReview ? '복습' : '시작'}
            </Text>
          </Pressable>

          {/* 닫기 */}
          <Pressable
            onPress={onClose}
            className="flex items-center justify-center h-[40px] p-[10px] rounded-[10px] bg-[#EAEAEA]"
          >
            <Text className="text-[15px] font-[700] text-[#333] text-center leading-[20px]">
              닫기
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default LessonDetailModal;