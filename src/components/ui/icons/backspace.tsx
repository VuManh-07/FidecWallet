import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { G, Mask, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

export const Backspace = ({ color = '#ccc', style, ...props }: SvgProps) => (
  <Svg
    width={getSize(25)}
    height={getSize(25)}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Mask
      id="mask0_4218_11339"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="25"
    >
      <Rect x="0.155762" y="0.59668" width="24" height="24" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_4218_11339)">
      <Path
        d="M9.15576 18.5967L3.15576 12.5967L9.15576 6.59668L10.5558 7.99668L6.95576 11.5967H21.1558V13.5967H6.95576L10.5558 17.1967L9.15576 18.5967Z"
        fill={color}
      />
    </G>
  </Svg>
);
