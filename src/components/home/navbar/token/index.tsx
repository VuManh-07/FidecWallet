import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { FlatList, Text, TouchableOpacity, View } from '@/components/ui';
import { Search as SearchIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import Item from './item';

const data = [
  {
    id: 1,
    name: 'Tether',
    symbol: 'USDT',
    address: '0x5a...3541',
    price: '1,9239 USD',
    market_cap: '$83.54',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
  },
  {
    id: 2,
    name: 'Bitcoin',
    symbol: 'BTC',
    address: '0x5a...3541',
    price: '89,9239 BTC',
    market_cap: '$893.43',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
  },
  {
    id: 3,
    name: 'Achain',
    symbol: 'ACH',
    address: '0x5a...3541',
    price: '7,9239 ACH',
    market_cap: '$172.22',
    logo: 'https://cryptologos.cc/logos/achain-act-logo.png',
  },
  {
    id: 4,
    name: 'Achain',
    symbol: 'ACH',
    address: '0x5a...3541',
    price: '7,9239 ACH',
    market_cap: '$172.22',
    logo: 'https://cryptologos.cc/logos/achain-act-logo.png',
  },
  {
    id: 5,
    name: 'Achain',
    symbol: 'ACH',
    address: '0x5a...3541',
    price: '7,9239 ACH',
    market_cap: '$172.22',
    logo: 'https://cryptologos.cc/logos/achain-act-logo.png',
  },
];

const Token = () => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 px-4 py-3 dark:bg-black">
      {/* Search Bar */}
      <View className="mb-4 flex-row items-center rounded-full bg-neutral-200 px-4 py-2 dark:bg-gray-900">
        <SearchIcon />
        <TextInput
          placeholder={translate('home.search')}
          placeholderTextColor="gray"
          value={search}
          onChangeText={setSearch}
          className="text-dark ml-3 flex-1 dark:text-white"
        />
      </View>

      {/* Token List */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* See All Button */}
      {data.length > 5 && (
        <TouchableOpacity className="mt-4 py-3">
          <Text className="text-center text-yellow-400">
            {translate('home.see_all')} {'>'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Token;
