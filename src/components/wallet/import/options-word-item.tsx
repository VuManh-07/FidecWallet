import React from 'react';

import { Text, TouchableOpacity, View } from '@/components/ui';
import { Options, type OptionType, useModal } from '@/components/ui';
import { ArrowRight as ArrowRightIcon } from '@/components/ui/icons';
import { translate } from '@/lib';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';
import {
  type MnemonicWordType,
  useSelectedMnemonicWord,
} from '@/lib/hooks/use-selected-mnemonic-word';

export default function OptionsWordItem() {
  const { selectedMnemonicWord, setMnemonicWord } = useSelectedMnemonicWord();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setMnemonicWord(option.value as MnemonicWordType);
      modal.dismiss();
    },
    [setMnemonicWord, modal]
  );

  const options = React.useMemo(
    () => [
      {
        label: `${translate('auth.wordCounts.12')}`,
        value: '12',
      },
      {
        label: `${translate('auth.wordCounts.18')}`,
        value: '18',
      },
      {
        label: `${translate('auth.wordCounts.24')}`,
        value: '24',
      },
    ],
    []
  );

  const mnemonicWord = React.useMemo(
    () => options.find((t) => t.value === selectedMnemonicWord),
    [selectedMnemonicWord, options]
  );
  return (
    <TouchableOpacity
      className="flex-row justify-end"
      onPress={modal.present}
      activeOpacity={0.7}
    >
      <View className="mr-3 w-1/4 items-center rounded-lg border bg-neutral-700 p-2 shadow-lg dark:bg-neutral-700">
        <View className="flex-row items-center justify-between">
          <Text className="mx-2 text-sm font-normal leading-tight">
            {mnemonicWord?.label}
          </Text>
          <ArrowRightIcon width={WIDTH(4)} height={WIDTH(8)} />
        </View>
        <Options
          ref={modal.ref}
          options={options}
          onSelect={onSelect}
          value={mnemonicWord?.value}
        />
      </View>
    </TouchableOpacity>
  );
}
