import React, { useEffect, useState, useRef } from 'react';
import { Pressable, ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { HeartStraight, X } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
import { WebViewComponent } from '../../components/module/WebView';
import { ParagraghComponent } from '../../components/module/Paragragh';
import { CodeComponent } from '../../components/module/Code';
import { MultipleChoiceComponent } from '../../components/module/MultipleChoice';
import { CodeFillTheGapComponent } from '../../components/module/CodeFillTheGap';
import PagerView from 'react-native-pager-view';


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
  const { lessonData } = route.params;
  const pagerRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState([lessonData?.sliders[0]]);

  const { goBack } = useNavigation();
  const [curLesson, setCurLesson] = useState<Lesson | null>(lessonData);
  const [curSlideIndex, setCurSlideIndex] = useState<number>(0);

  // sliders.length만큼 0을 넣어줍니다.
  const [curSlideStep, setCurSlideStep] = useState<number[]>(Array(lessonData?.sliders.length).fill(0));

  const [isModuleAdded, setIsModuleAdded] = useState<boolean>(false);

  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [webViewLoadCount, setWebViewLoadCount] = useState<number>(0);

  useEffect(() => {
    const initModules = getStepModules(curSlideStep[curSlideIndex])
    const problemModule = getProblemModule(initModules || []);
    if(!problemModule){
      setIsNextButtonEnabled(true)
    }

  }, []);

  useEffect(() => {
    setVisibleSlides(curLesson?.sliders.slice(0, visibleSlides.length) || []);
  }, [curLesson]);

  // 모듈 추가 시 즉시 다음 스텝 모듈 표현
  useEffect(() => {
    if(isModuleAdded){
      setSortCurSlideModules();
      setCurSlideStep(prev => {
        const updated = [...prev];
        updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
        return updated;
      });
      setIsModuleAdded(false)
    }
  }, [isModuleAdded]);

  const setSortCurSlideModules = () => {
    setCurLesson(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        sliders: prev.sliders.map(slider => ({
          ...slider,
          modules: slider.modules.sort((a: SlideModule, b: SlideModule) => {
            return (a.visibility?.value ?? 0) - (b.visibility?.value ?? 0);
          })
        }))
      }
    })
  }

  // step이 끝나면 다음 슬라이드 추가 및 이동
  const goToNextSlide = () => {
    if (visibleSlides.length < (curLesson?.sliders?.length ?? 0)) {
      setVisibleSlides(prev => [...prev, curLesson?.sliders[prev.length]]);
      setTimeout(() => {
        pagerRef.current?.setPage(visibleSlides.length); // 다음 슬라이드로 이동
      }, 100);
    }
  };


  // 다음 버튼 클릭 시
  const onPressNext = () => {
    const curStepModules = getStepModules(curSlideStep[curSlideIndex]);
    const problemModule = getProblemModule(curStepModules || []);
    if(problemModule){
      // 현재 스텝에 문제가 포함된 경우
      const problemModuleId= curLesson?.sliders[curSlideIndex].modules.findIndex((module) => module.id === problemModule.id) ?? 0;

      if((curLesson?.sliders[curSlideIndex].modules[problemModuleId] as any)?.isCorrect === undefined){

        if(problemModule.type === 'multipleChoice'){
          // 서버에서 결과 및 해설 받기
          const isAllCorrect = problemModule.questions.every((question: any) => question.answer?.answer === question.answer?.userAnswer);
          // result 객체 생성 (서버에서 받은 값이라고 가정)
          const result = {
            isCorrect: [
              ...problemModule.questions.map((question: any) => ({
                "isCorrect": question.answer?.answer === question.answer?.userAnswer,
              })),
            ],
            totalStep: 2,
            modules: [
              {
                "id": "1-0",
                "type": "paragraph",
                "content": `### 📄${isAllCorrect ? '정답' : '오답'}입니다`,
                "visibility": {
                  "type": "step",
                  "value": 1
                }
              },
              {
                "id": "1-1",
                "type": "paragraph",
                "content": "### 🚫 h1 해더에 넣을 수 없어요!\n\n`<h1>` 태그는 **본문의 가장 중요한 제목**을 나타내는 태그로, `<head>` 영역에는 들어갈 수 없습니다.\n\n- `<head>`에는 문서의 정보(제목, 메타데이터, 스타일 등)만 작성해야 해요.\n- `<h1>`, `<p>`, `<button>` 등 **화면에 표시되는 콘텐츠**는 반드시 `<body>` 안에 작성해야 합니다.\n\n> 💡 **TIP:**\n> `<head>`에는 `<title>`, `<meta>`, `<link>` 등만 넣어주세요!\n",
                "visibility": {
                  "type": "step",
                  "value": 2
                }
              },
            ],
          }

          setIsModuleAdded(true)

          
          const newLesson = { ...curLesson };
          const newSliders = [...newLesson.sliders];
          const curSlider = { ...newSliders[curSlideIndex] };
          const newModules = [...curSlider.modules];

          for (let i = 0; i < newModules.length; i++) {
            const module = newModules[i];
            const moduleStep = module.visibility?.value ?? 0;

            // (1) 현재 스텝보다 뒤에 있는 모듈은 step을 뒤로 미룸
            if (moduleStep > curSlideStep[curSlideIndex]) {
              newModules[i] = {
                ...module,
                visibility: {
                  ...module.visibility,
                  value: moduleStep + (result.totalStep || 0),
                }
              };
            }

            // (2) 문제 모듈이면 정답 결과 반영
            if (i === problemModuleId && Array.isArray((module as any).questions)) {
              const newModule = { ...module } as any;
              newModule.questions = newModule.questions.map((q: any, idx: number) => ({
                ...q,
                answer: {
                  ...q.answer,
                  isCorrect: result.isCorrect[idx]?.isCorrect
                }
              }));
              newModules[i] = newModule;
            }
            // (3) 나머지는 그대로
          }

          // 서버에서 받은 모듈들(해설 등) step 위치 조정해서 추가
          const resultModules = (result.modules || []).map((mod) => ({
            ...mod,
            visibility: {
              ...mod.visibility,
              value: (mod.visibility?.value ?? 0) + curSlideStep[curSlideIndex]
            }
          }));

          curSlider.modules = [
            ...newModules,
            ...resultModules
          ];
          newSliders[curSlideIndex] = curSlider;
          newLesson.sliders = newSliders;

          setCurLesson(newLesson);
        }



        if(problemModule.type === 'codeFillTheGap'){
          // 서버에서 결과 및 해설 받기
          // answers 구조: [{isCorrect, answer, userAnswer}, ...]로 변경됨
          const isAllCorrect = problemModule.files.map((file: any) => {
            // answers 배열의 각 항목에 대해 정답 여부 판정
            return file.answers.map((ansObj: any) => {
              return ansObj.answer === ansObj.userAnswer;
            });
          });

          // 각 answers에 isCorrect를 반영
          const result = {
            isCorrect: isAllCorrect,
            totalStep: 2,
            modules: [
              {
                "id": "4-0",
                "type": "paragraph",
                "content": `### 📄${isAllCorrect.flat().includes(false) ? '오답' : '정답'}입니다`,
                "visibility": {
                  "type": "step",
                  "value": 1
                }
              },
              {
                "id": "4-1",
                "type": "paragraph",
                "content": "### ✅ <h1> 태그와 body 스타일 설정 방법\n\n- `<h1>` 태그는 본문의 가장 중요한 제목을 나타냅니다. 시작 태그는 `<h1>` 입니다.\n- body 태그에 스타일을 적용하려면 아래와 같이 작성합니다:\n\n```css\nbody {\n  /* 원하는 스타일 작성 */\n}\n```\n\n> 💡 **TIP:**\n> - `<h1>`, `<p>`, `<button>` 등 화면에 보이는 요소는 반드시 `<body>` 안에 작성하세요.\n> - `<head>`에는 `<title>`, `<meta>`, `<link>` 등 문서 정보만 넣어주세요!\n",
                "visibility": {
                  "type": "step",
                  "value": 2
                }
              },
            ],
          }

          setIsModuleAdded(true)

          const newLesson = { ...curLesson };
          const newSliders = [...newLesson.sliders];
          const curSlider = { ...newSliders[curSlideIndex] };
          const newModules = [...curSlider.modules];

          for (let i = 0; i < newModules.length; i++) {
            const module = newModules[i];
            const moduleStep = module.visibility?.value ?? 0;

            // (1) 현재 스텝보다 뒤에 있는 모듈은 step을 뒤로 미룸
            if (moduleStep > curSlideStep[curSlideIndex]) {
              newModules[i] = {
                ...module,
                visibility: {
                  ...module.visibility,
                  value: moduleStep + (result.totalStep || 0),
                }
              };
            }
            // (2) 문제 모듈이면 정답 결과 반영
            if (i === problemModuleId && Array.isArray((module as any).files)) {
              const newModule = { ...module } as any;
              newModule.files = newModule.files.map((file: any, fileIdx: number) => ({
                ...file,
                answers: file.answers.map((ansObj: any, ansIdx: number) => ({
                  ...ansObj,
                  isCorrect: isAllCorrect[fileIdx]?.[ansIdx] ?? null
                }))
              }));
              newModules[i] = newModule;
            }
            // (3) 나머지는 그대로
          }

          // 서버에서 받은 모듈들(해설 등) step 위치 조정해서 추가
          const resultModules = (result.modules || []).map((mod) => ({
            ...mod,
            visibility: {
              ...mod.visibility,
              value: (mod.visibility?.value ?? 0) + curSlideStep[curSlideIndex]
            }
          }));

          curSlider.modules = [
            ...newModules,
            ...resultModules
          ];
          newSliders[curSlideIndex] = curSlider;
          newLesson.sliders = newSliders;

          setCurLesson(newLesson);
          
        }
      }else{
        // 채점 완료 한 경우
        const nextStepModules = getStepModules(curSlideStep[curSlideIndex] + 1)
        if(nextStepModules){
          // 다음 스텝이 있는 경우
          setCurSlideStep(prev => {
            const updated = [...prev];
            updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
            return updated;
          })
        }else{
          // 다음 스텝이 없는 경우
          setCurSlideIndex(curSlideIndex + 1)
        }
      }
    }else{
      // 현재 스텝에 문제가 미포함된 경우
      const nextStepModules = getStepModules(curSlideStep[curSlideIndex] + 1)
      if(nextStepModules.length > 0){
        // 다음 스텝이 있는 경우
        // 다음 스탭 모듈 출력
        setCurSlideStep(prev => {
          const updated = [...prev];
          updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
          return updated;
        })
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
        console.log('다음 스텝이 없는 경우')
        setCurSlideIndex(curSlideIndex + 1)
        goToNextSlide();
        // 다음 슬라이드로 이동
      }
      

    }
  }

  // modules에서 특정 스텝 데이터만 조회
  const getStepModules = (step: number) => {
    const stepModules = curLesson?.sliders[curSlideIndex].modules.filter((module) => module?.visibility?.type === 'step' && module.visibility.value === step)
    return stepModules
  }


  // 새로운 모듈이 추가될 때 스크롤을 맨 아래로 이동
  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [webViewLoadCount]);

  // 문제 유형 모듈 반환
  const getProblemModule = (modules: SlideModule[]) => {
    const found = modules.find(module => module.type === 'multipleChoice' || module.type === 'codeFillTheGap');
    return found ? found : null;
  }

  
  if (!curLesson) return null;
  

  return (
    <>
      {/* 상단 헤더 */}
      <View className="flex-row items-center gap-[16px] h-[50px] px-[16px] border-b border-[#ccc]">
        <Pressable onPress={goBack}>
          <X width={35} height={35} fill="#ccc" />
        </Pressable>
        <View className="flex-1 bg-[#E5E5E5] rounded-[10px] overflow-hidden">
          <View
            className="h-[20px] rounded-[10px] bg-[#FFC800]"
            style={{ width: `${((curSlideIndex + 1) / curLesson.sliders.length) * 100}%` }}
          />
        </View>
        <View className="flex-row items-center gap-[5px]">
          <HeartStraight width={35} height={35} fill="#EE5555" />
          <Text className="text-[#EE5555] text-[18px] font-[700]">5</Text>
        </View>
      </View>

      {/* 슬라이드 컨텐츠 */}

      <View style={{ flex: 1 }}>
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={e => {
          setCurSlideIndex(e.nativeEvent.position);
        }}
      >
        {visibleSlides.map((slide, idx) => (
          <View key={`slide-${idx}`} className="flex-1" >
            <ScrollView ref={scrollViewRef} className="flex-1">
              <View className="flex-col gap-[20px] px-[16px] pt-[20px]">
                <Text className="text-[#111] text-[18px] font-[700]">
                  {slide.title || '제목 없음'}
                </Text>

                {slide.modules
                  .filter(module => (module.visibility?.type === 'step' ? module.visibility.value <= curSlideStep[curSlideIndex] : true))
                  .map((module, moduleIndex) => {
                  switch (module.type) {
                    case 'paragraph':
                      return (
                        <View key={`slide-${idx}-module-${moduleIndex}`}>      
                          <ParagraghComponent module={module} />
                        </View>
                      );
                    case 'image':
                      return (
                        <View key={`slide-${idx}-module-${moduleIndex}`}>
                          <Image source={{ uri: module.content }} className="w-full h-[200px]" />
                        </View>
                      );
                    case 'code':
                      return (
                        <View key={`slide-${idx}-module-${moduleIndex}`}>
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
                        <View key={`slide-${idx}-module-${moduleIndex}`}>
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
                          setIsNextButtonEnabled={setIsNextButtonEnabled}
                          curSlideIndex={idx}
                          moduleIndex={moduleIndex}
                          curLesson={curLesson}
                          setCurLesson={setCurLesson}
                        />
                        </View>
                      );
                    case 'codeFillTheGap':
                      return (
                        <View key={`slide-${idx}-module-${moduleIndex}`}>
                          <CodeFillTheGapComponent 
                            setIsNextButtonEnabled={setIsNextButtonEnabled}
                            curSlideIndex={idx}
                            moduleIndex={moduleIndex}
                            curLesson={curLesson}
                            setCurLesson={setCurLesson}
                            onLoadComplete={() => {
                              setWebViewLoadCount(prev => prev + 1);
                            }}
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

        ))}
      </PagerView>
    </View>

    </>
  );
};

export default LessonLearningScreen;