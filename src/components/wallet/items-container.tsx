import { useRouter } from 'expo-router';
import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { Backspace as BackspaceIcon } from '@/components/ui/icons';
import type { TxKeyPath } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <View className="flex-row items-center px-2 py-6">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-2 p-1"
          activeOpacity={0.7}
        >
          <BackspaceIcon color="white" className="size-6" />
        </TouchableOpacity>
        {title && (
          <Text className="my-1 text-lg font-bold leading-tight" tx={title} />
        )}
      </View>
      {children}
    </View>
  );
};
