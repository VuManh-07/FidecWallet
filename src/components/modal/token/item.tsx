import React from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { Image, Text } from '@/components/ui';
import { getSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Item = React.memo(
  ({
    name,
    symbol,
    logo,
    ...props
  }: PressableProps & {
    selected?: boolean;
    name: string;
    symbol: string;
    logo: string;
  }) => {
    return (
      <Pressable
        className="flex-row items-center bg-white dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
        style={{
          paddingHorizontal: WIDTH(8),
          paddingVertical: WIDTH(4),
          marginVertical: WIDTH(4),
        }}
      >
        <Image
          source={{ uri: logo }}
          className="rounded-lg"
          style={{ width: getSize(40), height: getSize(40) }}
          contentFit="cover"
        />
        <Text className="mx-2 text-sm font-medium">{name}</Text>
        <Text className="text-sm text-neutral-400 dark:text-neutral-400">
          ({symbol})
        </Text>
      </Pressable>
    );
  }
);
