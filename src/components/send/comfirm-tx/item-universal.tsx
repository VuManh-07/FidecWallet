import React from 'react';
import { twMerge } from 'tailwind-merge';

import { Image, Text, View } from '@/components/ui';
import { translate, type TxKeyPath } from '@/lib';

import Item from './item';

type Props = {
  label?: TxKeyPath;
  value: string;
  logo?: string;
  address?: string;
  showLogo?: boolean;
  strongValue?: boolean;
  hideBorder?: boolean;
  noMarginTop?: boolean;
  labelClassName?: string;
  subValue?: string; // dòng nhỏ bên dưới (ví dụ USD)
};

export default function ItemUniversal({
  label,
  value,
  logo,
  address,
  showLogo = false,
  strongValue = false,
  hideBorder = false,
  noMarginTop = false,
  labelClassName,
  subValue,
}: Props) {
  const containerStyle = twMerge(
    !noMarginTop && 'mt-4',
    !hideBorder && 'border-b border-gray-500',
    'p-2'
  );

  return (
    <Item className={containerStyle}>
      <View className="flex-1 flex-row items-center justify-between">
        {label && (
          <Text
            className={twMerge(
              'text-sm font-medium text-gray-600 dark:text-gray-400',
              labelClassName
            )}
          >
            {translate(label)}
          </Text>
        )}

        {showLogo ? (
          <View className="flex-col">
            <View className="flex-row items-center space-x-2">
              {logo && (
                <Image
                  source={{ uri: logo }}
                  className="mx-1 size-7 rounded-md"
                />
              )}
              <Text className="text-base font-medium">{value}</Text>
            </View>
            {address && (
              <Text className="mt-1 text-right text-sm font-medium dark:text-gray-400">
                {address}
              </Text>
            )}
          </View>
        ) : (
          <View className="mt-1 flex-col">
            <Text
              className={twMerge(
                'text-base',
                strongValue ? 'font-bold' : 'font-medium'
              )}
            >
              {value}
            </Text>
            {subValue && (
              <Text className="mt-1 text-right text-sm text-gray-400 dark:text-gray-400">
                {subValue}
              </Text>
            )}
          </View>
        )}
      </View>
    </Item>
  );
}
