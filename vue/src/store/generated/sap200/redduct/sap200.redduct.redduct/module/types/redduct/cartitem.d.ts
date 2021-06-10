import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "sap200.redduct.redduct";
export interface Cartitem {
    creator: string;
    id: number;
    producthash: string;
    seller: string;
    price: number;
    quantity: number;
}
export declare const Cartitem: {
    encode(message: Cartitem, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Cartitem;
    fromJSON(object: any): Cartitem;
    toJSON(message: Cartitem): unknown;
    fromPartial(object: DeepPartial<Cartitem>): Cartitem;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
