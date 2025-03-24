import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const ColdWallet = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(20);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Mask
        id="mask0_4154_12308"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size}
        height={size}
      >
        <Rect x="0.0166016" width={size} height={size} fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_4154_12308)">
        <Path
          d="M9.22485 17.9163V14.6309L6.65194 17.1643L5.5436 16.0559L9.22485 12.3747V10.7913H7.64152L3.96027 14.4726L2.85194 13.3643L5.38527 10.7913H2.09985V9.20801H5.38527L2.85194 6.63509L3.96027 5.52676L7.64152 9.20801H9.22485V7.62467L5.5436 3.94342L6.65194 2.83509L9.22485 5.36842V2.08301H10.8082V5.36842L13.3811 2.83509L14.4894 3.94342L10.8082 7.62467V9.20801H12.3915L16.0728 5.52676L17.1811 6.63509L14.6478 9.20801H17.9332V10.7913H14.6478L17.1811 13.3643L16.0728 14.4726L12.3915 10.7913H10.8082V12.3747L14.4894 16.0559L13.3811 17.1643L10.8082 14.6309V17.9163H9.22485Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
