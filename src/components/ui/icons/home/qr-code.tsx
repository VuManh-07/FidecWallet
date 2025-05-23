import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const QRCode = ({ color = '#F9D54A', style, ...props }: SvgProps) => {
  const size = WIDTH(24);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M13 21.5V19.5H15V21.5H13ZM11 19.5V14.5H13V19.5H11ZM19 16.5V12.5H21V16.5H19ZM17 12.5V10.5H19V12.5H17ZM5 14.5V12.5H7V14.5H5ZM3 12.5V10.5H5V12.5H3ZM12 5.5V3.5H14V5.5H12ZM4.5 8H7.5V5H4.5V8ZM3 8.5V4.5C3 4.21667 3.096 3.97933 3.288 3.788C3.48 3.59667 3.71733 3.50067 4 3.5H8C8.28333 3.5 8.521 3.596 8.713 3.788C8.905 3.98 9.00067 4.21733 9 4.5V8.5C9 8.78333 8.904 9.021 8.712 9.213C8.52 9.405 8.28267 9.50067 8 9.5H4C3.71667 9.5 3.47933 9.404 3.288 9.212C3.09667 9.02 3.00067 8.78267 3 8.5ZM4.5 20H7.5V17H4.5V20ZM3 20.5V16.5C3 16.2167 3.096 15.9793 3.288 15.788C3.48 15.5967 3.71733 15.5007 4 15.5H8C8.28333 15.5 8.521 15.596 8.713 15.788C8.905 15.98 9.00067 16.2173 9 16.5V20.5C9 20.7833 8.904 21.021 8.712 21.213C8.52 21.405 8.28267 21.5007 8 21.5H4C3.71667 21.5 3.47933 21.404 3.288 21.212C3.09667 21.02 3.00067 20.7827 3 20.5ZM16.5 8H19.5V5H16.5V8ZM15 8.5V4.5C15 4.21667 15.096 3.97933 15.288 3.788C15.48 3.59667 15.7173 3.50067 16 3.5H20C20.2833 3.5 20.521 3.596 20.713 3.788C20.905 3.98 21.0007 4.21733 21 4.5V8.5C21 8.78333 20.904 9.021 20.712 9.213C20.52 9.405 20.2827 9.50067 20 9.5H16C15.7167 9.5 15.4793 9.404 15.288 9.212C15.0967 9.02 15.0007 8.78267 15 8.5ZM17 21.5V18.5H15V16.5H19V19.5H21V21.5H17ZM13 14.5V12.5H17V14.5H13ZM9 14.5V12.5H7V10.5H13V12.5H11V14.5H9ZM10 9.5V5.5H12V7.5H14V9.5H10ZM5.24 7.24V5.75H6.75V7.24H5.24ZM5.24 19.24V17.75H6.75V19.24H5.24ZM17.24 7.24V5.75H18.75V7.24H17.24Z"
        fill={color}
      />
    </Svg>
  );
};
