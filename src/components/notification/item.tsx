import React from 'react';
import { View } from 'react-native';

import { Image, Text } from '@/components/ui';

export type NotificationItemProps = {
  title: string;
  body?: string;
  timeAgo: string;
  type: 'price' | 'wallet' | 'nfc' | 'other'; // mở rộng dần
  isUnread?: boolean;
};

const iconMap: Record<NotificationItemProps['type'], string> = {
  price: 'https://cdn-icons-png.flaticon.com/512/3500/3500833.png', // mũi tên lên vàng
  wallet:
    'https://static.vecteezy.com/system/resources/previews/005/630/018/original/digital-wallet-icon-vector.jpg', // ví + check
  nfc: 'https://assets-global.website-files.com/610922bf9b095f4969ed70fb/62276f584a1d70703f3e400c_BlogPST-Thumb-Image%20(14)-p-500.jpeg', // NFC
  other: 'https://cdn-icons-png.flaticon.com/512/1827/1827343.png', // chuông
};

const NotificationItem: React.FC<{ item: NotificationItemProps }> = ({
  item,
}) => {
  const icon = iconMap[item.type] ?? iconMap['other'];

  return (
    <View className="flex-row items-start justify-between border-b border-gray-700 p-4">
      {/* Icon */}
      <View className="mr-3 mt-1">
        <Image source={icon} className="size-8" contentFit="contain" />
      </View>

      {/* Nội dung */}
      <View className="flex-1 pr-2">
        <Text className="text-sm font-semibold text-white">{item.title}</Text>
        {item.body ? (
          <Text className="mt-0.5 text-xs text-white/70">{item.body}</Text>
        ) : null}
      </View>

      {/* Thời gian và chấm vàng nếu chưa đọc */}
      <View className="ml-1 items-end">
        <Text className="text-xs text-white/50">{item.timeAgo}</Text>
        {item.isUnread && (
          <View className="mt-1 size-2 rounded-full bg-yellow-500" />
        )}
      </View>
    </View>
  );
};

export default NotificationItem;
