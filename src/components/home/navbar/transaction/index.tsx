import { FlatList, View } from 'react-native';

import Item from './item';

const transactions = [
  {
    id: '1',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Sent BNB',
    status: 'Pending...',
    amount: '0.04 BNB',
    amountInUsd: '$9.578',
  },
  {
    id: '2',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Sent BNB',
    status: 'Pending...',
    amount: '0.04 BNB',
    amountInUsd: '$9.578',
  },
];

const RecentTransactions = () => (
  <View className="flex-1 bg-black p-4">
    <FlatList
      data={transactions}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export default RecentTransactions;
