import React from 'react';

import { Image, Text, View } from '@/components/ui';
import { Ethereum as EthereumIcon } from '@/components/ui/icons';

type Props = {
  image?: string;
  name?: string;
  id?: string;
  number?: string;
  price?: string;
};

const Item = ({ image, name, id, number, price }: Props) => {
  return (
    <View className="mt-1 flex-row items-center rounded-lg p-3 dark:bg-neutral-900">
      <Image source={{ uri: image }} className="mr-3 size-12 rounded-lg" />
      <View className="flex-1">
        <Text className="text-sm dark:text-gray-400">{name}</Text>
        <Text className="font-bold">#{id}</Text>
        <Text className="text-xs dark:text-gray-500">No: {number}</Text>
      </View>
      <View className="flex-row items-center">
        <EthereumIcon className="mx-1" />
        <Text className="font-bold">{price}</Text>
      </View>
    </View>
  );
};

export default Item;
