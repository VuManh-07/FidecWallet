import * as React from 'react';

import { Support24h as Support24hIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const ShareItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<Support24hIcon color={iconColor} width={40} height={40} />}
      title="profiles.share"
      value={translate('profiles.share')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
