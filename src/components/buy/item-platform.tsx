import React from 'react';
import { Linking } from 'react-native';

import { Image, Text, TouchableOpacity } from '@/components/ui';

type Props = {
  name: string;
  logo: string;
  url: string;
  fallbackUrl: string;
};

export default function ItemPlatform({ name, logo, url, fallbackUrl }: Props) {
  const openApp = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      await Linking.openURL(fallbackUrl); // Mở trang web nếu app chưa cài
    }
  };

  return (
    <TouchableOpacity
      className="mx-3 my-2 flex-row items-center rounded-lg bg-zinc-200 p-3 dark:bg-neutral-800"
      onPress={openApp}
      activeOpacity={0.7}
    >
      <Image source={logo} className="mr-3 size-7 rounded-lg" />
      <Text className="text-sm font-medium">{name}</Text>
    </TouchableOpacity>
  );
}
