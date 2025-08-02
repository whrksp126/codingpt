import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { House, BookBookmark, Storefront, User } from 'phosphor-react-native';

// Context
import { useNavigation } from '../contexts/NavigationContext';

// Screens
import HomeScreen from '../screens/HomeScreen';
import MyPageScreen from '../screens/MyPageScreen';
import LessonListScreen from '../screens/Lesson/LessonListScreen';
import StoreScreen from '../screens/StoreScreen';
import LessonDetailScreen from '../screens/Lesson/LessonDetailScreen';
import ClassProgressScreen from '../screens/Lesson/classProgressScreen';
import LessonLearningScreen from '../screens/Lesson/LessonLearningScreen';

const AppNavigator = () => {
  const { currentScreen, navigationParams } = useNavigation();


  const renderScreen = () => {
    const route = { params: navigationParams };

    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'myLessons':
        return <LessonListScreen />;
      case 'store':
        return <StoreScreen />;
      case 'my':
        return <MyPageScreen />;
      case 'lessonDetail':
        return <LessonDetailScreen route={route} />;
      case 'classProgress':
        return <ClassProgressScreen />;
      case 'lessonLearning':
        return <LessonLearningScreen route={route} />;
      default:
        return <HomeScreen />;
    }
  };

  // 탭바가 필요한 화면들 정의
  const screensWithTabBar = ['home', 'myLessons', 'store', 'my'];

  const renderTabBar = () => {
    const { currentScreen, navigate } = useNavigation();
    
    // 현재 화면이 탭바가 필요한 화면인지 확인
    if (!screensWithTabBar.includes(currentScreen)) {
      return null;
    }

    const tabs = [
      { name: 'home', label: '홈', Icon: House },
      { name: 'myLessons', label: '내 레슨', Icon: BookBookmark },
      { name: 'store', label: '상점', Icon: Storefront },
      { name: 'my', label: '마이', Icon: User },
    ];

    return (
      <View className="flex-row bg-white border-t border-gray-200 h-[60px] px-[10px]">
        {tabs.map(({ name, label, Icon }) => {
          const isActive = currentScreen === name;
          const iconColor = isActive ? '#FFC107' : '#6C757D';
          
          return (
            <TouchableOpacity
              key={name}
              className="flex-1 items-center justify-center"
              onPress={() => navigate(name)}
            >
              <Icon color={iconColor} weight={isActive ? 'fill' : 'regular'} size={24} />
              <Text className={`text-[10px] mt-1 ${isActive ? 'text-[#FFC107] font-semibold' : 'text-[#6C757D]'}`}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <View className="flex-1">{renderScreen()}</View>
      {renderTabBar()}
    </>
  );
};

export default AppNavigator;