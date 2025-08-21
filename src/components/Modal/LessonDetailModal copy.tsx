import { Modal, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { Star } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';
// import { useFullSheet } from '../../contexts/FullSheetContext';
import LessonLearningScreen from '../../screens/Lesson/LessonLearningScreen';

interface LessonDetailModalProps {
  lessonData: any;
  visible: boolean;
  onClose: () => void;
}

const LessonDetailModal = ({ lessonData, visible, onClose }: LessonDetailModalProps) => {
  // const { pushFullSheet } = useFullSheet();
  const { navigate } = useNavigation();

  const onPressStart = () => {
    // navigate('lessonLearning', { lessonData });
    navigate('lessonLearning', { lessonData });
    // pushFullSheet(
    //   <LessonLearningScreen route={{ params: { lessonData } }} />,
    //   'lessonLearning'
    // );
    // pushFullSheet(
    //   <LessonLearningScreen route={{ params: { lessonData } }} />,
    //   'lessonLearning'
    // );
    onClose(); // 모달은 즉시 닫기
  }

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent={true}>
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="flex-col gap-[10px] w-[322px] p-[20px] rounded-[20px] bg-[#FAFAFA] ">
          <View className="flex-row items-center gap-[10px]">
            <View className="flex-1 flex-col gap-[6px]">
              <Text className="text-[12px] font-[700] text-[#606060]">학습</Text>
              <Text className="text-[16px] font-[700] text-[#111]">{lessonData?.title}</Text>
            </View>

            <View>
              <Star width={42} height={42} fill="#93D333" />
            </View>
          </View>
          <View className="flex-col gap-[6px]">
              <View className="flex-row items-center justify-between">
                <Text className="text-[12px] font-[700] text-[#606060]">CHAPTER</Text>
                <Text className="text-[12px] font-[700] text-[#606060]" >{lessonData.isCompleted ? '1' : '0'}/1</Text>
              </View>
              <View className="h-[10px] bg-[#F5F5F5] rounded-[10px] overflow-hidden">
                <View className="h-[10px] bg-[#93D333] rounded-[10px]" style={{width: `${lessonData.isCompleted ? '100%' : '0%'}`}}></View>
              </View>
            </View>

          <Pressable onPress={onPressStart} className="flex items-center justify-center h-[40px] p-[10px] rounded-[10px] bg-[#93D333]">
            <Text className="text-[18px] font-[700] text-[#fff] text-center leading-[20px]">
              {lessonData.isCompleted ? '복습' : '시작'}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default LessonDetailModal;