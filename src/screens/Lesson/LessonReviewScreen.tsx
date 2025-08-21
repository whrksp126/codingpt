// import React, { useEffect, useState, useRef } from 'react';
// import { Pressable, ScrollView, Text, View, Image, Dimensions } from 'react-native';
// import { HeartStraight, X } from '../../assets/SvgIcon';
// import { useNavigation } from '../../contexts/NavigationContext';
// // import { useFullSheet } from '../../contexts/FullSheetContext';
// import { WebViewComponent } from '../../components/module/WebView';
// import { ParagraghComponent } from '../../components/module/Paragragh';
// import { CodeComponent } from '../../components/module/Code';
// import { MultipleChoiceComponent } from '../../components/module/MultipleChoice';
// import { CodeFillTheGapComponent } from '../../components/module/CodeFillTheGap';
// import PagerView from 'react-native-pager-view';


// interface SlideModule{
//   id: string;
//   type: 'paragraph' | 'image' | 'code' | 'webview' | 'multipleChoice' | 'codeFillTheGap';
//   content: string;
//   visibility: {
//     type: string;
//     value: number;
//   };
//   options?: {
//     label: string;
//     isCorrect: boolean;
//   }[];
// }

// interface Slide {
//   id: string;
//   title: string;
//   modules: SlideModule[]
// }

// interface Lesson {
//   sliders: Slide[];
// }

// const LessonReviewScreen: React.FC<{ route: any }> = ({ route }) => {
//   const { lessonData } = route.params; // 레슨 데이터 (나중에 DB에서 가져와야함)
//   console.log('lessonData : ', lessonData);
//   const pagerRef = useRef(null);
//   const [visibleSlides, setVisibleSlides] = useState([lessonData?.sliders[0]]);
//   // console.log('visibleSlides : ', visibleSlides); // 초기에 첫번째 슬라이드 데이터
  
//   // const { popFullSheet } = useFullSheet();
//   const { goBack, navigate } = useNavigation();
//   const [curLesson, setCurLesson] = useState<Lesson | null>(lessonData);
//   const [curSlideIndex, setCurSlideIndex] = useState<number>(0);

//   // sliders.length만큼 0을 넣어줍니다.
//   const [curSlideStep, setCurSlideStep] = useState<number[]>(Array(lessonData?.sliders.length).fill(0));
//   // console.log('curSlideStep : ', curSlideStep); // 0번지에 2가 들어가고 나머진 0

//   const [isModuleAdded, setIsModuleAdded] = useState<boolean>(false);

//   const [isNextButtonEnabled, setIsNextButtonEnabled] = useState<boolean>(false);
//   const scrollViewRef = useRef<ScrollView>(null);
//   const [webViewLoadCount, setWebViewLoadCount] = useState<number>(0);

//   const [pendingGoToIndex, setPendingGoToIndex] = useState<number | null>(null);

//   // util: 현재 스텝에 문제 모듈이 있는지 판단
//   const hasProblemInStep = (slideIndex: number, step: number) => {
//     const mods = curLesson?.sliders[slideIndex]?.modules ?? [];
//     const stepMods = mods.filter(m => m.visibility?.type === 'step' && m.visibility?.value === step);
//     return !!stepMods.find(m => m.type === 'multipleChoice' || m.type === 'codeFillTheGap');
//   };

//   useEffect(() => {
//     const initModules = getStepModules(curSlideStep[curSlideIndex]);
//     console.log('initModules', initModules);
//     const problemModule = getProblemModule(initModules || []);
//     console.log('problemModule', problemModule);
//     if(!problemModule){
//       setIsNextButtonEnabled(true);
//       console.log('isNextButtonEnabled', isNextButtonEnabled);
//     }

//   }, []);

//   useEffect(() => { // 다음 슬라이드로 넘어가면
//     setVisibleSlides(curLesson?.sliders.slice(0, visibleSlides.length) || []);
//     // console.log('다음 슬라이드로 넘어가면 visibleSlides', visibleSlides);
//   }, [curLesson]);

//   // 모듈 추가 시 즉시 다음 스텝 모듈 표현
//   useEffect(() => {
//     if(isModuleAdded){
//       setSortCurSlideModules();
//       setCurSlideStep(prev => {
//         const updated = [...prev];
//         updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
//         return updated;
//       });
//       setIsModuleAdded(false)
//     }
//   }, [isModuleAdded]);


//   // 학습 종료 감지
//   useEffect(() => {
//     console.log('curSlideIndex changed =>', curSlideIndex);
//     if(curSlideIndex > (curLesson?.sliders?.length ?? 0) - 1){
//       console.log("학습 종료 감지");
//       navigate('lessonReport', { curLesson, productId: 1, sectionId: 1, lessonId: 3 }); // temp

//     }
//   }, [curSlideIndex]);

//   useEffect(() => {
//     if (pendingGoToIndex !== null && visibleSlides.length > pendingGoToIndex) {
//       // 새 슬라이드가 실제로 추가된 것을 확인한 뒤 이동
//       // 렌더가 완료된 다음 프레임에 이동 (마운트 보장)
//       requestAnimationFrame(() => {
//         pagerRef.current?.setPage(pendingGoToIndex);
//         setPendingGoToIndex(null);
//       });
//     }
//   }, [visibleSlides.length, pendingGoToIndex]);

//   const setSortCurSlideModules = () => {
//     setCurLesson(prev => {
//       if (!prev) return prev;
//       return {
//         ...prev,
//         sliders: prev.sliders.map(slider => ({
//           ...slider,
//           modules: slider.modules.sort((a: SlideModule, b: SlideModule) => {
//             return (a.visibility?.value ?? 0) - (b.visibility?.value ?? 0);
//           })
//         }))
//       }
//     })
//   }

//   // step이 끝나면 다음 슬라이드 추가 및 이동
//   const goToNextSlide = () => {
//     if (visibleSlides.length < (curLesson?.sliders?.length ?? 0)) {
//       const nextIndex = visibleSlides.length; // 새 슬라이드 index
//       setVisibleSlides(prev => [...prev, curLesson?.sliders[prev.length]]);
//       setPendingGoToIndex(nextIndex); // 이동 예약
//       // setTimeout(() => {
//       //   pagerRef.current?.setPage(visibleSlides.length); // 다음 슬라이드로 이동
//       // }, 150);
//     }
//   };

//   // 다음 버튼 클릭 시
//   const onPressNext = () => {
//     const curStepModules = getStepModules(curSlideStep[curSlideIndex]);
//     const problemModule = getProblemModule(curStepModules || []);
//     if(problemModule){
//       // 현재 스텝에 문제가 포함된 경우
//       const problemModuleId= curLesson?.sliders[curSlideIndex].modules.findIndex((module) => module.id === problemModule.id) ?? 0;

//       if((curLesson?.sliders[curSlideIndex].modules[problemModuleId] as any)?.isCorrect === undefined) {

//         if(problemModule.type === 'multipleChoice'){
//           const result = problemModule.result;
//           setIsModuleAdded(true);
          
//           const newLesson = { ...curLesson } as any;
//           const newSliders = [...newLesson.sliders];
//           const curSlider = { ...newSliders[curSlideIndex] };
//           const newModules = [...curSlider.modules];

//           // 1) step 밀기 + 채점
//           for (let i = 0; i < newModules.length; i++) {
//             const module = newModules[i];
//             const moduleStep = module.visibility?.value ?? 0;

//             // (1) 현재 스텝보다 뒤에 있는 모듈은 step을 뒤로 미룸
//             if (moduleStep > curSlideStep[curSlideIndex]) {
//               newModules[i] = {
//                 ...module,
//                 visibility: {
//                   ...module.visibility,
//                   value: moduleStep + (result.totalStep || 0),
//                 }
//               };
//             }

//             // (2) 문제 모듈이면 정답 결과 반영
//             if (i === problemModuleId && Array.isArray((module as any).questions)) {
//               const newModule = { ...module } as any;
//               newModule.questions = newModule.questions.map((q: any) => ({
//                 ...q,
//                 answer: {
//                   ...q.answer,
//                   isCorrect: q.answer.answer === q.answer.userAnswer
//                 }
//               }));
//               newModules[i] = newModule;
//             }
//             // (3) 나머지는 그대로
//           }

//           // 2) 전체 정답 여부 계산 (모든 문항이 맞아야 true)
//           const target = newModules[problemModuleId] as any;
//           const isAllCorrect =
//             Array.isArray(target?.questions) &&
//             target.questions.every((q: any) => q?.answer?.isCorrect === true);

//           // 3) result.modules 조건 필터링 (condition 없으면 전부 통과 → 기존 데이터 호환)
//           const filteredResultModules = (result.modules ?? []).filter((mod: any) => {
//             if (mod?.condition === 'correct') return isAllCorrect;
//             if (mod?.condition === 'wrong') return !isAllCorrect;
//             return true;
//           });

//           // 서버에서 받은 모듈들(해설 등) step 위치 조정해서 추가
//           const resultModules = filteredResultModules.map((mod: any) => ({
//             ...mod,
//             visibility: {
//               ...mod.visibility,
//               value: (mod.visibility?.value ?? 0) + curSlideStep[curSlideIndex]
//             }
//           }));

//           // 디버깅 로그
//           // console.log({
//           //   type: 'multipleChoice',
//           //   isAllCorrect,
//           //   filteredLen: filteredResultModules.length,
//           //   resultLen: resultModules.length,
//           // });

//           curSlider.modules = [...newModules, ...resultModules];
//           newSliders[curSlideIndex] = curSlider;
//           newLesson.sliders = newSliders;

//           setCurLesson(newLesson);
//           setIsModuleAdded(true);
//           setIsNextButtonEnabled(true);
//         }

//         if(problemModule.type === 'codeFillTheGap'){
//           const result = problemModule.result;

//           setIsModuleAdded(true);

//           const newLesson = { ...curLesson } as any;
//           const newSliders = [...newLesson.sliders];
//           const curSlider = { ...newSliders[curSlideIndex] };
//           const newModules = [...curSlider.modules];

//           // 1) step 밀기 + 채점 (for 루프)
//           for (let i = 0; i < newModules.length; i++) {
//             const module = newModules[i];
//             const moduleStep = module.visibility?.value ?? 0;

//             // (1) 현재 스텝보다 뒤에 있는 모듈은 step을 뒤로 미룸
//             if (moduleStep > curSlideStep[curSlideIndex]) {
//               newModules[i] = {
//                 ...module,
//                 visibility: {
//                   ...module.visibility,
//                   value: moduleStep + (result.totalStep || 0),
//                 }
//               };
//             }
//             // (2) 문제 모듈이면 정답 결과 반영
//             if (i === problemModuleId && Array.isArray((module as any).files)) {
//               const newModule = { ...module } as any;
//               newModule.files = newModule.files.map((file: any) => ({
//                 ...file,
//                 answers: file.answers.map((ansObj: any) => ({
//                   ...ansObj,
//                   isCorrect: ansObj.answer === ansObj.userAnswer,
//                 }))
//               }));
//               newModules[i] = newModule;
//             }
//             // (3) 나머지는 그대로
//           }

//           // 2) 루프가 끝난 뒤에 전체 정답 여부 계산
//           const target = newModules[problemModuleId] as any; // codeFillTheGap 모듈
//           const isAllCorrect =
//             Array.isArray(target?.files) &&
//             target.files.every((file: any) =>
//               Array.isArray(file.answers) &&
//               file.answers.every((ans: any) => ans.isCorrect === true)
//             );
          
//           // 3) result.modules에서 condition에 맞는 것만 선택
//           const filteredResultModules = (result.modules ?? []).filter((mod: any) => {
//             if (mod?.condition === 'correct') return isAllCorrect;
//             if (mod?.condition === 'wrong') return !isAllCorrect;
//             return true; // condition이 없으면 그대로 통과
//           });
          
//           // 4) step 보정해서 붙이기
//           const resultModules = filteredResultModules.map((mod: any) => ({
//             ...mod,
//             visibility: {
//               ...mod.visibility,
//               value: (mod.visibility?.value ?? 0) + curSlideStep[curSlideIndex]
//             }
//           }));

//           // console.log({ isAllCorrect, resultModulesLen: resultModules.length, raw: result.modules });

//           curSlider.modules = [...newModules, ...resultModules];
//           newSliders[curSlideIndex] = curSlider;
//           newLesson.sliders = newSliders;

//           setCurLesson(newLesson);
//           setIsModuleAdded(true);
//           setIsNextButtonEnabled(true);
//         }
//       } else {
//         // 채점 완료 한 경우
//         const nextStepModules = getStepModules(curSlideStep[curSlideIndex] + 1);
//         if (nextStepModules) {
//           // 다음 스텝이 있는 경우
//           setCurSlideStep(prev => {
//             const updated = [...prev];
//             updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
//             return updated;
//           })
//         } else {
//           // 다음 스텝이 없는 경우
//           // setCurSlideIndex(curSlideIndex + 1);
//           goToNextSlide();
//         }
//       }
//     } else {
//       // 현재 스텝에 문제가 미포함된 경우
//       const nextStepModules = getStepModules(curSlideStep[curSlideIndex] + 1)
//       if(nextStepModules.length > 0){
//         // 다음 스텝이 있는 경우
//         // 다음 스탭 모듈 출력
//         setCurSlideStep(prev => {
//           const updated = [...prev];
//           updated[curSlideIndex] = (updated[curSlideIndex] || 0) + 1;
//           return updated;
//         })
//         // 다음 스탭에 문제가 있는 경우
//         const problemModule = getProblemModule(nextStepModules || []);
//         if(problemModule){
//           // 확인 버튼 비활성화
//           setIsNextButtonEnabled(false)
//           // 사지선다 문제는 하나라도 선택을 기다림
//           // 코드 빈칸 선택 채우기 문제는 하나라도 선택하길 기다림
//         }
//       }else{
//         // 다음 스텝이 없는 경우ㅠ
//         setCurSlideIndex(curSlideIndex + 1);
//         goToNextSlide();
//         // 다음 슬라이드로 이동
//       }
      

//     }
//   }

//   // modules에서 특정 스텝 데이터만 조회
//   const getStepModules = (step: number) => {
//     const stepModules = curLesson?.sliders[curSlideIndex].modules.filter((module) => module?.visibility?.type === 'step' && module.visibility.value === step)
//     return stepModules
//   }


//   // 새로운 모듈이 추가될 때 스크롤을 맨 아래로 이동
//   useEffect(() => {
//     setTimeout(() => {
//       scrollViewRef.current?.scrollToEnd({ animated: true });
//     }, 100);
//   }, [webViewLoadCount]);

//   // 문제 유형 모듈 반환
//   const getProblemModule = (modules: SlideModule[]) => {
//     const found = modules.find(module => module.type === 'multipleChoice' || module.type === 'codeFillTheGap');
//     return found ? found : null;
//   }

  
//   if (!curLesson) return null;
  

//   return (
//     <>
//       {/* 상단 헤더 */}
//       <View className="flex-row items-center gap-[16px] h-[50px] px-[16px] border-b border-[#ccc]">
//         <Pressable onPress={() => goBack()}>
//           <X width={35} height={35} fill="#ccc" />
//         </Pressable>
//         {/* <Pressable onPress={popFullSheet}>
//           <X width={35} height={35} fill="#ccc" />
//         </Pressable> */}
//         <View className="flex-1 bg-[#E5E5E5] rounded-[10px] overflow-hidden">
//           <View
//             className="h-[20px] rounded-[10px] bg-[#FFC800]"
//             style={{ width: `${((visibleSlides.length) / curLesson.sliders.length) * 100}%` }}
//           />
//         </View>
//         <View className="flex-row items-center gap-[5px]">
//           <HeartStraight width={35} height={35} fill="#EE5555" />
//           <Text className="text-[#EE5555] text-[18px] font-[700]">5</Text>
//         </View>
//       </View>

//       {/* 슬라이드 컨텐츠 */}

//       <View style={{ flex: 1 }}>
//       <PagerView
//         ref={pagerRef}
//         style={{ flex: 1 }}
//         initialPage={0}
//         onPageSelected={e => {
//           setCurSlideIndex(e.nativeEvent.position);
//         }}
//       >
//         {visibleSlides.map((slide, idx) => (
//           <View key={`slide-${idx}`} className="flex-1" >
//             <ScrollView ref={scrollViewRef} className="flex-1">
//               <View className="flex-col gap-[20px] px-[16px] pt-[20px]">
//                 <Text className="text-[#111] text-[18px] font-[700]">
//                   {slide.title || '제목 없음'}
//                 </Text>

//                 {slide.modules
//                   .filter(module => (module.visibility?.type === 'step' ? module.visibility.value <= curSlideStep[idx] : true))
//                   .map((module, moduleIndex) => {
//                   switch (module.type) {
//                     case 'paragraph':
//                       return (
//                         <View key={`slide-${idx}-module-${moduleIndex}`}>      
//                           <ParagraghComponent module={module} />
//                         </View>
//                       );
//                     case 'image':
//                       return (
//                         <View key={`slide-${idx}-module-${moduleIndex}`}>
//                           <Image source={{ uri: module.content }} className="w-full h-[200px]" />
//                         </View>
//                       );
//                     case 'code':
//                       return (
//                         <View key={`slide-${idx}-module-${moduleIndex}`}>
//                           <CodeComponent 
//                             module={module}
//                             onLoadComplete={() => {
//                               setWebViewLoadCount(prev => prev + 1);
//                             }}
//                           />
//                         </View>
//                       );

//                     case 'webview':
//                       return (
//                         <View key={`slide-${idx}-module-${moduleIndex}`}>
//                           <WebViewComponent 
//                             module={module} 
//                             onLoadComplete={() => {
//                               setWebViewLoadCount(prev => prev + 1);
//                             }}
//                           />
//                         </View>
//                       );
//                     case 'multipleChoice':
//                       return (
//                         <View key={`slide-${curSlideIndex}-module-${moduleIndex}`}>
//                         <MultipleChoiceComponent 
//                           setIsNextButtonEnabled={setIsNextButtonEnabled}
//                           curSlideIndex={idx}
//                           moduleIndex={moduleIndex}
//                           curLesson={curLesson}
//                           setCurLesson={setCurLesson}
//                         />
//                         </View>
//                       );
//                     case 'codeFillTheGap':
//                       return (
//                         <View key={`slide-${idx}-module-${moduleIndex}`}>
//                           <CodeFillTheGapComponent 
//                             setIsNextButtonEnabled={setIsNextButtonEnabled}
//                             curSlideIndex={idx}
//                             moduleIndex={moduleIndex}
//                             curLesson={curLesson}
//                             setCurLesson={setCurLesson}
//                             onLoadComplete={() => {
//                               setWebViewLoadCount(prev => prev + 1);
//                             }}
//                           />
//                         </View>
//                       );
//                     default:
//                       return null;
//                   }
//                 })}
//               </View>
//             </ScrollView>

//             {/* 하단 버튼 */}
//             <View className="flex-row items-center gap-[16px] p-[16px]">
//               <Pressable 
//                 onPress={onPressNext}
//                 disabled={!isNextButtonEnabled || idx !== visibleSlides.length - 1}
//                 className={`
//                   flex items-center justify-center flex-1 
//                   h-[50px] 
//                   rounded-[10px] 
//                   ${isNextButtonEnabled && idx === visibleSlides.length - 1 ? 'bg-[#58CC02]' : 'bg-[#E5E5E5]'}
//                 `}>
//                 <Text className={`
//                   text-[18px] font-[700] text-center ${!isNextButtonEnabled || idx !== visibleSlides.length - 1 ? 'text-[#AFAFAF]' : 'text-[#fff] '}
//                 `}>
//                   확인
//                 </Text>
//               </Pressable>
//             </View>
//           </View>

//         ))}
//       </PagerView>
//     </View>

//     </>
//   );
// };

// export default LessonReviewScreen;