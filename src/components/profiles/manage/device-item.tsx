import * as React from 'react';

import { Device as DeviceIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const DeviceItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<DeviceIcon color={iconColor} width={40} height={40} />}
      title="profiles.device_management"
      value={translate('profiles.device_management')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
