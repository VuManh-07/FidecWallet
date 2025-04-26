import { useColorScheme } from 'nativewind';

import { colors, Text, TouchableOpacity, View } from '@/components/ui';
import {
  Receive as ReceiveIcon,
  SendTx as SendTxIcon,
} from '@/components/ui/icons';
import { translate } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

type StatusType = 'Pending' | 'Confirmed' | 'Canceled';

type Props = {
  dateTime: string;
  type: string;
  status: StatusType;
  amount: string;
  amountInUsd: string;
  currency: string;
  onPress?: () => void;
};

const STATUS_COLORS: Record<StatusType, string> = {
  Pending: 'text-yellow-500 dark:text-yellow-400',
  Confirmed: 'text-green-500 dark:text-green-400',
  Canceled: 'text-red-500 dark:text-red-400',
};

const TransactionItem = ({
  dateTime,
  type,
  currency,
  status,
  amount,
  amountInUsd,
  onPress,
}: Props) => {
  const StatusTextClass =
    STATUS_COLORS[status] || 'text-neutral-400 dark:text-neutral-400';
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];

  return (
    <TouchableOpacity
      className="mx-4 my-2 border-b border-gray-300 pb-2 dark:border-gray-700"
      activeOpacity={0.7}
      onPress={onPress}
    >
      {/* Ngày giờ */}
      <Text className="text-xs text-neutral-500 dark:text-neutral-400">
        {dateTime}
      </Text>

      {/* Nội dung giao dịch */}
      <View className="flex-row items-center justify-between p-1 dark:bg-black">
        {/* Icon + Thông tin giao dịch */}
        <View className="flex-row items-center">
          {type === 'Send' ? (
            <SendTxIcon
              className="mr-2"
              width={WIDTH(30)}
              height={WIDTH(30)}
              color={iconColor}
            />
          ) : (
            <ReceiveIcon
              className="mr-2"
              width={WIDTH(30)}
              height={WIDTH(30)}
              color={iconColor}
            />
          )}

          {/* Thông tin giao dịch */}
          <View>
            <Text className="text-sm font-bold dark:text-white">{`${type} ${currency}`}</Text>
            <Text className={`${StatusTextClass} my-1 text-xs`}>{status}</Text>

            {/* Nút hành động nếu đang chờ xử lý */}
            {status === 'Pending' && (
              <View className="mt-0.5 flex-row space-x-2">
                <TouchableOpacity
                  className="mr-1 rounded bg-red-500 px-2 py-0.5"
                  activeOpacity={0.7}
                >
                  <Text className="text-xs">{translate('common.cancel')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="ml-1 rounded bg-blue-500 px-2 py-0.5"
                  activeOpacity={0.7}
                >
                  <Text className="text-xs">{translate('common.edit')}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* Số lượng BNB + USD */}
        <View className="items-end">
          <Text className="text-sm font-bold">{`${amount} ${currency}`}</Text>
          <Text className="my-1 text-xs text-neutral-500 dark:text-neutral-400">
            {type === 'Send' ? '-' : '+'} {amountInUsd}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
