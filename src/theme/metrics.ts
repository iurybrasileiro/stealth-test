import { Dimensions, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default {
  window: {
    width: WIDTH,
    height: HEIGHT,
  },
  statusBarHeight: Platform.select({
    ios: getStatusBarHeight(true),
    android: 0,
    default: 0,
  }),
  bottomSpace: getBottomSpace(),
};
