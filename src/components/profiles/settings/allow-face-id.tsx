import * as React from 'react';

import { FaceId as FaceIdIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const AllowFaceId = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();

  const [isEnabledAllowFaceId, setIsEnabledAllowFaceId] = React.useState(false);

  return (
    <Item
      icon={<FaceIdIcon color={iconColor} width={sizeIcon} height={sizeIcon} />}
      title="profiles.settings.allow_face_id"
      value={translate('profiles.settings.allow_face_id_desc')}
      isValueOpacity={true}
      isSwitch={true}
      switchValue={isEnabledAllowFaceId}
      onSwitchChange={setIsEnabledAllowFaceId}
    />
  );
};
