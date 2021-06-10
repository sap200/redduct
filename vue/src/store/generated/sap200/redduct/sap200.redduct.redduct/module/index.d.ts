import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateProduct: (data: MsgUpdateProduct) => EncodeObject;
    msgCreateCartitem: (data: MsgCreateCartitem) => EncodeObject;
    msgCreateProduct: (data: MsgCreateProduct) => EncodeObject;
    msgDeleteOrder: (data: MsgDeleteOrder) => EncodeObject;
    msgDeleteCartitem: (data: MsgDeleteCartitem) => EncodeObject;
    msgUpdateOrder: (data: MsgUpdateOrder) => EncodeObject;
    msgUpdateCartitem: (data: MsgUpdateCartitem) => EncodeObject;
    msgCreateOrder: (data: MsgCreateOrder) => EncodeObject;
    msgDeleteProduct: (data: MsgDeleteProduct) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
