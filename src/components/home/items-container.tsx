import React from 'react';

import { View } from '@/components/ui';

type Props = {
  children: React.ReactNode;
};

export const ItemsContainer = ({ children }: Props) => {
  return <View className="flex-1 dark:bg-black">{children}</View>;
};
