import * as React from 'react';

import { Support24h as Support24hIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const Support24hItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<Support24hIcon color={iconColor} width={40} height={40} />}
      title="profiles.other.support_24_7"
      value={translate('profiles.other.support_24_7_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
