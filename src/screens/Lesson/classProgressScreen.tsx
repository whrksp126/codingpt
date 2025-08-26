import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, Pressable, Text, View, Image, Modal, Button } from 'react-native';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';
import { useNavigation } from '../../contexts/NavigationContext';
import { CaretLeft, ChatBubbleTail, Clover, HeartStraight, Notepad, Play, Star } from '../../assets/SvgIcon';
import { html as fetchData } from '../../data/item/lesson_data.js';
import LessonDetailModal from '../../components/Modal/LessonDetailModal';
import lessonService from '../../services/lessonService';

// ✅ product -> fetchData 호환 구조로 변환
// - product.name        -> classData.title
// - Classes[0].Sections -> classData.sections[*]
// - Sections[*].Lessons -> sections[*].lessons[*]
// - Lessons[*].Slides[0].contents.* 를 lessons[*]에 병합(flatten)
function transformProductToClassData(product: any) {
  const cls = product?.Classes?.[0];
  const statusList = product?.status;
  console.log('statusList : ', statusList);
  // id 기준 오름차순
  // const flat = (product?.status ?? []).sort((a: any, b: any) => (a.id ?? 0) - (b.id ?? 0));
  // console.log('flat : ', flat);

  return {
    title: product?.name ?? '제목 없음',                  // fetchData.title
    description: product?.description ?? '',             // 필요 시 사용
    progress: 0,                                         // 현재 섹션 인덱스(앱 로직에 맞게 갱신)
    sections: (cls?.Sections ?? []).map((section: any) => {
      return {
        title: section?.name ?? '섹션 제목 없음',          // fetchData.sections[*].title
        progress: 0,                                     // 현재 레슨 인덱스(앱 로직에 맞게 갱신)
        // ↓ 레슨 평탄화
        lessons: (section?.Lessons ?? []).map((lesson: any) => {
          // Slides[0].contents 에 실제 표시용 데이터가 들어있다고 했으니 안전하게 꺼냄
          const firstSlide = (lesson?.Slides ?? [])[0] ?? {};
          const contents   = firstSlide?.contents ?? {};

          // contents 안에 구조가 케이스별로 다를 수 있어 방어코드로 안전하게 추출
          // - title 후보: contents.lessons?.[0]?.title || contents.title || lesson.name
          const contentsLesson0 = Array.isArray(contents?.lessons) ? contents.lessons[0] : null;
          const mergedTitle =
            contentsLesson0?.title ??
            contents?.title ??
            lesson?.name ??
            `Lesson ${lesson?.id ?? ''}`;

          // sliders는 fetchData에서 레슨 실행 모듈들 배열을 의미
          // - 위치 후보: contentsLesson0?.sliders || contents?.sliders || []
          const mergedSliders =
            (contentsLesson0?.sliders && Array.isArray(contentsLesson0.sliders))
              ? contentsLesson0.sliders
              : (Array.isArray(contents?.sliders) ? contents.sliders : []);

          // lesson의 id와 일치하는 status 찾기
          const lessonStatus = Array.isArray(statusList) 
            ? statusList.find((s: any) => s.lesson_id === lesson?.id)
            : null;
          // 완료 여부 판단
          const status = lessonStatus?.status;
          console.log('status : ', status);
          const isCompleted = status === 2? true : false;
          console.log('isCompleted : ', isCompleted);


          // 필요 없는 필드는 버리고, 필요한 것만 병합
          return {
            lessonId: lesson?.id,                // 📌 fetchData 요구사항: id는 Lessons.id와 일치
            title: mergedTitle,            // 화면에 보일 제목
            isCompleted: isCompleted,      // 레슨 완료 여부(myclass_status)
            sliders: mergedSliders,        // 화면 모듈(없으면 [])
            myclassId: lessonStatus?.myclass_id,
            sectionId: section?.id,
            result: lessonStatus?.results, // 레슨 결과(복습 모드 시 필요)
          };
        }),
      };
    }),
  };
}


const ClassProgressScreen: React.FC = () => {
  const { user } = useUser();
  const { goBack } = useNavigation();
  const [classData, setClassData] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLessonData, setSelectedLessonData] = useState<any>(null);
  const { activeProductId, getProduct } = useLesson();

  useEffect(() => {
    const product = getProduct(activeProductId ?? 0);

    const transformed = transformProductToClassData(product);
    console.log('transformed : ', transformed);
    setClassData(transformed);

    // setClassData(fetchData.class_list[0]);
  }, []);

  // 레슨 아이템 클릭 시 모달 오픈
  // - sectionIndex, lessonIndex로 classData에서 해당 lesson을 찾아 모달에 전달
  // - 모달 내부에서 "학습 시작" or "복습" 제어 예정(학습 여부는 추후 LessonContext/서버값 기반)
  const onPressLessonButton = (sectionIndex: number, lessonIndex: number) => {
    const lessonData = classData.sections[sectionIndex].lessons[lessonIndex]; // classData에서 해당 lesson을 찾아 모달에 전달
    setSelectedLessonData(lessonData); // 모달에 전달
    setModalVisible(true); // 모달 오픈
  }

  // 초기 로딩 중이면 아무것도 렌더링하지 않음
  if(classData === null) return null;

  return (
    <>
      {/* 헤더 */}
      <View className="flex-row justify-between items-center px-[16px] pb-[7px] pt-[20px]">
        {/* 상단 헤더: 뒤로가기 버튼 */}
        <Pressable onPress={() => goBack()}>
          <CaretLeft width={35} height={35} fill="#CCCCCC" />
        </Pressable>
        
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
          {/* 현재 선택된(또는 진행 중인) 섹션 제목 노출 카드 */}
          <Pressable className="flex-1 h-[78px] px-[16px] bg-[#93D333]">
            <View className="pt-[12px]">
              <Text className="text-[#FFFFFF] text-[16px] font-[700] opacity-70">{classData.title}</Text>
              <Text className="text-[#FFFFFF] text-[19px] font-[700]">{classData.sections[0].title}</Text>
            </View>
          </Pressable>
          <Pressable className="items-center justify-center h-[78px] p-[16px] bg-[#93D333]">
            <Notepad width={28} height={28} fill="#FFFFFF" />
          </Pressable>
        </View>
      </View>
      {/* ===== 본문: 섹션/레슨 리스트 ===== */}
      <ScrollView className="px-[16px]">
        {/* 섹션 레슨 리스트 */}
        {classData.sections.map((section: any, sectionIndex: number) => (
        <View key={`section_${sectionIndex}`}>
          {/* 섹션 타이틀 */}
          <View className="flex-row items-center gap-[16px] h-[82px]">
            <View className="flex-1 h-[2px] bg-[#ccc]" />
            <Text className="text-[#ccc] text-[19px] font-[700]">{section.title}</Text>
            <View className="flex-1 h-[2px] bg-[#ccc]" />
          </View>
          {/* 레슨 리스트 */}
          {section.lessons.map((lesson: any, lessonIndex: number) => (
            <View key={`section_${sectionIndex}_lesson_${lessonIndex}`} className="px-[16px]">
              <View className="flex-col items-center justify-center">
                {/* "시작" 말풍선 표시 조건:
                      - classData.progress === 현재 섹션 인덱스
                      - section.progress === 현재 레슨 인덱스
                      ※ 즉, 이 (섹션, 레슨) 쌍이 현재 진행 포인터와 일치할 때 */}
                {classData.progress === sectionIndex && section.progress === lessonIndex ? (
                <View className="relative w-[88px] p-[12px] border border-[#93D333] rounded-[12px] bg-[#F0FFE5]">
                  <Text className="text-[#93D333] text-[17px] font-[700] text-center">시작</Text>
                  <View className="absolute bottom-[-6.5px] left-1/2">
                    <ChatBubbleTail width={8} height={7.5} fill="#93D333" bgColor="#F0FFE5" />
                  </View>
                </View>
                ) : (
                <>
                </>
                )
                }
  
                {/* 레슨 아이템 버튼(원형): 클릭 시 모달 오픈 */}
                <Pressable className="py-[10px]" onPress={()=>{onPressLessonButton(sectionIndex, lessonIndex)}}>
                  <View className={`
                    flex items-center justify-center 
                    w-[70px] h-[70px] 
                    rounded-[35px] 
                    ${
                      // 진행 포인터에 해당하면 초록 / 완료도 초록 / 그 외 회색
                      classData.progress === sectionIndex && section.progress === lessonIndex 
                        ? 'bg-[#93D333]' 
                        : (lesson.isCompleted ? 'bg-[#93D333]' : 'bg-[#CCCCCC]')
                    }
                    `}
                  >
                    {classData.progress === sectionIndex && section.progress === lessonIndex ? (
                      <Play width={42} height={42} fill="#fff" /> // 현재 진행 레슨이면 재생(Play) 아이콘
                    ):(
                      <Star width={42} height={42} fill="#fff" /> // 완료된 레슨이면 별(Star) 아이콘
                    )}
                  </View>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
        ))}
      </ScrollView>

      {/* 모달 */}
      {/* ===== 레슨 상세 모달 =====
          - 선택된 레슨(selectedLessonData)을 props로 전달
          - 내부에서 "학습 시작 / 복습" 분기 로직 구현 예정
            (추후: LessonContext or 서버의 myclass_status로 학습 여부 판단) */}
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