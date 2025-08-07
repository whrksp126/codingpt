// 내 강의 페이지
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';

// 강의 항목 타입
interface Lesson {
  id: string;
  title: string;
  icon: any;
  date: string;
  progress: number;
}

const LessonListScreen = ({ route }: any) => {
  const { navigate } = useNavigation();

  const { user } = useUser();
  const { lessons, loading: lessonLoading, reloadLessons } = useLesson();

  const [filter, setFilter] = useState<'전체' | '수강중' | '수강완료'>('전체');

  // 강의 제목 키워드로 아이콘 매핑
  const getIconByTitle = (title: string): any => {
    if (title.includes('HTML')) return require('../../assets/icons/html-5-icon.png');
    if (title.includes('CSS')) return require('../../assets/icons/css-3-icon.png');
    if (title.includes('자바스크립트')) return require('../../assets/icons/js-icon.png');
    if (title.includes('파이썬')) return require('../../assets/icons/python-icon.png');
    return require('../../assets/icons/js-icon.png'); // 임시로 js이미지 사용
  };

  // 실제 데이터 → UI 렌더용 Lesson[] 변환
  const lessonData: Lesson[] = lessons.map((item) => ({
    id: item.id.toString(),
    title: item.name,
    icon: getIconByTitle(item.name),
    date: '1일 전', // 임시로 1일 전 사용
    progress: item.price === 0 ? 75 : 100, // 임의 기준: 무료는 수강중, 유료는 완료 등으로 처리
  }));

  const filteredLessons = lessonData.filter((lesson) => {
    if (filter === '전체') return true;
    if (filter === '수강중') return lesson.progress < 100;
    if (filter === '수강완료') return lesson.progress === 100;
    return true;
  });



  {/* 강의 구조 */}
  const renderLesson = ({ item }: { item: Lesson }) => {
    const product = lessons.find(c => c.id === Number(item.id));

    if (!product) return null;

    return (
      <TouchableOpacity
        onPress={() =>
          navigate('lessonDetail', {
            ...product,
            icon: item.icon, // ✅ icon도 같이 넘김
            date: item.date,
            progress: item.progress,
          })
        }
        className="flex-row items-center bg-white border border-[#CCCCCC] rounded-[16px] p-2.5 mb-2.5"
      >
        <Image source={item.icon} className="w-[70px] h-[70px] mr-3.5" resizeMode="contain" />
        <View className="flex-1">
          <Text className="text-base font-bold text-[#111111]">{item.title}</Text>
          <Text className="text-sm text-[#777777] mb-2.5">{item.date}</Text>
          <Text
            className={`text-[10px] ml-1 ${
              item.progress === 100 ? 'text-[#027FCC]' : 'text-[#58CC02]'
            }`}
          >
            {item.progress}%
          </Text>
          <View className="h-2.5 rounded-full bg-[#F5F5F5] mt-0.5">
            <View
              className="h-2.5 rounded-full bg-[#FFC700]"
              style={{ width: `${item.progress}%` }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
};

  // 로딩 중일 때
  if (lessonLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#58CC02" />
        <Text className="mt-2 text-gray-600">강의 목록을 불러오는 중...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white pt-5">
      <Text className="text-[22px] font-bold mb-5 pl-4">내 강의</Text>

      {/* 레슨 상태 필터 */}
      <View className="flex-row justify-start pl-4">
        {['전체', '수강중', '수강완료'].map((label) => (
          <TouchableOpacity
            key={label}
            className={`rounded-full border border-[#606060] px-3.5 py-1 mr-2 ${
              filter === label ? 'bg-[#606060]' : 'bg-white'
            }`}
            onPress={() => setFilter(label as typeof filter)}
          >
            <Text
              className={`text-base ${
                filter === label ? 'text-white' : 'text-[#606060]'
              }`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 구분선 */}
      <View className="border-b border-[#CCCCCC] my-5" />

      {/* 강의 목록 */}
      <FlatList
        data={filteredLessons}
        renderItem={renderLesson}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export default LessonListScreen;
