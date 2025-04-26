import { zodResolver } from '@hookform/resolvers/zod';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import PinDots from '@/components/pin-dots';
import PinKeyboard from '@/components/pin-keyboard';
import { Button, Text, View } from '@/components/ui';
import { translate } from '@/lib';

export const pinSchema = z.object({
  pin: z
    .string()
    .length(8, 'PIN must be exactly 8 digits')
    .regex(/^\d+$/, 'PIN must contain only digits'),
});

export type PinFormType = z.infer<typeof pinSchema>;

type Props = {
  onSubmit?: (data: PinFormType) => void;
};

export type SignInFromColdWalletRef = {
  reset: () => void;
};

export const SignInFromColdWallet = forwardRef<SignInFromColdWalletRef, Props>(
  ({ onSubmit = () => {} }, ref) => {
    const {
      handleSubmit,
      setValue,
      watch,
      reset,
      clearErrors,
      formState: { errors },
    } = useForm<PinFormType>({
      resolver: zodResolver(pinSchema),
      defaultValues: { pin: '' },
    });

    const pin = watch('pin');

    const handlePress = (val: string) => {
      if (val === 'delete') {
        setValue('pin', pin.slice(0, -1));
      } else if (pin.length < 8 && /^\d$/.test(val)) {
        const newPin = pin + val;
        setValue('pin', newPin);
        if (newPin.length === 8 && /^\d{8}$/.test(newPin)) {
          clearErrors('pin');
        }
      }
    };

    useImperativeHandle(ref, () => ({
      reset,
    }));

    return (
      <View className="mx-4 flex-1 justify-between bg-black py-6">
        <View className="flex-1">
          <Text className="text-3xl font-bold text-yellow-400 dark:text-yellow-400">
            {translate('auth.login.welcome')} 👋
          </Text>
          <Text className="my-1 text-lg font-medium">
            {translate('auth.login.subtitle')}
          </Text>
          <Text className="text-xs text-neutral-400 dark:text-neutral-400">
            {translate('auth.login.attemptsInfo', { max: 5 })}
          </Text>

          <PinDots currentLength={pin.length} className="mx-4 mt-10" />
          <Text className="my-2 text-center text-sm text-red-600 dark:text-red-600">
            {errors.pin ? errors.pin.message : ' '}
          </Text>
          <Text className="mt-2 text-center text-sm font-medium text-yellow-400 dark:text-yellow-400">
            {translate('auth.login.forgotPin')}
          </Text>
        </View>

        <View className="items-center">
          <View className="my-6 flex-row items-center">
            <Text className="text-sm text-neutral-300">
              {translate('auth.login.noWalletYet')?.split('{createLink}')[0]}
            </Text>
            <Text className="mx-2 text-sm font-medium text-yellow-400 dark:text-yellow-400">
              {translate('auth.createWalletNow')}
            </Text>
          </View>
          <PinKeyboard onPress={handlePress} />
          <Button
            label={translate('common.next')}
            onPress={handleSubmit(onSubmit)}
            className="mt-10 h-14 w-4/5 rounded-xl"
            textClassName="font-bold text-dark text-base"
          />
        </View>
      </View>
    );
  }
);

SignInFromColdWallet.displayName = 'SignInFromColdWallet';
