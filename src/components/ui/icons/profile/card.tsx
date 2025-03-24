import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const Card = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = getSize(40); // Điều chỉnh kích thước theo màn hình
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
      <G clipPath="url(#clip0_4275_4375)">
        <Path
          d="M10 20.61H27"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27 18.28V25.43C26.97 28.28 26.19 29 23.22 29H13.78C10.76 29 10 28.25 10 25.27V18.28C10 15.58 10.63 14.71 13 14.57C13.24 14.56 13.5 14.55 13.78 14.55H23.22C26.24 14.55 27 15.3 27 18.28Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M30 14.73V21.72C30 24.42 29.37 25.29 27 25.43V18.28C27 15.3 26.24 14.55 23.22 14.55H13.78C13.5 14.55 13.24 14.56 13 14.57C13.03 11.72 13.81 11 16.78 11H26.22C29.24 11 30 11.75 30 14.73Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.25 25.81H14.97"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.1099 25.81H20.5499"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4275_4375">
          <Rect width={size} height={size} rx={getSize(20)} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
