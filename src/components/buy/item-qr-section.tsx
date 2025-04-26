import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { QRCode as QRCodeIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

type Props = {
  onPress: () => void;
};

export default function QRSection({ onPress }: Props) {
  return (
    <TouchableOpacity
      className="flex-row items-center p-4"
      activeOpacity={0.7}
      onPress={onPress}
      accessibilityLabel={translate('buy.qrTitle')}
    >
      <View className="items-center rounded-full bg-zinc-100 p-2 dark:bg-neutral-700">
        <QRCodeIcon />
      </View>
      <View className="ml-4">
        <Text className="text-sm font-bold">{translate('buy.qrTitle')}</Text>
        <Text className="mt-1 text-xs text-gray-400 dark:text-gray-400">
          {translate('buy.qrDescription')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
