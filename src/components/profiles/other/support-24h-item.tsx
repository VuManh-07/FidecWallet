import * as React from 'react';

import { Support24h as Support24hIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const Support24hItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={
        <Support24hIcon color={iconColor} width={sizeIcon} height={sizeIcon} />
      }
      title="profile.other.support_24_7"
      value={translate('profile.other.support_24_7_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
