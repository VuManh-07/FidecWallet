import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Support24h = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(40);
  const strokeWidth = RFValue(1.5);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <G clip-path="url(#clip0_4151_12125)">
        <Path
          d="M26 26.86H25.24C24.44 26.86 23.68 27.17 23.12 27.73L21.41 29.42C20.63 30.19 19.36 30.19 18.58 29.42L16.87 27.73C16.31 27.17 15.54 26.86 14.75 26.86H14C12.34 26.86 11 25.53 11 23.89V12.98C11 11.34 12.34 10.01 14 10.01H26C27.66 10.01 29 11.34 29 12.98V23.89C29 25.52 27.66 26.86 26 26.86Z"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15 17.16C15 16.23 15.76 15.47 16.69 15.47C17.62 15.47 18.38 16.23 18.38 17.16C18.38 19.04 15.71 19.24 15.12 21.03C15 21.4 15.31 21.77 15.7 21.77H18.38"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M24.04 21.76V16.05C24.04 15.79 23.87 15.56 23.62 15.49C23.37 15.42 23.1 15.52 22.96 15.74C22.24 16.9 21.46 18.22 20.78 19.38C20.67 19.57 20.67 19.82 20.78 20.01C20.89 20.2 21.1 20.3199 21.33 20.3199H25"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4151_12125">
          <Rect width={size} height={size} rx={WIDTH(20)} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
