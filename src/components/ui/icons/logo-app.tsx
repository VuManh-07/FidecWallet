import React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

export const LogoApp = ({ color = '#EEC141', style, ...props }: SvgProps) => (
  <Svg
    width={getSize(31)}
    height={getSize(25)}
    viewBox="0 0 31 25"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <Path
      d="M23.7663 24.5965H6.57133C5.54579 24.5965 4.44563 23.7728 4.11271 22.7556L0.626639 12.0957C0.293722 11.0785 0.856237 10.2549 1.88178 10.2549H19.0768C20.1023 10.2549 21.2025 11.0785 21.5354 12.0957L25.0215 22.7556C25.3525 23.7728 24.7919 24.5965 23.7663 24.5965Z"
      fill="#C26028"
    />
    <Path
      opacity="0.9"
      d="M26.1072 19.9139H8.91264C7.88713 19.9139 6.787 19.0902 6.45409 18.073L2.96813 7.41312C2.63522 6.3959 3.19772 5.57227 4.22323 5.57227H21.4177C22.4433 5.57227 23.5434 6.3959 23.8763 7.41312L27.3623 18.073C27.6952 19.0883 27.1327 19.9139 26.1072 19.9139Z"
      fill={color}
    />
    <Path
      opacity="0.9"
      d="M28.7574 14.9383H11.7676C10.7543 14.9383 9.66728 14.1146 9.33834 13.0974L5.89387 2.43754C5.56492 1.42032 6.12073 0.59668 7.13403 0.59668H24.1238C25.1371 0.59668 26.2242 1.42032 26.5531 2.43754L29.9976 13.0974C30.3265 14.1146 29.7707 14.9383 28.7574 14.9383Z"
      fill={color}
    />
  </Svg>
);
