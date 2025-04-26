import React from 'react';

import { Text, View } from '@/components/ui';
import { Warning as WarningIcon } from '@/components/ui/icons';

export default function ItemWarning() {
  return (
    <View className="m-2 flex-row items-center rounded-xl bg-warning-150 p-4 dark:bg-warning-150">
      <WarningIcon />
      <View>
        <Text numberOfLines={2} ellipsizeMode="tail" className="mx-2">
          Please write down your recovery keywords and store them safely. Do NOT
          share with anyone.
        </Text>
      </View>
    </View>
  );
}
