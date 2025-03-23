import * as React from 'react';

import { Wallet as WalletIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const WalletconnectItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<WalletIcon color={iconColor} width={40} height={40} />}
      title="profiles.manage.walletconnect"
      value={translate('profiles.manage.walletconnect_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
