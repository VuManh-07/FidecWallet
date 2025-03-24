import React from 'react';

import { ItemsContainer } from '@/components/home/items-container';
import Wallet from '@/components/home/wallet';
import { FocusAwareStatusBar, View } from '@/components/ui';

export default function Feed() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />

      <ItemsContainer>
        <Wallet />
      </ItemsContainer>

      {/* <WalletType />
      <Balance />
      <Actions />
      <Navbar /> */}
    </View>
  );
}
