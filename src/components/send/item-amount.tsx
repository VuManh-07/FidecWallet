import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { translate } from '@/lib';

type Props = TextInputProps & {
  error?: string;
  onPressMax: () => void;
};

export default function ItemAmount({ onPressMax, error, ...rest }: Props) {
  return (
    <>
      <View className="m-2 flex-row items-center justify-between rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-700">
        <TextInput
          placeholder={translate('common.amount')}
          placeholderTextColor="gray"
          className="flex-1 p-1 text-black dark:text-white"
          keyboardType="decimal-pad"
          {...rest}
        />
        <TouchableOpacity className="p-2" onPress={onPressMax}>
          <Text className="text-xs font-medium text-yellow-400 dark:text-yellow-400">
            {translate('common.max')}
          </Text>
        </TouchableOpacity>
      </View>
      {error && (
        <Text className="mx-4 text-xs text-red-500 dark:text-red-500">
          {error}
        </Text>
      )}
    </>
  );
}
