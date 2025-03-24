import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Send = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(26);
  const strokeWidth = RFValue(1.625);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M8.56247 6.84683L17.76 3.781C21.8875 2.40517 24.13 4.6585 22.765 8.786L19.6991 17.9835C17.6408 24.1693 14.2608 24.1693 12.2025 17.9835L11.2925 15.2535L8.56247 14.3435C2.37664 12.2852 2.37664 8.916 8.56247 6.84683Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.4985 14.7876L15.3769 10.8984"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
