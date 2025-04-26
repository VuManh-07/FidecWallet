import { useMemo, useState } from 'react';
import { SectionList } from 'react-native';
import { twMerge } from 'tailwind-merge';

import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  useModal,
  View,
} from '@/components/ui';
import { translate } from '@/lib';
import {
  isThisMonth,
  isThisWeek,
  isToday,
  isYesterday,
  parseTransactionDate,
} from '@/lib/helps';
import { type Transaction } from '@/types/wallet';

import Item from './item';

type Props = {
  initialTransactions: Transaction[];
  fetchMore?: () => Promise<Transaction[]>;
  showSeeAll?: boolean;
  onPressSeeAll?: () => void;
  lableSectionClassName?: string;
};

const SECTION_TITLES: Record<
  'today' | 'yesterday' | 'week' | 'month' | 'older',
  | 'transactions.sections.today'
  | 'transactions.sections.yesterday'
  | 'transactions.sections.week'
  | 'transactions.sections.month'
  | 'transactions.sections.older'
> = {
  today: 'transactions.sections.today',
  yesterday: 'transactions.sections.yesterday',
  week: 'transactions.sections.week',
  month: 'transactions.sections.month',
  older: 'transactions.sections.older',
};

export default function TransactionList({
  initialTransactions,
  fetchMore,
  showSeeAll = false,
  onPressSeeAll,
  lableSectionClassName = '',
}: Props) {
  const modal = useModal();
  const [transactions, setTransactions] =
    useState<Transaction[]>(initialTransactions);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    if (!fetchMore || loadingMore || !hasMore) return;
    setLoadingMore(true);
    const moreData = await fetchMore();
    if (moreData.length === 0) setHasMore(false);
    setTransactions((prev) => [...prev, ...moreData]);
    setLoadingMore(false);
  };

  const groupedSections = useMemo(() => {
    const groups = {
      today: [] as Transaction[],
      yesterday: [] as Transaction[],
      week: [] as Transaction[],
      month: [] as Transaction[],
      older: [] as Transaction[],
    };

    for (const tx of transactions) {
      const date = parseTransactionDate(tx.dateTime);
      if (isToday(date)) groups.today.push(tx);
      else if (isYesterday(date)) groups.yesterday.push(tx);
      else if (isThisWeek(date)) groups.week.push(tx);
      else if (isThisMonth(date)) groups.month.push(tx);
      else groups.older.push(tx);
    }

    return Object.entries(groups)
      .filter(([_, list]) => list.length > 0)
      .map(([key, data]) => ({
        title: translate(SECTION_TITLES[key as keyof typeof SECTION_TITLES]),
        data,
      }));
  }, [transactions]);

  if (transactions.length === 0) {
    return (
      <View className="flex-1 bg-black p-4">
        <Text className="px-2 py-4 text-center text-sm font-normal dark:text-yellow-400">
          {translate('transactions.empty') || 'No transaction'}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 dark:bg-black">
      <SectionList
        sections={groupedSections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item {...item} onPress={modal.present} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            className={twMerge(
              'px-4 py-2 text-sm font-bold text-neutral-800 dark:text-gray-400',
              lableSectionClassName
            )}
          >
            {title}
          </Text>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <View className="items-center space-y-2 py-4">
            {loadingMore && <ActivityIndicator size="small" color="#FACC15" />}
            {!loadingMore && !hasMore && (
              <Text className="text-center text-sm text-neutral-500">
                {translate('transactions.noMore') || 'No more data'}
              </Text>
            )}
            {showSeeAll && onPressSeeAll && (
              <TouchableOpacity
                onPress={onPressSeeAll}
                className="mt-2 rounded bg-yellow-500 px-4 py-2"
              >
                <Text className="text-sm font-semibold text-black">
                  {translate('transactions.viewAll') || 'View All'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}
