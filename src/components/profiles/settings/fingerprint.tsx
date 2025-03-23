import * as React from 'react';

import { FaceId as FaceIdIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const Fingerprint = ({ iconColor }: Props) => {
  const [isEnabledFingerprint, setIsEnabledFingerprint] = React.useState(false);

  return (
    <Item
      icon={<FaceIdIcon color={iconColor} width={40} height={40} />}
      title="profiles.fingerprint"
      value={translate('profiles.fingerprint')}
      isValueOpacity={true}
      isSwitch={true}
      switchValue={isEnabledFingerprint}
      onSwitchChange={setIsEnabledFingerprint}
    />
  );
};
