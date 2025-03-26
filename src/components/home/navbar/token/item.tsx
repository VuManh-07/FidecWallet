import React from 'react';
import { Image, Text, View } from 'react-native';

type Props = {
  logo?: string;
  name?: string;
  address?: string;
  symbol?: string;
  price?: string;
  market_cap?: string;
};

export default function Item({
  logo,
  name,
  address,
  symbol,
  price,
  market_cap,
}: Props) {
  console.log(symbol);
  return (
    <View className="mt-1 flex-row items-center rounded-lg border-b border-gray-700 p-3">
      <Image
        source={{
          uri: logo ?? 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        }}
        className="mr-3 size-10 rounded-full"
      />
      <View className="flex-1">
        <Text className="text-xm font-bold">{name}</Text>
        <Text className="my-1 text-xs text-gray-400">{address}</Text>
      </View>
      <View className="items-end">
        <Text className="text-sm font-bold">{price}</Text>
        <Text className="my-1 text-xs text-gray-400 dark:text-gray-400">
          M.Cap {market_cap}
        </Text>
      </View>
    </View>
  );
}
