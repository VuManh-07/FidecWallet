import React, { useState } from 'react';

import { useTrendingCoins } from '@/api/market/use-trending-coins';
import {
  CryptoList,
  type TabKey,
} from '@/components/market/crypto/crypto-list';
import { CryptoTabs } from '@/components/market/crypto/crypto-tabs';
import { TrendingCarousel } from '@/components/market/trending/trending-carousel';
import { TrendingHeader } from '@/components/market/trending/trending-header';
import { ActivityIndicator, Text, View } from '@/components/ui';
import SearchInput from '@/components/ui/search-input';
import { translate } from '@/lib';

const tabs: TabKey[] = ['favoriteList', 'popular', 'rise', 'discount', 'new'];

export default function Market() {
  const [search, setSearch] = useState('');
  const [selectedTab, setSelectedTab] = useState<TabKey>('popular');

  const { data: coins, isLoading, isError } = useTrendingCoins();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator
          size="large"
          className="items-center justify-center"
        />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">
          {' '}
          {translate('common.somethingWentWrong')}
        </Text>
      </View>
    );
  }

  return (
    <View className="m-1 flex-1 px-2">
      {/* Search Bar */}
      <SearchInput search={search} setSearch={setSearch} />

      <View className="flex-1 rounded-2xl pb-6 pt-4">
        {/* Trending */}
        <TrendingHeader />
        <TrendingCarousel data={coins} />

        {/* crypto */}
        <CryptoTabs
          tabs={tabs}
          selected={selectedTab}
          onSelect={(tab) => setSelectedTab(tab)}
        />
        <CryptoList data={coins} />
      </View>
    </View>
  );
}
