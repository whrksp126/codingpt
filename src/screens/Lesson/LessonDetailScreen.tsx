import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Star } from 'phosphor-react-native';
import { useNavigation } from '../../contexts/NavigationContext';
import { useUser } from '../../contexts/UserContext';
import lessonService from '../../services/lessonService';

const LessonDetailScreen = ({ route }: any) => {
  const { goBack, navigate } = useNavigation();
  const { id, name, icon, description, price, lessonCount, progress, date } = route.params;
  const item = { id, name, icon, description, price, lessonCount, progress, date };

  const { user } = useUser();

  // 인증 및 수강 여부 관련 상태
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  // 탭 구성
  const [activeTab, setActiveTab] = useState('강의소개');
  const tabs = ['강의소개', '목차', '관련코스', '후기'];

  useEffect(() => {
    const init = async () => {
      if (!user?.id) {
        console.log('⚠️ [LessonDetailScreen] user 정보가 없습니다.');
        setLoading(false);
        return;
      }

      try {
        // 내강의 여부 확인
        const enrolled = await lessonService.getMyclass(user.id, id); // t/f 반환
        setIsEnrolled(enrolled);
      } catch (error) {
        console.error('❌ [LessonDetailScreen] 수강 여부 확인 실패:', error);
        setIsEnrolled(false);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, [user, id]);

  // 로딩 중
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#58CC02" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* 상단 헤더: 뒤로가기 버튼 */}
        <View className="flex-row items-center justfy-between bg-white px-[20px] pt-[20px] pb-[20px] gap-x-[20px]">
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={require('../../assets/icons/arrow_l.png')} className="w-[13.13px] h-[24.06px] mt-1.5" />
          </TouchableOpacity>
          <Text className="text-[22px] font-bold text-[#111111]">{name}</Text>
        </View>

        {/* 강의 기본 정보 */}
        <View className="px-[16px] py-[20px]">
          <View className="flex-row items-center gap-x-[10px]">
            <Image source={icon} className="w-[50px] h-[50px] mt-1" resizeMode="contain" />
            <Text className="text-[27px] font-bold text-black">{name}</Text>
          </View>
          <Text className="text-[15px] text-[#606060] mt-1">{description.replace(/\\n/g, ' ')}</Text>
          <View className="border border-[#CCCCCC] rounded-[16px] p-[10px] my-[30px]">
            <Text className="text-sm text-[#606060]">마지막 학습일: 00</Text>
            <Text className="text-sm text-[#606060]">진도율: %</Text>
          </View>
          {/* 학습하기 버튼 */}
          <TouchableOpacity
            className="bg-[#58CC02] rounded-[10px] py-[15px] px-6 mb-[30px] flex-row items-center justify-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 25,
              elevation: 5, // Android용
            }}
            onPress={async () => {
              if (!isEnrolled) {
                const registered = await lessonService.postMyclass(user!.id, id);
                if (registered) {
                  Alert.alert('수강 등록 완료');
                  navigate('classProgress', item);
                } else {
                  Alert.alert('수강 등록 실패');
                }
              } else {
                navigate('classProgress', item);
              }
            }}
          >
            <Text className="text-white text-[18px] font-bold mt-[-3px]">
              {isEnrolled ? '이어서 학습하기' : '수강신청하기'}
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center space-x-1">
            {/* 별 아이콘 5개 */}
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={16} color="#FFC700" weight="fill" />
            ))}

            {/* 평점, 후기, 수강생 */}
            <Text className="text-[10px] text-black ml-[5px] pb-[4px]">
              <Text className="underline">(5.0) 후기 4개</Text>{' '}
              <Text className="">수강생 3,000명</Text>
            </Text>
          </View>
          <Text className="font-bold text-[27px]">{price.toLocaleString()}원</Text>
        </View>

        {/* 탭 메뉴 */}
        <View className="flex-row border-b border-[#CCCCCC]">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                className={`flex-1 items-center py-3 ${isActive ? 'border-b-2 border-[#58CC02]' : ''}`}
                onPress={() => setActiveTab(tab)}
              >
                <Text className={`text-[18px] font-semibold ${isActive ? 'text-[#58CC02]' : 'text-black'}`}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* 탭 내용 */}
        <View className="px-4 py-6">
          {activeTab === '강의소개' && (
            <View>
              <Text className="text-base font-semibold text-gray-800 mb-2">
                강의소개 내용이 여기에 들어갑니다.
              </Text>
            </View>
          )}
          {activeTab === '목차' && (
            <Text className="text-sm text-gray-600">목차 내용이 여기에 들어갑니다.</Text>
          )}
          {activeTab === '관련코스' && (
            <Text className="text-sm text-gray-600">관련 코스 정보가 여기에 들어갑니다.</Text>
          )}
          {activeTab === '후기' && (
            <Text className="text-sm text-gray-600">수강생들의 후기가 여기에 들어갑니다.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default LessonDetailScreen;