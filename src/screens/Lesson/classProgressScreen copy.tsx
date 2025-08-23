import React, { useMemo, useState } from 'react';
import { ScrollView, Pressable, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useUser } from '../../contexts/UserContext';
import { CaretLeft, ChatBubbleTail, Clover, HeartStraight, Notepad, Play, Star } from '../../assets/SvgIcon';
// import { html as fetchData } from '../../data/item/lesson_data.js';
import LessonDetailModal from '../../components/Modal/LessonDetailModal';
import { useNavigation } from '../../contexts/NavigationContext';
import { useLesson } from '../../contexts/LessonContext';
// import lessonService from '../../services/lessonService';

const ClassProgressScreen: React.FC = () => {
  const { user } = useUser();
  const { goBack, navigate } = useNavigation();
  // const [classData, setClassData] = useState<any>(null);
  // const [modalVisible, setModalVisible] = useState(false);
  const [selectedLessonData, setSelectedLessonData] = useState<any>(null);

  // useEffect(() => {
  //   // TODO: productId 기반 실제 데이터 로드로 교체 필요
  //   // setClassData(fetchData.class_list[0]);
  //   (async () => {
  //     try {
  //       // DB에서 가져온 임시 데이터
  //       const res = await lessonService.getSlidesByLesson();
  //       // 화면은 class_list[0]만 사용 (기존 더미 구조 유지)
  //       const fetchData = res.contents?.class_list?.[0];
  //       setClassData(fetchData);
  //       console.log('setClassData : ', fetchData);

  //       const data = await lessonService.getLessonResult(3, 3);
  //       console.log("복습 데이터 받아오나.........data,", data);
  //     } catch (e) {
  //       console.error('load class progress failed:', e);
  //       }
  //   })();
    
  //   // console.log('fetchData : ', fetchData.class_list[0]);
  // }, []);

  // ✅ 컨텍스트 훅
  const {
    activeProductId,
    getProduct,
    getSectionsOfProduct,
    getFirstUnfinishedPointer,
    setActivePSL,
    getOrBuildLessonPayload,      // 레슨 페이로드 캐시 빌더
    lessons,
    setActiveProduct,
  } = useLesson();

  // ✅ 화면에 뿌릴 데이터(컨텍스트에서 즉시)
  const product = useMemo(() => activeProductId ? getProduct(activeProductId) : undefined, [activeProductId, getProduct]);
  const sections = useMemo(() => activeProductId ? getSectionsOfProduct(activeProductId) : [], [activeProductId, getSectionsOfProduct]);
  const pointer = useMemo(() => product ? getFirstUnfinishedPointer(product) : { sectionIdx: 0, lessonIdx: 0 }, [product, getFirstUnfinishedPointer]);

  console.log('ClassProgressScreen - product:', product);
  console.log('ClassProgressScreen - sections:', sections);

  // ✅ 모달 상태(유지)
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState<{ sectionIndex: number; lessonIndex: number } | null>(null);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>선택된 강의가 없습니다.</Text>
      </View>
    );
  }

  if (!sections || sections.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>섹션이 없습니다.</Text>
      </View>
    );
  }

  // if(classData === null) return null;

  const classTitle = product.Classes?.[0]?.name ?? '클래스';
  const sectionTitle = sections[pointer.sectionIdx]?.name ?? '섹션';

  // ✅ 레슨 원클릭 → 모달 오픈(기존 유지)
  const onPressLessonButton = (sectionIndex: number, lessonIndex: number) => {
    const lessonData = sections[sectionIndex].Lessons[lessonIndex];
    console.log("모달 오픈 lessonData,", lessonData);
    setSelectedLessonData(lessonData);
    setSelected({ sectionIndex, lessonIndex });
    console.log("모달 sectionIndex,", { sectionIndex });
    console.log("모달 lessonIndex,", { lessonIndex });
    setModalVisible(true);
  }

  // ✅ 모달의 "학습 시작" 버튼 → 컨텍스트 세팅 + 프리패치 + 이동
  const handleStartFromModal = async () => {
    if (!selected) return;
    const sec = sections[selected.sectionIndex];
    const les = sec.Lessons[selected.lessonIndex];

    // 컨텍스트에 현재 학습할 PSL 저장
    setActivePSL(product.id, sec.id, les.id);

    // 현재 레슨의 학습 상태 확인
    const lessonStatus = product.status?.find(st => st.lesson_id === les.id);
    const isCompleted = lessonStatus?.status === 2;
    console.log("lessonStatus,", lessonStatus);
    console.log("isCompleted,", isCompleted);

    try {
      let lessonData;
      
      if (isCompleted) {
        // 학습 완료된 레슨: 복습 데이터 사용
        console.log('복습 모드 - 학습 결과 데이터 사용');
        lessonData = {
          lessonId: les.id,
          isReview: true,
          reviewData: lessonStatus.result,
          // 복습용 기본 구조 제공
          sliders: les.Slides?.map(slide => ({
            id: slide.id,
            title: slide.contents?.title || '복습',
            modules: slide.contents?.modules || []
          })) || []
        };
      } else {
        // 새로운 학습: 학습 데이터 사용
        console.log('새로운 학습 모드 - 학습 데이터 사용');
        
        // 페이로드 캐시(없으면 Slides로 빌드/필요시 1회 서버백업)
        const payload = await getOrBuildLessonPayload(les.id);
        
        if (!payload) {
          throw new Error('학습 데이터를 가져올 수 없습니다.');
        }

        lessonData = {
          lessonId: les.id,
          isReview: false,
          ...payload
        };
      }

      // 화면 이동 시 데이터 전달
      navigate('lessonLearning', { lessonData });
      
    } catch (error) {
      console.error('학습 시작 실패:', error);
      // 에러 발생 시 사용자에게 알림
      Alert.alert('오류', '학습을 시작할 수 없습니다. 다시 시도해주세요.');
    }
  };


  return (
    <>
      {/* 헤더 */}
      <View className="flex-row justify-between items-center px-[16px] pb-[7px] pt-[20px]">
        <Pressable onPress={goBack}><CaretLeft width={35} height={35} fill="#CCCCCC" /></Pressable>
        <View className="flex-row items-center gap-x-[10px]">
          <View className="flex-row items-center gap-x-[5px]">
            <Clover width={34} height={34} fill="#58CC02" />
            <Text className="text-[#58CC02] text-[18px] font-bold">{user?.studyDays ?? 0}</Text>
          </View>
          <View className="flex-row items-center gap-x-[5px]">
            <HeartStraight width={34} height={34} fill="#EE5555" />
            <Text className="text-[#EE5555] text-[18px] font-bold">{user?.heart ?? 5}</Text>
          </View>
        </View>
      </View>

      {/* 상단 카드 */}
      <View className="flex-col justify-between items-center px-[16px]">
        <View className="flex flex-row gap-[2px] rounded-[12px] bg-[#fff] overflow-hidden">
          <Pressable className="flex-1 h-[78px] px-[16px] bg-[#93D333]">
            <View className="pt-[12px]">
              <Text className="text-[#FFFFFF] text-[16px] font-[700] opacity-70">{classTitle}</Text>
              <Text className="text-[#FFFFFF] text-[19px] font-[700]">{sectionTitle}</Text>
            </View>
          </Pressable>
          <Pressable className="items-center justify-center h-[78px] p-[16px] bg-[#93D333]">
            <Notepad width={28} height={28} fill="#FFFFFF" />
          </Pressable>
        </View>
      </View>

      {/* 섹션/레슨 리스트 */}
      <ScrollView className="px-[16px]">
        {sections.map((section, sIdx) => (
          <View key={`section_${section.id}`}>
            {/* 섹션 타이틀 */}
            <View className="flex-row items-center gap-[16px] h-[82px]">
              <View className="flex-1 h-[2px] bg-[#ccc]" />
              <Text className="text-[#ccc] text-[19px] font-[700]">{section.name}</Text>
              <View className="flex-1 h-[2px] bg-[#ccc]" />
            </View>

            {/* 레슨 목록 */}
            {section.Lessons.map((les, lIdx) => {
              const isPointer = pointer.sectionIdx === sIdx && pointer.lessonIdx === lIdx;
              const st = product.status?.find(st => st.lesson_id === les.id);
              const isCompleted = st?.status === 2;

              return (
                <View key={`s_${sIdx}_l_${lIdx}`} className="px-[16px]">
                  <View className="flex-col items-center justify-center">
                    {isPointer && (
                      <View className="relative w-[88px] p-[12px] border border-[#93D333] rounded-[12px] bg-[#F0FFE5]">
                        <Text className="text-[#93D333] text-[17px] font-[700] text-center">시작</Text>
                        <View className="absolute bottom-[-6.5px] left-1/2">
                          <ChatBubbleTail width={8} height={7.5} fill="#93D333" bgColor="#F0FFE5" />
                        </View>
                      </View>
                    )}

                    <Pressable className="py-[10px]" onPress={() => onPressLessonButton(sIdx, lIdx)}>
                      <View
                        className={`flex items-center justify-center w-[70px] h-[70px] rounded-[35px]
                          ${isPointer ? 'bg-[#93D333]' : isCompleted ? 'bg-[#93D333]' : 'bg-[#CCCCCC]'}
                        `}
                      >
                        {isPointer ? <Play width={42} height={42} fill="#fff" /> : <Star width={42} height={42} fill="#fff" />}
                      </View>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* ✅ 모달: 기존 로직 유지 + onStart 연결 */}
      {modalVisible && selected && (
        <LessonDetailModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onStart={handleStartFromModal}                // ← 여기!
          lessonData={sections[selected.sectionIndex].Lessons[selected.lessonIndex]}
        />
      )}
    </>
  );
};

export default ClassProgressScreen;