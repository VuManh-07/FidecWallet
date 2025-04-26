import * as bip39 from 'bip39';

import { ALL_CHAINS } from '@/constants/chains-util';

import { decryptMnemonic, encryptMnemonic } from './vault-utils/aes';
import {
  deleteEncryptedMnemonic,
  loadEncryptedMnemonic,
  saveEncryptedMnemonic,
} from './vault-utils/secure-store';
import { validatePartialMnemonic } from './vault-utils/utils';

/**
 * VaultBase: manage encrypted mnemonic & derive wallets
 */
export class VaultBase {
  private encryptedMnemonic: string | null = null;
  private mnemonicCache: string | null = null;
  private readonly password: string;

  constructor(password: string) {
    this.password = password;
    console.log(password, 'pw');
  }

  /**
   * Initialize vault: generate or decrypt mnemonic
   */
  async init(): Promise<string> {
    try {
      const stored = await loadEncryptedMnemonic();
      if (stored) {
        this.encryptedMnemonic = stored;
        this.mnemonicCache = decryptMnemonic(stored, this.password);
        return this.mnemonicCache;
      }
      const mnemonic = bip39.generateMnemonic(256);
      this.mnemonicCache = mnemonic;
      return mnemonic;
    } catch (err) {
      throw new Error('Password error!');
    }
  }

  /**
   * Confirm partial mnemonic input
   */
  async confirm(mnemonic: string): Promise<boolean> {
    if (!this.mnemonicCache) throw new Error('Vault not initialized.');
    const ok = validatePartialMnemonic(this.mnemonicCache, mnemonic);
    if (ok) {
      const encrypted = encryptMnemonic(this.mnemonicCache, this.password);
      await saveEncryptedMnemonic(encrypted);
      this.encryptedMnemonic = encrypted;
      this.mnemonicCache = null;
    }
    return ok;
  }

  /**
   * Change vault password
   */
  async changePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> {
    const encrypted = await loadEncryptedMnemonic();
    if (!encrypted) throw new Error('Vault not initialized.');
    try {
      const decrypted = decryptMnemonic(encrypted, oldPassword);
      this.encryptedMnemonic = encryptMnemonic(decrypted, newPassword);
      await saveEncryptedMnemonic(this.encryptedMnemonic);
      return true;
    } catch {
      throw new Error('Password error!');
    }
  }

  /**
   * Clear vault (remove encrypted mnemonic)
   */
  async clear(): Promise<void> {
    this.encryptedMnemonic = null;
    this.mnemonicCache = null;
    await deleteEncryptedMnemonic();
  }

  /**
   * Check if vault is initialized
   */
  isInitialized(): boolean {
    return this.encryptedMnemonic != null;
  }

  /**
   * List supported chains
   */
  getSupportedChains(): string[] {
    return Object.keys(ALL_CHAINS);
  }
}
