import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { FlatList, Text, TouchableOpacity, View } from '@/components/ui';
import { Search as SearchIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

import Item from './item';

const data = [
  {
    id: '6173',
    name: 'Bored Ape NFT',
    number: '1',
    price: '42.00',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.D65B7Lg64LBq03vscRfDTQHaHa&pid=Api&P=0&h=220',
  },
  {
    id: '3939',
    name: 'Bored Ape NFT',
    number: '1',
    price: '12.00',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.D65B7Lg64LBq03vscRfDTQHaHa&pid=Api&P=0&h=220',
  },
  {
    id: '4284',
    name: 'Bored Ape NFT',
    number: '1',
    price: '6.05',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.D65B7Lg64LBq03vscRfDTQHaHa&pid=Api&P=0&h=220',
  },
  {
    id: '5282',
    name: 'Bored Ape NFT',
    number: '1',
    price: '14.52',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.D65B7Lg64LBq03vscRfDTQHaHa&pid=Api&P=0&h=220',
  },
];

const NFT = () => {
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

export default NFT;
