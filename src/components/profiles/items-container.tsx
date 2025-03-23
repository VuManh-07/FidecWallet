import React from 'react';

import { Text } from '@/components/ui';
import type { TxKeyPath } from '@/lib';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && (
        <Text
          className="mx-2 pb-2 pt-4 text-lg font-bold dark:text-white"
          tx={title}
        />
      )}
      {children}
    </>
  );
};
