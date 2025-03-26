import React from 'react';

import { View } from '@/components/ui';

import Balance from './balance';
import TypeWallet from './type';

export default function Wallet() {
  return (
    <View>
      <TypeWallet />
      <Balance />
    </View>
  );
}
