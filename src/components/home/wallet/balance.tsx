import React from 'react';

import { Text, View } from '@/components/ui';

const data = {
  balance: '3,128.80',
  currency: 'BNB',
  balanceInUsd: '32,128.80',
};

export default function Balance() {
  return (
    <View className="my-12 w-full flex-row justify-end">
      <View className="xl:rounded-l-4xl w-1/2 items-center rounded-l-xl border p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-700 sm:rounded-l-xl sm:p-4 md:rounded-l-2xl md:p-6 lg:rounded-l-3xl lg:p-8 xl:p-10">
        <View className="flex flex-col">
          <View className="flex-row justify-center">
            <Text className="text-xl font-medium dark:text-yellow-400 md:text-2xl lg:text-3xl xl:text-4xl">
              {data.balance + ' '}
            </Text>
            <Text className="text-xl font-medium dark:text-yellow-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              {data.currency}
            </Text>
          </View>
          <Text className="mt-1 self-start text-sm text-gray-400 sm:mt-1 sm:text-sm md:mt-2 md:text-base lg:mt-3 lg:text-lg xl:mt-4 xl:text-xl">
            ${data.balanceInUsd}
          </Text>
        </View>
      </View>
    </View>
  );
}
