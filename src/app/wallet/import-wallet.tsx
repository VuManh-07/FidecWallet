import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TextInput } from 'react-native';

import {
  FocusAwareStatusBar,
  SafeAreaView,
  TouchableOpacity,
  View,
} from '@/components/ui';
import CustomSlider from '@/components/ui/slider';
import OptionsWordItem from '@/components/wallet/import/options-word-item';
import { ItemsContainer } from '@/components/wallet/items-container';
import { translate } from '@/lib';
import { getWidth } from '@/lib/hooks/use-responsive-dimensions';

export default function ImportWallet() {
  const router = useRouter();
  const [wordCount, setWordCount] = useState<12 | 24>(24);
  const [words, setWords] = useState<string[]>(Array(wordCount).fill(''));

  const handleChangeText = (text: string, index: number) => {
    const updatedWords = [...words];
    updatedWords[index] = text;
    setWords(updatedWords);
  };

  const renderWordInput = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => (
    <View className="m-1 flex-1">
      <Text className="text-white">{index + 1}.</Text>
      <TextInput
        className="rounded-md border border-gray-500 px-3 py-2 text-white"
        placeholder="Enter word"
        placeholderTextColor="#aaa"
        value={item}
        onChangeText={(text) => handleChangeText(text, index)}
      />
    </View>
  );

  return (
    <>
      <FocusAwareStatusBar />
      <ItemsContainer title="auth.importWallet">
        <OptionsWordItem />

        {wordCount === 24 ? (
          <CustomSlider
            data={words}
            itemsPerPage={12}
            renderPage={({ pageData, pageIndex }) => (
              <View style={{ width: getWidth() }}>
                <FlatList
                  data={pageData}
                  numColumns={2}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View className="m-1 flex-1">
                      <Text className="text-white">
                        {pageIndex * 12 + index + 1}.
                      </Text>
                      <TextInput
                        className="rounded-md border border-gray-500 px-3 py-2 text-white"
                        placeholder="Enter word"
                        placeholderTextColor="#aaa"
                        value={item}
                        onChangeText={(text) =>
                          handleChangeText(text, pageIndex * 12 + index)
                        }
                      />
                    </View>
                  )}
                />
              </View>
            )}
          />
        ) : (
          <FlatList
            data={words}
            numColumns={2}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderWordInput}
          />
        )}

        <SafeAreaView className="mt-6 w-full px-3 py-2">
          <TouchableOpacity className="mt-4 rounded-md bg-yellow-500 p-3">
            <Text className="text-center font-bold text-black">
              {translate('common.confirm')}
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ItemsContainer>
    </>
  );
}
