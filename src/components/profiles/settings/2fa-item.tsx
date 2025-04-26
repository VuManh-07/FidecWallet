import * as React from 'react';

import { TwoFa as TwoFaIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const TwoFaItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<TwoFaIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.settings.2fa"
      value={translate('profile.settings.2fa_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
