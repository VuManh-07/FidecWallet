import * as React from 'react';

import { Logout as LogoutIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
  onPress: () => void;
};

export const LogoutItem = ({ iconColor, onPress }: Props) => {
  return (
    <Item
      icon={<LogoutIcon color={iconColor} width={40} height={40} />}
      title="profiles.other.logout"
      value={translate('profiles.other.logout_desc')}
      isValueOpacity={true}
      onPress={onPress}
    />
  );
};
