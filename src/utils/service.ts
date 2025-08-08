import Config from 'react-native-config';
import { Platform } from 'react-native';

// 플랫폼별 API URL 설정
export const API_URL = Platform.OS === 'android' 
  ? Config.ANDROID_API_URL 
  : Config.IOS_API_URL; 


export const FRONTEND_URL = Platform.OS === 'android' 
  ? Config.ANDROID_FRONT_URL 
  : Config.IOS_FRONT_URL; 