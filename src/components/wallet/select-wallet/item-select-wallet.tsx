import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { type TxKeyPath } from '@/lib';

type Props = {
  icon?: React.ReactNode;
  title?: TxKeyPath;
  description?: TxKeyPath;
  onPress?: () => void;
};

export default function ItemSelectWallet({
  icon,
  title,
  description,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      className="mx-4 my-2 rounded-xl border border-neutral-400 p-3"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="flex-row items-center">
        {icon && <View className="mr-2">{icon}</View>}
        <Text className="my-1 text-lg font-bold leading-tight" tx={title} />
      </View>
      <Text
        className="my-1 text-sm text-gray-400 dark:text-gray-400"
        tx={description}
      />
    </TouchableOpacity>
  );
}
