import React, { useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MultipleChoiceComponentProps {
  setIsNextButtonEnabled?: (isNextButtonEnabled: boolean) => void;
  curSlideIndex: number;
  moduleIndex: number;
  curLesson: any;
  setCurLesson: (curLesson: any) => void;
}

// 마크다운 스타일 설정
const markdownStyles: any = {
  body: {
    color: '#111',
    fontSize: 14,
    fontWeight: 400,
  },
  heading1: {
    color: '#111',
    fontSize: 16,
    fontWeight: 700,
  },
  strong: {
    fontWeight: 700,
  },
  em: {
    fontStyle: 'italic',
  },
  code_block: {
    backgroundColor: '#f8f9fa',
    borderColor: '#e9ecef',
    borderWidth: 1,
    borderRadius: 6,
    padding: 4,
    marginVertical: 4,
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#495057',
    alignSelf: 'flex-start',
    maxWidth: '100%',
  },
  code_inline: {
    backgroundColor: '#f1f3f4',
    color: '#d73a49',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
    fontFamily: 'monospace',
    fontSize: 13,
  },
};

// 컴포넌트 본문
export const MultipleChoiceComponent: React.FC<MultipleChoiceComponentProps> = ({ 
  setIsNextButtonEnabled,
  curSlideIndex,
  moduleIndex,
  curLesson,
  setCurLesson,
}) => {  

  // 옵션 클릭 시
  const onPressOption = (question: any, questionIndex: number, optionIndex: number) => {
    // curLesson의 복사본을 만듭니다.
    const newLesson = { ...curLesson };
    // 해당 슬라이드의 복사본
    const newSliders = [...newLesson.sliders];
    // 해당 모듈의 복사본
    const newModules = [...newSliders[curSlideIndex].modules];
    // 해당 모듈(문제)의 복사본
    const newModule = { ...newModules[moduleIndex] };
    // questions 배열 복사
    const newQuestions = newModule.questions ? [...newModule.questions] : [];
    // 해당 question 객체 복사 및 answer의 userAnswer 갱신
    const newQuestion = { 
      ...newQuestions[questionIndex], 
      answer: { 
        ...newQuestions[questionIndex].answer, 
        userAnswer: optionIndex 
      } 
    };
    newQuestions[questionIndex] = newQuestion;
    newModule.questions = newQuestions;
    newModules[moduleIndex] = newModule;
    newSliders[curSlideIndex].modules = newModules;
    newLesson.sliders = newSliders;
    setCurLesson?.(newLesson);

    setIsNextButtonEnabled?.(true);
  }

  return (
    <>
    {Array.isArray(curLesson.sliders[curSlideIndex].modules[moduleIndex].questions) && curLesson.sliders[curSlideIndex].modules[moduleIndex].questions.map((question: any, questionIndex: number) => (
    <View className="flex-col gap-[20px]" key={questionIndex}>
      <Text className="text-[#111] text-[16px] font-[700]">{question.title}</Text>
      <View className="flex-col gap-[10px]">
        {Array.isArray(question.interactionOptions) && question.interactionOptions.map((option: any, optionIndex: number) => (
          <Pressable 
            key={`${questionIndex}-${optionIndex}`} 
            onPress={() => onPressOption(question, questionIndex, optionIndex)}
            className={`border rounded-[10px] px-[10px] ${
              // 채점 완료 후 
              question.answer?.isCorrect !== null && question.answer?.isCorrect === true && question.answer?.userAnswer === optionIndex
                ? 'border-[#58CC02] bg-[#D7FFB8b3]'
                : 
              question.answer?.isCorrect !== null && question.answer?.isCorrect === false && question.answer?.userAnswer === optionIndex
                ? 'border-[#FE4C4A] bg-[#fee0e2b3]'
                :
              question.answer?.isCorrect !== null && question.answer?.isCorrect === false && question.answer?.answer === optionIndex
                ? 'border-[#84D8FF] bg-[#DDF4FF]'
                :
              question.answer?.userAnswer === optionIndex 
                ? 'border-[#84D8FF] bg-[#DDF4FF]' 
                : 'border-[#E5E5E5]'
            }`}
            disabled={question.answer?.isCorrect !== null}
          >
            <View className="flex-row flex-wrap">
              <Markdown style={markdownStyles}>
                {option.label}
              </Markdown>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
    ))}
    </>
  );
};