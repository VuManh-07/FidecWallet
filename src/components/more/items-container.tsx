import React from 'react';

import { View } from '@/components/ui';

type Props = {
  children: React.ReactNode;
};

export default function ItemsContainer({ children }: Props) {
  return <View className="flex-1 p-4">{children}</View>;
}
