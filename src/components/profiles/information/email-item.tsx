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
      title="profiles.email_address"
      icon={<EmailIcon color={iconColor} width={40} height={40} />}
      value={email}
      isShowIconVerified={true}
      isVerified={false}
      isTitleOpacity={true}
      onPress={() => {}}
      titleSize="xs"
      valueSize="sm"
    />
  );
};
