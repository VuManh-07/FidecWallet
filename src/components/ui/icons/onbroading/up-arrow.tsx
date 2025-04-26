import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const UpArrow = ({ color = '#161616', style, ...props }: SvgProps) => (
  <Svg
    width={getSize(24)}
    height={getSize(24)}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M9.42627 6.85352L18.0105 6.85352L18.0105 15.4378"
      stroke={color}
      stroke-width={RFValue(2)}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M5.98975 18.875L17.8904 6.97439"
      stroke={color}
      stroke-width={RFValue(2)}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
