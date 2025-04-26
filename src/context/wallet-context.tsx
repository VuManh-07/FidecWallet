import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useWallet } from '@/lib/hooks/use-wallet';
// import { createOrRestoreCosmosWallet } from '@/lib/wallet/modes/hot/chains/cosmos/cosmos-util';
import { createOrRestoreEIP155Wallet } from '@/lib/wallet/modes/hot/chains/ethereum/eip155-util';
import { VaultBase } from '@/lib/wallet/vault/vault-base';

type WalletContextType = {
  isAuthenticated: boolean;
  onFirstLaunch: (password: string) => Promise<string>;
  onConfirmMnemonic: (partialInput: string) => Promise<boolean>;
  onVerifyLogin: (password: string) => Promise<boolean>;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const { chain, setAccount } = useWallet((state) => state);

  const [vault, setVault] = useState<VaultBase | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  const onFirstLaunch = async (password: string) => {
    const vaultInstance = new VaultBase(password);
    const mnemonic = await vaultInstance.init();
    setVault(vaultInstance);
    return mnemonic;
  };

  const onConfirmMnemonic = async (partialInput: string) => {
    if (!vault) throw new Error('Vault not initialized');
    return await vault.confirm(partialInput);
  };

  const onVerifyLogin = async (password: string) => {
    const vaultInstance = new VaultBase(password);
    await vaultInstance.init();
    setVault(vaultInstance);
    setAuthenticated(true);
    console.log(isAuthenticated, 'isAuth');
    return true;
  };

  const onInitialize = useCallback(async () => {
    console.log(1);
    if (!vault) return;
    const namespace = chain.split(':')[0];
    let address: string = '';
    switch (namespace) {
      case 'eip155':
        address = (await createOrRestoreEIP155Wallet(vault, chain)).address;
        break;
      // case 'cosmos':
      //   await createOrRestoreCosmosWallet(vault, chain);
      //   break;
    }

    setAccount({ name: 'Account 1', address });
  }, [vault, chain, setAccount]);

  useEffect(() => {
    if (isAuthenticated) onInitialize();
  }, [isAuthenticated, onInitialize]);

  return (
    <WalletContext.Provider
      value={{
        isAuthenticated,
        onConfirmMnemonic,
        onVerifyLogin,
        onFirstLaunch,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useVault = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useVault must be used within a VaultProvider');
  }
  return context;
};
