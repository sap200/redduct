import { Writer, Reader } from 'protobufjs/minimal';
import { Order } from '../redduct/order';
import { Cartitem } from '../redduct/cartitem';
import { Product } from '../redduct/product';
export declare const protobufPackage = "sap200.redduct.redduct";
/** GenesisState defines the redduct module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    orderList: Order[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    orderCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    cartitemList: Cartitem[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    cartitemCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    productList: Product[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    productCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
