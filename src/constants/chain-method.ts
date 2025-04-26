export const BIP122_SIGNING_METHODS = {
  BIP122_SIGN_MESSAGE: 'signMessage',
  BIP122_GET_ACCOUNT_ADDRESSES: 'getAccountAddresses',
  BIP122_SEND_TRANSACTION: 'sendTransfer',
  BIP122_SIGN_PSBT: 'signPsbt',
};

export const EIP155_SIGNING_METHODS = {
  PERSONAL_SIGN: 'personal_sign',
  ETH_SIGN: 'eth_sign',
  ETH_SIGN_TRANSACTION: 'eth_signTransaction',
  ETH_SIGN_TYPED_DATA: 'eth_signTypedData',
  ETH_SIGN_TYPED_DATA_V3: 'eth_signTypedData_v3',
  ETH_SIGN_TYPED_DATA_V4: 'eth_signTypedData_v4',
  ETH_SEND_RAW_TRANSACTION: 'eth_sendRawTransaction',
  ETH_SEND_TRANSACTION: 'eth_sendTransaction',
  WALLET_CHECKOUT: 'wallet_checkout',
};

export const COSMOS_SIGNING_METHODS = {
  COSMOS_SIGN_DIRECT: 'cosmos_signDirect',
  COSMOS_SIGN_AMINO: 'cosmos_signAmino',
  COSMOS_SEND_TRANSACTION: 'cosmos_sendTransaction',
};

export const KADENA_SIGNING_METHODS = {
  KADENA_GET_ACCOUNTS: 'kadena_getAccounts_v1',
  KADENA_SIGN: 'kadena_sign_v1',
  KADENA_QUICKSIGN: 'kadena_quicksign_v1',
};

export const MULTIVERSX_SIGNING_METHODS = {
  MULTIVERSX_SIGN_TRANSACTION: 'mvx_signTransaction',
  MULTIVERSX_SIGN_TRANSACTIONS: 'mvx_signTransactions',
  MULTIVERSX_SIGN_MESSAGE: 'mvx_signMessage',
  MULTIVERSX_SIGN_LOGIN_TOKEN: 'mvx_signLoginToken',
  MULTIVERSX_SIGN_NATIVE_AUTH_TOKEN: 'mvx_signNativeAuthToken',
  MULTIVERSX_CANCEL_ACTION: 'mvx_cancelAction',
};

export const NEAR_SIGNING_METHODS = {
  NEAR_SIGN_IN: 'near_signIn',
  NEAR_SIGN_OUT: 'near_signOut',
  NEAR_GET_ACCOUNTS: 'near_getAccounts',
  NEAR_SIGN_TRANSACTION: 'near_signTransaction',
  NEAR_SIGN_AND_SEND_TRANSACTION: 'near_signAndSendTransaction',
  NEAR_SIGN_TRANSACTIONS: 'near_signTransactions',
  NEAR_SIGN_AND_SEND_TRANSACTIONS: 'near_signAndSendTransactions',
  NEAR_VERIFY_OWNER: 'near_verifyOwner',
  NEAR_SIGN_MESSAGE: 'near_signMessage',
};

export const POLKADOT_SIGNING_METHODS = {
  POLKADOT_SIGN_TRANSACTION: 'polkadot_signTransaction',
  POLKADOT_SIGN_MESSAGE: 'polkadot_signMessage',
};

export const SOLANA_SIGNING_METHODS = {
  SOLANA_SIGN_TRANSACTION: 'solana_signTransaction',
  SOLANA_SIGN_MESSAGE: 'solana_signMessage',
  SOLANA_SIGN_AND_SEND_TRANSACTION: 'solana_signAndSendTransaction',
  SOLANA_SIGN_ALL_TRANSACTIONS: 'solana_signAllTransactions',
  SOLANA_WALLET_CHECKOUT: 'wallet_checkout',
};

export const TEZOS_SIGNING_METHODS = {
  TEZOS_GET_ACCOUNTS: 'tezos_getAccounts',
  TEZOS_SEND: 'tezos_send',
  TEZOS_SIGN: 'tezos_sign',
};

export const TRON_SIGNING_METHODS = {
  TRON_SIGN_TRANSACTION: 'tron_signTransaction',
  TRON_SIGN_MESSAGE: 'tron_signMessage',
};

export const CHAINS_METHODS = {
  ...BIP122_SIGNING_METHODS,
  ...EIP155_SIGNING_METHODS,
  ...COSMOS_SIGNING_METHODS,
  ...KADENA_SIGNING_METHODS,
  ...MULTIVERSX_SIGNING_METHODS,
  ...NEAR_SIGNING_METHODS,
  ...POLKADOT_SIGNING_METHODS,
  ...SOLANA_SIGNING_METHODS,
  ...TEZOS_SIGNING_METHODS,
  ...TRON_SIGNING_METHODS,
};
