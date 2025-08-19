import { useEffect, useRef } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import userService from '../../services/userService';
import lessonService from '../../services/lessonService';
import { CaretLeft, Lightning, Target } from '../../assets/SvgIcon';

// 학습 종료 페이지
const LessonReportPage: React.FC<{ route: any }> = ({ route }) => {
  const { curLesson, productId, sectionId, lessonId } = route.params;
  console.log("curLesson,", curLesson);
  console.log("productId,", productId);
  console.log("sectionId,", sectionId);
  console.log("lessonId,", lessonId);
  const { navigation } = useNavigation();

  const { user, setUser, refreshUser } = useUser();

  // XP 계산: 추후 정답률/난이도로 확장 가능
  const calcEarnedXp = (lesson: any) => {
    // TODO: lesson 내용을 바탕으로 가중치 계산 로직으로 발전
    return 20; // 우선 고정치
  };

  useEffect(() => {
    // 서버에 학습 기록 저장
    // 슬라이드를 통으로 저장하는게 좋을 듯,
    
    if (!user?.id || !productId || !sectionId || !lessonId) return;
    console.log("curLesson,", curLesson);

    // 1) 경험치(XP) 업데이트
    const earned = calcEarnedXp(curLesson); // XP 계산
    userService.updateXp(user.id, earned).then((res) => {
      console.log("1) 경험치(XP) 업데이트 res,", res);
      if (res && res.xp !== undefined) {
        setUser((prev) => prev ? { ...prev, xp: res.xp } : prev);
      }
    }).catch((err) => {
      console.log("XP 업데이트 실패:", err);
    });

    // 2) 레슨 학습상태 업데이트 및 결과(results) 저장
    lessonService.completeLessonWithResult({
      userId: user.id,
      productId: productId,
      lessonId: lessonId,
      result: curLesson,
    }).then((res) => {
      console.log("2) 학습 기록 저장 res,", res);
    }).catch((err) => {
      console.log("학습 기록 저장 실패:", err);
    });

    // 3) 잔디 추가 및 총 학습 일수 업데이트
    userService.postStudyHeatmap({
      userId: user.id,
      productId: productId,
      sectionId: sectionId,
      lessonId: lessonId,
    }).then(async (res) => {
      console.log("3) 학습 일수 업데이트 res,", res);
      await refreshUser();
    }).catch((err) => {
      console.log("학습 일수 업데이트 실패:", err);
    });
  }, [user?.id, productId, sectionId, lessonId, curLesson]);

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