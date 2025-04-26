import { ethers } from 'ethers';

type EvmTxFormInput = {
  from: string;
  to: string;
  amount: string; // ví dụ: '0.001'
  gas?: string; // ví dụ: '0x5208'
  gasPrice?: string; // ví dụ: '0x09184e72a000'
  data?: string; // smart contract call nếu có
};

/**
 * Build transaction object for EVM chains
 */
export const buildEvmTxForm = ({
  from,
  to,
  amount,
  gas = '0x5208', // default = 21000 (gas standard tx)
  gasPrice,
  data,
}: EvmTxFormInput) => {
  return {
    tx: {
      from,
      to,
      value: ethers.utils.parseEther(amount).toHexString(),
      gas,
      ...(gasPrice && { gasPrice }),
      ...(data && { data }),
    },
  };
};

/**
 * Build personal message for EVM `personal_sign`
 */
export const buildEvmMessageForm = (message: string) => {
  return {
    message,
  };
};
