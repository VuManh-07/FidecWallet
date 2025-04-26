import { useState } from 'react';
import { FlatList, TextInput } from 'react-native';

import { Button, SafeAreaView, Text, View } from '@/components/ui';
import { translate } from '@/lib';

type Props = {
  mnemonics: string[];
  selectedIndices: number[];
  onSuccess: () => void;
};

export default function ConfirmMnemonicScreen({
  mnemonics,
  selectedIndices,
  onSuccess,
}: Props) {
  const [inputs, setInputs] = useState<{ [index: number]: string }>({});
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (index: number, value: string) => {
    setInputs((prev) => ({ ...prev, [index]: value.trim() }));
  };

  const handleConfirm = () => {
    const allCorrect = selectedIndices.every(
      (index) => inputs[index]?.toLowerCase() === mnemonics[index].toLowerCase()
    );

    if (allCorrect) {
      setError(null);
      onSuccess();
    } else {
      setError('Incorrect words. Please check and try again.');
    }
  };

  const renderItem = ({ item: index }: { item: number }) => (
    <View className="m-2 flex-1">
      <View className="flex-row items-center space-x-2 rounded-full bg-neutral-700 px-3 py-2">
        <Text className="fotext-sm mx-2 font-bold dark:text-gray-400">
          {index + 1}.
        </Text>
        <TextInput
          placeholder=""
          className="flex-1 text-sm font-bold text-white"
          autoCapitalize="none"
          value={inputs[index] || ''}
          onChangeText={(value) => handleInputChange(index, value)}
        />
      </View>
    </View>
  );

  return (
    <View className="flex-1 p-2">
      <FlatList
        data={selectedIndices}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        columnWrapperStyle={{ gap: 8 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      {error && (
        <Text className="mb-4 text-center text-sm font-bold text-red-500 dark:text-red-500">
          {error}
        </Text>
      )}

      <SafeAreaView className="w-full bg-white px-2 py-1 dark:bg-black">
        <Button
          label={translate('common.confirm')}
          onPress={handleConfirm}
          className="h-14 rounded-xl bg-yellow-400 dark:bg-yellow-400"
          textClassName="font-bold text-dark dark:text-dark text-base"
        />
      </SafeAreaView>
    </View>
  );
}
