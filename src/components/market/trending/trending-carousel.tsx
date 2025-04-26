import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { type Coin } from '@/api/market/types';
import { View } from '@/components/ui';

import { ItemTrending } from './item-trending';

type Props = {
  data?: Coin[];
  loading?: boolean;
};

export const TrendingCarousel = ({ data, loading }: Props) => {
  if (loading) {
    return (
      <View className="my-3 h-32 items-center justify-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <FlashList
      data={data}
      horizontal
      estimatedItemSize={160}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 16 }}
      keyExtractor={(item, index) => `${item.name}-${index}`}
      renderItem={({ item }) => (
        <ItemTrending
          name={item.name}
          price={item.price}
          change={item.change}
          icon={item.icon}
        />
      )}
      ListEmptyComponent={() => (
        <ActivityIndicator
          size="small"
          className="h-24 items-center justify-center"
        />
      )}
    />
  );
};
