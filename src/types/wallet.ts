import { type StdFee, type StdSignDoc } from '@cosmjs/amino';
import { type SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

export type StatusType = 'Pending' | 'Confirmed' | 'Canceled';

export type Transaction = {
  id: string;
  dateTime: string;
  type: 'Send' | 'Receive';
  status: StatusType;
  amount: string;
  amountInUsd: string;
  currency: string;
};

export type WalletMode = 'hot' | 'cold';

export interface BaseParam {
  mode: WalletMode;
  chain: string; // ví dụ: 'eip155:1', 'cosmos:cosmoshub-4'
  method: string;
  signer: string;
}

export interface EvmTxParam extends BaseParam {
  tx: {
    from: string;
    to: string;
    value: string;
    gas?: string;
    gasPrice?: string;
    data?: string;
    nonce?: string;
  };
}

export interface EvmMsgParam extends BaseParam {
  message: string;
}

export interface CosmosTxParam extends BaseParam {
  signDoc: SignDoc | StdSignDoc;
  msgs?: any[];
  fee?: StdFee;
}

export interface SolanaTxParam extends BaseParam {
  tx: string; // base64 serialized transaction
}

export interface BitcoinPsbtParam extends BaseParam {
  psbt: string; // base64 psbt
}

export interface TronTxParam extends BaseParam {
  tx: {
    raw_data: any; // protobuf raw data
    signature?: string[];
  };
}

export type Param =
  | EvmTxParam
  | EvmMsgParam
  | CosmosTxParam
  | SolanaTxParam
  | BitcoinPsbtParam
  | TronTxParam;
