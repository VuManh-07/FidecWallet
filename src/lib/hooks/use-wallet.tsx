import { create } from 'zustand';

import { storage } from '@/lib/store/storage';

import { SELECTED_MODE, useModeApp, type WalletMode } from './use-mode-app';

// ===== Types =====
export type WalletAccount = {
  name: string;
  address: string;
};

// ===== Storage Keys =====
const SELECTED_CHAIN = 'SELECTED_CHAIN';
const SELECTED_ACCOUNT = 'SELECTED_ACCOUNT';

// ===== Zustand Store =====
export const useWallet = create<{
  chain: string;
  account: WalletAccount;
  setChain: (chain: string) => void;
  setAccount: (account: WalletAccount) => void;
  loadStoredWallet: () => void;
}>((set) => ({
  chain: (storage.getString(SELECTED_CHAIN) as string) ?? 'eip155:1',
  account: {
    name: storage.getString(SELECTED_ACCOUNT)?.split(':')[0] ?? '',
    address: storage.getString(SELECTED_ACCOUNT)?.split(':')[1] ?? '',
  },

  setChain: (chain) => {
    storage.set(SELECTED_CHAIN, chain);
    set({ chain });
  },

  setAccount: ({ name, address }) => {
    storage.set(SELECTED_ACCOUNT, `${name}:${address}`);
    set({ account: { name, address } });
  },

  loadStoredWallet: () => {
    const chain = storage.getString(SELECTED_CHAIN) as string;
    const account_store = storage.getString(SELECTED_ACCOUNT);
    const account = {
      name: account_store?.split(':')[0] ?? '',
      address: account_store?.split(':')[1] ?? '',
    };

    set({
      chain: chain ?? 'eip155:1',
      account: account,
    });
  },
}));

// ===== Initialization Helpers =====
export const loadSelectedMode = async () => {
  const stored = storage.getString(SELECTED_MODE) as WalletMode | null;
  if (stored === 'hot' || stored === 'cold') {
    useModeApp.getState().setMode(stored);
  } else {
    storage.set(SELECTED_MODE, 'hot');
    useModeApp.getState().setMode('hot');
  }
};

export const loadWallet = async () => {
  useWallet.getState().loadStoredWallet();
};
