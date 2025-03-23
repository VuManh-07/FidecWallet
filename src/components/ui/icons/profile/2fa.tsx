import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';

export const TwoFa = ({ color = '#fff', style, ...props }: SvgProps) => (
  <Svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <G clip-path="url(#clip0_4154_16815)">
      <Path
        d="M26.04 21.55C25.62 21.96 25.38 22.55 25.44 23.18C25.53 24.26 26.52 25.05 27.6 25.05H29.5V26.24C29.5 28.31 27.81 30 25.74 30H14.26C12.19 30 10.5 28.31 10.5 26.24V19.51C10.5 17.44 12.19 15.75 14.26 15.75H25.74C27.81 15.75 29.5 17.44 29.5 19.51V20.95H27.48C26.92 20.95 26.41 21.17 26.04 21.55Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 20.4101V15.8401C10.5 14.6501 11.23 13.5901 12.34 13.1701L20.28 10.1701C21.52 9.70006 22.85 10.6201 22.85 11.9501V15.7501"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M30.5588 21.9702V24.0302C30.5588 24.5802 30.1188 25.0302 29.5588 25.0502H27.5988C26.5188 25.0502 25.5288 24.2602 25.4388 23.1802C25.3788 22.5502 25.6188 21.9602 26.0388 21.5502C26.4088 21.1702 26.9188 20.9502 27.4788 20.9502H29.5588C30.1188 20.9702 30.5588 21.4202 30.5588 21.9702Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M15 20H22"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4154_16815">
        <Rect width="40" height="40" rx="20" fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
