import React, { useEffect, useState, useRef } from 'react';
import { Pressable, ScrollView, Text, View, Image } from 'react-native';
import { HeartStraight, X } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
import { WebViewComponent } from '../../components/module/WebView';
import { ParagraghComponent } from '../../components/module/Paragragh';
import { CodeComponent } from '../../components/module/Code';
import { MultipleChoiceComponent } from '../../components/module/MultipleChoice';


interface SlideModule{
  id: string;
  type: 'paragraph' | 'image' | 'code' | 'webview' | 'multipleChoice' | 'codeFillTheGap';
  content: string;
  visibility: {
    type: string;
    value: number;
  };
  options?: {
    label: string;
    isCorrect: boolean;
  }[];
}

interface Slide {
  id: string;
  title: string;
  modules: SlideModule[]
}

interface Lesson {
  sliders: Slide[];
}

const LessonLearningScreen: React.FC<{ route: any }> = ({ route }) => {
  const { goBack } = useNavigation();
  const [curLesson, setCurLesson] = useState<Lesson | null>(null);
  const [curSlideIndex, setCurSlideIndex] = useState<number>(0);
  const [curSlide, setCurSlide] = useState<Slide | null>(null);

  const [viewModules, setViewModules] = useState<SlideModule[]>([]);
  const [curStep, setCurStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});


  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [webViewLoadCount, setWebViewLoadCount] = useState<number>(0);

  useEffect(() => {
    const { lessonData } = route.params;
    setCurLesson(lessonData);
    setCurSlide(lessonData.sliders[curSlideIndex]);


    const initModules = getStepModules(curStep)
    const problemModule = getProblemModule(initModules || []);
    if(!problemModule){
      setIsNextButtonEnabled(true)
    }


    addModuleToScreen(initModules || [])

  }, []);

  // 다음 버튼 클릭 시
  const onPressNext = () => {
    const curStepModules = getStepModules(curStep);
    const problemModule = getProblemModule(curStepModules || []);
    if(problemModule){
      // 현재 스텝에 문제가 포함된 경우
      const problemModuleIndex = curSlide?.modules.findIndex((module) => module.id === problemModule.id) ?? 0;

      if((curLesson?.sliders[curSlideIndex].modules[problemModuleIndex] as any)?.isCorrect === undefined){
        // 채점하지 않은 경우
        if(problemModule.type === 'multipleChoice'){
          
          const selectedAnswer = selectedAnswers[`slide-${curSlideIndex}-module-${problemModuleIndex}`];
          const isCorrect = problemModule.options?.[selectedAnswer]?.isCorrect;
          setCurLesson(prev => {
            if(!prev) return prev;
            return {
              ...prev,
              sliders: prev.sliders.map((slider, sliderIndex) => 
                sliderIndex === curSlideIndex ?
                { 
                  ...slider, 
                  modules: slider.modules.map((module, moduleIndex) => 
                    moduleIndex === problemModuleIndex ? 
                    { 
                      ...module, 
                      isCorrect: isCorrect 
                    } 
                    : 
                    module
                  ) 
                } 
                : 
                slider
              )
            }
          })
          if(isCorrect){
            console.log('정답입니다!')
          }else{
            console.log('오답입니다!')
          }
          // 채점 화면 출력 해야 함
  
        }
      }else{
        // 채점 완료 한 경우
        const nextStepModules = getStepModules(curStep + 1)
        if(nextStepModules){
          // 다음 스텝이 있는 경우
          addModuleToScreen(nextStepModules)
          setCurStep(curStep + 1)
        }else{
          // 다음 스텝이 없는 경우
          setCurSlideIndex(curSlideIndex + 1)
          setCurStep(0)
        }
      }
    }else{
      // 현재 스텝에 문제가 미포함된 경우
      const nextStepModules = getStepModules(curStep + 1)
      if(nextStepModules){
        // 다음 스텝이 있는 경우
        // 다음 스탭 모듈 출력
        addModuleToScreen(nextStepModules)
        setCurStep(curStep + 1)
        // 다음 스탭에 문제가 있는 경우
        const problemModule = getProblemModule(nextStepModules || []);
        if(problemModule){
          // 확인 버튼 비활성화
          setIsNextButtonEnabled(false)
          // 사지선다 문제는 하나라도 선택을 기다림
          // 코드 빈칸 선택 채우기 문제는 하나라도 선택하길 기다림
        }
      }else{
        // 다음 스텝이 없는 경우
        setCurSlideIndex(curSlideIndex + 1)
        setCurStep(0)
        // 다음 슬라이드로 이동
      }
      

    }
  }

  // modules에서 특정 스텝 데이터만 조회
  const getStepModules = (step: number) => {
    const stepModules = curSlide?.modules.filter((module) => module?.visibility?.type === 'step' && module.visibility.value === step)
    return stepModules
  }

  // 입력 받은 모듈 화면에 추가
  const addModuleToScreen = (modules: SlideModule[]) => {
    setViewModules(prevModules => [...prevModules, ...modules])
  }

  // 새로운 모듈이 추가될 때 스크롤을 맨 아래로 이동
  useEffect(() => {
    if (viewModules.length > 0) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [viewModules.length, webViewLoadCount]);

  // 문제 유형 모듈 반환
  const getProblemModule = (modules: SlideModule[]) => {
    const found = modules.find(module => module.type === 'multipleChoice' || module.type === 'codeFillTheGap');
    return found ? found : null;
  }

  // 답변 선택 핸들러
  const handleAnswerSelect = (slideIndex: number, moduleIndex: number, selectedOptionIndex: number) => {

    setSelectedAnswers(prev => ({
      ...prev,
      [`slide-${slideIndex}-module-${moduleIndex}`]: selectedOptionIndex
    }));
    setIsNextButtonEnabled(true)
  };

  // 선택된 답변 가져오기
  const getSelectedAnswer = (slideIndex: number, moduleIndex: number) => {
    return selectedAnswers[`slide-${slideIndex}-module-${moduleIndex}`] ?? -1;
  };
  
  if (!curLesson) return null;
  

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
        <ScrollView ref={scrollViewRef} className="flex-1">
          <View className="flex-col gap-[20px] px-[16px] pt-[20px]">
            <Text className="text-[#111] text-[18px] font-[700]">
              {curSlide?.title || '제목 없음'}
            </Text>

            {viewModules.map((module, moduleIndex) => {
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
                      <CodeComponent 
                        module={module}
                        onLoadComplete={() => {
                          setWebViewLoadCount(prev => prev + 1);
                        }}
                      />
                    </View>
                  );
                case 'webview':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <WebViewComponent 
                        module={module} 
                        onLoadComplete={() => {
                          setWebViewLoadCount(prev => prev + 1);
                        }}
                      />
                    </View>
                  );
                case 'multipleChoice':
                  return (
                    <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
                      <MultipleChoiceComponent 
                        module={module} 
                        onAnswerSelect={(selectedOptionIndex) => 
                          handleAnswerSelect(curSlideIndex, moduleIndex, selectedOptionIndex)
                        }
                        selectedAnswer={getSelectedAnswer(curSlideIndex, moduleIndex)}
                      />
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
          <Pressable 
            onPress={onPressNext}
            disabled={!isNextButtonEnabled}
            className={`
              flex items-center justify-center flex-1 
              h-[50px] 
              rounded-[10px] 
              ${isNextButtonEnabled ? 'bg-[#58CC02]' : 'bg-[#E5E5E5]'}
            `}>
            <Text className="text-[#fff] text-[18px] font-[700] text-center">확인</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LessonLearningScreen;