import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

import { FocusAwareStatusBar } from '@/components/ui';
import { ItemsContainer } from '@/components/wallet/items-container';
import ShowMnemonicScreen from '@/components/wallet/show-mnemonic';

export default function ShowMnemonic() {
  const route = useRouter();
  const { mnemonic } = useLocalSearchParams<{ mnemonic: string }>();
  const mnemonics = mnemonic.split(' ');

  const onPress = () => {
    route.push({
      pathname: '/wallet/confirm-mnemonic',
      params: { mnemonic },
    });
  };
  return (
    <>
      <FocusAwareStatusBar />
      <ItemsContainer title="auth.secretRecoveryWords">
        <ShowMnemonicScreen mnemonics={mnemonics} onPress={onPress} />
      </ItemsContainer>
    </>
  );
}
