import React from 'react';

import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  View,
} from '@/components/ui';

import Item from './item';
import ItemWarning from './item-warning';

type Props = {
  mnemonics: string[];
  onPress: () => void;
};

export default function ShowMnemonicScreen({ mnemonics, onPress }: Props) {
  const screenWidth = Dimensions.get('window').width;

  const numColumns = screenWidth > 360 ? 3 : 2;

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <Item word={item} index={index} />
  );

  return (
    <View className="flex-1 bg-black px-2 pt-1">
      <FlatList
        data={mnemonics}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={numColumns}
        key={numColumns} // Đảm bảo cập nhật layout khi số cột thay đổi
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <ItemWarning />

      <SafeAreaView className="w-full bg-white px-2 py-1 dark:bg-black">
        <Button
          label="Ok, I Saved"
          onPress={onPress}
          className="h-14 rounded-xl bg-yellow-400 dark:bg-yellow-400"
          textClassName="font-bold text-dark dark:text-dark text-base"
        />
      </SafeAreaView>
    </View>
  );
}
