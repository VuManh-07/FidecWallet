import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/components/ui';
import { ArrowBottom as ArrowBottomIcon } from '@/components/ui/icons';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';
import { type WalletAccount } from '@/lib/hooks/use-wallet';

type Props = {
  onPress: () => void;
  account: WalletAccount;
};

export default function ItemFrom({ onPress, account }: Props) {
  const { name, address } = account;
  return (
    <TouchableOpacity
      className="m-2 flex-row items-center justify-between rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-700"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="flex-row items-center space-x-2">
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
          }}
          style={{ width: getSize(26), height: getSize(26) }}
          className="rounded-full"
        />
        <View className="mx-2">
          <Text className="text-lg font-medium">{name}</Text>
          <Text className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {address.slice(0, 5) + '...' + address.slice(-3)}
          </Text>
        </View>
      </View>

      <ArrowBottomIcon color={'#8C91A2'} width={20} height={20} />
    </TouchableOpacity>
  );
}
