import React from 'react';

import { Text, View } from '@/components/ui';
import type { TxKeyPath } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <View>
      {title && (
        <Text
          className="my-1 text-base font-bold leading-tight dark:text-white"
          tx={title}
        />
      )}
      {children}
    </View>
  );
};
