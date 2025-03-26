import { useColorScheme } from 'nativewind';
import React from 'react';

import { colors, Image, Text, TouchableOpacity, View } from '@/components/ui';
import { getSize, WIDTH } from '@/lib/hooks/use-responsive-dimensions';

import {
  Copy as CopyIcon,
  Notification as NotificationIcon,
} from '../../ui/icons';

type HeaderProps = {
  iconColor: string;
};

const walletAddress = '0x5aa...3541';
const avatarUrl =
  'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg';
const networkIconUrl =
  'https://i.pinimg.com/originals/50/92/cd/5092cddd37c0886fb65164f11a4893c8.png';

const HeaderLeft: React.FC<HeaderProps> = ({ iconColor }) => {
  return (
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
      <TouchableOpacity activeOpacity={0.7}>
        <Image
          source={{ uri: networkIconUrl }}
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
        <TouchableOpacity className="mx-1" activeOpacity={0.7}>
          <Text className="text-base font-medium leading-tight">
            {walletAddress}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mx-1" activeOpacity={0.7}>
          <CopyIcon
            color={iconColor}
            width={getSize(20)}
            height={getSize(20)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HeaderRight: React.FC<HeaderProps> = ({ iconColor }) => {
  return (
    <TouchableOpacity
      className="rounded-full bg-neutral-200 dark:bg-neutral-800"
      activeOpacity={0.7}
      style={{ padding: getSize(10) }}
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

  return (
    <View className="mt-4 h-10 flex-row items-center justify-between px-4 dark:bg-black">
      <HeaderLeft iconColor={iconColor} />
      <HeaderRight iconColor={iconColor} />
    </View>
  );
}
