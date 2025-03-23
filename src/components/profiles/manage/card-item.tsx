import * as React from 'react';

import { Card as CardIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const CardItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<CardIcon color={iconColor} width={40} height={40} />}
      title="profiles.manage_card"
      value={translate('profiles.manage_card')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
