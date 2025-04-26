import { Secp256k1Wallet, type StdFee, type StdSignDoc } from '@cosmjs/amino';
import { fromHex } from '@cosmjs/encoding';
import { DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { type SignDoc } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { Wallet } from 'ethers';

const DEFAULT_PATH = "m/44'/118'/0'/0/0";
const DEFAULT_PREFIX = 'cosmos';
export const DEFAULT_FEE: StdFee = {
  amount: [{ denom: 'uatom', amount: '5000' }],
  gas: '200000',
};

interface IInitArguments {
  mnemonic: string;
  path?: string;
  prefix?: string;
}

export interface ICosmosWallet {
  getAddress(): Promise<string>;
  signDirect(address: string, signDoc: SignDoc): Promise<any>;
  signAmino(address: string, signDoc: StdSignDoc): Promise<any>;
}

export default class CosmosLib implements ICosmosWallet {
  private directSigner: DirectSecp256k1Wallet;
  private aminoSigner: Secp256k1Wallet;

  private constructor(
    directSigner: DirectSecp256k1Wallet,
    aminoSigner: Secp256k1Wallet
  ) {
    this.directSigner = directSigner;
    this.aminoSigner = aminoSigner;
  }

  /**
   * Factory method — chỉ cần mnemonic, path và prefix (có mặc định)
   */
  public static async init({
    mnemonic,
    path = DEFAULT_PATH,
    prefix = DEFAULT_PREFIX,
  }: IInitArguments): Promise<CosmosLib> {
    // 1. Tạo ethers.Wallet chỉ để derive privateKey từ mnemonic+path
    const ethWallet = Wallet.fromMnemonic(mnemonic, path);
    const privKey = fromHex(ethWallet.privateKey.replace(/^0x/, ''));

    // 2. Tạo các signer của CosmJS
    const direct = await DirectSecp256k1Wallet.fromKey(privKey, prefix);
    const amino = await Secp256k1Wallet.fromKey(privKey, prefix);
    return new CosmosLib(direct, amino);
  }

  public async getAddress(): Promise<string> {
    const [acc] = await this.directSigner.getAccounts();
    return acc.address;
  }

  public async signDirect(address: string, signDoc: SignDoc): Promise<any> {
    return this.directSigner.signDirect(address, signDoc);
  }

  public async signAmino(address: string, signDoc: StdSignDoc): Promise<any> {
    return this.aminoSigner.signAmino(address, signDoc);
  }

  public getOfflineSigner() {
    return this.directSigner;
  }
}
