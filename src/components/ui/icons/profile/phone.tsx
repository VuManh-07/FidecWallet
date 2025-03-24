import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

export const Phone = ({ color = '#fff', style, ...props }: SvgProps) => {
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
      <G clip-path="url(#clip0_4275_4206)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5 20C13.5 17.7596 13.5884 16.035 13.8043 14.699C14.0209 13.3595 14.3484 12.5273 14.7426 11.9853C15.1774 11.3875 15.8323 10.9619 17.0387 10.7236C17.0135 10.8114 17 10.9041 17 11C17 11.5523 17.4477 12 18 12H22C22.5523 12 23 11.5523 23 11C23 10.9041 22.9865 10.8114 22.9613 10.7236C24.1677 10.9619 24.8226 11.3875 25.2574 11.9853C25.6516 12.5273 25.9791 13.3595 26.1957 14.699C26.4116 16.035 26.5 17.7596 26.5 20C26.5 22.2404 26.4116 23.965 26.1957 25.301C25.9791 26.6405 25.6516 27.4727 25.2574 28.0147C24.5529 28.9833 23.2705 29.5 20 29.5C16.7295 29.5 15.4471 28.9833 14.7426 28.0147C14.3484 27.4727 14.0209 26.6405 13.8043 25.301C13.5884 23.965 13.5 22.2404 13.5 20ZM12 20C12 10.9415 13.412 9 20 9C26.588 9 28 10.9415 28 20C28 29.0585 26.588 31 20 31C13.412 31 12 29.0585 12 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4275_4206">
          <Rect width={size} height={size} rx={getSize(20)} fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
