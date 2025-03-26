import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const Search = ({ color = '#CCC', style, ...props }: SvgProps) => {
  const size = getSize(20);
  const strokeWidth = RFValue(2);
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
      <G clip-path="url(#clip0_4443_459)">
        <Path
          d="M13.8317 13.5817C11.3314 16.0821 7.27753 16.0821 4.7772 13.5817C2.27687 11.0814 2.27687 7.02757 4.7772 4.52724C7.27753 2.02692 11.3314 2.02692 13.8317 4.52724C16.332 7.02757 16.332 11.0814 13.8317 13.5817ZM13.8317 13.5817L16.6612 16.4113"
          stroke={color}
          stroke-width={strokeWidth}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4443_459">
          <Rect
            width={size}
            height={size}
            fill={color}
            transform="translate(0.25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
