import * as React from 'react';

import { User as UserIcon } from '@/components/ui/icons';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const NameItem = ({ iconColor }: Props) => {
  // const name = getNameUser();
  const name = 'Duc Manh';
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<UserIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.information.name"
      value={name}
      isTitleOpacity={true}
      onPress={() => {}}
      titleFontSize="text-xs"
      valueFontSize="text-sm"
    />
  );
};
