import React from 'react';

import { Image, Text, View } from '@/components/ui';
import {
  getHeight,
  getSize,
  getWidth,
} from '@/lib/hooks/use-responsive-dimensions';

interface SlideProps {
  item: {
    image: number;
    title: string;
    description: string;
  };
}

const Slide = ({ item }: SlideProps) => {
  return (
    <View
      className="flex size-full flex-col bg-neutral-200 dark:bg-neutral-800"
      style={{ width: getWidth(), height: getHeight() }}
    >
      {/* Phần hình ảnh (chiếm 2 phần) */}
      <View className="flex-[2] items-center justify-center">
        <Image
          source={item.image}
          style={{ width: getSize(280), height: getSize(260) }}
          contentFit="cover"
        />
      </View>

      {/* Phần nội dung (chiếm 1 phần) */}
      <View
        className="flex-[1] rounded-t-3xl bg-white p-4 dark:bg-black"
        style={{
          borderTopLeftRadius: getSize(40),
          borderTopRightRadius: getSize(40),
        }}
      >
        <Text className="text-center text-2xl font-bold">{item.title}</Text>
        <Text className="mt-2 text-center text-base text-gray-400 dark:text-gray-400">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
