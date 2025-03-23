import * as React from 'react';

import { Logout as LogoutIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
  onPress: () => void;
};

export const LogoutItem = ({ iconColor, onPress }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<LogoutIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profiles.other.logout"
      value={translate('profiles.other.logout_desc')}
      isValueOpacity={true}
      onPress={onPress}
    />
  );
};
