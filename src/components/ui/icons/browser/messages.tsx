import * as React from 'react';
import { StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

import { isRTL } from '@/lib';
import { getSize, RFValue } from '@/lib/hooks/use-responsive-dimensions';

export const Messages = ({ color = '#CED0D8', style, ...props }: SvgProps) => (
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
      d="M15.8584 9.49167V12.825C15.8584 13.0417 15.8501 13.25 15.8251 13.45C15.6334 15.7 14.3084 16.8167 11.8667 16.8167H11.5334C11.3251 16.8167 11.1251 16.9167 11.0001 17.0833L10.0001 18.4167C9.55842 19.0083 8.84175 19.0083 8.40008 18.4167L7.40007 17.0833C7.29174 16.9417 7.05008 16.8167 6.86675 16.8167H6.53342C3.87509 16.8167 2.54175 16.1583 2.54175 12.825V9.49167C2.54175 7.05001 3.66676 5.72501 5.90842 5.53334C6.10842 5.50834 6.31676 5.5 6.53342 5.5H11.8667C14.5251 5.5 15.8584 6.83334 15.8584 9.49167Z"
      stroke={color}
      stroke-width={RFValue(1.2)}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M19.1918 6.15842V9.49175C19.1918 11.9418 18.0668 13.2584 15.8251 13.4501C15.8501 13.2501 15.8584 13.0418 15.8584 12.8251V9.49175C15.8584 6.83342 14.5251 5.50008 11.8668 5.50008H6.53345C6.31678 5.50008 6.10845 5.50842 5.90845 5.53342C6.10011 3.29176 7.42511 2.16675 9.86678 2.16675H15.2001C17.8584 2.16675 19.1918 3.50009 19.1918 6.15842Z"
      stroke={color}
      stroke-width={RFValue(1.2)}
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.1212 11.5417H12.1287"
      stroke={color}
      stroke-width={RFValue(1.2)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M9.20466 11.5417H9.21216"
      stroke={color}
      stroke-width={RFValue(1.2)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6.28792 11.5417H6.29542"
      stroke={color}
      stroke-width={RFValue(1.2)}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
