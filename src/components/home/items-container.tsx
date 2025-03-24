import React from 'react';

import { View } from '@/components/ui';

type Props = {
  children: React.ReactNode;
};

export const ItemsContainer = ({ children }: Props) => {
  return <View>{children}</View>;
};
