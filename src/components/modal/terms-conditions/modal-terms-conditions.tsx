import React, { useRef, useState } from 'react';
import {
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  ScrollView,
  View,
} from 'react-native';

import { Button, SafeAreaView, Text } from '@/components/ui';
import { translate } from '@/lib';

import { ModelContainer } from '../model-container';

type Props = {
  modal: any;
  testID?: string;
  onConfirm: () => void;
};

export default function ModalTermsConditions({
  modal,
  testID,
  onConfirm,
}: Props) {
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isAtBottom && !isScrolledToEnd) {
      setIsScrolledToEnd(true);
    }
  };

  return (
    <ModelContainer ref={modal.ref} isShowHeader={false} snapPoints="90%">
      <View className="flex-1 px-3">
        <Text className="mb-4 text-center text-lg font-bold">
          {translate('modal.termsConditions')}
        </Text>

        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled={true}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <Text className="text-justify text-base leading-6 text-neutral-800 dark:text-neutral-200">
            {/* Nội dung Terms & Conditions dài ở đây, có thể load từ file khác nếu muốn */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper.
          </Text>
        </ScrollView>
      </View>

      {isScrolledToEnd && (
        <SafeAreaView>
          <Button
            testID={testID ? `${testID}-confirm` : undefined}
            label={translate('common.confirm')}
            onPress={onConfirm}
            className="mx-6 h-14 rounded-xl bg-blue-500"
            textClassName="text-white font-bold text-base"
          />
        </SafeAreaView>
      )}
    </ModelContainer>
  );
}
