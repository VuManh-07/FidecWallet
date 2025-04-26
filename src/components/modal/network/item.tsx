import React from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { Image, Text } from '@/components/ui';
import { Check as CheckIcon } from '@/components/ui/icons';
import { getSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Item = React.memo(
  ({
    label,
    symbol,
    url,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
    symbol: string;
    url: string;
  }) => {
    return (
      <Pressable
        className="mx-1 flex-row items-center bg-white dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
        style={{
          paddingHorizontal: WIDTH(8),
          paddingVertical: WIDTH(4),
          marginVertical: WIDTH(8),
        }}
      >
        <Image
          source={{ uri: url }}
          className="rounded-lg bg-zinc-200 dark:bg-neutral-700"
          style={{ width: getSize(28), height: getSize(28) }}
          contentFit="cover"
        />
        <Text className="mx-3 text-sm font-medium">
          {label} ({symbol})
        </Text>
        {selected && <CheckIcon />}
      </Pressable>
    );
  }
);
