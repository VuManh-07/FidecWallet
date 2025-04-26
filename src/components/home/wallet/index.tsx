import { useRouter } from 'expo-router';
import React from 'react';

import { Button, View } from '@/components/ui';
import { translate, useAuth } from '@/lib';

import Balance from './balance';
import ModeWallet from './mode';

type WalletProps = {
  mode: 'hot' | 'cold';
  handleSwitch: (status: 'hot' | 'cold') => void;
};

export default function Wallet({ handleSwitch, mode }: WalletProps) {
  const route = useRouter();
  const status = useAuth.use[mode]().status;
  return (
    <View>
      <ModeWallet handleSwitch={handleSwitch} mode={mode} />
      {status === 'signOut' ? (
        <Button
          label={translate('common.login')}
          className="mx-4 my-10 h-8 w-1/5 rounded-full"
          textClassName="font-regular text-base text-black dark:text-black leading-tight"
          onPress={() => route.push(`login/sign-in-${mode}-wallet` as any)}
        />
      ) : (
        <Balance />
      )}
    </View>
  );
}
