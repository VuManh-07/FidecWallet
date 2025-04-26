import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const CheckTick = ({ color = '#F9D54A', style, ...props }: SvgProps) => {
  const size = WIDTH(20);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Mask
        id="mask0_4142_16101"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="21"
      >
        <Rect y="0.647461" width="20" height="20" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_4142_16101)">
        <Path
          d="M8.9375 13.6475L13.8958 8.70996L12.8333 7.64746L8.9375 11.5225L7.16667 9.77246L6.10417 10.835L8.9375 13.6475ZM10 18.6475C8.90278 18.6475 7.86806 18.4391 6.89583 18.0225C5.92361 17.6058 5.07292 17.0329 4.34375 16.3037C3.61458 15.5745 3.04167 14.7239 2.625 13.7516C2.20833 12.7794 2 11.7447 2 10.6475C2 9.53635 2.20833 8.49816 2.625 7.53288C3.04167 6.5676 3.61458 5.72038 4.34375 4.99121C5.07292 4.26204 5.92361 3.68913 6.89583 3.27246C7.86806 2.85579 8.90278 2.64746 10 2.64746C11.1111 2.64746 12.1493 2.85579 13.1146 3.27246C14.0799 3.68913 14.9271 4.26204 15.6562 4.99121C16.3854 5.72038 16.9583 6.5676 17.375 7.53288C17.7917 8.49816 18 9.53635 18 10.6475C18 11.7447 17.7917 12.7794 17.375 13.7516C16.9583 14.7239 16.3854 15.5745 15.6562 16.3037C14.9271 17.0329 14.0799 17.6058 13.1146 18.0225C12.1493 18.4391 11.1111 18.6475 10 18.6475Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
