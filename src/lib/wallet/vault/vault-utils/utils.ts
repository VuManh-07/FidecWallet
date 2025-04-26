import {
  COSMOS_SIGNING_METHODS,
  EIP155_SIGNING_METHODS,
  MULTIVERSX_SIGNING_METHODS,
  NEAR_SIGNING_METHODS,
  SOLANA_SIGNING_METHODS,
  TEZOS_SIGNING_METHODS,
  TRON_SIGNING_METHODS,
} from '@/constants/chain-method';
import {
  type EvmMsgParam,
  type EvmTxParam,
  type Param,
  type WalletMode,
} from '@/types';

import { buildEvmTxForm } from '../../modes/hot/chains/ethereum/eip155-form-builder';
import { handlerEIP155 } from '../../modes/hot/chains/ethereum/eip155-handler';

// --- 1. Partial mnemonic validator (giữ nguyên) ---
export function validatePartialMnemonic(
  mnemonicInternal: string,
  mnemonicExternal: string
): boolean {
  const words = new Set(mnemonicInternal.trim().toLowerCase().split(/\s+/));
  return mnemonicExternal
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .every((w) => words.has(w));
}

// --- 2. Method maps ---

const SEND_METHOD_MAP: Record<string, string> = {
  eip155: EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION,
  cosmos: COSMOS_SIGNING_METHODS.COSMOS_SIGN_DIRECT,
  near: NEAR_SIGNING_METHODS.NEAR_SIGN_AND_SEND_TRANSACTIONS,
  solana: SOLANA_SIGNING_METHODS.SOLANA_SIGN_TRANSACTION,
  tron: TRON_SIGNING_METHODS.TRON_SIGN_TRANSACTION,
  mvx: MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_MESSAGE,
  tezos: TEZOS_SIGNING_METHODS.TEZOS_GET_ACCOUNTS,
};

const SIGN_METHOD_MAP: Record<string, string> = {
  eip155: EIP155_SIGNING_METHODS.ETH_SIGN,
  cosmos: COSMOS_SIGNING_METHODS.COSMOS_SIGN_AMINO,
  near: NEAR_SIGNING_METHODS.NEAR_SIGN_MESSAGE,
  solana: SOLANA_SIGNING_METHODS.SOLANA_SIGN_MESSAGE,
  tron: TRON_SIGNING_METHODS.TRON_SIGN_MESSAGE,
  mvx: MULTIVERSX_SIGNING_METHODS.MULTIVERSX_SIGN_MESSAGE,
  tezos: TEZOS_SIGNING_METHODS.TEZOS_SIGN,
};

export function getMethodSendByChain(chain: string): string {
  const namespace = chain.split(':')[0];
  const method = SEND_METHOD_MAP[namespace];
  if (!method) throw new Error(`Unsupported chain for sending: ${namespace}`);
  return method;
}

export function getMethodSignByChain(chain: string): string {
  const namespace = chain.split(':')[0];
  const method = SIGN_METHOD_MAP[namespace];
  if (!method) throw new Error(`Unsupported chain for signing: ${namespace}`);
  return method;
}

// --- 3. Handlers map ---

type HandlerFn = (param: Param) => Promise<any>;

const HOT_HANDLERS: Record<string, HandlerFn> = {
  eip155: async (param) => {
    return handlerEIP155(param as EvmTxParam | EvmMsgParam);
  },
  // cosmos: handlerCosmos,
  // near:   handlerNear,
  // solana: handlerSolana,
  // tron:   handlerTron,
  // mvx:    handlerMultiversx,
  // tezos:  handlerTezos,
};

export async function walletManager(param: Param): Promise<any> {
  const { mode, chain } = param;
  const namespace = chain.split(':')[0];

  if (mode !== 'hot') {
    throw new Error(`Unsupported wallet mode: ${mode}`);
  }

  const handler = HOT_HANDLERS[namespace];
  if (!handler) {
    throw new Error(`No handler for chain: ${namespace}`);
  }

  return handler(param);
}

// --- 4. Param builder map ---

type TxBuilderFn = (opts: {
  from: string;
  to: string;
  amount: string;
  gas?: string;
}) => any;

const TX_BUILDER_MAP: Record<string, TxBuilderFn> = {
  eip155: ({ from, to, amount, gas }) =>
    buildEvmTxForm({ from, to, amount, gas }),
  // cosmos: buildCosmosTxForm,
  // near:   buildNearTxForm,
  // solana: buildSolanaTxForm,
  // tron:   buildTronTxForm,
  // mvx:    buildMultiversxTxForm,
  // tezos:  buildTezosTxForm,
};

export function buildFromData(params: {
  chain: string;
  from: string;
  to: string;
  amount: string;
  gas?: string;
}) {
  const namespace = params.chain.split(':')[0];
  const builder = TX_BUILDER_MAP[namespace];
  if (!builder) {
    throw new Error(`Unsupported chain for tx building: ${namespace}`);
  }
  return builder(params);
}

// --- 5. Param wallet factory (mở rộng dễ dàng) ---

interface CreateParamOptions {
  mode: WalletMode;
  chain: string;
  method: string;
  signer: string;
  formData: {
    tx?: EvmTxParam['tx'];
    message?: EvmMsgParam['message'];
  };
}

const PARAM_FACTORY_MAP: Record<string, (opts: CreateParamOptions) => Param> = {
  eip155: ({ mode, chain, method, signer, formData }) => {
    const base: Omit<Param, 'tx' | 'message'> = {
      mode,
      chain,
      method,
      signer,
    };
    if (formData.tx) return { ...base, tx: formData.tx } as EvmTxParam;
    if (formData.message)
      return { ...base, message: formData.message } as EvmMsgParam;
    throw new Error('Missing tx or message for EVM');
  },
  // cosmos: cosmosParamFactory,
  // near:   nearParamFactory,
  // …
};

export function createParamWallet(options: CreateParamOptions): Param {
  const namespace = options.chain.split(':')[0];
  const factory = PARAM_FACTORY_MAP[namespace];
  if (!factory) {
    throw new Error(`Unsupported chain namespace: ${namespace}`);
  }
  return factory(options);
}
