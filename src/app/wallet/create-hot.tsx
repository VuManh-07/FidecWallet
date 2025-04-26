import { useRouter } from 'expo-router';
import React from 'react';

import ModalTermsConditions from '@/components/modal/terms-conditions/modal-terms-conditions';
import { FocusAwareStatusBar, useModal } from '@/components/ui';
import {
  CreatePasswordForm,
  type LoginFormProps,
} from '@/components/wallet/create-hot/create-password-form';
import { ItemsContainer } from '@/components/wallet/items-container';
import { useVault } from '@/context/wallet-context';

export default function CreateHot() {
  const route = useRouter();
  const modal = useModal();

  const [checked, setChecked] = React.useState(false);

  const { onFirstLaunch } = useVault();

  const onSubmit: LoginFormProps['onSubmit'] = async (data) => {
    try {
      const { password } = data;
      const mnemonic = await onFirstLaunch(password);
      console.log(mnemonic);
      route.push({
        pathname: '/wallet/show-mnemonic',
        params: { mnemonic },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        <FocusAwareStatusBar />
        <ItemsContainer title="auth.create_hot_wallet">
          <CreatePasswordForm
            checked={checked}
            setChecked={() => setChecked(!checked)}
            onSubmit={onSubmit}
          />
        </ItemsContainer>
      </>
      <ModalTermsConditions modal={modal} onConfirm={() => {}} />
    </>
  );
}
