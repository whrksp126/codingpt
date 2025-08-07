import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { Code, FileText, PuzzlePiece, Star } from 'phosphor-react-native';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';
import lessonService from '../../services/lessonService';
import { countSectionsAndLessons } from '../../utils/lessonUtils';
import { CaretLeft, ListNumbers, Files, SealQuestion, TerminalWindow, TreeStructure } from '../../assets/SvgIcon';


const LessonDetailScreen = ({ route }: any) => {
  const { goBack, navigate } = useNavigation();
  const { user } = useUser();
  const { lessons } = useLesson();

  const { id, name, icon, description, price, progress, date } = route.params;
  const item = { id, name, icon, description, price, progress, date };

  // 수강 여부 확인
  const isEnrolled = lessons.some((lesson) => lesson.id === id);

  // section/lesson 개수 계산
  const enrolledLesson = lessons.find((l) => l.id === Number(id));
  const { sectionCount, lessonCount } = enrolledLesson
    ? countSectionsAndLessons(enrolledLesson)
    : { sectionCount: 0, lessonCount: 0 };

  // 탭 구성
  const [activeTab, setActiveTab] = useState('강의소개');
  const tabs = ['강의소개', '목차', '관련코스', '후기'];

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* 상단 헤더: 뒤로가기 버튼 */}
        <View className="flex-row items-center justfy-between bg-white px-[20px] pt-[20px] pb-[20px] gap-x-[20px]">
          <TouchableOpacity style={{ marginTop: 5 }} onPress={() => goBack()}>
            <CaretLeft width={35} height={35} fill="#CCCCCC" />
          </TouchableOpacity>
          <Text className="text-[22px] font-bold text-[#111111]">{name}</Text>
        </View>

        {/* 강의 기본 정보 */}
        <View className="px-[16px] py-[20px]">
          <View className="flex-row items-center gap-x-[10px]">
            <Image source={icon} className="w-[50px] h-[50px] mt-1" resizeMode="contain" />
            <Text className="text-[27px] font-bold text-black">{name}</Text>
          </View>
          <Text className="text-[15px] text-[#606060] mt-1">{description.replace(/\\n/g, ' ')}</Text>
          <View className="border border-[#CCCCCC] rounded-[16px] px-[40px] py-[10px] my-[30px]">
            <View className="flex-row justify-between items-center">
              {[
                { label: '목차', value: sectionCount, icon: <ListNumbers width={18} height={18} fill="#000000" /> },
                { label: '레슨', value: lessonCount, icon: <Files width={18} height={18} fill="#000000" /> },
                { label: '퀴즈', value: 300, icon: <SealQuestion width={18} height={18} fill="#000000" /> },
                { label: '코드 실습', value: 150, icon: <TerminalWindow width={18} height={18} fill="#000000" /> },
                { label: '프로젝트', value: 2, icon: <TreeStructure width={18} height={18} fill="#000000" /> },
              ].map((item, idx) => (
                <View key={idx} className="items-center flex-1">
                  <View className="mb-[6px]">{item.icon}</View>
                  <Text className="text-[10px] font-medium text-[#777777]">{item.label}</Text>
                  <Text className="text-[10px] font-medium text-[#58CC02] mt-1">{item.value}개</Text>
                </View>
              ))}
            </View>
          </View>
          {/* 학습하기 버튼 */}
          <TouchableOpacity
            className="bg-[#58CC02] rounded-[10px] py-[15px] px-6 mb-[30px] flex-row items-center justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 25,
              elevation: 5, // Android용
            }}
            onPress={async () => {
              if (!isEnrolled) {
                const registered = await lessonService.postMyclass(user!.id, id);
                if (registered) {
                  Alert.alert('수강 등록 완료');
                  navigate('classProgress', item);
                } else {
                  Alert.alert('수강 등록 실패');
                }
              } else {
                navigate('classProgress', item);
              }
            }}
          >
            <Text className="text-white text-[18px] font-bold mt-[-3px]">
              {isEnrolled ? '이어서 학습하기' : '수강신청하기'}
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center space-x-1">
            {/* 별 아이콘 5개 */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={16} color="#FFC700" weight="fill" />
            ))}

            {/* 평점, 후기, 수강생 */}
            <Text className="text-[10px] text-black ml-[5px] pb-[4px]">
              <Text className="underline">(5.0) 후기 4개</Text>{' '}
              <Text className="">수강생 3,000명</Text>
            </Text>
          </View>
          <Text className="font-bold text-[27px]">{price.toLocaleString()}원</Text>
        </View>

        {/* 탭 메뉴 */}
        <View className="flex-row border-b border-[#CCCCCC]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                className={`flex-1 items-center py-3 ${isActive ? 'border-b-2 border-[#58CC02]' : ''}`}
                onPress={() => setActiveTab(tab)}
              >
                <Text className={`text-[18px] font-semibold ${isActive ? 'text-[#58CC02]' : 'text-black'}`}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* 탭 내용 */}
        <View className="px-4 py-6">
          {activeTab === '강의소개' && (
            <View>
              <Text className="text-base font-semibold text-gray-800 mb-2">
                강의소개 내용이 여기에 들어갑니다.
              </Text>
            </View>
          )}
          {activeTab === '목차' && (
            <Text className="text-sm text-gray-600">목차 내용이 여기에 들어갑니다.</Text>
          )}
          {activeTab === '관련코스' && (
            <Text className="text-sm text-gray-600">관련 코스 정보가 여기에 들어갑니다.</Text>
          )}
          {activeTab === '후기' && (
            <Text className="text-sm text-gray-600">수강생들의 후기가 여기에 들어갑니다.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default LessonDetailScreen;