import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';

export const Card = ({ color = '#fff', style, ...props }: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <G clip-path="url(#clip0_4275_4375)">
      <Path
        d="M10 20.61H27"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M27 18.28V25.43C26.97 28.28 26.19 29 23.22 29H13.78C10.76 29 10 28.25 10 25.27V18.28C10 15.58 10.63 14.71 13 14.57C13.24 14.56 13.5 14.55 13.78 14.55H23.22C26.24 14.55 27 15.3 27 18.28Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M30 14.73V21.72C30 24.42 29.37 25.29 27 25.43V18.28C27 15.3 26.24 14.55 23.22 14.55H13.78C13.5 14.55 13.24 14.56 13 14.57C13.03 11.72 13.81 11 16.78 11H26.22C29.24 11 30 11.75 30 14.73Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.25 25.81H14.97"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.1099 25.81H20.5499"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4275_4375">
        <Rect width="40" height="40" rx="20" fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
