import React from 'react';

import { Input, Text, View } from '@/components/ui';
import { translate } from '@/lib';

export default function AdvancedGasFee({
  gasLimit,
  setGasLimit,
  gasPrice,
  setGasPrice,
}: {
  gasLimit: string;
  setGasLimit: (val: string) => void;
  gasPrice: string;
  setGasPrice: (val: string) => void;
}) {
  return (
    <View>
      <Text className="mb-4 text-base font-medium">
        {translate('common.total')}: 0.00001 BNB
      </Text>
      <Input
        label={translate('common.gas_limited')}
        value={gasLimit}
        keyboardType="numeric"
        onChangeText={setGasLimit}
        labelClassName="text-xs font-regular mt-4"
      />
      <Input
        label={translate('common.gas_price')}
        value={gasPrice}
        keyboardType="numeric"
        onChangeText={setGasPrice}
        labelClassName="text-xs font-regular mt-4"
      />
    </View>
  );
}
