import React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import { Support24h as Support24hIcon } from '@/components/ui/icons';
import type { ColorSchemeType } from '@/lib';
import { translate, useSelectedTheme } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const ThemeItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorSchemeType);
      modal.dismiss();
    },
    [setSelectedTheme, modal]
  );

  const themes = React.useMemo(
    () => [
      {
        label: `${translate('profiles.settings.theme.dark')} 🌙`,
        value: 'dark',
      },
      {
        label: `${translate('profiles.settings.theme.light')} 🌞`,
        value: 'light',
      },
      {
        label: `${translate('profiles.settings.theme.system')} ⚙️`,
        value: 'system',
      },
    ],
    []
  );

  const theme = React.useMemo(
    () => themes.find((t) => t.value === selectedTheme),
    [selectedTheme, themes]
  );

  return (
    <>
      <Item
        title="profiles.settings.theme.title"
        value={theme?.label}
        onPress={modal.present}
        isValueOpacity={true}
        icon={
          <Support24hIcon
            color={iconColor}
            width={sizeIcon}
            height={sizeIcon}
          />
        }
      />
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
};
