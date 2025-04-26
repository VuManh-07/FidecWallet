import * as React from 'react';

import { Posted as PostedIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const PostedItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<PostedIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.manage.posted"
      value={translate('profile.manage.posted_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
