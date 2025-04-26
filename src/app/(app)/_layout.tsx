import { Redirect, SplashScreen, Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useCallback, useEffect } from 'react';

import Header from '@/components/home/header/header';
import {
  Browser as BrowserIcon,
  Home as HomeIcon,
  Market as MarketIcon,
  UserSquare as UserSquareIcon,
} from '@/components/ui/icons';
import { translate, useAuth, useIsFirstTime } from '@/lib';
import { useModeApp } from '@/lib/hooks/use-mode-app';
import { getFontSize } from '@/lib/hooks/use-responsive-dimensions';

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const [isFirstTime] = useIsFirstTime();
  const { mode, isBridge } = useModeApp((state) => ({
    mode: state.mode,
    isBridge: state.isBridge,
  }));

  const status = useAuth.use[mode]().status;

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) return <Redirect href="/onboarding" />;

  // if (status === 'signOut') {
  //   return mode === 'hot' ? (
  //     <Redirect href="/login/sign-in-hot-wallet" />
  //   ) : (
  //     <Redirect href="/login/sign-in-cold-wallet" />
  //   );
  // }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: translate('bottom_nav.home'),
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          header: () => (isBridge ? null : <Header />),
          tabBarStyle: isBridge ? { display: 'none' } : undefined,
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: translate('bottom_nav.market'),
          tabBarLabel: 'Market',
          tabBarIcon: ({ color }) => <MarketIcon color={color} />,
          tabBarButtonTestID: 'market-tab',
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
          headerTitleStyle: { fontSize: getFontSize(18) },
        }}
      />
      <Tabs.Screen
        name="browser"
        options={{
          title: '',
          tabBarLabel: translate('bottom_nav.browser'),
          tabBarIcon: ({ color }) => <BrowserIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: translate('bottom_nav.profile'),
          headerShown: false,
          tabBarIcon: ({ color }) => <UserSquareIcon color={color} />,
          tabBarButtonTestID: 'profile-tab',
        }}
      />
    </Tabs>
  );
}
