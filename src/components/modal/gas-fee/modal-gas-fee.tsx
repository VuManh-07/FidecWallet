import React, { useState } from 'react';

import {
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from '@/components/ui';
import { translate } from '@/lib';

import { ModelContainer } from '../model-container';
import AdvancedGasFee from './advanced-gas-fee';
import { type GasOption } from './basic-gas-fee';
import BasicGasFee from './basic-gas-fee';

const gasOptions: GasOption[] = [
  { label: 'Slow', amount: '0.0001 BNB', amountDola: '0.06' },
  { label: 'Average', amount: '0.0002 BNB', amountDola: '0.08' },
  { label: 'Fast', amount: '0.001 BNB', amountDola: '0.1' },
];

type Props = {
  modal: any;
};

export default function ModalGasFee({ modal }: Props) {
  const [tab, setTab] = useState<'Basic' | 'Advance'>('Basic');
  const [gasLimit, setGasLimit] = useState('2100');
  const [gasPrice, setGasPrice] = useState('80');
  const [selectedGas, setSelectedGas] = useState('Slow');

  return (
    <ModelContainer ref={modal.ref} isShowHeader={false} snapPoints={'50%'}>
      <View className="mx-4 flex-1">
        {/* Tabs */}
        <View className="mb-4 flex-row justify-center">
          <TouchableOpacity onPress={() => setTab('Basic')}>
            <Text
              className={`px-8 py-1 ${tab === 'Basic' ? 'border-b-2 border-yellow-400 font-bold' : 'text-neutral-400 dark:text-neutral-400'}`}
            >
              {translate('gasFee.basic')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTab('Advance')}>
            <Text
              className={`px-8 py-1 ${tab === 'Advance' ? 'border-b-2 border-yellow-400 font-bold' : 'text-neutral-400 dark:text-neutral-400'}`}
            >
              {translate('gasFee.advanced')}
            </Text>
          </TouchableOpacity>
        </View>

        {tab === 'Basic' ? (
          <BasicGasFee
            options={gasOptions}
            selected={selectedGas}
            setSelected={setSelectedGas}
          />
        ) : (
          <AdvancedGasFee
            gasLimit={gasLimit}
            setGasLimit={setGasLimit}
            gasPrice={gasPrice}
            setGasPrice={setGasPrice}
          />
        )}

        {/* Save Button */}
        <SafeAreaView className="mt-6 w-full p-2">
          <Button
            label={translate('common.save')}
            size="lg"
            className="rounded-2xl bg-yellow-300 dark:bg-yellow-300"
            textClassName="text-base font-bold"
          />
        </SafeAreaView>
      </View>
    </ModelContainer>
  );
}
