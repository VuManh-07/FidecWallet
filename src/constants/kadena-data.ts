export type TKadenaChain = keyof typeof KADENA_MAINNET_CHAINS;

/**
 * Chains
 */
export const KADENA_MAINNET_CHAINS = {
  'kadena:mainnet01': {
    chainId: 'mainnet01',
    name: 'Kadena',
    logo: '/chain-logos/kadena.png',
    rgb: '237, 9, 143',
    namespace: 'kadena',
  },
};

export const KADENA_TEST_CHAINS = {
  'kadena:testnet04': {
    chainId: 'testnet04',
    name: 'Kadena Testnet',
    logo: '/chain-logos/kadena.png',
    rgb: '237, 9, 143',
    namespace: 'kadena',
  },
};

export const KADENA_CHAINS = {
  ...KADENA_MAINNET_CHAINS,
  ...KADENA_TEST_CHAINS,
};
