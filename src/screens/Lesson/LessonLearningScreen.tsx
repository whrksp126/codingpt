import React, { useEffect, useState, useRef } from 'react';
import { Pressable, ScrollView, Text, View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { HeartStraight, X } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Gesture } from 'react-native-gesture-handler';

interface Slide {
  title: string;
  content: string;
}

interface Lesson {
  sliders: Slide[];
}

const LessonLearningScreen: React.FC<{ route: any }> = ({ route }) => {
  const { goBack } = useNavigation();
  const carouselRef = useRef<ICarouselInstance>(null);
  const { width: screenWidth } = Dimensions.get('window');
  const { bottom } = useSafeAreaInsets();

  const [curLesson, setCurLesson] = useState<Lesson | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const { lessonData } = route.params;
    setCurLesson(lessonData);
  }, []);

  if (!curLesson) return null;

  const isLastSlide = currentIndex === curLesson.sliders.length - 1;
  const isFirstSlide = currentIndex === 0;

  return (
    <>
      {/* 상단 헤더 */}
      <View className="flex-row items-center gap-[16px] h-[50px] px-[16px] border-b border-[#ccc]">
        <Pressable onPress={goBack}>
          <X width={35} height={35} fill="#ccc" />
        </Pressable>
        <View className="flex-1 bg-[#E5E5E5] rounded-[10px] overflow-hidden">
          <View className="w-[100px] h-[20px] rounded-[10px] bg-[#FFC800]" />
        </View>
        <View className="flex-row items-center gap-[5px]">
          <HeartStraight width={35} height={35} fill="#EE5555" />
          <Text className="text-[#EE5555] text-[18px] font-[700]">5</Text>
        </View>
      </View>

      {/* 캐러셀 */}
      <Carousel
        ref={carouselRef}
        width={screenWidth}
        loop={false}
        autoPlay={false}
        data={curLesson.sliders}
        scrollAnimationDuration={500}
        defaultIndex={0}
        onSnapToItem={(index) => setCurrentIndex(index)}
        enabled={false}
        renderItem={({ item }) => (
          <View className="flex-1 bg-white">
            <ScrollView className="flex-1">
              <View className="p-[16px]">
                <Text className="text-[#111] text-[18px] font-[700]">{item.title}</Text>
              </View>
            </ScrollView>
            <View className={`flex-row items-center gap-[16px] p-[16px]`}>
              <Pressable className="flex items-center justify-center flex-1 h-[50px] rounded-[10px] bg-[#E5E5E5]">
                <Text className="text-[#AFAFAF] text-[18px] font-[700] text-center">확인</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default LessonLearningScreen;