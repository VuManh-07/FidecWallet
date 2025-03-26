import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Buy = ({ color = '#fff', style, ...props }: SvgProps) => {
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
        d="M9.3042 12.3503C9.3042 13.1845 9.9542 13.867 10.745 13.867H12.37C13.0634 13.867 13.6267 13.2711 13.6267 12.5453C13.6267 11.7545 13.28 11.4728 12.7709 11.2886L10.1709 10.3786C9.65087 10.1945 9.3042 9.91279 9.3042 9.12196C9.3042 8.39613 9.86753 7.80029 10.5609 7.80029H12.1859C12.9875 7.81113 13.6375 8.48279 13.6375 9.31696"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.4707 13.9209V14.7226"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.4707 6.94434V7.78934"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.46 19.4782C16.2405 19.4782 20.1159 15.6028 20.1159 10.8223C20.1159 6.04185 16.2405 2.1665 11.46 2.1665C6.67955 2.1665 2.8042 6.04185 2.8042 10.8223C2.8042 15.6028 6.67955 19.4782 11.46 19.4782Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.6992 21.5368C15.6742 22.9127 17.2667 23.8118 19.0867 23.8118C22.0442 23.8118 24.4492 21.4068 24.4492 18.4493C24.4492 16.651 23.5609 15.0585 22.2067 14.0835"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
