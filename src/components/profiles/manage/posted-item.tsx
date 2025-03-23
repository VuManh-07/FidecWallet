import * as React from 'react';

import { Posted as PostedIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const PostedItem = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<PostedIcon color={iconColor} width={40} height={40} />}
      title="profiles.manage.posted"
      value={translate('profiles.manage.posted_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
