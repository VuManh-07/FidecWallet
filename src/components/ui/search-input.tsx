import React from 'react';
import { TextInput, View } from 'react-native';

import { Search as SearchIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchInput({ search, setSearch }: Props) {
  return (
    <View className="my-2 flex-row items-center rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-800">
      <SearchIcon />
      <TextInput
        placeholder={translate('common.searchPlaceholder')}
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
        className="text-dark ml-3 flex-1 dark:text-white"
      />
    </View>
  );
}
