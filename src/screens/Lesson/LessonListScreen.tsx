// 내 강의 페이지
import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import { useLesson } from '../../contexts/LessonContext';
import { parseLessonList, getIconByTitle, ParsedLesson } from '../../utils/lessonUtils';

const LessonListScreen = () => {
  const { navigate } = useNavigation();
  const { user } = useUser();
  const { lessons, loading: lessonLoading } = useLesson();

  const [filter, setFilter] = useState<'전체' | '수강중' | '수강완료'>('전체');

  // 전체 강의 리스트 가공
  const parsedLessons = useMemo(() => parseLessonList(lessons), [lessons]);

  // 필터 적용 + 아이콘 추가
  const filteredLessons: (ParsedLesson & { icon: any })[] = useMemo(() => {
    return parsedLessons
      .filter((lesson) => {
        if (filter === '전체') return true;
        return lesson.status === filter;
      })
      .map((lesson) => ({
        ...lesson,
        icon: getIconByTitle(lesson.title),
      }));
  }, [parsedLessons, filter]);

  // 강의 카드 렌더링
  const renderLesson = ({ item }: { item: ParsedLesson & { icon: any } }) => {
    const product = lessons.find((c) => c.id === Number(item.id));
    if (!product) return null;

    return (
      <TouchableOpacity
        onPress={() =>
          navigate('lessonDetail', {
            ...product,
            icon: item.icon,
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

  // 로딩 상태 처리
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

      {/* 탭 필터 */}
      <View className="flex-row justify-start pl-4">
        {['전체', '수강중', '수강완료'].map((label) => (
          <TouchableOpacity
            key={label}
            className={`rounded-full border border-[#606060] px-3.5 py-1 mr-2 ${
              filter === label ? 'bg-[#606060]' : 'bg-white'
            }`}
            onPress={() => setFilter(label as typeof filter)}
          >
            <Text className={`text-base ${filter === label ? 'text-white' : 'text-[#606060]'}`}>
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
