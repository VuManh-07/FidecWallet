import React from 'react';

import { Pressable, Text, View } from '@/components/ui';

type Props = {
  label?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isActive?: boolean;
};

export default function ItemType({
  label,
  icon,
  onPress,
  isActive = false,
}: Props) {
  const bg_active = `border-yellow-400 dark:bg-neutral-900 border-2`;
  const bg_noActive = 'bg-neutral-200 opacity-50 dark:bg-neutral-800';
  const bg = isActive ? bg_active : bg_noActive;

  return (
    <Pressable className={`mx-1 rounded-xl px-3 py-2 ${bg}`} onPress={onPress}>
      <View className="flex-row items-center justify-center">
        {icon && <View className="mr-1">{icon}</View>}
        <Text className={`ml-1 text-xs font-medium leading-tight`}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
