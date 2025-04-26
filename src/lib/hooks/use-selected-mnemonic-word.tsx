import React from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { storage } from '../store/storage';

const SELECTED_MNEMONIC_WORD = 'SELECTED_MNEMONIC_WORD';
export type MnemonicWordType = '12' | '18' | '24';
/**
 * this hooks should only be used while selecting the theme
 * This hooks will return the selected theme which is stored in MMKV
 * selectedTheme should be one of the following values 'light', 'dark' or 'system'
 * don't use this hooks if you want to use it to style your component based on the theme use useColorScheme from nativewind instead
 *
 */
export const useSelectedMnemonicWord = () => {
  const [mnemonicWord, _setMnemonicWord] = useMMKVString(
    SELECTED_MNEMONIC_WORD,
    storage
  );

  const setMnemonicWord = React.useCallback(
    (t: MnemonicWordType) => {
      _setMnemonicWord(t);
    },
    [_setMnemonicWord]
  );

  const selectedMnemonicWord = (mnemonicWord ?? '12') as MnemonicWordType;
  return { selectedMnemonicWord, setMnemonicWord } as const;
};
