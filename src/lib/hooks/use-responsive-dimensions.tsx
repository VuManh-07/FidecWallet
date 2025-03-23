import { Dimensions } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');

// Giá trị chuẩn để scale
const STANDARD_SCREEN_WIDTH = 375; // width
const STANDARD_SCREEN_HEIGHT = 812; // height

// Chiều cao thực tế trừ đi cả top & bottom insets
const insetTop = initialWindowMetrics?.insets.top ?? 0;
const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;
const deviceHeight = height - (insetTop + insetBottom);

// Tỉ lệ scale theo màn hình hiện tại
const heightFactor = deviceHeight / STANDARD_SCREEN_HEIGHT;
const widthFactor = width / STANDARD_SCREEN_WIDTH;
const scaleFactor = Math.min(heightFactor, widthFactor);

export const responsiveHeight = (h: number): number => height * (h / 100);
export const WIDTH = (w: number): number => width * (w / STANDARD_SCREEN_WIDTH);
export const HEIGHT = (h: number): number =>
  deviceHeight * (h / STANDARD_SCREEN_HEIGHT);
export const WIDTH_SCREEN = (w: number): number =>
  widthScreen * (w / STANDARD_SCREEN_WIDTH);
export const HEIGHT_SCREEN = (h: number): number =>
  heightScreen * (h / STANDARD_SCREEN_HEIGHT);
export const getWidth = (): number => width;
export const getHeight = (): number => height;
export const getLineHeight = (f: number): number => f;
export const getHighAbsolute = (h: number): number =>
  height * (h / STANDARD_SCREEN_HEIGHT);
export const getInsetVertical = (): number => insetTop + insetBottom;

// 🔹 Điều chỉnh kích thước font theo tỷ lệ màn hình
export const RFPercentage = (percent: number): number => {
  return Math.round((percent * Math.min(width, deviceHeight)) / 100);
};

export const RFValue = (fontSize: number): number => {
  return Math.round(fontSize * scaleFactor);
};
