import CryptoJS from 'crypto-js';

import { deriveKey } from './pbkdf2';

export function encryptMnemonic(mnemonic: string, password: string): string {
  const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
  const iv = CryptoJS.lib.WordArray.random(128 / 8);
  const key = CryptoJS.enc.Hex.parse(deriveKey(password, salt));
  const encrypted = CryptoJS.AES.encrypt(mnemonic, key, { iv });

  return JSON.stringify({
    cipherText: encrypted.toString(),
    iv: iv.toString(),
    salt,
  });
}

export function decryptMnemonic(data: string, password: string): string {
  const { cipherText, iv, salt } = JSON.parse(data);
  const key = CryptoJS.enc.Hex.parse(deriveKey(password, salt));
  const decrypted = CryptoJS.AES.decrypt(cipherText, key, {
    iv: CryptoJS.enc.Hex.parse(iv),
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
