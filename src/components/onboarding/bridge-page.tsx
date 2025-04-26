import React from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from 'react-native-reanimated';

import { Text } from '@/components/ui';
import { translate } from '@/lib';

const BridgePage = ({ status }: { status: 'hot' | 'cold' | null }) => {
  const isHot = status === 'hot';

  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutLeft}
      className={`flex-1 items-center justify-center p-6 ${
        isHot ? 'bg-amber-50 dark:bg-amber-900' : 'bg-blue-50 dark:bg-blue-900'
      }`}
    >
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOut}
        className="items-center"
      >
        <Text className="text-[60px]">{isHot ? '🔥' : '❄️'}</Text>

        <Text className="mt-3 text-center text-[22px] font-bold text-black dark:text-white">
          {isHot
            ? translate('bridge.welcomeHot')
            : translate('bridge.welcomeCold')}
        </Text>

        <Text className="mt-1 text-center text-sm text-neutral-600 dark:text-neutral-200">
          {isHot ? translate('bridge.hotDesc') : translate('bridge.coldDesc')}
        </Text>
      </Animated.View>
    </Animated.View>
  );
};

export default BridgePage;
