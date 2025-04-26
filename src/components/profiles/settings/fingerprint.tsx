import * as React from 'react';

import { FaceId as FaceIdIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const Fingerprint = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();

  const [isEnabledFingerprint, setIsEnabledFingerprint] = React.useState(false);

  return (
    <Item
      icon={<FaceIdIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profile.settings.fingerprint"
      value={translate('profile.settings.fingerprint_desc')}
      isValueOpacity={true}
      isSwitch={true}
      switchValue={isEnabledFingerprint}
      onSwitchChange={setIsEnabledFingerprint}
    />
  );
};
