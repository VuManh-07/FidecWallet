import * as React from 'react';

import { User as UserIcon } from '@/components/ui/icons';
import { getSizeIconInProfile } from '@/lib/helps';
import { getFontSize } from '@/lib/hooks/use-responsive-dimensions';

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
      title="profiles.information.name"
      value={name}
      isTitleOpacity={true}
      onPress={() => {}}
      styleTitle={{ fontSize: getFontSize(12) }}
      styleValue={{ fontSize: getFontSize(14) }}
    />
  );
};
