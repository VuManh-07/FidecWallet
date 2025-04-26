import React from 'react';

import { Text, View } from '@/components/ui';
import type { TxKeyPath } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <View className="mt-2">
      {title && (
        <Text className="font-regular mx-3 text-xs leading-tight" tx={title} />
      )}
      {children}
    </View>
  );
};
