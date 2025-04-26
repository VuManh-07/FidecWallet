// Import  global CSS file
import '../../global.css';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import 'react-native-reanimated';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { Buffer } from 'buffer';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { APIProvider } from '@/api';
import { WalletProvider } from '@/context/wallet-context';
import { hydrateAuth, loadSelectedTheme } from '@/lib';
import { loadSelectedMode, loadWallet } from '@/lib/hooks/use-wallet';
import { useThemeConfig } from '@/lib/use-theme-config';

import WebLandingPage from './web';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(app)',
};

hydrateAuth();
loadSelectedTheme();
loadSelectedMode();
loadWallet();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 500,
  fade: true,
});

global.Buffer = Buffer;

export default function RootLayout() {
  if (Platform.OS === 'web') {
    return <WebLandingPage />;
  }

  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />

        {/* init wallet */}
        <Stack.Screen
          name="wallet/select-create"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wallet/create-hot"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wallet/create-cold"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wallet/import-wallet"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wallet/confirm-mnemonic"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="wallet/show-mnemonic"
          options={{ headerShown: false }}
        />

        {/* login */}
        <Stack.Screen
          name="login/sign-in-cold-wallet"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login/sign-in-hot-wallet"
          options={{ headerShown: false }}
        />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  return (
    <GestureHandlerRootView
      style={styles.container}
      className={theme.dark ? `dark` : undefined}
    >
      <KeyboardProvider>
        <ThemeProvider value={theme}>
          <WalletProvider>
            <APIProvider>
              <BottomSheetModalProvider>
                {children}
                <FlashMessage position="top" />
              </BottomSheetModalProvider>
            </APIProvider>
          </WalletProvider>
        </ThemeProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
