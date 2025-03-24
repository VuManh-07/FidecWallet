import React from 'react';

import { Text, View } from '@/components/ui';
import type { TxKeyPath } from '@/lib';
import { getFontSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <View>
      {title && (
        <Text
          className="font-bold dark:text-white"
          tx={title}
          style={{
            fontSize: getFontSize(16),
            lineHeight: WIDTH(16),
            marginVertical: WIDTH(4),
          }}
        />
      )}
      {children}
    </View>
  );
};
