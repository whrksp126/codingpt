import React from 'react';
import { ScrollView, TouchableOpacity, Text, View, FlatList, Image } from 'react-native';
import LessonCard from '../components/LessonCard';
import { useUser } from '../contexts/UserContext';
import { useNavigation } from '../contexts/NavigationContext';
// import { useFullSheet } from '../contexts/FullSheetContext';
import { getColorByCount, getRecentDays } from '../utils/heatmapUtils';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { CodesandboxLogo, Clover, HeartStraight, Check, CaretRight } from '../assets/SvgIcon';
import ClassProgressScreen from './Lesson/classProgressScreen';


// 강의 항목 타입
interface Lesson {
  id: string;
  title: string;
  icon: any;
  progress: number;
}

const HomeScreen: React.FC = () => {
  // const { pushFullSheet } = useFullSheet();
  const { navigate } = useNavigation();
  const { user } = useUser();
  
  // UserContext의 heatmap 데이터에서 직접 최근 6일 데이터 계산
  const recentCounts = user?.heatmap ? getRecentDays(user.heatmap, 6) : Array(6).fill(0);

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'HTML 기초과정',
      icon: require('../assets/icons/html-5-icon.png'),
      progress: 75,
    },
    {
      id: '2',
      title: 'CSS 기초과정',
      icon: require('../assets/icons/css-3-icon.png'),
      progress: 25,
    },
  ];

  // 학습 중인 클래스 구조
  const renderLesson = ({ item }: { item: Lesson }) => (
    <View className="flex-row items-center bg-white border border-[#CCCCCC] rounded-[16px] p-[10px] mt-[10px]">
      <Image 
        source={item.icon} 
        className="w-[70px] h-[70px] mr-3.5" 
        resizeMode="contain" 
      />
      <View className="flex-1 flex-col justify-between" style={{ minHeight: 60 }}>
        <Text className="text-[16px] font-bold text-[#111111]">{item.title}</Text>
        <View className="h-2.5 rounded-full bg-[#F5F5F5] mt-0.5">
          <View
            className="h-2.5 rounded-full bg-[#FFC700]"
            style={{ width: `${item.progress}%` }}
          />
        </View>
      </View>
    </View>
  );

  return (
    <>
      {/* 헤더 */}
      <View className="flex-row justify-between items-center pl-4 pr-4 border-b border-[#CCCCCC]">
        <Image 
          source={require('../assets/icons/codingpt_logo_text.png')} 
          className="w-[133px]" 
          resizeMode="contain"
        />
        <View className="flex-row items-center gap-x-[10px]">
          <View className="flex-row items-center gap-x-[5px]">
            <Clover width={34} height={34} fill="#58CC02" />
            <Text className="text-[#58CC02] text-[18px] font-bold">{user?.studyDays ?? 0}</Text>
          </View>
          <View className="flex-row items-center gap-x-[5px]">
            <HeartStraight width={34} height={34} fill="#EE5555" />
            <Text className="text-[#EE5555] text-[18px] font-bold">{user?.heart ?? 0}</Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 bg-white">
        {/***** 최근 레슨 학습하러 가기: 최근 학습이 없으면 상점으로 이동 *****/}
        <View className="items-center px-[16px] mt-[25px]">
          <View className="flex-row items-center bg-white p-4 gap-x-[20px]">
            <Image
              source={require('../assets/icons/html-5-icon.png')}
              className="w-[120px] h-[120px]"
              resizeMode="contain"
            />
            {/* 진행률 그래프 */}
            <View className="flex-1 items-center">
              <View className="flex-1 justify-center items-center bg-white">
                <AnimatedCircularProgress
                  size={60} // 차트 너비/높이
                  width={2} // 진행률 바의 두께
                  fill={68} // 진행률 (0-100)
                  tintColor="#58CC02" // 진행된 부분의 색상
                  backgroundColor="#CCCCCC" // 미진행된 부분의 색상
                  rotation={0} // 원형의 시작 위치 (0 = 12시 방향)
                  lineCap="round" // 바의 끝 모양을 둥글게
                  duration={1500} // 애니메이션 지속 시간 (1.5 sec)
                >
                  {
                    (fill: number) => (
                      <Text className="text-[#58CC02] text-[24px] font-bold">
                        {`${Math.round(fill)}`}
                      </Text>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
              <Text className="text-[24px] font-bold text-[#111111] mt-[10px]">HTML 기초 과정</Text>
              <Text className="text-[14px] text-[#111111] mt-[10px] text-center">
                Web 개발을 처음 접하는 사람도 {"\n"}학습할 수 있어요!
              </Text>
            </View>
          </View>
          {/* 학습하러 가기 버튼 */}
          <View className="items-center mt-[14px] mb-[28px]">
            <TouchableOpacity
              className="bg-[#93D333] w-[236px] h-[46px] rounded-[50px] py-3 px-6 flex-row items-center justify-center"
              onPress={() => {
                // TODO: 최근 학습 데이터가 없으면 상점으로 이동시키고 싶다면 아래 분기 사용
                // if (!user?.recent?.productId) return navigate('Store');

                // ✅ 풀시트로 classProgressScreen 진입
                // - props가 필요하면 <ClassProgressScreen propA="..." />로 전달
                // pushFullSheet(<ClassProgressScreen />, 'classProgress');
                navigate('classProgress');
              }}
            >
              <CodesandboxLogo width={40} height={40} fill="#ffffff" />
              <Text className="text-white text-[18px] font-bold ml-[10px]" style={{ marginTop: -3 }}>학습하러 가기</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/***** 학습 기록 *****/}
        <View className="flex-row items-center mt-[10px] mb-[10px] px-[10px]">
          <Text className="text-[16px] font-semibold text-[#111111] mr-[15px]">학습 기록</Text>
          <View className="flex-row gap-x-[10px]">
            {recentCounts.map((count, index) => (
              <View
                key={index}
                className="w-[38px] h-[38px] rounded-full justify-center items-center"
                style={{ backgroundColor: getColorByCount(count) }}
              >
                {count > 0 && (
                  <View className="flex-1 justify-center items-center">
                    <Check width={21} height={17} fill="#58CC02" />
                  </View>
                )}
              </View>
            ))}
          </View>
          <TouchableOpacity
              className="ml-auto"
              onPress={() => navigate('my')}
            >
              <CaretRight width={10} height={18} fill="#CCCCCC" />
            </TouchableOpacity>
        </View>

        {/* 학습 중인 클래스 */}
        <View className="mt-[10px] px-[10px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-[16px] font-semibold text-[#111111]">학습 중인 클래스</Text>
            <TouchableOpacity onPress={() => navigate('myLessons')}>
              <CaretRight width={10} height={18} fill="#CCCCCC" />
            </TouchableOpacity>
          </View>

          {/* 강의 목록 */}
          <FlatList
            data={lessons}
            renderItem={renderLesson}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>

        {/* 추천 커리큘럼 */}
        <View className="mt-[10px] px-[10px] pb-[20px]">
          <View className="flex-row justify-between items-center">
            <Text className="text-[16px] font-semibold text-[#111111]">추천 커리큘럼</Text>
            <TouchableOpacity onPress={() => navigate('myLessons')}>
              <CaretRight width={10} height={18} fill="#CCCCCC" />
            </TouchableOpacity>
          </View>
        
          <View className="flex-row items-center bg-white border border-[#CCCCCC] rounded-[16px] p-[10px] mt-[10px]">
            <Image 
              source={require('../assets/icons/js-icon.png')}
              className="w-[70px] h-[70px] mr-3.5" 
              resizeMode="contain" 
            />
            <View className="flex-1 flex-col justify-between" style={{ minHeight: 70 }}>
              <Text className="text-[16px] font-bold text-[#111111]">자바스크립트 기초과정</Text>
              <Text className="text-[14px] font-medium text-[#111111]">프로그래밍을 처음 접하는 사람도 할 수 있어요! 자바스크립트란 무엇일까요?</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;