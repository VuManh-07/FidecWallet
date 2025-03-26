import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Scan = ({ color = '#fff', style, ...props }: SvgProps) => {
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
        d="M2.62109 9.74984V7.0415C2.62109 4.344 4.79859 2.1665 7.49609 2.1665H10.2044"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.7043 2.1665H19.4127C22.1102 2.1665 24.2877 4.344 24.2877 7.0415V9.74984"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.2876 17.3335V18.9585C24.2876 21.656 22.1101 23.8335 19.4126 23.8335H17.7876"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.2044 23.8333H7.49609C4.79859 23.8333 2.62109 21.6558 2.62109 18.9583V16.25"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.8293 7.5835V9.75016C11.8293 10.8335 11.2876 11.3752 10.2043 11.3752H8.0376C6.95426 11.3752 6.4126 10.8335 6.4126 9.75016V7.5835C6.4126 6.50016 6.95426 5.9585 8.0376 5.9585H10.2043C11.2876 5.9585 11.8293 6.50016 11.8293 7.5835Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.496 7.5835V9.75016C20.496 10.8335 19.9543 11.3752 18.871 11.3752H16.7043C15.621 11.3752 15.0793 10.8335 15.0793 9.75016V7.5835C15.0793 6.50016 15.621 5.9585 16.7043 5.9585H18.871C19.9543 5.9585 20.496 6.50016 20.496 7.5835Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.8293 16.25V18.4167C11.8293 19.5 11.2876 20.0417 10.2043 20.0417H8.0376C6.95426 20.0417 6.4126 19.5 6.4126 18.4167V16.25C6.4126 15.1667 6.95426 14.625 8.0376 14.625H10.2043C11.2876 14.625 11.8293 15.1667 11.8293 16.25Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20.496 16.25V18.4167C20.496 19.5 19.9543 20.0417 18.871 20.0417H16.7043C15.621 20.0417 15.0793 19.5 15.0793 18.4167V16.25C15.0793 15.1667 15.621 14.625 16.7043 14.625H18.871C19.9543 14.625 20.496 15.1667 20.496 16.25Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
