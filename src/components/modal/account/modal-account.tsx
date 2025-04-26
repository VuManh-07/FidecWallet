import React, { useState } from 'react';

import { Button, Text, View } from '@/components/ui';
import { ListComponent } from '@/components/ui/list';
import { translate } from '@/lib';
import { getHeight } from '@/lib/hooks/use-responsive-dimensions';
import { useWallet } from '@/lib/hooks/use-wallet';

import { ModelContainer } from '../model-container';
import { Item } from './item';

const dataAccounts = [
  {
    id: 1,
    name: 'Account 1',
    address: '0x5751615A3A9376470C2DF8106992331E5678D3fE',
    avatar:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
  },
  {
    id: 2,
    name: 'Account 2',
    address: '0x363c00C3AB4D7f4947a7295F6a4176463331E817',
    avatar:
      'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
  },
];

type Props = {
  modal: any;
  testID?: string;
};

export type ItemType = { name: string; address: string; avatar: string };

function keyExtractor(item: ItemType) {
  return `select-item-${item.address}`;
}

export default function ModalAccount({ modal, testID }: Props) {
  const [selected, setSelected] = useState(dataAccounts[0].address);
  const setAccount = useWallet((state) => state.setAccount);

  const snapPoints = Math.min(dataAccounts.length * 70 + 100, getHeight());

  const onSelect = React.useCallback(
    (item: ItemType) => {
      setSelected(item.address);
      setAccount({ name: item.name, address: item.address });
      modal.dismiss();
    },
    [setAccount, modal]
  );

  const renderItem = React.useCallback(
    ({ item }: { item: ItemType }) => (
      <Item
        label={item.name}
        value={item.address}
        url={item.avatar}
        selected={selected === item.address}
        onPress={() => onSelect(item)}
        testID={testID ? `${testID}-item-${item.address}` : undefined}
      />
    ),
    [onSelect, selected, testID]
  );

  return (
    <ModelContainer
      ref={modal.ref}
      isShowHeader={false}
      snapPoints={snapPoints}
    >
      <View className="mx-4 flex-1">
        <Text className="mb-2 text-center text-lg font-bold">
          {translate('common.account') || 'Account'}
        </Text>

        <ListComponent
          data={dataAccounts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          testID={testID}
          estimatedItemSize={52}
        />

        <Button
          label={
            translate('wallet.addAccountBtn') ||
            'Add Account or Hardware Wallet'
          }
          size="lg"
          textClassName="font-bold text-base leading-tight text-black dark:text-black"
          className="mx-2 bg-yellow-300 dark:bg-yellow-300"
          onPress={() => {
            console.log('add account or hardware wallet');
          }}
        />
      </View>
    </ModelContainer>
  );
}
