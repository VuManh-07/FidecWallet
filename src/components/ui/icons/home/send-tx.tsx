import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const SendTx = ({ color = '#fff', style, ...props }: SvgProps) => {
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
        d="M23.867 12.6089C28.967 13.0481 31.0495 15.6689 31.0495 21.4064V21.5906C31.0495 27.9231 28.5137 30.4589 22.1812 30.4589H12.9587C6.62617 30.4589 4.09033 27.9231 4.09033 21.5906V21.4064C4.09033 15.7114 6.1445 13.0906 11.1595 12.6231"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.5771 21.2501V5.12842"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22.3227 8.28734L17.5769 3.5415L12.8311 8.28734"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
