import React from 'react';

import Actions from '@/components/home/actions';
import { ItemsContainer } from '@/components/home/items-container';
import Navbar from '@/components/home/navbar';
import Wallet from '@/components/home/wallet';
import { FocusAwareStatusBar, View } from '@/components/ui';

export default function Feed() {
  return (
    <View className="flex-1 ">
      <FocusAwareStatusBar />
      <ItemsContainer>
        <Wallet />
        <Actions />
        <Navbar />
      </ItemsContainer>
    </View>
  );
}
