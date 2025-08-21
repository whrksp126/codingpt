import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, Pressable, Text, View, Image, Modal, Button } from 'react-native';
// import { useFullSheet } from '../../contexts/FullSheetContext';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';
import { CaretLeft, ChatBubbleTail, Clover, HeartStraight, Notepad, Play, Star } from '../../assets/SvgIcon';
import LessonDetailModal from '../../components/Modal/LessonDetailModal';
import { useNavigation } from '../../contexts/NavigationContext';
import lessonService from '../../services/lessonService';

// ✅ status 값 정의(필요 시 공통 상수로 분리)
const STATUS = {
  NOT_STARTED: 1,
  COMPLETED: 2,
} as const;

// ✅ product에서 섹션/레슨을 평탄화해서 id 오름차순 리스트로 만드는 유틸
function flattenLessons(product: any) {
  const cls = product?.Classes?.[0];
  const sections = cls?.Sections ?? [];
  const flat: Array<{ sectionIndex: number; lessonIndex: number; lesson: any }> = [];

  sections.forEach((section: any, sIdx: number) => {
    (section.Lessons ?? []).forEach((lesson: any, lIdx: number) => {
      flat.push({ sectionIndex: sIdx, lessonIndex: lIdx, lesson });
    });
  });

  // id 기준 오름차순
  flat.sort((a, b) => (a.lesson?.id ?? 0) - (b.lesson?.id ?? 0));
  return flat;
}

// ✅ product.status → Map<lesson_id, status>
function buildStatusMap(product: any) {
  const map = new Map<number, number>();
  (product?.status ?? []).forEach((st: any) => {
    map.set(st.lesson_id, st.status);
  });
  return map;
}

// ✅ 다음 시작 레슨(완료되지 않은 것 중 가장 작은 id) 찾기
function pickNextLessonId(flatLessons: Array<{ lesson: any }>, statusMap: Map<number, number>) {
  const next = flatLessons.find(({ lesson }) => {
    const st = statusMap.get(lesson.id);
    return st !== STATUS.COMPLETED; // 완료가 아니면 후보
  });
  return next?.lesson?.id ?? null;
}

// (상단) 헬퍼 함수 추가: lesson_id로 product.status에서 상태/결과 찾기
const getLessonStatus = (product: any, lessonId: number) => {
  const item = (product?.status ?? []).find((s: any) => s.lesson_id === lessonId);
  return {
    lessonStatus: item?.status ?? 1,     // 1=학습(미완료), 2=복습(완료)
    results: item?.results ?? null,      // 복습 모드에서 사용할 결과 JSON
    myclassStatusId: item?.id ?? null,   // 필요 시 사용
    myclassId: item?.myclass_id ?? null, // 필요 시 사용
  };
};

const ClassProgressScreen: React.FC = () => {
  const { user } = useUser();
  const { goBack } = useNavigation();
  // const { popFullSheet } = useFullSheet();
  const [classData, setClassData] = useState<any>(null);
  const [sectionData, setSectionData] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLessonData, setSelectedLessonData] = useState<any>(null);
  
  // ✅ 컨텍스트 훅
  const {
    activeProductId,
    getProduct,
    lessons,
    setActiveProduct,
  } = useLesson();

  // ✅ product 불러오기
  const product = useMemo(() => {
    return lessons.find((p: any) => p.id === activeProductId);
  }, [lessons, activeProductId]);

  // ✅ class/section 상태 세팅 (UI에서 그대로 사용)
  useEffect(() => {
    if (!product) return;
    const cls = product?.Classes?.[0];
    setClassData(cls ?? null);
    setSectionData(cls?.Sections ?? []);
    // (임시 슬라이드 호출은 필요 시 유지)
    (async () => {
      try {
        const res = await lessonService.getSlidesByLesson();
        // 화면은 class_list[0]만 사용 (기존 더미 구조 유지)
        const fetchData = res.contents?.class_list?.[0];
        console.log("ClassProgressScreen fetchData,", fetchData);
        // setClassData(fetchData);
      } catch (e) {
        console.error('load slides failed:', e);
      }
    })();
  }, [product]);

  // ✅ 렌더링용 계산: 완료/다음레슨
  const { statusMap, nextLessonId } = useMemo(() => {
    const smap = buildStatusMap(product);
    const flat = flattenLessons(product);
    const nextId = pickNextLessonId(flat, smap);
    return { statusMap: smap, nextLessonId: nextId };
  }, [product]);

  // ✅ 레슨 버튼 클릭 → 모달 오픈
  const onPressLessonButton = (sectionIndex: number, lessonIndex: number) => {
    // if (!classData?.Sections?.[sectionIndex]?.Lessons?.[lessonIndex]) {
    //   console.error('Lesson data not found');
    //   return;
    // }
    // const lessonData = classData.Sections[sectionIndex].Lessons[lessonIndex];
    // console.log("ClassProgressScreen lessonData,", lessonData);
    // setSelectedLessonData(lessonData);
    const lesson = classData?.Sections?.[sectionIndex]?.Lessons?.[lessonIndex];
    if (!lesson) return;

    // ✅ 이 레슨의 status/결과를 product.status에서 찾아 병합
    const { lessonStatus, results, myclassStatusId, myclassId } =
    getLessonStatus(product, lesson.id);

    const mergedLesson = {
      ...lesson,                 // { id, name/title, description, Slides[] ... }
      productId: product?.id,    // 다음 화면에서 필요하면 활용
      status: lessonStatus,      // ✅ 모달에서 1=학습, 2=복습 분기용
      results,                   // ✅ 복습 모드에서 전달
      myclassStatusId,
      myclassId,
    };

    console.log("ClassProgressScreen lesson,", lesson);
    console.log("ClassProgressScreen mergedLesson,", mergedLesson);
    setSelectedLessonData(mergedLesson);
    setModalVisible(true);
  }

  if(!classData) return null;

  return (
    <>
      {/* 헤더 */}
      <View className="flex-row justify-between items-center px-[16px] pb-[7px] pt-[20px]">
        {/* 상단 헤더: 뒤로가기 버튼 */}
        <Pressable onPress={() => goBack()}>
          <CaretLeft width={35} height={35} fill="#CCCCCC" />
        </Pressable>
        {/* <Pressable onPress={popFullSheet}>
          <CaretLeft width={35} height={35} fill="#CCCCCC" />
        </Pressable> */}
        
        <View className="flex-row items-center gap-x-[10px]">
          <View className="flex-row items-center gap-x-[5px]">
            <Clover width={34} height={34} fill="#58CC02" />
            <Text className="text-[#58CC02] text-[18px] font-bold">{user?.studyDays ?? 0}</Text>
          </View>
          <View className="flex-row items-center gap-x-[5px]">
            <HeartStraight width={34} height={34} fill="#EE5555" />
            <Text className="text-[#EE5555] text-[18px] font-bold">5</Text>
          </View>
        </View>
      </View>

      {/* 상단 카드 */}
      <View className="flex-col justify-between items-center px-[16px]">
        <View className="flex flex-row gap-[2px] rounded-[12px] bg-[#fff] overflow-hidden">
          <Pressable className="flex-1 h-[78px] px-[16px] bg-[#93D333]">
            <View className="pt-[12px]">
              <Text className="text-[#FFFFFF] text-[16px] font-[700] opacity-70">{classData.title}</Text>
              <Text className="text-[#FFFFFF] text-[19px] font-[700]">{classData.Sections?.[0]?.name}</Text>
            </View>
          </Pressable>
          <Pressable className="items-center justify-center h-[78px] p-[16px] bg-[#93D333]">
            <Notepad width={28} height={28} fill="#FFFFFF" />
          </Pressable>
        </View>
      </View>
      <ScrollView className="px-[16px]">
        {/* 섹션 레슨 리스트 */}
        {classData?.Sections?.map((section: any, sectionIndex: number) => (
        <View key={`section_${sectionIndex}`}>
          {/* 섹션 타이틀 */}
          <View className="flex-row items-center gap-[16px] h-[82px]">
            <View className="flex-1 h-[2px] bg-[#ccc]" />
            <Text className="text-[#ccc] text-[19px] font-[700]">{section.name}</Text>
            <Text className="text-[#ccc] text-[19px] font-[700]">{`section_${sectionIndex}`}</Text>
            <View className="flex-1 h-[2px] bg-[#ccc]" />
          </View>
          {/* 레슨 리스트 */}
          {section.Lessons.map((lesson: any, lessonIndex: number) => {
              const st = statusMap.get(lesson.id);
              const isCompleted = st === STATUS.COMPLETED;
              const isNextStart = lesson.id === nextLessonId;

              // 색상/아이콘 결정
              const circleBg = isNextStart || isCompleted ? '#93D333' : '#CCCCCC';
              const showPlay = isNextStart; // 시작 표시일 때 ▶
              const showStartBadge = isNextStart;

              return (
                <View key={`section_${sectionIndex}_lesson_${lessonIndex}`} className="px-[16px]">
                  <View className="flex-col items-center justify-center">

                    {/* 시작 배지 */}
                    {showStartBadge && (
                      <View className="relative w-[88px] p-[12px] border border-[#93D333] rounded-[12px] bg-[#F0FFE5]">
                        <Text className="text-[#93D333] text-[17px] font-[700] text-center">시작</Text>
                        <View className="absolute bottom-[-6.5px] left-1/2">
                          <ChatBubbleTail width={8} height={7.5} fill="#93D333" bgColor="#F0FFE5" />
                        </View>
                      </View>
                    )}

                    {/* 레슨 원형 버튼 */}
                    <Pressable className="py-[10px]" onPress={() => onPressLessonButton(sectionIndex, lessonIndex)}>
                      <View
                        className="flex items-center justify-center w-[70px] h-[70px] rounded-[35px]"
                        style={{ backgroundColor: circleBg }}
                      >
                        {showPlay ? (
                          <Play width={42} height={42} fill="#fff" />
                        ) : (
                          <Star width={42} height={42} fill="#fff" />
                        )}
                      </View>
                    </Pressable>

                  </View>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* 모달 */}
      {modalVisible && selectedLessonData && (
        <LessonDetailModal 
          lessonData={selectedLessonData}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
};

export default ClassProgressScreen;