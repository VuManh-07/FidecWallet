import * as React from 'react';

import { Email as EmailIcon } from '@/components/ui/icons';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const EmailItem = ({ iconColor }: Props) => {
  // const name = getEmailUser();
  const email = 'ducmanh@gmail.com';
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      title="profile.information.email"
      icon={<EmailIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      value={email}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleFontSize="text-xs"
      valueFontSize="text-sm"
    />
  );
};
