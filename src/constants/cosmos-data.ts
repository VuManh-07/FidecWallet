export type TCosmosChain = keyof typeof COSMOS_MAINNET_CHAINS;

/**
 * Chains
 */
export const COSMOS_MAINNET_CHAINS = {
  'cosmos:cosmoshub-4': {
    chainId: 'cosmoshub-4',
    name: 'Cosmos Hub',
    logo: '/chain-logos/cosmos-cosmoshub-4.png',
    rgb: '107, 111, 147',
    rpc: '',
    namespace: 'cosmos',
  },
};

export const COSMOS_CHAINS = { ...COSMOS_MAINNET_CHAINS };
