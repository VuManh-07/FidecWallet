import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Ethereum = ({ color = '#fff', style, ...props }: SvgProps) => {
  const size = WIDTH(16);
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
      style={StyleSheet.flatten([
        style,
        { transform: [{ scaleX: isRTL ? -1 : 1 }] },
      ])}
    >
      <Rect
        x="0.141602"
        y="0.147461"
        width={size}
        height={size}
        rx="6"
        fill="#E9E9E9"
      />
      <Path
        d="M8.14065 2.14746L8.0625 2.40565V9.89783L8.14065 9.97366L11.7185 7.91795L8.14065 2.14746Z"
        fill="#343434"
      />
      <Path
        d="M8.14063 2.14746L4.56274 7.91795L8.14063 9.97369V6.33721V2.14746Z"
        fill={color}
      />
      <Path
        d="M8.14047 10.6318L8.09644 10.684V13.3529L8.14047 13.4779L11.7205 8.57715L8.14047 10.6318Z"
        fill="#3C3C3B"
      />
      <Path
        d="M8.14063 13.4779V10.6318L4.56274 8.57715L8.14063 13.4779Z"
        fill={color}
      />
      <Path
        d="M8.14038 9.97334L11.7182 7.91766L8.14038 6.33691V9.97334Z"
        fill="#161616"
      />
      <Path
        d="M4.56274 7.91766L8.14057 9.97337V6.33691L4.56274 7.91766Z"
        fill="#393939"
      />
    </Svg>
  );
};
