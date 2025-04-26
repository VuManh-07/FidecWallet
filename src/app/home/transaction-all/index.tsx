import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { useRef } from 'react';

import TransactionList from '@/components/transaction/transaction-list';
import { FocusAwareStatusBar } from '@/components/ui';
import { translate } from '@/lib';
import { type Transaction } from '@/types/wallet';

const initialData: Transaction[] = [
  // ===== TODAY =====
  {
    id: '1',
    dateTime: 'Apr 5 at 09:00am', // hôm nay
    type: 'Send',
    status: 'Pending',
    amount: '0.04',
    amountInUsd: '$9.578',
    currency: 'BNB',
  },

  // ===== THIS WEEK =====
  {
    id: '2',
    dateTime: 'Apr 3 at 10:30am', // 2 ngày trước
    type: 'Receive',
    status: 'Confirmed',
    amount: '0.1',
    amountInUsd: '$23.4',
    currency: 'ETH',
  },

  {
    id: '3',
    dateTime: 'Apr 1 at 05:15pm', // đầu tuần
    type: 'Send',
    status: 'Confirmed',
    amount: '0.01',
    amountInUsd: '$2.2',
    currency: 'USDT',
  },

  // ===== THIS MONTH =====
  {
    id: '4',
    dateTime: 'Mar 25 at 08:00am', // vẫn trong tháng 4 (ví dụ giả lập hôm nay là Apr 5)
    type: 'Send',
    status: 'Confirmed',
    amount: '0.01',
    amountInUsd: '$2.2',
    currency: 'USDT',
  },

  {
    id: '5',
    dateTime: 'Mar 18 at 03:45pm',
    type: 'Receive',
    status: 'Confirmed',
    amount: '0.5',
    amountInUsd: '$125.0',
    currency: 'BTC',
  },

  // ===== OLDER =====
  {
    id: '6',
    dateTime: 'Feb 12 at 01:20pm',
    type: 'Send',
    status: 'Confirmed',
    amount: '0.02',
    amountInUsd: '$4.5',
    currency: 'ETH',
  },
];

export default function TransactionsAll() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const nextIdRef = useRef(initialData.length + 1); // Start from 11

  const fetchMore = async (): Promise<Transaction[]> => {
    await new Promise((res) => setTimeout(res, 1000));
    const next: Transaction[] = Array.from({ length: 5 }).map(() => {
      const id = `${nextIdRef.current++}`;
      return {
        id,
        dateTime: 'Mar 3 at 10:04am',
        type: Math.random() > 0.5 ? 'Send' : 'Receive',
        status: 'Confirmed',
        amount: '0.02',
        amountInUsd: '$4.2',
        currency: 'ETH',
      };
    });
    return next;
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: translate('common.transaction'),
          headerBackTitle: 'Home',
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
        }}
      />
      <FocusAwareStatusBar />

      <TransactionList
        initialTransactions={initialData}
        fetchMore={fetchMore}
        lableSectionClassName="dark:text-white text-center text-base"
      />
    </>
  );
}
