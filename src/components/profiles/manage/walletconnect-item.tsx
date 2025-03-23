import * as React from 'react';

import { Wallet as WalletIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const WalletconnectItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<WalletIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profiles.manage.walletconnect"
      value={translate('profiles.manage.walletconnect_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
