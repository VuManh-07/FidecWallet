import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';

export const Market = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M11 4.6V20.4C11 21.9 10.36 22.5 8.77 22.5H4.73C3.14 22.5 2.5 21.9 2.5 20.4V4.6C2.5 3.1 3.14 2.5 4.73 2.5H8.77C10.36 2.5 11 3.1 11 4.6Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M22.5 11.6V20.4C22.5 21.9 21.86 22.5 20.27 22.5H16.23C14.64 22.5 14 21.9 14 20.4V11.6C14 10.1 14.64 9.5 16.23 9.5H20.27C21.86 9.5 22.5 10.1 22.5 11.6Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
