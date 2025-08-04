import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '../../contexts/UserContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '../../contexts/NavigationContext';

import AuthStorage from '../../utils/storage';
import { getTotalStudyDays } from '../../utils/heatmapUtils';

import { authService } from '../../services/authService';
import userService from '../../services/userService';

import BootSplash from 'react-native-bootsplash';

const LoginScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const { setUser, refreshUser } = useUser();
  const { login } = useAuth(); // ✅ authContext 사용

  useEffect(() => {
    const init = async () => {
      GoogleSignin.configure({
        webClientId: Config.GOOGLE_WEB_CLIENT_ID || '',
        iosClientId: Config.GOOGLE_IOS_CLIENT_ID || '',
        offlineAccess: true,
      });

      await BootSplash.hide({ fade: true });
    };

    init();
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await GoogleSignin.signOut(); // 캐시 삭제 후 재로그인
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const idToken = tokens.idToken;

      if (!idToken) {
        Alert.alert('오류', 'ID Token이 존재하지 않습니다.');
        return;
      }

      await sendIdTokenToServer(idToken);
    } catch (error) {
      console.error('Google 로그인 실패:', error);
      Alert.alert('로그인 실패', 'Google 로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const sendIdTokenToServer = async (idToken: string) => {
    try {
      const response = await authService.login(idToken);
      if (response.success && response.data) {
        const { accessToken, refreshToken } = response.data;

        // 1. 로그인 상태 반영 (context 내부에서 토큰 저장)
        await login(accessToken, refreshToken);

        // 2. UserContext 저장
        await refreshUser(); // 서버에서 유저 정보 불러와 Context에 저장
        
        // 2. 학습일수 저장
        // let studyDays = 0;
        // try {
        //   const heatmap = await userService.getStudyHeatmap();
        //   studyDays = getTotalStudyDays(heatmap);
        //   await AuthStorage.setStudyDays(studyDays);
        // } catch (e) {
        //   console.warn('총 학습일수 저장 실패 (무시됨):', e);
        // }

        // // 3. 사용자 정보 저장
        // const userWithStudyDays = { ...user, studyDays };
        // await AuthStorage.setUserData(userWithStudyDays);
        // setUser(userWithStudyDays);

        // 4. 홈으로 이동
        navigate('home'); // ✅ currentScreen이 home인 경우 AppNavigator로 진입
      } else {
        Alert.alert('로그인 실패', '서버 인증에 실패했습니다.');
      }
    } catch (error: any) {
      Alert.alert('로그인 실패', '서버 연결에 실패했습니다.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require('../../assets/icons/codingpt_logo_01.png')}
          className="w-60 h-32"
          resizeMode="contain"
        />
      </View>
      <View className="w-full px-5 pb-[34px]">
        <TouchableOpacity
          className="bg-[#58CC02] rounded-[10px] py-4 items-center justify-center w-full"
          onPress={signInWithGoogle}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-bold">
            {loading ? '로그인 중...' : '구글 로그인'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen; 