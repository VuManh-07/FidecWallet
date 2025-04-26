import { useColorScheme } from 'nativewind';
import React from 'react';

import { colors, View } from '@/components/ui';
import {
  ColdWallet as ColdWalletIcon,
  HotWallet as HotWalletIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

import Item from './item-mode';

type ModeWalletProps = {
  mode: 'hot' | 'cold';
  handleSwitch: (status: 'hot' | 'cold') => void;
};

export default function ModeWallet({ handleSwitch, mode }: ModeWalletProps) {
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];
  return (
    <View className="my-5 flex-row items-center justify-center">
      <Item
        label={translate('auth.coldWallet.title')}
        onPress={() => handleSwitch('cold')}
        icon={<ColdWalletIcon color={iconColor} />}
        isActive={mode === 'cold'}
      />
      <Item
        label={translate('auth.hotWallet.title')}
        onPress={() => handleSwitch('hot')}
        icon={<HotWalletIcon color={iconColor} />}
        isActive={mode === 'hot'}
      />
    </View>
  );
}
