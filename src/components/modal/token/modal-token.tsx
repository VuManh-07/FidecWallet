import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { Search as SearchIcon } from '@/components/ui/icons';
import { ListComponent } from '@/components/ui/list';
import { translate } from '@/lib';

import { ModelContainer } from '../model-container';
import { Item } from './item';

const tokens = [
  {
    id: '1',
    name: 'Centrifuge',
    symbol: 'CFG',
    logo: 'https://cryptoast.fr/wp-content/uploads/2024/06/centrifuge-logo.png',
  },
  {
    id: '2',
    name: 'Cosmos',
    symbol: 'ATOM',
    logo: 'https://cdn3d.iconscout.com/3d/premium/thumb/cosmos-5655809-4713522.png',
  },
  {
    id: '3',
    name: 'Compound',
    symbol: 'COMP',
    logo: 'https://images.saymedia-content.com/.image/t_share/MTgyNDU2MTcxMDc0OTU0NTY4/compound-protocol-and-comp-token.png',
  },
  {
    id: '4',
    name: 'Shiba Inu',
    symbol: 'SHIB',
    logo: 'https://payspacemagazine.com/wp-content/uploads/2021/05/shib_logo2.png',
  },
  {
    id: '5',
    name: 'Flux',
    symbol: 'FLUX',
    logo: 'https://static.fluxoutdoor.com/images/logo_02.png',
  },
];

type Props = {
  modal: any;
  testID?: string;
};

export type ItemType = {
  id: string;
  name: string;
  symbol: string;
  logo: string;
};

function keyExtractor(item: ItemType) {
  return `select-item-${item.symbol}`;
}

export default function ModelToken({ modal, testID }: Props) {
  const [snapPoints, setSnapPoints] = useState('60%');
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState('');

  const route = useRouter();

  const onSelect = React.useCallback(
    (item: ItemType) => {
      console.log(item);
      setSelected(item.id as any);
      modal.dismiss();
      console.log(selected);
    },
    [setSelected, selected, modal]
  );

  const filteredDataToken = tokens.filter((token) =>
    token.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = React.useCallback(
    ({ item }: { item: ItemType }) => (
      <Item
        name={item.name}
        symbol={item.symbol}
        logo={item.logo}
        onPress={() => onSelect(item)}
        testID={testID ? `${testID}-item-${item.id}` : undefined}
      />
    ),
    [onSelect, testID]
  );

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setSnapPoints('95%');
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setSnapPoints('60%');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ModelContainer
      ref={modal.ref}
      isShowHeader={false}
      snapPoints={snapPoints}
    >
      <View className="mx-4 flex-1">
        <Text className="mb-2 text-center text-lg font-bold">Token</Text>

        {/* Search */}
        <View className="mb-4 flex-row items-center rounded-lg bg-neutral-200 px-3 py-2 dark:bg-neutral-700">
          <SearchIcon />
          <TextInput
            placeholder={translate('common.searchPlaceholder')}
            placeholderTextColor="gray"
            value={search}
            onChangeText={setSearch}
            className="text-dark mx-2 ml-3 flex-1 dark:text-white"
          />
        </View>

        <View className="mx-2 mb-2 flex-row items-center justify-between">
          <Text className="text-base font-bold">
            {translate('common.popular')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              modal.dismiss();
              route.push('/home/more/add-token');
            }}
            activeOpacity={0.7}
          >
            <Text className="text-xs font-bold text-yellow-400 dark:text-yellow-400">
              {translate('common.add')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* List token */}
        <ListComponent
          data={filteredDataToken}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          testID={testID}
          estimatedItemSize={52}
        />
      </View>
    </ModelContainer>
  );
}
