// import { useColorScheme } from 'nativewind';
// import React from 'react';

// import { colors, Image, Text, TouchableOpacity, View } from '@/components/ui';
// import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

// import {
//   Copy as CopyIcon,
//   Notification as NotificationIcon,
// } from '../../ui/icons';

// type Props = {
//   iconColor: string;
// };

// const HeaderLeft = ({ iconColor }: Props) => {
//   return (
//     <View className="flex-row items-center space-x-2">
//       {/* Avatar */}
//       <Image
//         source={{
//           uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
//         }}
//         className="size-10 rounded-full"
//       />

//       {/* Binance Icon */}
//       <Image
//         source={{
//           uri: 'https://i.pinimg.com/originals/50/92/cd/5092cddd37c0886fb65164f11a4893c8.png',
//         }}
//         className="mx-3 size-10 rounded-full dark:bg-neutral-700"
//         resizeMode="contain"
//       />

//       {/* Wallet Address + Copy */}
//       <View className="h-10 w-auto flex-row items-center justify-between rounded-full dark:bg-neutral-700">
//         <Text className="ml-3 text-base">0x5aa...3541</Text>
//         <TouchableOpacity className="mx-2">
//           <CopyIcon color={iconColor} width={WIDTH(20)} height={WIDTH(20)} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const HeaderRight = ({ iconColor }: Props) => {
//   return (
//     <TouchableOpacity className="rounded-full p-2 dark:bg-neutral-700">
//       <NotificationIcon
//         color={iconColor}
//         width={WIDTH(20)}
//         height={WIDTH(20)}
//       />
//     </TouchableOpacity>
//   );
// };

// export default function Header() {
//   const { colorScheme } = useColorScheme();
//   const iconColor =
//     colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];
//   return (
//     <View className="m-4 h-10 flex-row items-center justify-between dark:bg-neutral-900">
//       <HeaderLeft iconColor={iconColor} />
//       <HeaderRight iconColor={iconColor} />
//     </View>
//   );
// }

import { useColorScheme } from 'nativewind';
import React from 'react';

import { colors, Image, Text, TouchableOpacity, View } from '@/components/ui';
import { WIDTH } from '@/lib/hooks/use-responsive-dimensions';

import {
  Copy as CopyIcon,
  Notification as NotificationIcon,
} from '../../ui/icons';

type Props = {
  iconColor: string;
};

const HeaderLeft = ({ iconColor }: Props) => {
  return (
    <View className="flex-row items-center sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-5">
      {/* Avatar */}
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
        }}
        className="size-10 rounded-full sm:size-12 md:size-14 lg:size-16 xl:size-20"
      />

      {/* Binance Icon */}
      <Image
        source={{
          uri: 'https://i.pinimg.com/originals/50/92/cd/5092cddd37c0886fb65164f11a4893c8.png',
        }}
        className="mx-2 size-10 rounded-full dark:bg-neutral-700 sm:mx-3 sm:size-12 md:size-14 lg:size-16 xl:size-20"
        resizeMode="contain"
      />

      {/* Wallet Address + Copy */}
      <View className="h-10 min-w-[120px] flex-row items-center justify-between rounded-full px-3 dark:bg-neutral-700 sm:min-w-[140px] sm:px-4 md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px]">
        <Text className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          0x5aa...3541
        </Text>
        <TouchableOpacity className="mx-2">
          <CopyIcon color={iconColor} width={WIDTH(20)} height={WIDTH(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HeaderRight = ({ iconColor }: Props) => {
  return (
    <TouchableOpacity className="rounded-full p-2 dark:bg-neutral-700 sm:p-3 md:p-4 lg:p-5 xl:p-6">
      <NotificationIcon
        color={iconColor}
        width={WIDTH(20)}
        height={WIDTH(20)}
        className="sm:size-[18px] md:size-[20px] lg:size-[22px] xl:size-[24px]"
      />
    </TouchableOpacity>
  );
};

export default function Header() {
  const { colorScheme } = useColorScheme();
  const iconColor =
    colorScheme === 'dark' ? colors.neutral[100] : colors.neutral[500];

  return (
    <View className="lg:h-18 mt-4 h-12 flex-row items-center justify-between px-3 dark:bg-neutral-900 sm:m-2 sm:h-14 sm:px-4 md:m-3 md:h-16 lg:m-4 xl:m-5 xl:h-20">
      <HeaderLeft iconColor={iconColor} />
      <HeaderRight iconColor={iconColor} />
    </View>
  );
}
