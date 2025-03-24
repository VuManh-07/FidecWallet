import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const Logout = ({ color = '#FF6464', style, ...props }: SvgProps) => {
  const size = getSize(40);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M16.8999 15.56C17.2099 11.96 19.0599 10.49 23.1099 10.49H23.2399C27.7099 10.49 29.4999 12.28 29.4999 16.75V23.27C29.4999 27.74 27.7099 29.53 23.2399 29.53H23.1099C19.0899 29.53 17.2399 28.08 16.9099 24.54"
        stroke={color}
        stroke-width={RFValue(1.5)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23.0001 20H11.6201"
        stroke={color}
        stroke-width={RFValue(1.5)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.85 16.65L10.5 20L13.85 23.35"
        stroke={color}
        stroke-width={RFValue(1.5)}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
