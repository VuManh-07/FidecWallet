import React from 'react';
import { StyleSheet, View as NNView, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

import {
  getBorderRadius,
  getBorderWidth,
  getResponsiveSize,
} from '@/lib/hooks/use-responsive-dimensions';

interface Props extends ViewProps {
  className?: string;
}

export const View = ({ className = '', style, children, ...props }: Props) => {
  // 📌 Lấy các giá trị spacing từ className
  const width = getResponsiveSize(className, 'w');
  const height = getResponsiveSize(className, 'h');

  // 📌 Padding
  const padding = getResponsiveSize(className, 'p');
  const paddingX = getResponsiveSize(className, 'px');
  const paddingY = getResponsiveSize(className, 'py');
  const paddingLeft = getResponsiveSize(className, 'pl');
  const paddingRight = getResponsiveSize(className, 'pr');
  const paddingTop = getResponsiveSize(className, 'pt');
  const paddingBottom = getResponsiveSize(className, 'pb');

  // 📌 Margin
  const margin = getResponsiveSize(className, 'm');
  const marginX = getResponsiveSize(className, 'mx');
  const marginY = getResponsiveSize(className, 'my');
  const marginLeft = getResponsiveSize(className, 'ml');
  const marginRight = getResponsiveSize(className, 'mr');
  const marginTop = getResponsiveSize(className, 'mt');
  const marginBottom = getResponsiveSize(className, 'mb');

  // 📌 Border
  const borderWidth = getBorderWidth(className);
  const borderRadius = getBorderRadius(className);

  // 📌 Gộp style
  const nStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        width ? { width } : {},
        height ? { height } : {},
        padding ? { padding } : {},
        paddingX ? { paddingLeft: paddingX, paddingRight: paddingX } : {},
        paddingY ? { paddingTop: paddingY, paddingBottom: paddingY } : {},
        paddingLeft ? { paddingLeft } : {},
        paddingRight ? { paddingRight } : {},
        paddingTop ? { paddingTop } : {},
        paddingBottom ? { paddingBottom } : {},
        margin ? { margin } : {},
        marginX ? { marginLeft: marginX, marginRight: marginX } : {},
        marginY ? { marginTop: marginY, marginBottom: marginY } : {},
        marginLeft ? { marginLeft } : {},
        marginRight ? { marginRight } : {},
        marginTop ? { marginTop } : {},
        marginBottom ? { marginBottom } : {},
        borderWidth ? { borderWidth } : {},
        borderRadius ? { borderRadius } : {},
        style,
      ]),
    [
      width,
      height,
      padding,
      paddingX,
      paddingY,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      margin,
      marginX,
      marginY,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      borderWidth,
      borderRadius,
      style,
    ]
  );

  const viewStyle = React.useMemo(() => twMerge('', className), [className]);

  return (
    <NNView className={viewStyle} style={nStyle} {...props}>
      {children}
    </NNView>
  );
};
