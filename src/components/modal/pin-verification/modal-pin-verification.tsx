import React from 'react';

import PinDots from '@/components/pin-dots';
import PinKeyboard from '@/components/pin-keyboard';
import { Text, View } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { translate } from '@/lib';
import { usePin } from '@/lib/hooks/use-pin';

import { ModelContainer } from '../model-container';

type Props = {
  modal: any;
  testID?: string;
};

export default function ModalPinVerification({ modal }: Props) {
  const { pin, handlePress } = usePin();

  return (
    <ModelContainer ref={modal.ref} snapPoints="70%" isShowHeader={false}>
      <View className="items-center px-2">
        <Text className="text-lg font-bold">
          {translate('modal.verification')}
        </Text>
        <Text className="my-2 flex-wrap text-center text-sm font-medium">
          {translate('modal.fingerprintInstruction')}
        </Text>

        <PinDots currentLength={pin.length} />
        <PinKeyboard onPress={handlePress} />

        <Button
          label={translate('common.next')}
          size="lg"
          textClassName="font-bold text-base leading-tight"
          className="my-6 w-full bg-yellow-300 dark:bg-yellow-300"
          onPress={() => {
            console.log(pin);
          }}
        />
      </View>
    </ModelContainer>
  );
}
