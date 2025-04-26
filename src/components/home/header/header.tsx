import * as Clipboard from 'expo-clipboard';
import { type Router, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useMemo } from 'react';

import ModalAccount from '@/components/modal/account/modal-account';
import ModalNetwork from '@/components/modal/network/modal-network';
import {
  colors,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  useModal,
  View,
} from '@/components/ui';
import {
  Copy as CopyIcon,
  LogoApp,
  Notification as NotificationIcon,
} from '@/components/ui/icons';
import { ALL_CHAINS } from '@/constants/chains-util';
import { translate, useAuth } from '@/lib';
import { useModeApp } from '@/lib/hooks/use-mode-app';
import { getSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';
import { useWallet } from '@/lib/hooks/use-wallet';

type HeaderProps = {
  iconColor: string;
  route: Router;
};

const avatarUrl =
  'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg';

const HeaderLeft: React.FC<HeaderProps> = ({ iconColor }) => {
  const modalNetwork = useModal();
  const modalAccount = useModal();

  const { chain, account } = useWallet();

  const logo = useMemo(() => {
    return ALL_CHAINS[chain].logo;
  }, [chain]);

  const onCopyAddress = () => {
    Clipboard.setStringAsync(account.address);
    ToastAndroid.show(translate('common.copySuccess'), ToastAndroid.SHORT);
  };

  return (
    <>
      <View className="flex-row items-center space-x-2">
        {/* Avatar */}
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: avatarUrl }}
            className="rounded-full"
            style={{ width: getSize(40), height: getSize(40) }}
            contentFit="contain"
          />
        </TouchableOpacity>

        {/* Network Icon */}
        <TouchableOpacity activeOpacity={0.7} onPress={modalNetwork.present}>
          <Image
            source={{ uri: logo }}
            className="rounded-full bg-neutral-200 dark:bg-neutral-800"
            style={{
              width: getSize(40),
              height: getSize(40),
              marginHorizontal: WIDTH(8),
            }}
            contentFit="contain"
          />
        </TouchableOpacity>

        {/* Wallet Address + Copy */}
        <View className="rounded-40 h-10 flex-row items-center justify-between bg-neutral-200 px-3 dark:bg-neutral-800">
          <TouchableOpacity
            className="mx-1"
            activeOpacity={0.7}
            onPress={modalAccount.present}
          >
            <Text className="text-base font-medium leading-tight">
              {account?.address.slice(0, 5) +
                '...' +
                account?.address.slice(-3)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mx-1"
            activeOpacity={0.7}
            onPress={onCopyAddress}
          >
            <CopyIcon
              color={iconColor}
              width={getSize(20)}
              height={getSize(20)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ModalNetwork modal={modalNetwork} />
      <ModalAccount modal={modalAccount} />
    </>
  );
};

const HeaderRight: React.FC<HeaderProps> = ({ iconColor, route }) => {
  return (
    <TouchableOpacity
      className="rounded-full bg-neutral-200 dark:bg-neutral-800"
      activeOpacity={0.7}
      style={{ padding: getSize(10) }}
      onPress={() => route.push('/home/notification')}
    >
      <NotificationIcon
        color={iconColor}
        width={getSize(20)}
        height={getSize(20)}
      />
    </TouchableOpacity>
  );
};

export default function Header() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const iconColor = isDarkMode ? colors.neutral[100] : colors.neutral[500];

  const route = useRouter();
  const { mode } = useModeApp((state) => ({ mode: state.mode }));
  const status = useAuth.use[mode]().status;

  if (status === 'signOut')
    return (
      <View className="mt-4 h-10 flex-row items-center px-4 dark:bg-black">
        <LogoApp />
        <Text className="mx-2 text-sm font-bold text-yellow-500 dark:text-yellow-500">
          {mode === 'hot'
            ? translate('header.welcomeHot')
            : translate('header.welcomeCold')}
        </Text>
      </View>
    );

  return (
    <View className="mt-4 h-10 flex-row items-center justify-between px-4 dark:bg-black">
      <HeaderLeft iconColor={iconColor} route={route} />
      <HeaderRight iconColor={iconColor} route={route} />
    </View>
  );
}
