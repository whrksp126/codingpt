import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View, Image } from 'react-native';
import { HeartStraight, X } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
import { WebViewComponent } from '../../components/module/WebView';
import { ParagraghComponent } from '../../components/module/Paragragh';
import { CodeComponent } from '../../components/module/Code';
import { MultipleChoiceComponent } from '../../components/module/MultipleChoice';
interface SlideModule {
  type: 'paragraph' | 'image' | 'code' | 'webview';
  content: string;
}

interface Slide {
  title: string;
  modules: SlideModule[];
}

interface Lesson {
  sliders: Slide[];
}

const LessonLearningScreen: React.FC<{ route: any }> = ({ route }) => {
  const { goBack } = useNavigation();
  const [curLesson, setCurLesson] = useState<Lesson | null>(null);
  const [curSlideIndex, setCurSlideIndex] = useState<number>(0);

  useEffect(() => {
    const { lessonData } = route.params;
    setCurLesson(lessonData);
  }, []);

  if (!curLesson) return null;

  const currentSlide = curLesson.sliders[curSlideIndex];

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

      {/* 슬라이드 컨텐츠 */}
      <View className="flex-1">
        <ScrollView className="flex-1">
          <View className="flex-col gap-[20px] px-[16px] pt-[20px]">
            <Text className="text-[#111] text-[18px] font-[700]">
              {currentSlide?.title || '제목 없음'}
            </Text>

            {currentSlide?.modules.map((module, moduleIndex) => {
              switch (module.type) {
                case 'paragraph':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>      
                      <ParagraghComponent module={module} />
                    </View>
                  );
                case 'image':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <Image source={{ uri: module.content }} className="w-full h-[200px]" />
                    </View>
                  );
                case 'code':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <CodeComponent module={module} />
                    </View>
                  );
                case 'webview':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <WebViewComponent module={module} />
                    </View>
                  );
                case 'multipleChoice':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <MultipleChoiceComponent module={module} />
                    </View>
                  );
                default:
                  return null;
              }
            })}
          </View>
        </ScrollView>

        {/* 하단 버튼 */}
        <View className="flex-row items-center gap-[16px] p-[16px]">
          <Pressable className="flex items-center justify-center flex-1 h-[50px] rounded-[10px] bg-[#E5E5E5]">
            <Text className="text-[#AFAFAF] text-[18px] font-[700] text-center">확인</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LessonLearningScreen;