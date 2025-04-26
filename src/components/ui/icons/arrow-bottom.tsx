import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const ArrowBottom = ({
  color = '#FF6464',
  style,
  ...props
}: SvgProps) => (
  <Svg
    width={getSize(10)}
    height={getSize(10)}
    viewBox="0 0 10 11"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M1.875 4.25L5 7.375L8.125 4.25"
      stroke={color}
      stroke-width={RFValue(2)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
