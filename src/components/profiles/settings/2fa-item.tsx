import * as React from 'react';

import { TwoFa as TwoFaIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const TwoFaItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<TwoFaIcon color={iconColor} width={40} height={40} />}
      title="profiles.2fa"
      value={translate('profiles.2fa')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
