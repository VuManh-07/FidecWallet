import React from 'react';

import { Text, View } from '@/components/ui';

type Props = {
  label: string;
  value: string;
  valueClassName?: string;
};

export default function Item({ label, value, valueClassName = '' }: Props) {
  return (
    <View className="flex-row items-center justify-between p-2">
      <Text className="text-sm dark:text-neutral-400">{label}</Text>
      <Text className={`text-sm ${valueClassName}`}>{value}</Text>
    </View>
  );
}
