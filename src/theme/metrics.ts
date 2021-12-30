import { Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export default {
  statusBarHeight: Platform.select({
    ios: getStatusBarHeight(true),
    android: 0,
    default: 0,
  }),
  bottomSpace: getBottomSpace(),
};
