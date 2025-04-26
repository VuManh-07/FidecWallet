import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/components/ui';

type Props = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string;
};

export const ItemCrypto = ({ name, symbol, price, change, icon }: Props) => {
  const isNegative = change.includes('-');

  return (
    <TouchableOpacity className="flex-row items-center justify-between px-2 py-3">
      <View className="flex-row items-center space-x-3">
        <Image source={{ uri: icon }} className="size-7 rounded-full" />
        <View className="mx-2">
          <Text className="text-sm font-bold">{name}</Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {symbol}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-sm font-bold">{price}</Text>
        <Text
          className={`text-xs ${isNegative ? 'text-red-400 dark:text-red-400' : 'text-green-400 dark:text-green-400'}`}
        >
          {isNegative ? change : '+' + change}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
