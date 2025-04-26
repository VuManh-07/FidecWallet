/**
 * Types
 */
export type TNearChain = keyof typeof NEAR_TEST_CHAINS;

/**
 * Chains
 */
export const NEAR_MAINNET_CHAINS = {
  // TODO: Dev account creation isn't supported on NEAR Mainnet.
};

interface NearTestChains {
  [key: string]: ChainMetadata;
}

type ChainMetadata = {
  chainId: string;
  name: string;
  logo: string;
  rgb: string;
  rpc: string;
  namespace: string;
};

export const NEAR_TEST_CHAINS: NearTestChains = {
  'near:testnet': {
    chainId: 'testnet',
    name: 'NEAR Testnet',
    logo: '/chain-logos/near.png',
    rgb: '99, 125, 234',
    rpc: 'https://rpc.testnet.near.org',
    namespace: 'near',
  },
};

export const NEAR_CHAINS = { ...NEAR_MAINNET_CHAINS, ...NEAR_TEST_CHAINS };
