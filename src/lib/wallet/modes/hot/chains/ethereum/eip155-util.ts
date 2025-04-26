import EIP155Lib from '@/lib/wallet/modes/hot/chains/ethereum/eip155-lib';
import { type VaultBase } from '@/lib/wallet/vault/vault-base';

export let eip155Wallets: Record<string, EIP155Lib> = {}; // { ['eip:155:{address}': string]: EIP155Lib }
export let eip155Addresses: string[] = [];

/**
 * Derive multiple wallets from mnemonic
 */
export function deriveEIP155Wallets(
  mnemonic: string,
  chain: string,
  count = 2
) {
  const basePath = `m/44'/60'/0'/0/`;
  const wallets: Record<string, EIP155Lib> = {};
  for (let i = 0; i < count; i++) {
    const path = `${basePath}${i}`;
    const lib = EIP155Lib.init({ mnemonic, path });
    wallets[`${chain}:${lib.getAddress()}`] = lib;
    console.log({ address: lib.getAddress(), chain });
  }
  eip155Wallets = wallets;
  eip155Addresses = Object.keys(wallets);
  return { eip155Wallets, eip155Addresses };
}

/**
 * Initialize EIP155 wallets directly from VaultBase
 */
export async function createOrRestoreEIP155Wallet(
  vault: VaultBase,
  chain: string,
  countPerChain = 1
) {
  const mnemonic = await vault.init();
  const { eip155Wallets, eip155Addresses } = deriveEIP155Wallets(
    mnemonic,
    chain,
    countPerChain
  );

  const parts = eip155Addresses[0].split(':');
  const address = parts[parts.length - 1];

  return { eip155Wallets, eip155Addresses, address };
}

/**
 * Get a wallet instance by RPC params
 */
export async function getWallet(
  chain: string,
  address: string
): Promise<EIP155Lib> {
  const wallet = eip155Wallets[`${chain}:${address}`];
  if (!wallet) throw new Error(`Wallet not found for address ${address}`);
  return wallet;
}
