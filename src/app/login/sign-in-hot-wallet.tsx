import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView } from 'react-native';
import * as z from 'zod';

import LoginHeader from '@/components/login/login-header';
import { SignInFromHotWallet } from '@/components/login/signin-form-hot-wallet';
import { Button, FocusAwareStatusBar } from '@/components/ui';
import { useVault } from '@/context/wallet-context';
import { signIn, translate } from '@/lib';
import { useModeApp } from '@/lib/hooks/use-mode-app';

const schema = z.object({
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters')
    .regex(/^[A-Z]/, 'Must start with uppercase')
    .regex(/[^A-Za-z0-9]/, 'Must include special character'),
});

export type LoginHotWalletFormType = z.infer<typeof schema>;

export default function SignInHotWallet() {
  const router = useRouter();
  const { mode } = useModeApp();
  const { onVerifyLogin } = useVault();

  const { control, handleSubmit, setError } = useForm<LoginHotWalletFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginHotWalletFormType) => {
    try {
      await onVerifyLogin(data.password);
      signIn(mode, { access: 'access-token', refresh: 'refresh-token' });
      router.replace('/');
    } catch (error) {
      setError('password', {
        type: 'manual',
        message: translate('error.wrong_password'),
      });
    }
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginHeader />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <SignInFromHotWallet control={control} />
        <Button
          label={translate('common.login')}
          onPress={handleSubmit(onSubmit)}
          className="mx-4 my-10 h-14 rounded-xl bg-yellow-400"
          textClassName="text-xl font-bold text-black"
        />
      </KeyboardAvoidingView>
    </>
  );
}
