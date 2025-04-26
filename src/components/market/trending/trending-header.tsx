import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

export const TrendingHeader = () => (
  <View className="mb-3 flex-row items-center justify-between">
    <Text className="text-base font-bold">{translate('common.trending')}</Text>
    <TouchableOpacity>
      <Text className="text-xs font-medium dark:text-yellow-400">
        {translate('common.seeAll')}
      </Text>
    </TouchableOpacity>
  </View>
);
