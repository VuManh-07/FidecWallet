import React from 'react';

import { Image, Text, TouchableOpacity, View } from '@/components/ui';
import {
  ArrowBottom as ArrowBottomIcon,
  ArrowTop as ArrowTopIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';

export default function ActionUser() {
  return (
    <View className="px-3 py-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center justify-between">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80',
            }}
            className="size-10 rounded-full"
            contentFit="cover"
          />
          <View className="mx-2">
            <Text className="text-sm font-medium">Duc Manh</Text>
            <Text className="font-regular text-xs dark:text-gray-400">
              @ducmanhfidec
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity className="mx-1 flex-row items-center rounded-lg border bg-zinc-100 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800">
            <ArrowTopIcon />
            <Text className="mx-1 text-xs font-medium">
              {translate('market.bullish')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mx-1 flex-row items-center rounded-lg border bg-zinc-100 px-3 py-2 dark:border-neutral-600 dark:bg-neutral-800">
            <ArrowBottomIcon />
            <Text className="mx-1 text-xs font-medium">
              {translate('market.bearish')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        className="mt-4 rounded-2xl bg-zinc-100 p-2 dark:bg-neutral-800"
        activeOpacity={0.7}
      >
        <Text className="font-regular p-2 text-sm text-gray-600 dark:text-gray-400">
          {translate('market.feelingQuestion')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
