/**
 * Types
 */
export type TMultiversxChain = keyof typeof MULTIVERSX_MAINNET_CHAINS;

/**
 * Chains
 */
export const MULTIVERSX_MAINNET_CHAINS = {
  'mvx:1': {
    chainId: '1',
    name: 'MultiversX',
    logo: '/chain-logos/multiversx-1.svg',
    rgb: '43, 45, 46',
    rpc: '',
    namespace: 'mvx',
  },
};

export const MULTIVERSX_TEST_CHAINS = {
  'mvx:D': {
    chainId: 'D',
    name: 'MultiversX Devnet',
    logo: '/chain-logos/multiversx-1.svg',
    rgb: '43, 45, 46',
    rpc: '',
    namespace: 'mvx',
  },
  // Keep only one Test Chain visible
  // 'mvx:T': {
  //   chainId: 'T',
  //   name: 'MultiversX Testnet',
  //   logo: '/chain-logos/multiversx-1.svg',
  //   rgb: '43, 45, 46',
  //   rpc: '',
  //   namespace: 'mvx'
  // }
};

export const MULTIVERSX_CHAINS = {
  ...MULTIVERSX_MAINNET_CHAINS,
  ...MULTIVERSX_TEST_CHAINS,
};
