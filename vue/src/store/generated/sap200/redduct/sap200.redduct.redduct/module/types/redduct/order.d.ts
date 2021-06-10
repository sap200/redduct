import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.redduct.redduct";
export interface Order {
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
export declare const Order: {
    encode(message: Order, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial(object: DeepPartial<Order>): Order;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
