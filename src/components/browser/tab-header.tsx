import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

const TAB = ['Overview', 'Community', 'News'] as const;
export type TabType = (typeof TAB)[number];

type Props = {
  tabCurrent: TabType;
  setTabCurrent: (tab: TabType) => void;
};

const TAB_LABEL_KEYS: Record<
  TabType,
  `market.tabs.${'overview' | 'community' | 'news'}`
> = {
  Overview: 'market.tabs.overview',
  Community: 'market.tabs.community',
  News: 'market.tabs.news',
};

export default function TabHeader({ tabCurrent, setTabCurrent }: Props) {
  return (
    <View className="my-2 flex-row items-center space-x-2 p-2">
      {TAB.map((item) => {
        const isActive = tabCurrent === item;
        return (
          <TouchableOpacity
            key={item}
            className={`mx-1 rounded-lg px-3 py-2 ${
              isActive
                ? 'border border-yellow-400 bg-yellow-100 dark:bg-yellow-400/20'
                : 'bg-zinc-100 opacity-70 dark:bg-neutral-700'
            }`}
            onPress={() => setTabCurrent(item)}
          >
            <Text
              className={`text-sm font-bold ${isActive ? 'text-yellow-600 dark:text-yellow-400' : ''}`}
            >
              {translate(TAB_LABEL_KEYS[item])}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
