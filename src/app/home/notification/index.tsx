import { FlashList } from '@shopify/flash-list';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { SafeAreaView } from 'react-native';

import NotificationItem, {
  type NotificationItemProps,
} from '@/components/notification/item';
import {
  ActivityIndicator,
  FocusAwareStatusBar,
  Text,
  View,
} from '@/components/ui';
import { NotiBody as NotiBodyIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

export default function Notification() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const isPending = false;
  const isError = false;

  const data: NotificationItemProps[] = [
    {
      title: 'BTC Price Alert',
      body: 'BTC has moved above 78,925.00 USD.',
      timeAgo: '29s',
      type: 'price',
      isUnread: true,
    },
  ];

  const renderItem = React.useCallback(
    ({ item }: { item: NotificationItemProps }) => (
      <NotificationItem item={item} />
    ),
    []
  );

  if (isPending) {
    return (
      <View className="flex-1 items-center justify-center p-3">
        <Stack.Screen
          options={{
            title: `${translate('common.notification')}`,
            headerBackTitle: 'Home',
            headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
          }}
        />
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 items-center justify-center p-3">
        <Stack.Screen
          options={{
            title: `${translate('common.notification')}`,
            headerBackTitle: 'Home',
          }}
        />
        <FocusAwareStatusBar />
        <Text className="text-center text-white">
          {translate('error.loading_noti')}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black px-4 pt-2">
      <Stack.Screen
        options={{
          title: `${translate('common.notification')}`,
          headerBackTitle: 'Home',
        }}
      />
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `noti-${index}`}
        ListEmptyComponent={
          <View className="mt-20 items-center justify-center">
            <NotiBodyIcon />
            <Text className="mt-4 text-white/60">
              {translate('empty.notification')}
            </Text>
          </View>
        }
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
}
