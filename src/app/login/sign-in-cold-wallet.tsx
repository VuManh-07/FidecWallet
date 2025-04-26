import { useRouter } from 'expo-router';
import React, { useRef } from 'react';

import LoginHeader from '@/components/login/login-header';
import {
  SignInFromColdWallet,
  type SignInFromColdWalletRef,
} from '@/components/login/signin-form-cold-wallet';
import { FocusAwareStatusBar } from '@/components/ui';
import { useAuth } from '@/lib';

export default function SignInHotWallet() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();
  const formRef = useRef<SignInFromColdWalletRef>(null);

  const onSubmit = (data: { pin: string }) => {
    console.log(data);
    signIn('cold', {
      access: 'access-token',
      refresh: 'refresh-token',
    });

    router.replace('/');

    // 👉 Reset form sau khi submit
    formRef.current?.reset();
  };

  return (
    <>
      <FocusAwareStatusBar />
      <LoginHeader />
      <SignInFromColdWallet ref={formRef} onSubmit={onSubmit} />
    </>
  );
}
