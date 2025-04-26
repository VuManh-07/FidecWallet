import { Link, Stack } from 'expo-router';

import { Text, View } from '@/components/ui';
import { translate } from '@/lib';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text className="mb-4 text-2xl font-bold">
          {translate('error.screen_exist')}
        </Text>

        <Link href="/" className="mt-4">
          <Text className="text-blue-500 underline">
            {translate('error.go_home')}
          </Text>
        </Link>
      </View>
    </>
  );
}
