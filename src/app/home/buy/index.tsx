import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';

import ItemPlatform from '@/components/buy/item-platform';
import ItemQRSection from '@/components/buy/item-qr-section';
import { FlatList, Text, View } from '@/components/ui';
import { translate } from '@/lib';

const platforms = [
  {
    name: 'Binance',
    url: 'binance://',
    fallbackUrl: 'https://www.binance.com/',
    logo: require('../../../assets/logo_binance.png'),
  },
  {
    name: 'OKX',
    url: 'okx://',
    fallbackUrl: 'https://www.okx.com/',
    logo: require('../../../assets/logo_okx.png'),
  },
];

export default function Buy() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: translate('common.buy'),
          headerBackTitle: translate('bottom_nav.home'),
          headerStyle: {
            backgroundColor: isDarkMode ? '#000' : '#fff',
          },
        }}
      />
      <View className="flex-1">
        <ItemQRSection
          onPress={() => router.push('/home/buy/qr-code-address')}
        />

        <Text className="mx-4 mt-7 text-lg font-bold">
          {translate('common.otherPlatforms')}
        </Text>

        <FlatList
          data={platforms}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ItemPlatform {...item} />}
        />
      </View>
    </>
  );
}
