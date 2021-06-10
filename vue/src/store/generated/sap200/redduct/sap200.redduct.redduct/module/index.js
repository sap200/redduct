// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateProduct: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateProduct", value: data }),
        msgCreateCartitem: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateCartitem", value: data }),
        msgCreateProduct: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateProduct", value: data }),
        msgDeleteOrder: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteOrder", value: data }),
        msgDeleteCartitem: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteCartitem", value: data }),
        msgUpdateOrder: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateOrder", value: data }),
        msgUpdateCartitem: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgUpdateCartitem", value: data }),
        msgCreateOrder: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgCreateOrder", value: data }),
        msgDeleteProduct: (data) => ({ typeUrl: "/sap200.redduct.redduct.MsgDeleteProduct", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
