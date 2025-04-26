import React from 'react';

import { Image, Text, View } from '@/components/ui';

type Props = {
  name: string;
  price: string;
  change: string;
  icon: string;
};

export const ItemTrending = ({ name, price, change, icon }: Props) => {
  const isNegative = change.includes('-');

  return (
    <View className="mr-3 w-[150] rounded-xl bg-zinc-200 p-4 dark:bg-zinc-800">
      <View className="mb-1 flex-row items-center space-x-2">
        <Image source={{ uri: icon }} className="size-6 rounded-full" />
        <Text className="mx-2 font-medium">{name}</Text>
      </View>
      <View className="flex-row items-center justify-around space-x-2">
        <Text className="text-sm">{price}</Text>
        <Text
          className={`text-sm ${isNegative ? 'dark:text-red-400' : 'dark:text-green-400'}`}
        >
          {isNegative ? '-' : '+'}
          {change}
        </Text>
      </View>
    </View>
  );
};
