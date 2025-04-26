import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native';

import { Button, Text, View } from '@/components/ui';
import { translate } from '@/lib';

export default function ItemSaveAccount() {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <View className="mx-2 flex-1 px-1">
      <TouchableOpacity activeOpacity={0.7} onPress={() => setIsShow(!isShow)}>
        <Text className="mb-2 self-end text-sm font-bold text-neutral-600 dark:text-neutral-300">
          {!isShow ? translate('common.save') : translate('common.cancel')}
        </Text>
      </TouchableOpacity>
      {/* View chứa Input */}
      {isShow && (
        <View className="rounded-lg border border-neutral-300 bg-white p-3 dark:border-neutral-600 dark:bg-neutral-900">
          <TextInput
            placeholder={translate('common.name')}
            placeholderTextColor="gray"
            className="mb-3 w-full rounded-lg bg-neutral-200 p-2 text-neutral-900 dark:bg-neutral-600 dark:text-white"
          />
          <TextInput
            placeholder={translate('common.address')}
            value="0xaa...a0a"
            editable={false}
            placeholderTextColor="gray"
            className="w-full rounded-lg bg-neutral-200 p-2 text-neutral-900 dark:bg-neutral-600 dark:text-white"
          />

          <Button
            label={translate('common.save')}
            className="mt-3"
            onPress={() => {
              console.log('save');
            }}
          />
        </View>
      )}
    </View>
  );
}
