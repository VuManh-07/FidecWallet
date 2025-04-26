import * as React from 'react';

import type { OptionType } from '@/components/ui';
import { Options, useModal } from '@/components/ui';
import { FaceId as FaceIdIcon } from '@/components/ui/icons';
import { useSelectedLanguage } from '@/lib';
import { translate } from '@/lib';
import { getSizeIconInProfile } from '@/lib/helps';
import type { Language } from '@/lib/i18n/resources';

import { Item } from '../item';

type Props = {
  iconColor?: string;
};

export const LanguageItem = ({ iconColor }: Props) => {
  const sizeIcon = getSizeIconInProfile();
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();
  const onSelect = React.useCallback(
    (option: OptionType) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal]
  );

  const langs = React.useMemo(
    () => [
      {
        label: translate('profile.settings.language.options.english'),
        value: 'en',
      },
      {
        label: translate('profile.settings.language.options.vietnamese'),
        value: 'vn',
      },
    ],
    []
  );

  const selectedLanguage = React.useMemo(
    () => langs.find((lang) => lang.value === language),
    [language, langs]
  );

  return (
    <>
      <Item
        icon={
          <FaceIdIcon color={iconColor} width={sizeIcon} height={sizeIcon} />
        }
        title="profile.settings.language.title"
        value={selectedLanguage?.label}
        isValueOpacity={true}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={langs}
        onSelect={onSelect}
        value={selectedLanguage?.value}
      />
    </>
  );
};
