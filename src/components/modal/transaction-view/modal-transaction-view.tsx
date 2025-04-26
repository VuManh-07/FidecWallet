import React from 'react';

import { Button, SafeAreaView, Text, View } from '@/components/ui';
import { translate } from '@/lib';

import { ModelContainer } from '../model-container';
import Item from './item';

type DataType = {
  status: string;
  date: string;
  from: string;
  to: string;
  amount: string;
  fee: string;
  total: string;
  totalUSD: string;
};

type Props = {
  modal: any;
  data: DataType;
  testID?: string;
  type?: string;
};

export default function ModalTransactionView({ modal, data }: Props) {
  return (
    <ModelContainer ref={modal.ref} isShowHeader={false} snapPoints="60%">
      <View className="flex-1">
        <Text className="text-center text-base font-bold">
          {translate('common.transaction')}
        </Text>
        <View className="p-4">
          <Item
            label="Status"
            value={data.status}
            valueClassName="dark:text-green-400 font-medium"
          />
          <Item label={translate('common.date')} value={data.date} />
          <Item label={translate('common.from')} value={data.from} />
          <Item label={translate('common.to')} value={data.to} />

          <View className="my-4 space-y-1 rounded-xl bg-neutral-700 p-3">
            <Item label={translate('common.amount')} value={data.amount} />
            <Item label={translate('common.network_fee')} value={data.fee} />
            <Item
              label={translate('common.total')}
              value={data.total}
              valueClassName="font-semibold"
            />
            <Text className="px-2 text-right text-xs dark:text-neutral-400">
              {data.totalUSD}
            </Text>
          </View>
        </View>

        <SafeAreaView>
          <Button
            label={translate('common.viewOnExplorer')}
            onPress={() => {
              // setIsFirstTime(false);
            }}
            className=" mx-10 h-14 rounded-xl bg-yellow-400 dark:bg-yellow-400"
            textClassName="font-bold text-drak dark:text-dark text-base"
          />
        </SafeAreaView>
      </View>
    </ModelContainer>
  );
}
