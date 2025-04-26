import { isRTL } from 'expo-localization';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

import { getSize } from '@/lib/hooks/use-responsive-dimensions';

export const MoreVert = ({ color = '#fff', style, ...props }: SvgProps) => (
  <Svg
    width={getSize(20)}
    height={getSize(20)}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Mask
      id="mask0_4381_9736"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={getSize(22)}
      height={getSize(22)}
    >
      <Rect x="0.5" width={getSize(22)} height={getSize(22)} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_4381_9736)">
      <Path
        d="M10.4956 16C10.0819 16 9.72917 15.8527 9.4375 15.5581C9.14583 15.2635 9 14.9094 9 14.4956C9 14.0819 9.14729 13.7292 9.44187 13.4375C9.73646 13.1458 10.0906 13 10.5044 13C10.9181 13 11.2708 13.1473 11.5625 13.4419C11.8542 13.7365 12 14.0906 12 14.5044C12 14.9181 11.8527 15.2708 11.5581 15.5625C11.2635 15.8542 10.9094 16 10.4956 16ZM10.4956 11.5C10.0819 11.5 9.72917 11.3527 9.4375 11.0581C9.14583 10.7635 9 10.4094 9 9.99563C9 9.58188 9.14729 9.22917 9.44187 8.9375C9.73646 8.64583 10.0906 8.5 10.5044 8.5C10.9181 8.5 11.2708 8.64729 11.5625 8.94188C11.8542 9.23646 12 9.59062 12 10.0044C12 10.4181 11.8527 10.7708 11.5581 11.0625C11.2635 11.3542 10.9094 11.5 10.4956 11.5ZM10.4956 7C10.0819 7 9.72917 6.85271 9.4375 6.55812C9.14583 6.26354 9 5.90937 9 5.49562C9 5.08187 9.14729 4.72917 9.44187 4.4375C9.73646 4.14583 10.0906 4 10.5044 4C10.9181 4 11.2708 4.14729 11.5625 4.44188C11.8542 4.73646 12 5.09063 12 5.50438C12 5.91813 11.8527 6.27083 11.5581 6.5625C11.2635 6.85417 10.9094 7 10.4956 7Z"
        fill={color}
      />
    </G>
  </Svg>
);
