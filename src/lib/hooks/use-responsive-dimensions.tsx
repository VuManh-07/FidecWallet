import { Dimensions } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');

const STANDARD_SCREEN_WIDTH = 375;
const STANDARD_SCREEN_HEIGHT = 812;

const insetTop = initialWindowMetrics?.insets.top ?? 0;
const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;
const deviceHeight = height - (insetTop + insetBottom);

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

export const RFPercentage = (percent: number): number => {
  return Math.round((percent * Math.min(width, deviceHeight)) / 100);
};

export const RFValue = (fontSize: number): number => {
  return Math.round(fontSize * scaleFactor);
};

export const getFontSize = (f: number): number => {
  return RFValue(f);
};

export const getSize = (f: number): number => {
  return RFValue(f);
};

// ✅ Sử dụng `as const` để giúp TypeScript hiểu đây là một object cố định
const spacingMap = {
  '0': 0,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '8': 32,
  '10': 40,
  '12': 48,
  '16': 64,
  '20': 80,
  '24': 96,
} as const;

export const getResponsiveSize = (
  className: string,
  prefix: string
): number | undefined => {
  const match = className.match(new RegExp(`${prefix}-(\\d+(?:/\\d+)?)`));
  if (!match) return undefined;

  const value = match[1];

  // Nếu là số nguyên, lấy từ spacingMap hoặc parse số
  if (value.includes('/')) return undefined;
  return getSize(
    spacingMap[value as keyof typeof spacingMap] ?? parseInt(value, 10)
  );
};

export const getResponsiveFontSize = (
  className: string,
  fontSizeMap: Record<string, number>
): number | undefined => {
  const fontClass = Object.keys(fontSizeMap).find((key) =>
    className.includes(key)
  );
  return fontClass ? getFontSize(fontSizeMap[fontClass]) : undefined;
};

export const getBorderWidth = (className: string): number | undefined => {
  const match = className.match(/border-(\d+)/);
  return match ? getSize(parseInt(match[1], 10)) : undefined;
};

const borderRadiusMap = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const getBorderRadius = (className: string): number | undefined => {
  const match = className.match(/rounded-([a-z0-9]+)/);
  if (!match) return undefined;

  const key = match[1] as keyof typeof borderRadiusMap;

  return getSize(borderRadiusMap[key] ?? parseInt(match[1], 10));
};
