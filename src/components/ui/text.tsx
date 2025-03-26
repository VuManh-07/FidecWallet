import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { I18nManager, StyleSheet, Text as NNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import {
  getResponsiveFontSize,
  getResponsiveSize,
} from '@/lib/hooks/use-responsive-dimensions';
import type { TxKeyPath } from '@/lib/i18n';
import { translate } from '@/lib/i18n';

// 🔹 Danh sách font size mặc định theo Tailwind
const fontSizeMap: Record<string, number> = {
  'text-xs': 12,
  'text-sm': 14,
  'text-base': 16,
  'text-lg': 18,
  'text-xl': 20,
  'text-2xl': 24,
  'text-3xl': 30,
  'text-4xl': 36,
  'text-5xl': 48,
  'text-6xl': 60,
  'text-7xl': 72,
  'text-8xl': 96,
  'text-9xl': 128,
};

interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}

export const Text = ({
  className = '',
  style,
  tx,
  children,
  ...props
}: Props) => {
  const calculatedFontSize = getResponsiveFontSize(className, fontSizeMap);

  // 📌 Lấy giá trị margin
  const margin = getResponsiveSize(className, 'm');
  const marginX = getResponsiveSize(className, 'mx');
  const marginY = getResponsiveSize(className, 'my');
  const marginLeft = getResponsiveSize(className, 'ml');
  const marginRight = getResponsiveSize(className, 'mr');
  const marginTop = getResponsiveSize(className, 'mt');
  const marginBottom = getResponsiveSize(className, 'mb');

  // 📌 Lấy giá trị padding
  const padding = getResponsiveSize(className, 'p');
  const paddingX = getResponsiveSize(className, 'px');
  const paddingY = getResponsiveSize(className, 'py');
  const paddingLeft = getResponsiveSize(className, 'pl');
  const paddingRight = getResponsiveSize(className, 'pr');
  const paddingTop = getResponsiveSize(className, 'pt');
  const paddingBottom = getResponsiveSize(className, 'pb');

  const textStyle = React.useMemo(
    () =>
      twMerge(
        'text-base text-black dark:text-white font-inter font-normal',
        className
      ),
    [className]
  );

  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        {
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        calculatedFontSize ? { fontSize: calculatedFontSize } : {},
        margin ? { margin } : {},
        marginX ? { marginLeft: marginX, marginRight: marginX } : {},
        marginY ? { marginTop: marginY, marginBottom: marginY } : {},
        marginLeft ? { marginLeft } : {},
        marginRight ? { marginRight } : {},
        marginTop ? { marginTop } : {},
        marginBottom ? { marginBottom } : {},
        padding ? { padding } : {},
        paddingX ? { paddingLeft: paddingX, paddingRight: paddingX } : {},
        paddingY ? { paddingTop: paddingY, paddingBottom: paddingY } : {},
        paddingLeft ? { paddingLeft } : {},
        paddingRight ? { paddingRight } : {},
        paddingTop ? { paddingTop } : {},
        paddingBottom ? { paddingBottom } : {},
        style,
      ]) as TextStyle,
    [
      style,
      calculatedFontSize,
      margin,
      marginX,
      marginY,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      padding,
      paddingX,
      paddingY,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    ]
  );

  return (
    <NNText className={textStyle} style={nStyle} {...props}>
      {tx ? translate(tx) : children}
    </NNText>
  );
};
