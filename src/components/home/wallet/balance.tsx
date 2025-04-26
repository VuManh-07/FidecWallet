import React from 'react';

import { Text, View } from '@/components/ui';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

const data = {
  balance: '3,128.80',
  currency: 'BNB',
  balanceInUsd: '32,128.80',
};

export default function Balance() {
  return (
    <View className="my-10 flex-row justify-end">
      <View
        className="w-1/2 items-center bg-zinc-200 shadow-lg dark:bg-neutral-800"
        style={{
          borderTopLeftRadius: WIDTH(8),
          borderBottomLeftRadius: WIDTH(8),
        }}
      >
        <View className="flex flex-col py-3">
          <View className="my-1 flex-row justify-center">
            <Text className="text-lg font-medium leading-tight dark:text-yellow-400">
              {data.balance + ' '}
            </Text>
            <Text className="text-lg font-medium leading-tight dark:text-yellow-400">
              {data.currency}
            </Text>
          </View>
          <Text className="self-start text-xs font-medium leading-tight dark:text-neutral-300">
            ${data.balanceInUsd}
          </Text>
        </View>
      </View>
    </View>
  );
}
