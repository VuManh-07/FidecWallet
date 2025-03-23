import * as React from 'react';

import { User as UserIcon } from '@/components/ui/icons';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const NameItem = ({ iconColor }: Props) => {
  // const name = getNameUser();
  const name = 'Duc Manh';

  return (
    <Item
      icon={<UserIcon color={iconColor} width={40} height={40} />}
      title="profiles.information.name"
      value={name}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="sm"
      valueSize="xs"
      responsiveTitle="sm:text-sm md:text-base lg:text-lg xl:text-xl"
      responsiveValue="sm:text-xs md:text-sm lg:text-base xl:text-lg"
    />
  );
};
