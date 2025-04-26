import { useRouter } from 'expo-router';
import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import {
  ColdWallet as ColdWalletIcon,
  HotWallet as HotWalletIcon,
} from '@/components/ui/icons';
import { ItemsContainer } from '@/components/wallet/items-container';
import ItemSelectWallet from '@/components/wallet/select-wallet/item-select-wallet';

export default function SelectCreate() {
  const router = useRouter();
  return (
    <>
      <FocusAwareStatusBar />
      <ItemsContainer title="auth.createWallet">
        <ItemSelectWallet
          icon={<HotWalletIcon />}
          title="auth.hotWallet.title"
          description="auth.hotWallet.desc"
          onPress={() => router.push('/wallet/create-hot')}
        />
        <ItemSelectWallet
          icon={<ColdWalletIcon />}
          title="auth.coldWallet.title"
          description="auth.coldWallet.desc"
          onPress={() => router.push('/wallet/create-cold')}
        />
      </ItemsContainer>
    </>
  );
}
