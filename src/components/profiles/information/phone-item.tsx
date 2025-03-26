import * as React from 'react';

import { Phone as PhoneIcon } from '@/components/ui/icons';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const PhoneItem = ({ iconColor }: Props) => {
  // const name = getEmailUser();
  const phone = '+84123456789';
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      title="profiles.information.phone"
      icon={<PhoneIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      value={phone}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleFontSize="text-xs"
      valueFontSize="text-sm"
    />
  );
};
