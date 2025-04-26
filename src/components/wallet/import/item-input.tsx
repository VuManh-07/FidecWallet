import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface MnemonicInputItemProps {
  index: number;
  value: string;
  onChange?: (text: string) => void;
}

const MnemonicInputItem = ({
  index,
  value,
  onChange,
}: MnemonicInputItemProps) => {
  return (
    <View className="mb-3 flex-row items-center">
      <Text className="mr-3 text-lg font-bold text-white">{index + 1}.</Text>
      <TextInput
        className="flex-1 rounded-md border border-gray-500 bg-gray-900 px-4 py-2 text-white"
        value={value}
        onChangeText={onChange}
        placeholder={`Word ${index + 1}`}
        placeholderTextColor="#bbb"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default MnemonicInputItem;
