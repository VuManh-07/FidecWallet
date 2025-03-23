import * as React from 'react';

import { FaceId as FaceIdIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const AllowFaceId = ({ iconColor }: Props) => {
  const [isEnabledAllowFaceId, setIsEnabledAllowFaceId] = React.useState(false);

  return (
    <Item
      icon={<FaceIdIcon color={iconColor} width={40} height={40} />}
      title="profiles.settings.allow_face_id"
      value={translate('profiles.settings.allow_face_id_desc')}
      isValueOpacity={true}
      isSwitch={true}
      switchValue={isEnabledAllowFaceId}
      onSwitchChange={setIsEnabledAllowFaceId}
    />
  );
};
