import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

import { isRTL } from '@/lib';

export const Device = ({ color = '#fff', style, ...props }: SvgProps) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
    style={StyleSheet.flatten([
      style,
      { transform: [{ scaleX: isRTL ? -1 : 1 }] },
    ])}
  >
    <G clip-path="url(#clip0_4275_4400)">
      <Path
        d="M25.0099 20.73C25.6009 20.73 26.0799 20.2509 26.0799 19.66C26.0799 19.069 25.6009 18.59 25.0099 18.59C24.419 18.59 23.9399 19.069 23.9399 19.66C23.9399 20.2509 24.419 20.73 25.0099 20.73Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28 14V15.79C27.75 15.76 27.46 15.74 27.15 15.74H22.87C20.73 15.74 20.02 16.45 20.02 18.59V23.7H14C10.8 23.7 10 22.9 10 19.7V14C10 10.8 10.8 10 14 10H24C27.2 10 28 10.8 28 14Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17 23.7V28"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 19.9H20"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M13.95 28H19.9999"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.0099 20.73C25.6009 20.73 26.0799 20.2509 26.0799 19.66C26.0799 19.069 25.6009 18.59 25.0099 18.59C24.419 18.59 23.9399 19.069 23.9399 19.66C23.9399 20.2509 24.419 20.73 25.0099 20.73Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M28 15.79C27.75 15.76 27.46 15.74 27.15 15.74H22.87C20.73 15.74 20.02 16.45 20.02 18.59V27.15C20.02 29.29 20.73 30 22.87 30H27.15C29.29 30 30 29.29 30 27.15V18.59C30 16.76 29.48 15.98 28 15.79ZM25.01 18.59C25.6 18.59 26.08 19.07 26.08 19.66C26.08 20.25 25.6 20.73 25.01 20.73C24.42 20.73 23.94 20.25 23.94 19.66C23.94 19.07 24.42 18.59 25.01 18.59ZM25.01 27.15C23.83 27.15 22.87 26.19 22.87 25.01C22.87 24.52 23.04 24.06 23.32 23.7C23.71 23.2 24.32 22.87 25.01 22.87C25.55 22.87 26.04 23.07 26.41 23.39C26.86 23.79 27.15 24.37 27.15 25.01C27.15 26.19 26.19 27.15 25.01 27.15Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M27.1501 25.01C27.1501 26.19 26.1901 27.15 25.0101 27.15C23.8301 27.15 22.8701 26.19 22.8701 25.01C22.8701 24.52 23.0401 24.06 23.3201 23.7C23.7101 23.2 24.3201 22.87 25.0101 22.87C25.5501 22.87 26.0401 23.07 26.4101 23.39C26.8601 23.79 27.1501 24.37 27.1501 25.01Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M25.0099 20.73C25.6009 20.73 26.0799 20.2509 26.0799 19.66C26.0799 19.069 25.6009 18.59 25.0099 18.59C24.419 18.59 23.9399 19.069 23.9399 19.66C23.9399 20.2509 24.419 20.73 25.0099 20.73Z"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_4275_4400">
        <Rect width="40" height="40" rx="20" fill={color} />
      </ClipPath>
    </Defs>
  </Svg>
);
