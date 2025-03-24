import * as React from 'react';

import { Phone as PhoneIcon } from '@/components/ui/icons';
import { getSizeIconInProfile } from '@/lib/helps';
import { getFontSize } from '@/lib/hooks/use-responsive-dimensions';

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
      styleTitle={{ fontSize: getFontSize(12) }}
      styleValue={{ fontSize: getFontSize(14) }}
    />
  );
};
