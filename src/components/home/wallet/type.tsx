import { useColorScheme } from 'nativewind';
import React from 'react';

import { colors, View } from '@/components/ui';
import {
  ColdWallet as ColdWalletIcon,
  HotWallet as HotWalletIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

import Item from './item-type';

export default function TypeWallet() {
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];
  return (
    <View className="my-5 flex-row items-center justify-center">
      <Item
        label={translate('home.cold_wallet')}
        onPress={() => {}}
        icon={<ColdWalletIcon color={iconColor} />}
        isActive={false}
      />
      <Item
        label={translate('home.hot_wallet')}
        onPress={() => {}}
        icon={<HotWalletIcon color={iconColor} />}
        isActive={true}
      />
    </View>
  );
}
