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
      title="profiles.information.phone"
      icon={<PhoneIcon color={iconColor} width={40} height={40} />}
      value={phone}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="sm"
      valueSize="xs"
      responsiveTitle="sm:text-sm md:text-base lg:text-lg xl:text-xl"
      responsiveValue="sm:text-base md:text-lg lg:text-xl xl:text-2xl"
    />
  );
};
