import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';

import { FocusAwareStatusBar, ToastAndroid } from '@/components/ui';
import ConfirmMnemonicScreen from '@/components/wallet/confirm-mnemonic';
import { ItemsContainer } from '@/components/wallet/items-container';
import { useVault } from '@/context/wallet-context';
import { useIsFirstTime } from '@/lib';

export default function ConfirmMnemonic() {
  const router = useRouter();
  const { onConfirmMnemonic } = useVault();

  const [_, setIsFirstTime] = useIsFirstTime();
  const { mnemonic } = useLocalSearchParams<{ mnemonic: string }>();
  const mnemonics = mnemonic.split(' ');

  const selectedIndices = useMemo(
    () => getRandomIndices(6, mnemonics.length),
    [mnemonics]
  );

  const handleSuccess = async () => {
    try {
      const result = await onConfirmMnemonic(mnemonic);
      console.log('Confirm result:', result);
      router.push('/login/sign-in-hot-wallet');
      setIsFirstTime(false);
      ToastAndroid.show('Created hot wallet successfully!', ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FocusAwareStatusBar />
      <ItemsContainer title="auth.confirmSecretRecoveryWords">
        <ConfirmMnemonicScreen
          mnemonics={mnemonics}
          selectedIndices={selectedIndices}
          onSuccess={handleSuccess}
        />
      </ItemsContainer>
    </>
  );
}

// --- Helper function
function getRandomIndices(count: number, max: number): number[] {
  const indices = new Set<number>();
  while (indices.size < count) {
    const rand = Math.floor(Math.random() * max);
    indices.add(rand);
  }
  return Array.from(indices).sort((a, b) => a - b);
}
