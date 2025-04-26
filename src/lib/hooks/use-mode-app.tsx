import { create } from 'zustand';

import { storage } from '@/lib/store/storage';

export type WalletMode = 'hot' | 'cold';

export const SELECTED_MODE = 'SELECTED_MODE';

export const useModeApp = create<{
  isBridge: boolean;
  mode: WalletMode;
  bridge: WalletMode | null;
  setIsBridge: (val: boolean) => void;
  setMode: (mode: WalletMode) => void;
  setBridge: (mode: WalletMode | null) => void;
  loadStoredMode: () => void;
}>((set) => ({
  isBridge: false,
  mode: (storage.getString(SELECTED_MODE) as WalletMode) ?? 'hot',
  bridge: null,
  setIsBridge: (val) => set({ isBridge: val }),
  setMode: (mode) => {
    storage.set(SELECTED_MODE, mode);
    set({ mode });
  },
  setBridge: (mode) => set({ bridge: mode }),
  loadStoredMode: () => {
    const stored = storage.getString(SELECTED_MODE);
    if (stored === 'hot' || stored === 'cold') {
      set({ mode: stored });
    } else {
      storage.set(SELECTED_MODE, 'hot');
      set({ mode: 'hot' });
    }
  },
}));
