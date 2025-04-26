import * as SecureStore from 'expo-secure-store';

export const ENCRYPTED_MNEMONIC_KEY = 'ENCRYPTED_MNEMONIC';

export async function saveEncryptedMnemonic(encryptedData: string) {
  await SecureStore.setItemAsync(ENCRYPTED_MNEMONIC_KEY, encryptedData);
}

export async function loadEncryptedMnemonic(): Promise<string | null> {
  return await SecureStore.getItemAsync(ENCRYPTED_MNEMONIC_KEY);
}

export async function deleteEncryptedMnemonic(): Promise<void> {
  await SecureStore.deleteItemAsync(ENCRYPTED_MNEMONIC_KEY);
}
