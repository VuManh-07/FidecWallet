import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Actions from '@/components/home/actions';
import { ItemsContainer } from '@/components/home/items-container';
import Navbar from '@/components/home/navbar';
import Wallet from '@/components/home/wallet';
import BridgePage from '@/components/onboarding/bridge-page';
import { FocusAwareStatusBar, View } from '@/components/ui';
import { useModeApp } from '@/lib/hooks/use-mode-app';

export default function Home() {
  const { mode, bridge, isBridge, setMode, setBridge, setIsBridge } =
    useModeApp((state) => ({
      mode: state.mode,
      bridge: state.bridge,
      isBridge: state.isBridge,
      setMode: state.setMode,
      setBridge: state.setBridge,
      setIsBridge: state.setIsBridge,
    }));

  const rotateY = useSharedValue(0);

  const flipToBridge = (status: 'hot' | 'cold') => {
    setBridge(status);
    setIsBridge(true);
    rotateY.value = withTiming(
      180,
      { duration: 2000, easing: Easing.out(Easing.cubic) },
      () => {
        runOnJS(triggerFlipBack)(status);
      }
    );
  };

  const triggerFlipBack = (status: 'hot' | 'cold') => {
    setTimeout(() => {
      flipBackToHome(status);
    }, 1500);
  };

  const flipBackToHome = (status: 'hot' | 'cold') => {
    setMode(status);
    setBridge(null);
    setIsBridge(false);
    rotateY.value = withTiming(0, {
      duration: 2000,
      easing: Easing.out(Easing.cubic),
    });
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotateY.value,
      [0, 180],
      [0, 180],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotate}deg` }],
    };
  });

  const animatedBackContentStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: '-180deg' }],
  }));

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <FocusAwareStatusBar />

      <Animated.View
        style={[{ flex: 1, position: 'relative' }, animatedContainerStyle]}
      >
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { opacity: isBridge ? 0 : 1, zIndex: 2 },
            animatedContainerStyle,
          ]}
          pointerEvents={isBridge ? 'none' : 'auto'}
        >
          <ItemsContainer>
            <Wallet handleSwitch={flipToBridge} mode={mode} />
            <Actions />
            <Navbar />
          </ItemsContainer>
        </Animated.View>

        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            { opacity: isBridge ? 1 : 0, zIndex: 3 },
            animatedBackContentStyle,
          ]}
          pointerEvents={isBridge ? 'auto' : 'none'}
        >
          <BridgePage status={bridge} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
