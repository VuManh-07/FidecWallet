import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';

import { Text, View } from '@/components/ui';
import { translate } from '@/lib';

type Props = TextInputProps & {
  error?: string;
};

export default function ItemTo({ error, ...rest }: Props) {
  return (
    <>
      <View className="mx-2 mt-2 flex-row items-center justify-between rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-700">
        <TextInput
          placeholder={translate('common.address')}
          placeholderTextColor={'gray'}
          className="flex-1 p-1 text-black dark:text-white"
          {...rest}
        />
      </View>
      {error && (
        <Text className="mx-4 text-xs text-red-500 dark:text-red-500">
          {error}
        </Text>
      )}
    </>
  );
}
