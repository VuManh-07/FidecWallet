import { zodResolver } from '@hookform/resolvers/zod';
import { Stack, useRouter } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as z from 'zod';

import ModalAccount from '@/components/modal/account/modal-account';
import ModalGasFee from '@/components/modal/gas-fee/modal-gas-fee';
import ModalNetwork from '@/components/modal/network/modal-network';
import ItemAmount from '@/components/send/item-amount';
import ItemFrom from '@/components/send/item-from';
import ItemGasFee from '@/components/send/item-gas-fee';
import ItemInfoNetwork from '@/components/send/item-info-network';
import ItemSaveAccount from '@/components/send/item-save-account';
import ItemTo from '@/components/send/item-to';
import { ItemsContainer } from '@/components/send/items-container';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  useModal,
  View,
} from '@/components/ui';
import { ALL_CHAINS } from '@/constants/chains-util';
import { translate } from '@/lib';
import { useWallet } from '@/lib/hooks/use-wallet';

const txSchema = z.object({
  to: z
    .string({ required_error: 'To address is required' })
    .min(3, 'Invalid address'),
  amount: z
    .string({ required_error: 'Amount is required' })
    .refine((val) => !isNaN(Number(val)), {
      message: 'Amount must be a number',
    }),
  account_name: z.string(),
  from: z.string(),
  chain: z.string(),
  network_name: z.string(),
  symbol: z.string(),
  logo: z.string(),
});

export type TxFormData = z.infer<typeof txSchema>;

export default function Send() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const route = useRouter();
  const modalGasFee = useModal();
  const modalNetwork = useModal();
  const modalAccount = useModal();
  const { chain, account } = useWallet();

  const chainInfo = useMemo(() => ALL_CHAINS[chain], [chain]);

  const { control, handleSubmit } = useForm<TxFormData>({
    resolver: zodResolver(txSchema),
    defaultValues: {
      chain: chain,
      network_name: chainInfo.name,
      symbol: chainInfo.symbol,
      logo: chainInfo.logo,
      account_name: account?.name,
      from: account?.address,
      to: '',
      amount: '',
    },
  });

  const onSubmit = (data: TxFormData) => {
    route.push({ pathname: '/home/send/comfirm-tx', params: data });
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Send to',
          headerBackTitle: 'Home',
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
        }}
      />
      <FocusAwareStatusBar />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1 justify-between">
          <KeyboardAwareScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            extraScrollHeight={100}
            enableOnAndroid={true}
            keyboardShouldPersistTaps="handled"
          >
            <View className="m-1">
              <ItemsContainer>
                <ItemInfoNetwork
                  onPress={() => modalNetwork.present()}
                  name={chainInfo.name}
                  logo={chainInfo.logo}
                  symbol={chainInfo.symbol}
                />
              </ItemsContainer>
              <ItemsContainer title="common.from">
                <ItemFrom
                  onPress={() => modalAccount.present()}
                  account={account}
                />
              </ItemsContainer>
              <ItemsContainer title="common.to">
                <Controller
                  control={control}
                  name="to"
                  render={({ field, fieldState }) => (
                    <ItemTo
                      value={field.value}
                      onChangeText={field.onChange}
                      error={fieldState.error?.message}
                    />
                  )}
                />
                <ItemSaveAccount />
              </ItemsContainer>
              <ItemsContainer title="common.amount">
                <Controller
                  control={control}
                  name="amount"
                  render={({ field, fieldState }) => (
                    <ItemAmount
                      value={field.value}
                      onChangeText={field.onChange}
                      onPressMax={() => field.onChange('100')}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </ItemsContainer>
              <ItemsContainer title="common.gas_fee">
                <ItemGasFee onPressEdit={() => modalGasFee.present()} />
              </ItemsContainer>
            </View>
          </KeyboardAwareScrollView>
          <SafeAreaView className="w-full bg-white p-3 dark:bg-black">
            <Button
              label={translate('common.next')}
              onPress={handleSubmit(onSubmit)}
              className="h-14 rounded-xl"
              textClassName="font-bold text-dark dark:text-dark text-base"
            />
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
      <ModalGasFee modal={modalGasFee} />
      <ModalNetwork modal={modalNetwork} />
      <ModalAccount modal={modalAccount} />
    </>
  );
}
