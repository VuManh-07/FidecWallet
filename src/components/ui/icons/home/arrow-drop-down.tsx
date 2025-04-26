import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const ArrowDropDown = ({
  color = '#8C91A2',
  style,
  ...props
}: SvgProps) => {
  const size = WIDTH(26);
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
      <Mask
        id="mask0_4438_7559"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="25"
      >
        <Rect y="0.31543" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_4438_7559)">
        <Path d="M12 15.3154L7 10.3154H17L12 15.3154Z" fill={color} />
      </G>
    </Svg>
  );
};
