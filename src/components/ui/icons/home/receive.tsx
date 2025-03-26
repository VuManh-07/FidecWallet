import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Receive = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(35);
  const strokeWidth = RFValue(2.125);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M23.867 13.1089C28.967 13.5481 31.0495 16.1689 31.0495 21.9064V22.0906C31.0495 28.4231 28.5137 30.9589 22.1812 30.9589H12.9587C6.62617 30.9589 4.09033 28.4231 4.09033 22.0906V21.9064C4.09033 16.2114 6.1445 13.5906 11.1595 13.1231"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.5771 3.3335V21.5802"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.3227 18.4214L17.5769 23.1672L12.8311 18.4214"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
