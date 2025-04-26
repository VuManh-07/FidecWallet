import React from 'react';

import { Text, View } from '@/components/ui';

type Props = {
  index: number;
  word: string;
};

export default function Item({ index, word }: Props) {
  return (
    <View className="m-1 flex-1 items-center justify-center rounded-full bg-neutral-800 px-4 py-3">
      <Text className="text-sm font-bold">
        {index + 1}. {word}
      </Text>
    </View>
  );
}
