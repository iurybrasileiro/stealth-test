import { Dimensions, PixelRatio } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export function fontSizePercentage(fontSize: number): number {
  // based on iphone 5s's scale
  const scale = WIDTH / 320;

  const NEW_SIZE = fontSize * scale;

  return Math.round(PixelRatio.roundToNearestPixel(NEW_SIZE));
}
