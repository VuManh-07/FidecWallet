import * as React from 'react';

import { Code as CodeIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const CodeToEnterIntoApp = ({ iconColor }: Props) => {
  return (
    <Item
      icon={<CodeIcon color={iconColor} width={40} height={40} />}
      title="profiles.settings.code_to_enter"
      value={translate('profiles.settings.code_to_enter_desc')}
      isValueOpacity={true}
      onPress={() => {}}
    />
  );
};
