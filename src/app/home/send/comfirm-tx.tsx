import { Stack, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ScrollView } from 'react-native';

import ModalFingerprint from '@/components/modal/verification/modal-verification';
import ItemUniversal from '@/components/send/comfirm-tx/item-universal';
import ItemWarning from '@/components/send/comfirm-tx/item-warning';
import {
  Button,
  FocusAwareStatusBar,
  SafeAreaView,
  useModal,
  View,
} from '@/components/ui';
import { translate } from '@/lib';
import {
  buildFromData,
  createParamWallet,
  getMethodSendByChain,
  walletManager,
} from '@/lib/wallet/vault/vault-utils/utils';

export default function ComfirmTx() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const modalConfirm = useModal();

  const {
    from = '',
    to = '',
    amount = '',
    logo = '',
    network_name = '',
    symbol = '',
    chain = '',
  } = useLocalSearchParams<{
    from: string;
    to: string;
    amount: string;
    logo: string;
    network_name: string;
    symbol: string;
    chain: string;
  }>();

  const shortAddress = (addr: string) =>
    addr.length > 8 ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : addr;

  const formatAmount = (amt: string, symbol: string) =>
    `${amt} ${symbol}`.trim();

  const onSubmit = async () => {
    try {
      // 1. Build form data (tx payload) theo chain
      const formData = buildFromData({
        chain,
        from,
        to,
        amount,
        gas: '21000',
      });

      // 2. Lấy đúng method send tùy chain
      const method = getMethodSendByChain(chain);

      // 3. Tạo Param cho walletManager
      const param = createParamWallet({
        mode: 'hot',
        chain,
        method,
        signer: from,
        formData,
      });

      // 4. Gọi walletManager để sign & broadcast
      const txHash = await walletManager(param);

      console.log('✅ Transaction hash:', txHash);
    } catch (e: any) {
      console.error('❌ Send transaction failed:', e.message || e);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: translate('common.confirm'),
          headerBackTitle: 'Send',
          headerStyle: { backgroundColor: isDarkMode ? '#000' : '#fff' },
        }}
      />
      <FocusAwareStatusBar />

      <View className="flex-1 justify-between">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          <ItemWarning />

          <View className="mx-2 mt-6 rounded-xl bg-zinc-200 p-2 dark:bg-neutral-700">
            <ItemUniversal label="common.from" value={shortAddress(from)} />
            <ItemUniversal label="common.to" value={shortAddress(to)} />
            <ItemUniversal label="common.date" value="Mar 3, 2025 at 10:04AM" />
            <ItemUniversal
              label="common.network"
              value={network_name}
              logo={logo}
              showLogo
            />
            <ItemUniversal
              label="common.amount"
              value={formatAmount(amount, symbol)}
            />
            <ItemUniversal label="common.fee" value={`0.0001 ${symbol}`} />
            <ItemUniversal
              label="common.total"
              value={`${amount}.0001 ${symbol}`}
              subValue="$1.83901"
              strongValue
              hideBorder
              labelClassName="dark:text-white"
            />
          </View>
        </ScrollView>

        <SafeAreaView className="w-full bg-white p-3 dark:bg-black">
          <Button
            label="Next"
            onPress={onSubmit}
            className="h-14 rounded-xl bg-yellow-400 dark:bg-yellow-400"
            textClassName="font-bold text-dark dark:text-dark text-base"
          />
        </SafeAreaView>
      </View>

      <ModalFingerprint modal={modalConfirm} type="fingerprint" />
    </>
  );
}
