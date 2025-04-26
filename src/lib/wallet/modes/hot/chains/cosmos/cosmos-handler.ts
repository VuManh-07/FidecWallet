import type { StdFee, StdSignDoc } from '@cosmjs/amino';
import {
  type DeliverTxResponse,
  SigningStargateClient,
} from '@cosmjs/stargate';
import type { SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

import { COSMOS_SIGNING_METHODS } from '@/constants/chain-method';
import { COSMOS_CHAINS, type TCosmosChain } from '@/constants/cosmos-data';
import type { CosmosTxParam } from '@/types';

import { DEFAULT_FEE } from './cosmos-lib';
import { getWallet } from './cosmos-util';

export async function handlerCosmos(param: CosmosTxParam): Promise<string> {
  const { method, chain, signer, signDoc, msgs, fee } = param;
  const wallet = await getWallet(chain, signer);

  switch (method) {
    case COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT: {
      // signDoc đã có đủ cấu trúc SignDoc protobuf
      const doc = signDoc as unknown as SignDoc;
      const { signature } = await wallet.signDirect(signer, doc);
      return signature;
    }

    case COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO: {
      // signDoc ở dạng StdSignDoc
      const doc = signDoc as StdSignDoc;
      const { signature } = await wallet.signAmino(signer, doc);
      return signature;
    }

    case COSMOS_SIGNING_METHODS.COSMOS_SEND_TRANSACTION: {
      if (!msgs || msgs.length === 0) {
        throw new Error('No msgs provided for broadcast');
      }

      const offlineSigner = wallet.getOfflineSigner();

      const rpcUrl = COSMOS_CHAINS[chain as TCosmosChain].rpc;
      const client = await SigningStargateClient.connectWithSigner(
        rpcUrl,
        offlineSigner
      );
      const address = await wallet.getAddress();
      const usedFee: StdFee = fee ?? DEFAULT_FEE;
      const result: DeliverTxResponse = await client.signAndBroadcast(
        address,
        msgs,
        usedFee
      );
      return result.transactionHash;
    }

    default:
      throw new Error(`Unsupported Cosmos method: ${method}`);
  }
}
