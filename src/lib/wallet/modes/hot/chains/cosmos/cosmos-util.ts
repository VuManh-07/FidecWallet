// File: cosmos-wallet-utils.ts

import CosmosLib from '@/lib/wallet/modes/hot/chains/cosmos/cosmos-lib';
import type { VaultBase } from '@/lib/wallet/vault/vault-base';

export type WalletKey = `${string}:${string}`; // e.g. "cosmoshub:cosmos1..."

export let cosmosWallets: Record<WalletKey, CosmosLib> = {};
export let cosmosAddresses: WalletKey[] = [];

/**
 * Thông tin mỗi Chain để derive đúng path/prefix
 */
export interface ChainInfo {
  /** unique key để tạo map key */
  key: string;
  /** bech32 prefix, ví dụ 'cosmos', 'osmo', 'juno' */
  prefix: string;
  /** BIP44 coin_type, thường 118 với Cosmos chains */
  bip44CoinType: number;
}

/**
 * Derive nhiều wallet cho 1 chain từ mnemonic
 * @param mnemonic 12/24 từ
 * @param chainInfo  Thông tin chain (key, prefix, coin_type)
 * @param count Số tài khoản muốn derive (mặc định 2)
 * @returns map { chainKey:address -> CosmosLib } và danh sách keys
 */
export async function deriveCosmosWallets(
  mnemonic: string,
  chainInfo: ChainInfo,
  count = 2
): Promise<{ wallets: Record<WalletKey, CosmosLib>; addresses: WalletKey[] }> {
  const { key, prefix, bip44CoinType } = chainInfo;
  const basePath = `m/44'/${bip44CoinType}'/0'/0/`;

  // Tạo song song các task derive
  const tasks = Array.from({ length: count }, (_, idx) =>
    (async () => {
      const path = `${basePath}${idx}`;
      try {
        const lib = await CosmosLib.init({ mnemonic, path, prefix });
        const address = await lib.getAddress();
        return { address, lib };
      } catch (error) {
        console.error(`Error deriving [${key}] index ${idx}:`, error);
        return null;
      }
    })()
  );

  const results = (await Promise.all(tasks)).filter(
    (r): r is { address: string; lib: CosmosLib } => r !== null
  );

  const wallets: Record<WalletKey, CosmosLib> = {};
  const addresses: WalletKey[] = [];

  for (const { address, lib } of results) {
    const mapKey = `${key}:${address}` as WalletKey;
    wallets[mapKey] = lib;
    addresses.push(mapKey);
  }

  // Cập nhật biến toàn cục nếu cần
  cosmosWallets = wallets;
  cosmosAddresses = addresses;

  return { wallets, addresses };
}

/**
 * Tạo hoặc restore wallet từ Vault, sau đó derive tài khoản
 * @param vault   Instance VaultBase (chứa logic tạo/mở khóa mnemonic)
 * @param chainInfo Thông tin chain
 * @param countPerChain Số tài khoản derive, mặc định 1
 */
export async function createOrRestoreCosmosWallet(
  vault: VaultBase,
  chainInfo: ChainInfo,
  countPerChain = 1
): Promise<{ wallets: Record<WalletKey, CosmosLib>; addresses: WalletKey[] }> {
  // Lấy hoặc tạo mnemonic (VaultBase.init có thể create mới hoặc return existing)
  const mnemonic = await vault.init();
  return deriveCosmosWallets(mnemonic, chainInfo, countPerChain);
}

/**
 * Lấy instance CosmosLib từ map đã derive
 * @param chainKey  Ví dụ 'cosmoshub'
 * @param address   Địa chỉ ví đã derive, ví dụ 'cosmos1...'
 */
export async function getWallet(
  chainKey: string,
  address: string
): Promise<CosmosLib> {
  const mapKey = `${chainKey}:${address}` as WalletKey;
  const wallet = cosmosWallets[mapKey];
  if (!wallet) {
    throw new Error(`Wallet not found for key "${mapKey}"`);
  }
  return wallet;
}
