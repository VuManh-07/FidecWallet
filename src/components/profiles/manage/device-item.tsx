import * as React from 'react';

import { Device as DeviceIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const DeviceItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<DeviceIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.manage.device_management"
      value={translate('profile.manage.device_management_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
