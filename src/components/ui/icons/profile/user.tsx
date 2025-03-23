import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';

export const User = ({ color = '#CCC', style, ...props }: SvgProps) => (
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
    <G clip-path="url(#clip0_800_27272)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 13C16.5 14.933 18.067 16.5 20 16.5C21.933 16.5 23.5 14.933 23.5 13C23.5 11.067 21.933 9.5 20 9.5C18.067 9.5 16.5 11.067 16.5 13ZM15 13C15 15.7614 17.2386 18 20 18C22.7614 18 25 15.7614 25 13C25 10.2386 22.7614 8 20 8C17.2386 8 15 10.2386 15 13ZM11.5877 28.6162C12.9281 25.0259 16.2718 22.5 20 22.5C23.7282 22.5 27.0719 25.0259 28.4123 28.6162C28.5892 29.0901 28.4875 29.5018 28.195 29.8459C27.8762 30.2208 27.3264 30.5 26.6967 30.5L13.3033 30.5C12.6736 30.5 12.1238 30.2208 11.805 29.8459C11.5125 29.5018 11.4108 29.0901 11.5877 28.6162ZM13.3033 32C11.1899 32 9.41417 30.1495 10.1825 28.0915C11.7176 23.9796 15.5792 21 20 21C24.4208 21 28.2824 23.9796 29.8175 28.0915C30.5858 30.1495 28.8101 32 26.6967 32L13.3033 32Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_800_27272">
        <Rect width="40" height="40" rx="20" fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
