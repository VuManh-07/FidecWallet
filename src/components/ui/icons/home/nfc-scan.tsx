import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const NfcScan = ({ color = '#ccc', style, ...props }: SvgProps) => {
  const size = WIDTH(81);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 81 81"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Defs>
        <ClipPath id="clip0">
          <Rect
            x="0.5"
            y="0.647461"
            width="80"
            height="80"
            rx="40"
            fill={color}
          />
        </ClipPath>
      </Defs>

      <G clipPath="url(#clip0)">
        <Path
          d="M22.5608 50.2575L59.6498 73.806L41.5261 100.117L22.5608 80.4779L22.5608 50.2575Z"
          fill={color}
          fillOpacity="0.1"
        />
        <Path
          d="M55.7296 27.5698H25.2705C23.0218 27.5698 21.2842 29.4096 21.2842 31.5561V95.3362C21.2842 97.5849 23.124 99.3225 25.2705 99.3225H55.7296C57.9782 99.3225 59.7158 97.4827 59.7158 95.3362V31.5561C59.7158 29.4096 57.9782 27.5698 55.7296 27.5698ZM58.4893 95.4385C58.4893 96.8694 57.2628 98.096 55.8318 98.096H25.2705C23.8395 98.096 22.6129 96.8694 22.6129 95.4385V31.5561C22.6129 30.1251 23.8395 28.8986 25.2705 28.8986H31.301V29.3074C31.301 30.6362 32.3231 31.5561 33.5496 31.5561H47.3482C48.677 31.5561 49.5969 30.534 49.5969 29.3074V28.8986H55.6274C57.0583 28.8986 58.2849 30.1251 58.2849 31.5561L58.4893 95.4385Z"
          fill={color}
        />
      </G>

      <Rect
        x="1.75"
        y="1.897"
        width="77.5"
        height="77.5"
        rx="38.75"
        stroke={color}
        strokeOpacity="0.8"
        strokeWidth="2.5"
      />
    </Svg>
  );
};
