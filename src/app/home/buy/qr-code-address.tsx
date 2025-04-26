import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { View } from 'react-native';

import AddressDisplay from '@/components/buy/item-address-display';
import ItemNetworkSelect from '@/components/buy/item-network-select';
import ItemQRAddress from '@/components/buy/item-qr-code-address';
import { translate } from '@/lib';

export default function QRCodeAddress() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const purchaseAddress = '0xe0af5c9841b5a2acca610a09ec8e94aa382db00d';
  return (
    <>
      <Stack.Screen
        options={{
          title: translate('common.buy'),
          headerBackTitle: translate('common.buy'),
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
        }}
      />
      <View className="mx-3 flex-1">
        <ItemQRAddress value={purchaseAddress} />
        <ItemNetworkSelect />
        <AddressDisplay address={purchaseAddress} />
      </View>
    </>
  );
}
