import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';

import Slide from '@/components/onboarding/slide';
import {
  Button,
  Dimensions,
  FlatList,
  FocusAwareStatusBar,
  SafeAreaView,
  StyleSheet,
  View,
} from '@/components/ui';
import { User as UserIcon } from '@/components/ui/icons';
import { useIsFirstTime } from '@/lib/hooks';

export const slides = [
  {
    id: '1',
    title: 'Buy & Sell Instantly!',
    description:
      'Use our swapper to safely swap tokens at the best prices, instantly.',
    icon: <UserIcon />,
  },
  {
    id: '2',
    title: 'Mine Your Crypto!',
    description:
      'Use mining tools to generate Bitcoin and other cryptocurrencies.',
    icon: <UserIcon />,
  },
  {
    id: '3',
    title: 'Secure Your Wallet!',
    description: 'Keep your crypto assets safe and secure with our wallet.',
    icon: <UserIcon />,
  },
];

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <View className="flex h-full items-center justify-center bg-white dark:bg-black">
      <FocusAwareStatusBar />
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
      />

      {/* Indicator Dots */}
      <View className="mt-2 flex-row items-center justify-center">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`mx-1 size-2 rounded-full bg-neutral-700`}
            style={[currentIndex === index ? styles.activeDot : null]}
          />
        ))}
      </View>
      <SafeAreaView className="mt-6 w-full px-3 py-2">
        <Button
          label="Create New Wallet"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
          className="h-14 rounded-xl dark:bg-neutral-600"
          textClassName="font-bold text-base text-white"
        />

        <Button
          label="Already Have a Wallet"
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/home');
          }}
          className="h-14 rounded-xl bg-yellow-400"
          textClassName="font-bold text-drak dark:text-dark text-base"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: '#F9D54A',
    width: 10,
    height: 10,
  },
});
