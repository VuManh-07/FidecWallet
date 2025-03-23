import * as React from 'react';

import { Email as EmailIcon } from '@/components/ui/icons';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const EmailItem = ({ iconColor }: Props) => {
  // const name = getEmailUser();
  const email = 'ducmanh@gmail.com';

  return (
    <Item
      title="profiles.information.email"
      icon={<EmailIcon color={iconColor} width={40} height={40} />}
      value={email}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="sm"
      valueSize="xs"
      responsiveTitle="sm:text-sm md:text-base lg:text-lg xl:text-xl"
      responsiveValue="sm:text-xs md:text-sm lg:text-base xl:text-lg"
    />
  );
};
