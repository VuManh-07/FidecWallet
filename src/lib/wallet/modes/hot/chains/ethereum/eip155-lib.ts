import type { TransactionRequest } from '@ethersproject/abstract-provider';
import { type providers, Wallet } from 'ethers';

export interface EIP155Wallet {
  getMnemonic(): string;
  getPrivateKey(): string;
  getAddress(): string;
  signMessage(message: string): Promise<string>;
  signTypedData(domain: any, types: any, data: any): Promise<string>;
  connect(provider: providers.JsonRpcProvider): Wallet;
  signTransaction(tx: TransactionRequest): Promise<string>;
}

/**
 * EIP155Lib: wrap ethers.js Wallet with utility methods
 */
export default class EIP155Lib implements EIP155Wallet {
  private wallet: Wallet;

  private constructor(wallet: Wallet) {
    this.wallet = wallet;
  }

  /**
   * Initialize from mnemonic and HD path
   */
  static init({
    mnemonic,
    path = `m/44'/60'/0'/0/0`,
  }: {
    mnemonic: string;
    path?: string;
  }) {
    const wallet = Wallet.fromMnemonic(mnemonic, path);
    return new EIP155Lib(wallet);
  }

  getMnemonic(): string {
    return this.wallet.mnemonic?.phrase || '';
  }

  getPrivateKey(): string {
    return this.wallet.privateKey;
  }

  getAddress(): string {
    return this.wallet.address;
  }

  signMessage(message: string): Promise<string> {
    return this.wallet.signMessage(message);
  }

  signTypedData(domain: any, types: any, data: any): Promise<string> {
    return this.wallet._signTypedData(domain, types, data);
  }

  connect(provider: providers.JsonRpcProvider) {
    return this.wallet.connect(provider);
  }

  signTransaction(tx: TransactionRequest): Promise<string> {
    return this.wallet.signTransaction(tx);
  }
}
