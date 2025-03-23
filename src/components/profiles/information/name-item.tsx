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
      title="profiles.information.name"
      value={name}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="xs"
      valueSize="sm"
      responsiveTitle="sm:text-sm md:text-base lg:text-lg xl:text-xl"
      responsiveValue="sm:text-base md:text-lg lg:text-xl xl:text-2xl"
    />
  );
};
