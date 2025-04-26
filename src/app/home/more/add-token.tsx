import { zodResolver } from '@hookform/resolvers/zod';
import { Stack } from 'expo-router';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type TextStyle } from 'react-native';
import { z } from 'zod';

import {
  Button,
  ControlledInput,
  SafeAreaView,
  Select,
  View,
} from '@/components/ui';
import { translate } from '@/lib';
import {
  getFontSize,
  HEIGHT,
  WIDTH,
} from '@/lib/hooks/use-responsive-dimensions';

const schema = z.object({
  address: z.string({
    required_error: 'Address is required',
  }),
  symbol: z.string({
    required_error: 'Symbol is required',
  }),
  decimal: z.string({
    required_error: 'Decimal is required',
  }),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};

export default function AddToken() {
  const { colorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const { control, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  const styleInput = React.useMemo(() => {
    return {
      width: '100%',
      height: HEIGHT(48),
      borderRadius: WIDTH(8),
      paddingHorizontal: WIDTH(12),
      fontSize: getFontSize(16),
    } as TextStyle;
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: `${translate('common.add')} Token`,
          headerBackTitle: 'More',
          headerTitleStyle: {
            fontSize: getFontSize(18),
          },
          headerStyle: {
            backgroundColor: isDarkMode ? '#000' : '#fff',
          },
        }}
      />
      <View className="flex-1 p-2">
        {/* Nội dung chính */}
        <View className="grow gap-4">
          <Select
            label="Network"
            options={[
              { label: 'Ethereum', value: 'ethereum' },
              { label: 'Polygon', value: 'polygon' },
              { label: 'BSC', value: 'bsc' },
              { label: 'Arbitrum', value: 'arbitrum' },
              { label: 'Optimism', value: 'optimism' },
              { label: 'Avalanche', value: 'avalanche' },
              { label: 'Gnosis', value: 'gnosis' },
              { label: 'Fantom', value: 'fantom' },
              { label: 'Cronos', value: 'cronos' },
            ]}
          />
          <ControlledInput
            name="address"
            label={translate('common.token_address')}
            control={control}
            style={styleInput}
          />
          <ControlledInput
            name="symbol"
            label={translate('common.token_symbol')}
            control={control}
            style={styleInput}
          />
          <ControlledInput
            name="decimal"
            label={translate('common.token_decimal')}
            control={control}
            style={styleInput}
          />
        </View>

        <SafeAreaView className="w-full p-2 pb-6">
          <Button
            label={translate('common.add')}
            size="lg"
            textClassName="font-bold text-base leading-tight"
            className="bg-yellow-300 dark:bg-yellow-300"
            onPress={handleSubmit(onSubmit)}
          />
        </SafeAreaView>
      </View>
    </>
  );
}
