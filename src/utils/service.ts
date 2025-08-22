import Config from 'react-native-config';
import { Platform } from 'react-native';

const BACK_URL =
  Config.NODE_ENV === 'local'
    ? Platform.OS === 'android'
      ? Config.ANDROID_BACK_URL!
      : Config.IOS_BACK_URL!
    : Config.BACK_URL!;

const FRONT_URL =
  Config.NODE_ENV === 'local'
    ? Platform.OS === 'android'
      ? Config.ANDROID_FRONT_URL!
      : Config.IOS_FRONT_URL!
    : Config.FRONT_URL!;

export { BACK_URL, FRONT_URL };