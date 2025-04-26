import type { StdFee, StdSignDoc } from '@cosmjs/amino';

export interface BuildSendParams {
  fromAddress: string;
  toAddress: string;
  amount: string;
  denom: string;
  chainId: string;
  accountNumber?: string; // default '1'
  sequence?: string; // default '0'
  gas?: string; // default '200000'
  feeAmount?: string; // default '5000'
}

export function buildCosmosTxForm({
  fromAddress,
  toAddress,
  amount,
  denom,
  chainId,
  accountNumber = '1',
  sequence = '0',
  gas = '200000',
  feeAmount = '5000',
}: BuildSendParams) {
  // Chuẩn StdFee
  const fee: StdFee = {
    amount: [{ denom, amount: feeAmount }],
    gas,
  };

  // Chuẩn MsgSend dùng cho broadcast
  const msgs = [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress,
        toAddress,
        amount: [{ denom, amount }],
      },
    },
  ];

  // Chuẩn StdSignDoc để signAmino
  const signDoc: StdSignDoc = {
    account_number: accountNumber,
    chain_id: chainId,
    fee,
    memo: '',
    msgs: [
      {
        type: 'cosmos-sdk/MsgSend',
        value: {
          from_address: fromAddress,
          to_address: toAddress,
          amount: [{ denom, amount }],
        },
      },
    ],
    sequence,
  };

  return { fee, msgs, signDoc };
}
