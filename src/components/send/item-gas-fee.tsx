import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

type Props = {
  onPressEdit: () => void;
};

export default function ItemGasFee({ onPressEdit }: Props) {
  return (
    <View className="m-2 flex-row items-center justify-between rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-700">
      {/* Gas */}
      <View className="flex-row items-center space-x-3">
        <Text className="mx-1 text-sm font-medium text-neutral-300 dark:text-neutral-300">
          Slow
        </Text>
        <Text className="mx-1 text-sm font-medium">0.0001 BNB</Text>
        <Text className="mx-1 text-sm font-medium">$0.06</Text>
      </View>

      <TouchableOpacity className="p-2" onPress={onPressEdit}>
        <Text className="text-sm font-medium text-yellow-500 dark:text-yellow-500">
          {translate('common.edit')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
