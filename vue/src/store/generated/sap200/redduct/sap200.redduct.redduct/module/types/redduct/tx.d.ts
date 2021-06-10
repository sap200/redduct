import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.redduct.redduct";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateOrder {
    creator: string;
    producthash: string;
    seller: string;
    deliveryaddress: string;
    quantity: number;
    status: number;
    paid: number;
    totalamount: number;
}
export interface MsgCreateOrderResponse {
    id: number;
}
export interface MsgUpdateOrder {
    creator: string;
    id: number;
    producthash: string;
    seller: string;
    deliveryaddress: string;
    quantity: number;
    status: number;
    paid: number;
    totalamount: number;
}
export interface MsgUpdateOrderResponse {
}
export interface MsgDeleteOrder {
    creator: string;
    id: number;
}
export interface MsgDeleteOrderResponse {
}
export interface MsgCreateCartitem {
    creator: string;
    producthash: string;
    seller: string;
    price: number;
    quantity: number;
}
export interface MsgCreateCartitemResponse {
    id: number;
}
export interface MsgUpdateCartitem {
    creator: string;
    id: number;
    producthash: string;
    seller: string;
    price: number;
    quantity: number;
}
export interface MsgUpdateCartitemResponse {
}
export interface MsgDeleteCartitem {
    creator: string;
    id: number;
}
export interface MsgDeleteCartitemResponse {
}
export interface MsgCreateProduct {
    creator: string;
    ipfshash: string;
    quantity: number;
}
export interface MsgCreateProductResponse {
    id: number;
}
export interface MsgUpdateProduct {
    creator: string;
    id: number;
    ipfshash: string;
    quantity: number;
}
export interface MsgUpdateProductResponse {
}
export interface MsgDeleteProduct {
    creator: string;
    id: number;
}
export interface MsgDeleteProductResponse {
}
export declare const MsgCreateOrder: {
    encode(message: MsgCreateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder;
    fromJSON(object: any): MsgCreateOrder;
    toJSON(message: MsgCreateOrder): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder;
};
export declare const MsgCreateOrderResponse: {
    encode(message: MsgCreateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse;
    fromJSON(object: any): MsgCreateOrderResponse;
    toJSON(message: MsgCreateOrderResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse;
};
export declare const MsgUpdateOrder: {
    encode(message: MsgUpdateOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder;
    fromJSON(object: any): MsgUpdateOrder;
    toJSON(message: MsgUpdateOrder): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder;
};
export declare const MsgUpdateOrderResponse: {
    encode(_: MsgUpdateOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse;
    fromJSON(_: any): MsgUpdateOrderResponse;
    toJSON(_: MsgUpdateOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse;
};
export declare const MsgDeleteOrder: {
    encode(message: MsgDeleteOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder;
    fromJSON(object: any): MsgDeleteOrder;
    toJSON(message: MsgDeleteOrder): unknown;
    fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder;
};
export declare const MsgDeleteOrderResponse: {
    encode(_: MsgDeleteOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse;
    fromJSON(_: any): MsgDeleteOrderResponse;
    toJSON(_: MsgDeleteOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse;
};
export declare const MsgCreateCartitem: {
    encode(message: MsgCreateCartitem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCartitem;
    fromJSON(object: any): MsgCreateCartitem;
    toJSON(message: MsgCreateCartitem): unknown;
    fromPartial(object: DeepPartial<MsgCreateCartitem>): MsgCreateCartitem;
};
export declare const MsgCreateCartitemResponse: {
    encode(message: MsgCreateCartitemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCartitemResponse;
    fromJSON(object: any): MsgCreateCartitemResponse;
    toJSON(message: MsgCreateCartitemResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCartitemResponse>): MsgCreateCartitemResponse;
};
export declare const MsgUpdateCartitem: {
    encode(message: MsgUpdateCartitem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCartitem;
    fromJSON(object: any): MsgUpdateCartitem;
    toJSON(message: MsgUpdateCartitem): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCartitem>): MsgUpdateCartitem;
};
export declare const MsgUpdateCartitemResponse: {
    encode(_: MsgUpdateCartitemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCartitemResponse;
    fromJSON(_: any): MsgUpdateCartitemResponse;
    toJSON(_: MsgUpdateCartitemResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCartitemResponse>): MsgUpdateCartitemResponse;
};
export declare const MsgDeleteCartitem: {
    encode(message: MsgDeleteCartitem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCartitem;
    fromJSON(object: any): MsgDeleteCartitem;
    toJSON(message: MsgDeleteCartitem): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCartitem>): MsgDeleteCartitem;
};
export declare const MsgDeleteCartitemResponse: {
    encode(_: MsgDeleteCartitemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCartitemResponse;
    fromJSON(_: any): MsgDeleteCartitemResponse;
    toJSON(_: MsgDeleteCartitemResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCartitemResponse>): MsgDeleteCartitemResponse;
};
export declare const MsgCreateProduct: {
    encode(message: MsgCreateProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProduct;
    fromJSON(object: any): MsgCreateProduct;
    toJSON(message: MsgCreateProduct): unknown;
    fromPartial(object: DeepPartial<MsgCreateProduct>): MsgCreateProduct;
};
export declare const MsgCreateProductResponse: {
    encode(message: MsgCreateProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateProductResponse;
    fromJSON(object: any): MsgCreateProductResponse;
    toJSON(message: MsgCreateProductResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateProductResponse>): MsgCreateProductResponse;
};
export declare const MsgUpdateProduct: {
    encode(message: MsgUpdateProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProduct;
    fromJSON(object: any): MsgUpdateProduct;
    toJSON(message: MsgUpdateProduct): unknown;
    fromPartial(object: DeepPartial<MsgUpdateProduct>): MsgUpdateProduct;
};
export declare const MsgUpdateProductResponse: {
    encode(_: MsgUpdateProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateProductResponse;
    fromJSON(_: any): MsgUpdateProductResponse;
    toJSON(_: MsgUpdateProductResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateProductResponse>): MsgUpdateProductResponse;
};
export declare const MsgDeleteProduct: {
    encode(message: MsgDeleteProduct, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProduct;
    fromJSON(object: any): MsgDeleteProduct;
    toJSON(message: MsgDeleteProduct): unknown;
    fromPartial(object: DeepPartial<MsgDeleteProduct>): MsgDeleteProduct;
};
export declare const MsgDeleteProductResponse: {
    encode(_: MsgDeleteProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteProductResponse;
    fromJSON(_: any): MsgDeleteProductResponse;
    toJSON(_: MsgDeleteProductResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteProductResponse>): MsgDeleteProductResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
    CreateCartitem(request: MsgCreateCartitem): Promise<MsgCreateCartitemResponse>;
    UpdateCartitem(request: MsgUpdateCartitem): Promise<MsgUpdateCartitemResponse>;
    DeleteCartitem(request: MsgDeleteCartitem): Promise<MsgDeleteCartitemResponse>;
    CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
    UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
    DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>;
    UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>;
    DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>;
    CreateCartitem(request: MsgCreateCartitem): Promise<MsgCreateCartitemResponse>;
    UpdateCartitem(request: MsgUpdateCartitem): Promise<MsgUpdateCartitemResponse>;
    DeleteCartitem(request: MsgDeleteCartitem): Promise<MsgDeleteCartitemResponse>;
    CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>;
    UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>;
    DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
