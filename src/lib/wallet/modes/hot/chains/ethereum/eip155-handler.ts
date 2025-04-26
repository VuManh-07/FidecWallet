import { providers } from 'ethers';

import { EIP155_SIGNING_METHODS } from '@/constants/chain-method';
import { EIP155_CHAINS, type TEIP155Chain } from '@/constants/eip155-data';
import { type EvmMsgParam, type EvmTxParam } from '@/types';

import { getWallet } from './eip155-util';

export async function handlerEIP155(
  param: EvmTxParam | EvmMsgParam
): Promise<string> {
  const { chain, signer, method } = param;
  const wallet = await getWallet(chain, signer);

  try {
    switch (method) {
      case EIP155_SIGNING_METHODS.ETH_SIGN:
        if ('message' in param && param.message) {
          return await wallet.signMessage(param.message);
        }
        throw new Error('Missing `message` for ETH_SIGN');

      case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION:
        if ('tx' in param && param.tx) {
          return await wallet.signTransaction(param.tx);
        }
        throw new Error('Missing `tx` for ETH_SIGN_TRANSACTION');

      case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
        if (!('tx' in param) || !param.tx) {
          throw new Error('Missing `tx` for ETH_SEND_TRANSACTION');
        }

        const rpcUrl = EIP155_CHAINS[chain as TEIP155Chain].rpc;
        const provider = new providers.JsonRpcProvider(rpcUrl);
        const connected = wallet.connect(provider);
        const txResponse = await connected.sendTransaction(param.tx);
        const txHash = txResponse.hash;
        const receipt = await txResponse.wait();

        console.log(
          `Transaction broadcasted on ${chain}, txHash: ${txHash}, status: ${receipt.status}`
        );
        return txHash;

      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  } catch (err: any) {
    // Nếu muốn preserve stack gốc, ném luôn err
    throw err;
  }
}
