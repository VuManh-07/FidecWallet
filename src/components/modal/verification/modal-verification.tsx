import React from 'react';

import { Text, View } from '@/components/ui';
import { Fingerprint as FingerprintIcon, NfcScan } from '@/components/ui/icons';
import { translate } from '@/lib';
import { HEIGHT } from '@/lib/hooks/use-responsive-dimensions';

import { ModelContainer } from '../model-container';

type Props = {
  modal: any;
  testID?: string;
  type?: string;
};

export default function ModalVerification({ modal, type }: Props) {
  return (
    <ModelContainer ref={modal.ref} isShowHeader={false} snapPoints="36%">
      <View className="items-center justify-center">
        <Text className="mb-2 text-lg font-bold text-white">
          {translate('modal.verification')}
        </Text>
        <Text className="mb-6 text-center text-sm text-white">
          {type === 'nfc'
            ? translate('modal.nfcInstruction')
            : translate('modal.fingerprintInstruction')}
        </Text>

        {type === 'nfc' ? (
          <NfcScan style={{ marginTop: HEIGHT(24) }} />
        ) : (
          <FingerprintIcon style={{ marginTop: HEIGHT(24) }} />
        )}
      </View>
    </ModelContainer>
  );
}
