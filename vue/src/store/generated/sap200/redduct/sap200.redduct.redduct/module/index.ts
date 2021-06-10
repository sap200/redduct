// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateProduct } from "./types/redduct/tx";
import { MsgCreateCartitem } from "./types/redduct/tx";
import { MsgCreateProduct } from "./types/redduct/tx";
import { MsgDeleteOrder } from "./types/redduct/tx";
import { MsgDeleteCartitem } from "./types/redduct/tx";
import { MsgUpdateOrder } from "./types/redduct/tx";
import { MsgUpdateCartitem } from "./types/redduct/tx";
import { MsgCreateOrder } from "./types/redduct/tx";
import { MsgDeleteProduct } from "./types/redduct/tx";


const types = [
  ["/sap200.redduct.redduct.MsgUpdateProduct", MsgUpdateProduct],
  ["/sap200.redduct.redduct.MsgCreateCartitem", MsgCreateCartitem],
  ["/sap200.redduct.redduct.MsgCreateProduct", MsgCreateProduct],
  ["/sap200.redduct.redduct.MsgDeleteOrder", MsgDeleteOrder],
  ["/sap200.redduct.redduct.MsgDeleteCartitem", MsgDeleteCartitem],
  ["/sap200.redduct.redduct.MsgUpdateOrder", MsgUpdateOrder],
  ["/sap200.redduct.redduct.MsgUpdateCartitem", MsgUpdateCartitem],
  ["/sap200.redduct.redduct.MsgCreateOrder", MsgCreateOrder],
  ["/sap200.redduct.redduct.MsgDeleteProduct", MsgDeleteProduct],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateProduct: (data: MsgUpdateProduct): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateProduct", value: data }),
    msgCreateCartitem: (data: MsgCreateCartitem): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateCartitem", value: data }),
    msgCreateProduct: (data: MsgCreateProduct): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateProduct", value: data }),
    msgDeleteOrder: (data: MsgDeleteOrder): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteOrder", value: data }),
    msgDeleteCartitem: (data: MsgDeleteCartitem): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteCartitem", value: data }),
    msgUpdateOrder: (data: MsgUpdateOrder): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateOrder", value: data }),
    msgUpdateCartitem: (data: MsgUpdateCartitem): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateCartitem", value: data }),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateOrder", value: data }),
    msgDeleteProduct: (data: MsgDeleteProduct): EncodeObject => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteProduct", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
