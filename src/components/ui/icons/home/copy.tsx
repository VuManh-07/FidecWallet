import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Copy = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(20);
  const strokeWidth = RFValue(1.5);
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
      <Path
        d="M13.35 10.7503V14.2503C13.35 17.167 12.1833 18.3337 9.26668 18.3337H5.76668C2.85002 18.3337 1.68335 17.167 1.68335 14.2503V10.7503C1.68335 7.83366 2.85002 6.66699 5.76668 6.66699H9.26668C12.1833 6.66699 13.35 7.83366 13.35 10.7503Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.35 5.75033V9.25033C18.35 12.167 17.1834 13.3337 14.2667 13.3337H13.35V10.7503C13.35 7.83366 12.1834 6.66699 9.26668 6.66699H6.68335V5.75033C6.68335 2.83366 7.85002 1.66699 10.7667 1.66699H14.2667C17.1834 1.66699 18.35 2.83366 18.35 5.75033Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
