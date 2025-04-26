import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { useColorScheme } from 'nativewind';

import { Text, ToastAndroid, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

export default function ItemAddressDisplay({ address }: { address: string }) {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const handleCopy = () => {
    Clipboard.setStringAsync(address);
    ToastAndroid.show(translate('common.copySuccess'), ToastAndroid.SHORT);
  };

  return (
    <View className="my-2 mt-4">
      <Text className="font-regular my-1 text-xs">
        {translate('buy.purchaseAddress')}
      </Text>
      <View className="flex-row items-center rounded-xl bg-zinc-200 p-4 dark:bg-neutral-800">
        <Text className="mr-2 flex-1 text-sm">{address}</Text>
        <TouchableOpacity onPress={handleCopy}>
          <Ionicons
            name="copy-outline"
            size={20}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <Text className="mx-2 my-1 text-xs text-red-500 dark:text-red-500">
        {translate('buy.addressWarning')}
      </Text>
    </View>
  );
}
