import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const More = ({ color = '#fff', style, ...props }: SvgProps) => {
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
        d="M5.77954 10.8332H7.94621C10.1129 10.8332 11.1962 9.74984 11.1962 7.58317V5.4165C11.1962 3.24984 10.1129 2.1665 7.94621 2.1665H5.77954C3.61287 2.1665 2.52954 3.24984 2.52954 5.4165V7.58317C2.52954 9.74984 3.61287 10.8332 5.77954 10.8332Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.7795 10.8332H20.9462C23.1129 10.8332 24.1962 9.74984 24.1962 7.58317V5.4165C24.1962 3.24984 23.1129 2.1665 20.9462 2.1665H18.7795C16.6129 2.1665 15.5295 3.24984 15.5295 5.4165V7.58317C15.5295 9.74984 16.6129 10.8332 18.7795 10.8332Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.7795 23.8332H20.9462C23.1129 23.8332 24.1962 22.7498 24.1962 20.5832V18.4165C24.1962 16.2498 23.1129 15.1665 20.9462 15.1665H18.7795C16.6129 15.1665 15.5295 16.2498 15.5295 18.4165V20.5832C15.5295 22.7498 16.6129 23.8332 18.7795 23.8332Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.77954 23.8332H7.94621C10.1129 23.8332 11.1962 22.7498 11.1962 20.5832V18.4165C11.1962 16.2498 10.1129 15.1665 7.94621 15.1665H5.77954C3.61287 15.1665 2.52954 16.2498 2.52954 18.4165V20.5832C2.52954 22.7498 3.61287 23.8332 5.77954 23.8332Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
