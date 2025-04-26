import { useRouter } from 'expo-router';

import TransactionList from '@/components/transaction/transaction-list';
import { type Transaction } from '@/types/wallet';

const transactions: Transaction[] = [
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
  {
    id: '7',
    dateTime: 'Apr 4 at 11:30am', // giả sử hôm nay là Apr 5
    type: 'Send',
    status: 'Confirmed',
    amount: '0.15',
    amountInUsd: '$30.0',
    currency: 'BNB',
  },
];

export default function RecentTransactions() {
  const route = useRouter();
  return (
    <TransactionList
      initialTransactions={transactions}
      showSeeAll={transactions.length > 5}
      onPressSeeAll={() => route.push('/home/transaction-all')}
    />
  );
}
