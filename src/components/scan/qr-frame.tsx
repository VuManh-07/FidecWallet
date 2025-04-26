import React from 'react';

import { View } from '@/components/ui';

export default function QRFrame() {
  return (
    <View className="relative size-64">
      {/* Góc trên trái */}
      <View className="absolute left-0 top-0 size-12 border-l-4 border-t-4 border-white" />
      {/* Góc trên phải */}
      <View className="absolute right-0 top-0 size-12 border-r-4 border-t-4 border-white" />
      {/* Góc dưới trái */}
      <View className="absolute bottom-0 left-0 size-12 border-b-4 border-l-4 border-white" />
      {/* Góc dưới phải */}
      <View className="absolute bottom-0 right-0 size-12 border-b-4 border-r-4 border-white" />
    </View>
  );
}
