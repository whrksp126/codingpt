import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, Pressable, Text, View, Image, Modal, Button } from 'react-native';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';
import { useNavigation } from '../../contexts/NavigationContext';
import { CaretLeft, ChatBubbleTail, Clover, HeartStraight, Notepad, Play, Star } from '../../assets/SvgIcon';
import { html as fetchData } from '../../data/item/lesson_data.js';
import LessonDetailModal from '../../components/Modal/LessonDetailModal';
import lessonService from '../../services/lessonService';

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


const ClassProgressScreen: React.FC = () => {
  const { user } = useUser();
  const { goBack } = useNavigation();
  const [classData, setClassData] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLessonData, setSelectedLessonData] = useState<any>(null);

  useEffect(() => {
    // TODO: productId 기반 실제 데이터 로드로 교체 가능
    setClassData(fetchData.class_list[0]);
    console.log('fetchData : ', fetchData);
    console.log('fetchData : ', fetchData.class_list[0]);
  }, []);

  const onPressLessonButton = (sectionIndex: number, lessonIndex: number) => {
    const lessonData = classData.sections[sectionIndex].lessons[lessonIndex];
    setSelectedLessonData(lessonData);
    setModalVisible(true);
  }

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

                <Pressable className="py-[10px]" onPress={()=>{onPressLessonButton(sectionIndex, lessonIndex)}}>
                  <View className={`
                    flex items-center justify-center 
                    w-[70px] h-[70px] 
                    rounded-[35px] 
                    ${classData.progress === sectionIndex && section.progress === lessonIndex ? 'bg-[#93D333]' : (
                      lesson.isCompleted ? 'bg-[#93D333]' : 'bg-[#CCCCCC]'

                    )}
                    `}>
                    {classData.progress === sectionIndex && section.progress === lessonIndex ? (
                      <Play width={42} height={42} fill="#fff" />
                    ):(
                      <Star width={42} height={42} fill="#fff" />
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