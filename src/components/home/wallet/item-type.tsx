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
  const bg_active = 'border border-yellow-400 dark:bg-neutral-900';
  const bg_noActive = 'opacity-50 dark:bg-neutral-800';
  const bg = isActive ? bg_active : bg_noActive;

  return (
    <Pressable
      className={`rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 xl:py-3.5 ${bg}`}
      onPress={onPress}
    >
      <View className="flex-row items-center justify-center">
        {icon && <View className="mx-1 sm:mx-2">{icon}</View>}
        <Text
          className={`text-sm font-medium dark:text-white sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl`}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
