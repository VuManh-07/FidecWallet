import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const ShareRepeat = ({
  color = '#CED0D8',
  style,
  ...props
}: SvgProps) => (
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
      d="M12.2918 3L14.3251 4.95002L7.70011 4.93334C4.72511 4.93334 2.28345 7.37502 2.28345 10.3667C2.28345 11.8584 2.89177 13.2167 3.8751 14.2"
      stroke={color}
      stroke-width={RFValue(1.5)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.95838 18L6.92505 16.05L13.55 16.0667C16.525 16.0667 18.9667 13.625 18.9667 10.6334C18.9667 9.14169 18.3584 7.78338 17.3751 6.80005"
      stroke={color}
      stroke-width={RFValue(1.5)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.125 10.5H13.125"
      stroke={color}
      stroke-width={RFValue(1.5)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
