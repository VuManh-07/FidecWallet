import React, { useEffect, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';

import { Text, View } from '@/components/ui';
import { Search as SearchIcon } from '@/components/ui/icons';
import { ListComponent } from '@/components/ui/list';
import { ALL_CHAINS } from '@/constants/chains-util';
import { translate } from '@/lib';
import { useWallet } from '@/lib/hooks/use-wallet';

import { ModelContainer } from '../model-container';
import { Item } from './item';

type Props = {
  modal: any;
  testID?: string;
};

export type ItemType = {
  label: string;
  symbol: string;
  value: string;
  url: string;
};

function keyExtractor(item: ItemType) {
  return `select-item-${item.value}`;
}

export default function ModelNetwork({ modal, testID }: Props) {
  const [snapPoints, setSnapPoints] = useState('60%');
  const [selected, setSelected] = useState(
    ALL_CHAINS['eip155:43113'].chainId.toString()
  );
  const [search, setSearch] = useState('');

  const setChain = useWallet((state) => state.setChain);

  const onSelect = React.useCallback(
    (option: ItemType) => {
      console.log(option);
      setSelected(option.value);
      setChain(option.value);
      modal.dismiss();
    },
    [setSelected, modal, setChain]
  );

  const filteredDataNetworks: ItemType[] = Object.entries(ALL_CHAINS)
    .map(([key, chain]) => ({
      label: chain.name,
      symbol: chain.symbol,
      value: key,
      url: chain.logo,
    }))
    .filter((network) =>
      network.label.toLowerCase().includes(search.toLowerCase())
    );

  const renderItem = React.useCallback(
    ({ item }: { item: ItemType }) => (
      <Item
        label={item.label}
        symbol={item.symbol}
        url={item.url}
        selected={selected === item.value}
        onPress={() => onSelect(item)}
        testID={testID ? `${testID}-item-${item.value}` : undefined}
      />
    ),
    [onSelect, selected, testID]
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
      <View className="mx-2 flex-1">
        <Text className="mb-2 text-center text-lg font-bold">
          {translate('common.network')}
        </Text>

        <View className="mx-2 mb-4 flex-row items-center rounded-lg bg-neutral-200 px-3 py-2 dark:bg-neutral-700">
          <SearchIcon />
          <TextInput
            placeholder={translate('common.searchPlaceholder')}
            placeholderTextColor="gray"
            value={search}
            onChangeText={setSearch}
            className="text-dark ml-3 flex-1 dark:text-white"
          />
        </View>

        <ListComponent
          data={filteredDataNetworks}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          testID={testID}
          estimatedItemSize={52}
        />
      </View>
    </ModelContainer>
  );
}
