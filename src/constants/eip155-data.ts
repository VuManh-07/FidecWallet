/**
 * @desc Refference list of eip155 chains
 * @url https://chainlist.org
 */

/**
 * Types
 */
export type TEIP155Chain = keyof typeof EIP155_CHAINS;

export type EIP155Chain = {
  chainId: number;
  name: string;
  symbol: string;
  logo: string;
  rgb: string;
  rpc: string;
  namespace: string;
};
export const blockchainApiRpc = (chainId: number) => {
  return `https://rpc.walletconnect.org/v1?chainId=eip155:${chainId}&projectId=c3e4ffbd63f2e311a064de7eea4096cb`;
};
/**
 * Chains
 */
export const EIP155_MAINNET_CHAINS: Record<string, EIP155Chain> = {
  'eip155:1': {
    chainId: 1,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://seekvectors.com/storage/images/Ethereum%20-02.svg',
    rgb: '99, 125, 234',
    rpc: blockchainApiRpc(1),
    namespace: 'eip155',
  },
  'eip155:43114': {
    chainId: 43114,
    name: 'Avalanche C-Chain',
    symbol: 'AVAX',
    logo: 'https://seekvectors.com/storage/images/Avalanche-01.svg',
    rgb: '232, 65, 66',
    rpc: blockchainApiRpc(43114),
    namespace: 'eip155',
  },
  'eip155:137': {
    chainId: 137,
    name: 'Polygon',
    symbol: 'MATIC',
    logo: 'https://seekvectors.com/storage/images/e461c53d04bfd838b791dbfdcca36060.svg',
    rgb: '130, 71, 229',
    rpc: blockchainApiRpc(137),
    namespace: 'eip155',
  },
  'eip155:10': {
    chainId: 10,
    name: 'Optimism',
    symbol: 'ETH',
    logo: 'https://seekvectors.com/storage/images/Chimpion-01.svg',
    rgb: '235, 0, 25',
    rpc: blockchainApiRpc(10),
    namespace: 'eip155',
  },
  'eip155:42161': {
    chainId: 42161,
    name: 'Arbitrum',
    symbol: 'ETH',
    logo: 'https://seekvectors.com/storage/images/Arbitrum.svg',
    rgb: '27, 74, 220',
    rpc: blockchainApiRpc(42161),
    namespace: 'eip155',
  },
};

export const EIP155_TEST_CHAINS: Record<string, EIP155Chain> = {
  'eip155:5': {
    chainId: 5,
    name: 'Ethereum Goerli',
    symbol: 'gETH',
    logo: 'https://seekvectors.com/storage/images/Ethereum%20-02.svg',
    rgb: '99, 125, 234',
    rpc: blockchainApiRpc(5),
    namespace: 'eip155',
  },
  'eip155:11155111': {
    chainId: 11155111,
    name: 'Ethereum Sepolia',
    symbol: 'sETH',
    logo: 'https://seekvectors.com/storage/images/Ethereum%20-02.svg',
    rgb: '99, 125, 234',
    rpc: blockchainApiRpc(11155111),
    namespace: 'eip155',
  },
  'eip155:43113': {
    chainId: 43113,
    name: 'Avalanche Fuji',
    symbol: 'fAVAX',
    logo: 'https://seekvectors.com/storage/images/Avalanche-01.svg',
    rgb: '232, 65, 66',
    rpc: blockchainApiRpc(43113),
    namespace: 'eip155',
  },
};

export const EIP155_CHAINS = {
  ...EIP155_MAINNET_CHAINS,
  ...EIP155_TEST_CHAINS,
};
