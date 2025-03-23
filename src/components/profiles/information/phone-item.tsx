import * as React from 'react';

import { Phone as PhoneIcon } from '@/components/ui/icons';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const PhoneItem = ({ iconColor }: Props) => {
  // const name = getEmailUser();
  const phone = '+84123456789';

  return (
    <Item
      title="profiles.phone_number"
      icon={<PhoneIcon color={iconColor} width={40} height={40} />}
      value={phone}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="xs"
      valueSize="sm"
    />
  );
};
