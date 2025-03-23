import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';

export const UserSquare = ({ color = '#CCC', style, ...props }: SvgProps) => (
  <Svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.19C2.5 19 3.79 20.93 6.06 21.66C6.72 21.89 7.48 22 8.31 22H16.69C17.52 22 18.28 21.89 18.94 21.66C21.21 20.93 22.5 19 22.5 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM21 16.19C21 18.33 20.16 19.68 18.47 20.24C17.5 18.33 15.2 16.97 12.5 16.97C9.8 16.97 7.51 18.32 6.53 20.24H6.52C4.85 19.7 4 18.34 4 16.2V7.81C4 4.99 5.49 3.5 8.31 3.5H16.69C19.51 3.5 21 4.99 21 7.81V16.19Z"
      fill={color}
    />
    <Path
      d="M12.4999 8C10.5199 8 8.91992 9.6 8.91992 11.58C8.91992 13.56 10.5199 15.17 12.4999 15.17C14.4799 15.17 16.0799 13.56 16.0799 11.58C16.0799 9.6 14.4799 8 12.4999 8Z"
      fill={color}
    />
  </Svg>
);
