import { FlashList } from '@shopify/flash-list';
import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

import { type TabKey } from './crypto-list';

type Props = {
  tabs: TabKey[];
  selected: TabKey;
  onSelect: (tab: TabKey) => void;
};

export const CryptoTabs = ({ tabs, selected, onSelect }: Props) => {
  return (
    <View className="my-3">
      <FlashList
        data={tabs}
        extraData={selected}
        horizontal
        estimatedItemSize={100}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const active = item === selected;
          return (
            <TouchableOpacity
              onPress={() => onSelect(item)}
              className={`mx-1 my-2 rounded-lg border px-4 py-1 ${
                active ? 'border-yellow-400' : 'opacity-50 dark:bg-neutral-700'
              }`}
            >
              <Text className="text-sm font-bold">
                {translate(`market.tabs.${item}`)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
