import type { Control } from 'react-hook-form';

import type { LoginHotWalletFormType } from '@/app/login/sign-in-hot-wallet';
import { ControlledInput, Text, View } from '@/components/ui';
import { translate } from '@/lib';

type Props = {
  control: Control<LoginHotWalletFormType>;
};

export const SignInFromHotWallet = ({ control }: Props) => {
  return (
    <View className="flex-1 p-4">
      <View className="mt-10">
        <Text
          testID="form-title"
          className="text-4xl font-bold text-yellow-400 dark:text-yellow-400"
        >
          {translate('auth.login.welcome')} 👋
        </Text>

        <Text className="my-1 text-lg font-medium">
          {translate('auth.login.enterPassword')}
        </Text>
        <Text className="text-gray-500 dark:text-neutral-400">
          {translate('auth.login.attemptsInfo', { max: 5 })}
        </Text>
      </View>

      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        labelClassName="text-sm"
        placeholder="*****"
        secureTextEntryToggle
        containerClassName="mt-16"
        inputClassName="border text-center border-yellow-400 text-base text-black dark:text-white px-4 py-3 rounded-xl"
      />

      <View className="items-center">
        <Text className="mt-2 text-sm font-medium text-yellow-400 dark:text-yellow-400">
          {translate('auth.login.forgotPassword')}
        </Text>
        <View className="my-2 flex-row ">
          <Text className="text-sm text-gray-500 dark:text-neutral-400">
            {translate('auth.login.noWalletYet')?.split('{createLink}')[0]}
          </Text>
          <Text className="mx-2 text-sm font-medium text-yellow-400 dark:text-yellow-400">
            {translate('auth.createWalletNow')}
          </Text>
        </View>
      </View>
    </View>
  );
};
