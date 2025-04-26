// src/lib/use-auth.ts
import { create } from 'zustand';

import { createSelectors } from '../utils';
import type { TokenType } from './utils';
import {
  getToken,
  getTokenCold,
  removeToken,
  removeTokenCold,
  setToken,
  setTokenCold,
} from './utils';

interface WalletAuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
}

interface AuthState {
  hot: WalletAuthState;
  cold: WalletAuthState;
  signIn: (mode: 'hot' | 'cold', token: TokenType) => void;
  signOut: (mode: 'hot' | 'cold') => void;
  hydrate: () => void;
}

const _useAuth = create<AuthState>((set, get) => ({
  hot: { status: 'idle', token: null },
  cold: { status: 'idle', token: null },

  signIn: (mode, token) => {
    if (mode === 'hot') {
      setToken(token);
      set((state) => ({
        hot: { status: 'signIn', token },
        cold: state.cold,
      }));
    } else {
      setTokenCold(token);
      set((state) => ({
        cold: { status: 'signIn', token },
        hot: state.hot,
      }));
    }
  },

  signOut: (mode) => {
    if (mode === 'hot') {
      removeToken();
      set((state) => ({
        hot: { status: 'signOut', token: null },
        cold: state.cold,
      }));
    } else {
      removeTokenCold();
      set((state) => ({
        cold: { status: 'signOut', token: null },
        hot: state.hot,
      }));
    }
  },

  hydrate: () => {
    try {
      const hotToken = getToken();
      const coldToken = getTokenCold();

      if (hotToken !== null) {
        get().signIn('hot', hotToken);
      } else {
        get().signOut('hot');
      }

      if (coldToken !== null) {
        get().signIn('cold', coldToken);
      } else {
        get().signOut('cold');
      }
    } catch (e) {
      get().signOut('hot');
      get().signOut('cold');
    }
  },
}));

export const useAuth = createSelectors(_useAuth);

// Helpers
export const signIn = (mode: 'hot' | 'cold', token: TokenType) =>
  _useAuth.getState().signIn(mode, token);

export const signOut = (mode: 'hot' | 'cold') =>
  _useAuth.getState().signOut(mode);

export const hydrateAuth = () => _useAuth.getState().hydrate();
