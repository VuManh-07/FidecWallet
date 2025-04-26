import * as React from 'react';

import { Code as CodeIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const CodeToEnterIntoApp = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  return (
    <Item
      icon={<CodeIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.settings.code_to_enter"
      value={translate('profile.settings.code_to_enter_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
