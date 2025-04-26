import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  Backspace as BackspaceIcon,
  LogoApp as LogoAppIcon,
} from '../ui/icons';

export default function LoginHeader() {
  const route = useRouter();
  return (
    <View className="relative items-center justify-center px-2 py-4 dark:bg-black">
      <TouchableOpacity
        className="absolute left-2 p-2"
        onPress={() => route.replace('/')}
      >
        <BackspaceIcon />
      </TouchableOpacity>
      <LogoAppIcon />
    </View>
  );
}
