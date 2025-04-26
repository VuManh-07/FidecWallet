import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const Heart = ({ color = '#CED0D8', style, ...props }: SvgProps) => (
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
      d="M10.892 17.8404C10.6087 17.9404 10.142 17.9404 9.85866 17.8404C7.44199 17.0154 2.04199 13.5737 2.04199 7.74036C2.04199 5.16536 4.11699 3.08203 6.67532 3.08203C8.19199 3.08203 9.53366 3.81536 10.3753 4.9487C11.217 3.81536 12.567 3.08203 14.0753 3.08203C16.6337 3.08203 18.7087 5.16536 18.7087 7.74036C18.7087 13.5737 13.3087 17.0154 10.892 17.8404Z"
      stroke={color}
      strokeWidth={RFValue(1.5)}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
