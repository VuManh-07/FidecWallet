import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Send = ({ color = '#F9D54A', style, ...props }: SvgProps) => {
  const size = WIDTH(26);
  const strokeWidth = RFValue(2);
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
      <Path
        d="M18.3558 9.6416C22.2558 9.97743 23.8483 11.9816 23.8483 16.3691V16.5099C23.8483 21.3524 21.9091 23.2916 17.0666 23.2916H10.0141C5.17159 23.2916 3.23242 21.3524 3.23242 16.5099V16.3691C3.23242 12.0141 4.80326 10.0099 8.63826 9.65244"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.5459 16.2502V3.92188"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.1748 6.33766L13.5457 2.7085L9.9165 6.33766"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
