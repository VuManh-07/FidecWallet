import React from 'react';

import { Text, View } from '@/components/ui';

const BalanceSection = () => {
  return (
    <View className="my-4 w-full flex-row justify-end">
      <View className="w-3/5 items-center rounded-l-xl border border-yellow-300 bg-yellow-50 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-800">
        <View className="flex flex-col">
          <View className="flex-row justify-center">
            <Text className="text-2xl font-bold">3,128.80</Text>
            <Text className="text-2xl font-bold text-yellow-500"> BNB</Text>
          </View>
          <Text className="mt-1 self-start text-sm text-gray-400">
            $32,128.80
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceSection;
