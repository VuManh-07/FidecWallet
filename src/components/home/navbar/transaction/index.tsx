import { FlatList, TouchableOpacity, View } from '@/components/ui';
import { Text } from '@/components/ui';
import { translate } from '@/lib';

import Item from './item';

type StatusType = 'Pending' | 'Confirmed' | 'Canceled';

const transactions: {
  id: string;
  dateTime: string;
  type: 'Send' | 'Receive';
  status: StatusType;
  amount: string;
  amountInUsd: string;
  currency: string;
}[] = [
  {
    id: '1',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Send',
    status: 'Pending', // ✅ Hợp lệ
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },
  {
    id: '2',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Send',
    status: 'Pending',
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },
  {
    id: '3',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Send',
    status: 'Confirmed', // ✅ Hợp lệ
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },
  {
    id: '4',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Send',
    status: 'Canceled', // ✅ Hợp lệ
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },
  {
    id: '5',
    dateTime: 'Mar 3 at 10:04am',
    type: 'Receive',
    status: 'Confirmed',
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },
];

export default function RecentTransactions() {
  if (transactions.length === 0) {
    return (
      <View className="flex-1 bg-black p-4">
        <Text className="px-2 py-4 text-center text-sm font-normal dark:text-yellow-400">
          No transaction
        </Text>
      </View>
    );
  }

  return (
    <View className="mt-1 flex-1 px-3 dark:bg-black">
      <FlatList
        data={transactions}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      {transactions.length > 20 && (
        <TouchableOpacity className="px-2 py-4 text-center text-sm font-normal text-yellow-600">
          {translate('home.see_all')} {'>'}
        </TouchableOpacity>
      )}
    </View>
  );
}
