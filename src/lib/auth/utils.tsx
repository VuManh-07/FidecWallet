// src/lib/utils.ts
import { getItem, removeItem, setItem } from '@/lib/store/storage';

export type TokenType = {
  access: string;
  refresh: string;
};

// Hot wallet token
const TOKEN_HOT = 'token.hot';

export const getToken = () => getItem<TokenType>(TOKEN_HOT);
export const setToken = (value: TokenType) =>
  setItem<TokenType>(TOKEN_HOT, value);
export const removeToken = () => removeItem(TOKEN_HOT);

// Cold wallet token
const TOKEN_COLD = 'token.cold';

export const getTokenCold = () => getItem<TokenType>(TOKEN_COLD);
export const setTokenCold = (value: TokenType) =>
  setItem<TokenType>(TOKEN_COLD, value);
export const removeTokenCold = () => removeItem(TOKEN_COLD);
