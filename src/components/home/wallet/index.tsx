import React from 'react';

import { View } from '@/components/ui';

import Balance from './balance';
import TypeWallet from './type';

export default function Wallet() {
  return (
    <View className="my-4">
      <TypeWallet />
      <Balance />
    </View>
  );
}
