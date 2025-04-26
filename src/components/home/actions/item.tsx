import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

interface Props {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
}

export default function Item({ icon, label, onPress }: Props) {
  return (
    <TouchableOpacity
      className="w-full flex-1 items-center justify-center space-y-1 rounded-xl bg-zinc-200 dark:bg-neutral-800"
      style={{
        marginHorizontal: WIDTH(4),
        paddingVertical: WIDTH(8),
        borderRadius: WIDTH(12),
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="mx-1">{icon}</View>
      <Text className="my-1 text-sm font-normal leading-tight dark:text-white">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
