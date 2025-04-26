import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { HEIGHT, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

interface Props {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}

export default function Item({ icon, title, onPress }: Props) {
  return (
    <TouchableOpacity
      className="m-[1%] w-[23%] flex-1 items-center justify-center space-y-1 rounded-xl bg-neutral-200 dark:bg-neutral-700"
      style={{
        marginHorizontal: WIDTH(4),
        paddingVertical: WIDTH(8),
        borderRadius: WIDTH(12),
        maxWidth: WIDTH(80),
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="mx-1">{icon}</View>
      <View className="my-1 justify-center">
        <Text
          className="text-center text-sm font-normal leading-tight dark:text-white"
          style={{ minHeight: HEIGHT(32) }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
