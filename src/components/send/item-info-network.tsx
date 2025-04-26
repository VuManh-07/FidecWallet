import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/components/ui';
import { ArrowDropDown as ArrowDropDownIcon } from '@/components/ui/icons';
import { getSize } from '@/lib/hooks/use-responsive-dimensions';

type Props = {
  onPress: () => void;
  name: string;
  logo: string;
  symbol: string;
};

export default function ItemInfoNetwork({
  onPress,
  name,
  logo,
  symbol,
}: Props) {
  return (
    <TouchableOpacity
      className="m-2 flex-row items-center justify-between rounded-xl bg-neutral-200 px-4 py-3 dark:bg-neutral-700"
      activeOpacity={0.7}
      onPress={onPress}
    >
      {/* Network */}
      <View className="flex-row items-center space-x-3">
        <Image
          source={{ uri: logo }}
          style={{ width: getSize(26), height: getSize(26) }}
          contentFit="fill"
        />
        <View className="mx-2">
          <Text className="text-lg font-medium">{name}</Text>
          <Text className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {symbol}
          </Text>
        </View>
      </View>

      {/* Balance */}
      <View className="flex-row items-center space-x-2">
        <View className="mx-2">
          <Text className="text-lg font-medium">3,128.80</Text>
          <Text className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            $32,128.80
          </Text>
        </View>
        <ArrowDropDownIcon />
      </View>
    </TouchableOpacity>
  );
}
