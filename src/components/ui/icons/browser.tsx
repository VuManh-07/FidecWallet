import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { RFValue, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Browser = ({ color = '#CCC', style, ...props }: SvgProps) => {
  const size = WIDTH(25); // Điều chỉnh kích thước theo màn hình
  const strokeWidth = RFValue(1.5);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Path
        d="M3.5 9.60998V15.38C3.5 17.5 3.5 17.5 5.5 18.85L11 22.03C11.83 22.51 13.18 22.51 14 22.03L19.5 18.85C21.5 17.5 21.5 17.5 21.5 15.39V9.60998C21.5 7.49998 21.5 7.49999 19.5 6.14999L14 2.96999C13.18 2.48999 11.83 2.48999 11 2.96999L5.5 6.14999C3.5 7.49999 3.5 7.49998 3.5 9.60998Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.5 15.5C14.1569 15.5 15.5 14.1569 15.5 12.5C15.5 10.8431 14.1569 9.5 12.5 9.5C10.8431 9.5 9.5 10.8431 9.5 12.5C9.5 14.1569 10.8431 15.5 12.5 15.5Z"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
