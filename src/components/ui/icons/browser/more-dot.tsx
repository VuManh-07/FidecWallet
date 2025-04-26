import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const MoreDot = ({ color = '#CED0D8', style, ...props }: SvgProps) => (
  <Svg
    width={getSize(21)}
    height={getSize(21)}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M4.29167 8.83325C3.375 8.83325 2.625 9.58325 2.625 10.4999C2.625 11.4166 3.375 12.1666 4.29167 12.1666C5.20833 12.1666 5.95833 11.4166 5.95833 10.4999C5.95833 9.58325 5.20833 8.83325 4.29167 8.83325Z"
      stroke={color}
      stroke-width={RFValue(1.5)}
    />
    <Path
      d="M15.9584 8.83325C15.0417 8.83325 14.2917 9.58325 14.2917 10.4999C14.2917 11.4166 15.0417 12.1666 15.9584 12.1666C16.8751 12.1666 17.6251 11.4166 17.6251 10.4999C17.6251 9.58325 16.8751 8.83325 15.9584 8.83325Z"
      stroke={color}
      stroke-width={RFValue(1.5)}
    />
    <Path
      d="M10.1249 8.83325C9.20825 8.83325 8.45825 9.58325 8.45825 10.4999C8.45825 11.4166 9.20825 12.1666 10.1249 12.1666C11.0416 12.1666 11.7916 11.4166 11.7916 10.4999C11.7916 9.58325 11.0416 8.83325 10.1249 8.83325Z"
      stroke={color}
      stroke-width={RFValue(1.5)}
    />
  </Svg>
);
