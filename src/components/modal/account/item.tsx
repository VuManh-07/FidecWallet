import { useColorScheme } from 'nativewind';
import React from 'react';
import { Pressable, type PressableProps, View } from 'react-native';

import { Image, Text, TouchableOpacity } from '@/components/ui';
import {
  Check as CheckIcon,
  MoreVert as MoreVertIcon,
} from '@/components/ui/icons';
import { getSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

export const Item = React.memo(
  ({
    label,
    value,
    url,
    selected = false,
    ...props
  }: PressableProps & {
    selected?: boolean;
    label: string;
    value: string;
    url: string;
  }) => {
    const { colorScheme } = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const iconColor = isDarkMode ? '#fff' : '#000';
    return (
      <Pressable
        className="my-2 flex-row items-center bg-white px-2 py-1 dark:border-neutral-700 dark:bg-neutral-800"
        {...props}
        style={{ paddingHorizontal: WIDTH(8), paddingVertical: WIDTH(4) }}
      >
        <View className="flex-1 flex-row items-center">
          <Image
            source={{ uri: url }}
            className="rounded-full bg-neutral-700"
            style={{ width: getSize(32), height: getSize(32) }}
            contentFit="cover"
          />
          <View className="mx-3">
            <View className="flex-row items-center">
              <Text className="mr-2 text-sm font-bold">{label}</Text>
              {selected && <CheckIcon />}
            </View>
            <Text className="text-xs font-medium dark:text-neutral-300">
              {value.slice(0, 5) + '...' + value.slice(-3)}
            </Text>
          </View>
        </View>

        <TouchableOpacity>
          <MoreVertIcon color={iconColor} />
        </TouchableOpacity>
      </Pressable>
    );
  }
);
