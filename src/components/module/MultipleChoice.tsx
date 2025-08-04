import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MultipleChoiceComponentProps {
  module: any;
  onAnswerSelect?: (selectedIndex: number) => void;
  selectedAnswer?: number;
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
  module, 
  onAnswerSelect, 
  selectedAnswer 
}) => {  
  return (
    <View className="flex-col gap-[20px]">
      <Text className="text-[#111] text-[16px] font-[700]">{module.question}</Text>
        <View className="flex-col gap-[10px]">
          {module.options.map((option: any, index: number) => (
            <Pressable 
              key={index} 
              onPress={() => onAnswerSelect?.(index)}
              className={`border rounded-[10px] px-[10px] ${
                selectedAnswer === index 
                  ? 'border-[#84D8FF] bg-[#DDF4FF]' 
                  : 'border-[#E5E5E5]'
              }`}
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
  );
};