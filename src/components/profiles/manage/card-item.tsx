import * as React from 'react';

import { Card as CardIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const CardItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<CardIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.manage.card"
      value={translate('profile.manage.card_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
