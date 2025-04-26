import React from 'react';

import { Text, View } from '@/components/ui';
import { Warning as WarningIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

export default function ItemWarning() {
  const fullText =
    translate('send.warning') ||
    'Please check and confirm the transaction information';
  const [before, bold, after] = fullText.split('{bold}');
  return (
    <View className="m-2 flex-row items-center rounded-xl bg-warning-100 p-4 dark:bg-warning-150">
      <WarningIcon />
      <View>
        <Text numberOfLines={2} ellipsizeMode="tail" className="mx-2">
          {before}
          <Text className="font-bold dark:text-yellow-400">{bold}</Text>
          {after}
        </Text>
      </View>
    </View>
  );
}
