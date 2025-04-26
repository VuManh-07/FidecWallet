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
import { UpArrow as UpArrowIcon } from '@/components/ui/icons';
import { translate } from '@/lib';

export const slides = [
  {
    id: '1',
    title: translate('onboarding.securityTitle'),
    description: translate('onboarding.securityDesc'),
    image: require('../components/ui/images/onbroading/security.png'),
  },
  {
    id: '2',
    title: translate('onboarding.transactionTitle'),
    description: translate('onboarding.transactionDesc'),
    image: require('../components/ui/images/onbroading/transaction.png'),
  },
  {
    id: '3',
    title: translate('onboarding.controlTitle'),
    description: translate('onboarding.controlDesc'),
    image: require('../components/ui/images/onbroading/control.png'),
  },
  {
    id: '4',
    title: translate('onboarding.web3Title'),
    description: translate('onboarding.web3Desc'),
    image: require('../components/ui/images/onbroading/web3-connect.png'),
  },
  {
    id: '5',
    title: translate('onboarding.techTitle'),
    description: translate('onboarding.techDesc'),
    image: require('../components/ui/images/onbroading/advance-tech.png'),
  },
];

const { width } = Dimensions.get('window');

export default function Onboarding() {
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
          label={translate('onboarding.create')}
          onPress={() => {
            router.push('/wallet/select-create');
          }}
          className="h-14 rounded-xl dark:bg-neutral-800"
          textClassName="font-bold text-base dark:text-white"
        />

        <Button
          label={translate('onboarding.import')}
          onPress={() => {
            router.push('/wallet/import-wallet');
          }}
          className="h-14 rounded-xl bg-yellow-400 dark:bg-yellow-400"
          textClassName="font-bold text-dark dark:text-dark text-base"
          icon={<UpArrowIcon color={'black'} className="mx-2" />}
          iconPosition="right"
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
