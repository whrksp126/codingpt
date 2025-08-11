import { useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { CaretLeft, Lightning, Target } from '../../assets/SvgIcon';
import { useNavigation } from '../../contexts/NavigationContext';

// 학습 종료 페이지
const LessonReportPage: React.FC<{ route: any }> = ({ route }) => {
  const { curLesson } = route.params;
  const { navigation } = useNavigation();
  console.log("curLesson,", curLesson)

  useEffect(() => {
    // 서버에 학습 기록 저장
    // 슬라이드를 통으로 저장하는게 좋을 듯,

    console.log("curLesson,", curLesson)
  }, [curLesson]);

  return (
    <View className="relative flex-1">

      <View className="flex-1 gap-[20px] pt-[70px] items-center" >
        <Image source={require('../../assets/images/lessonReportPage.png')} />
        <Text className="text-[24px] font-[700] text-[#FFC800]">레슨을 완료 했어요!</Text>
        <View className="flex-row gap-[20px] p-[20px]">
          <View className="flex flex-col items-center justify-center flex-1 p-[2px] rounded-[16px] bg-[#FFC800]">
            <View className="pt-[2px] pb-[4px]">
              <Text className="text-[14px] font-[700] text-[#fff]">경험치</Text>
            </View>
            <View className="flex flex-row items-center justify-center gap-[4px] w-full h-[55px] p-[10px] bg-[#fff] rounded-[15px]">
              <Lightning width={24} height={24} fill="#FFC800" />
              <Text className="text-[22px] font-[700] text-[#FFC800]">100%</Text>
            </View>
          </View>
          <View className="flex flex-col items-center justify-center flex-1 p-[2px] rounded-[16px] bg-[#58CC02] ">
            <View className="pt-[2px] pb-[4px]">
              <Text className="text-[14px] font-[700] text-[#fff]">정답률</Text>
            </View>
            <View className="flex flex-row items-center justify-center gap-[4px] w-full h-[55px] p-[10px] bg-[#fff] rounded-[15px]">
              <Target width={24} height={24} fill="#58CC02" />
              <Text className="text-[22px] font-[700] text-[#58CC02]">100</Text>
            </View>
          </View>
        </View>
      </View>

      {/* 하단 버튼 */}
      <View className="flex-row items-center gap-[16px] p-[16px]">
        <Pressable 
          className={`
            flex items-center justify-center flex-1 
            h-[50px] 
            rounded-[10px] 
            bg-[#58CC02]
          `}>
          <Text className={`
            text-[18px] font-[700] text-center text-[#fff]
          `}>
            확인
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LessonReportPage;