import React from 'react';

import { Image, Text, View } from '@/components/ui';
import {
  ArrowBottom as ArrowBottomIcon,
  ArrowTop as ArrowTopIcon,
  CheckCircle as CheckCircleIcon,
} from '@/components/ui/icons';

type Props = {
  avatar: string;
  username: string;
  isBullish: boolean;
  isVerified: boolean;
  date: string;
};

export default function PostHeader({
  avatar,
  username,
  isBullish,
  isVerified,
  date,
}: Props) {
  return (
    <View className="mb-2 flex-row items-center justify-between">
      <View className="flex-row items-center ">
        <Image source={{ uri: avatar }} className="mr-2 size-8 rounded-full" />
        <View>
          <View className="flex-row items-center">
            <Text className="text-sm font-medium">{username}</Text>
            {isVerified && (
              <CheckCircleIcon color={'#00CD88'} className="mx-1" />
            )}
            <Text className="mx-2 text-xs font-medium dark:text-gray-400">
              {date}
            </Text>
          </View>
          <Text className="text-xs font-medium dark:text-neutral-500">
            @{username}
          </Text>
        </View>
      </View>
      <View className="rounded-10 mx-1 flex-row items-center border bg-zinc-100 px-2 py-1 dark:border-neutral-600 dark:bg-neutral-800">
        {isBullish ? <ArrowTopIcon /> : <ArrowBottomIcon />}
        <Text className="mx-1 text-xs font-medium">
          {isBullish ? 'Bullish' : 'Bearish'}
        </Text>
      </View>
    </View>
  );
}
