import React from 'react';

import { View } from '@/components/ui';
import {
  ColdWallet as ColdWalletIcon,
  HotWallet as HotWalletIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

import Item from './item-type';

export default function TypeWallet() {
  return (
    <View className="flex-row items-center justify-center py-2">
      <Item
        label={translate('home.cold_wallet')}
        onPress={() => {}}
        icon={<ColdWalletIcon />}
        isActive={false}
      />
      <Item
        label={translate('home.hot_wallet')}
        onPress={() => {}}
        icon={<HotWalletIcon />}
        isActive={true}
      />
    </View>
  );
}
