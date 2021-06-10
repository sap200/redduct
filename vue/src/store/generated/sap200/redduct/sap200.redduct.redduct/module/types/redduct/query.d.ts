import { Reader, Writer } from 'protobufjs/minimal';
import { Order } from '../redduct/order';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Cartitem } from '../redduct/cartitem';
import { Product } from '../redduct/product';
export declare const protobufPackage = "sap200.redduct.redduct";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetOrderRequest {
    id: number;
}
export interface QueryGetOrderResponse {
    Order: Order | undefined;
}
export interface QueryAllOrderRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllOrderResponse {
    Order: Order[];
    pagination: PageResponse | undefined;
}
export interface QueryGetCartitemRequest {
    id: number;
}
export interface QueryGetCartitemResponse {
    Cartitem: Cartitem | undefined;
}
export interface QueryAllCartitemRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCartitemResponse {
    Cartitem: Cartitem[];
    pagination: PageResponse | undefined;
}
export interface QueryGetProductRequest {
    id: number;
}
export interface QueryGetProductResponse {
    Product: Product | undefined;
}
export interface QueryAllProductRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllProductResponse {
    Product: Product[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetOrderRequest: {
    encode(message: QueryGetOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest;
    fromJSON(object: any): QueryGetOrderRequest;
    toJSON(message: QueryGetOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest;
};
export declare const QueryGetOrderResponse: {
    encode(message: QueryGetOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse;
    fromJSON(object: any): QueryGetOrderResponse;
    toJSON(message: QueryGetOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse;
};
export declare const QueryAllOrderRequest: {
    encode(message: QueryAllOrderRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest;
    fromJSON(object: any): QueryAllOrderRequest;
    toJSON(message: QueryAllOrderRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest;
};
export declare const QueryAllOrderResponse: {
    encode(message: QueryAllOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse;
    fromJSON(object: any): QueryAllOrderResponse;
    toJSON(message: QueryAllOrderResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse;
};
export declare const QueryGetCartitemRequest: {
    encode(message: QueryGetCartitemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCartitemRequest;
    fromJSON(object: any): QueryGetCartitemRequest;
    toJSON(message: QueryGetCartitemRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCartitemRequest>): QueryGetCartitemRequest;
};
export declare const QueryGetCartitemResponse: {
    encode(message: QueryGetCartitemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCartitemResponse;
    fromJSON(object: any): QueryGetCartitemResponse;
    toJSON(message: QueryGetCartitemResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCartitemResponse>): QueryGetCartitemResponse;
};
export declare const QueryAllCartitemRequest: {
    encode(message: QueryAllCartitemRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCartitemRequest;
    fromJSON(object: any): QueryAllCartitemRequest;
    toJSON(message: QueryAllCartitemRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCartitemRequest>): QueryAllCartitemRequest;
};
export declare const QueryAllCartitemResponse: {
    encode(message: QueryAllCartitemResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCartitemResponse;
    fromJSON(object: any): QueryAllCartitemResponse;
    toJSON(message: QueryAllCartitemResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCartitemResponse>): QueryAllCartitemResponse;
};
export declare const QueryGetProductRequest: {
    encode(message: QueryGetProductRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProductRequest;
    fromJSON(object: any): QueryGetProductRequest;
    toJSON(message: QueryGetProductRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetProductRequest>): QueryGetProductRequest;
};
export declare const QueryGetProductResponse: {
    encode(message: QueryGetProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetProductResponse;
    fromJSON(object: any): QueryGetProductResponse;
    toJSON(message: QueryGetProductResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetProductResponse>): QueryGetProductResponse;
};
export declare const QueryAllProductRequest: {
    encode(message: QueryAllProductRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProductRequest;
    fromJSON(object: any): QueryAllProductRequest;
    toJSON(message: QueryAllProductRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllProductRequest>): QueryAllProductRequest;
};
export declare const QueryAllProductResponse: {
    encode(message: QueryAllProductResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllProductResponse;
    fromJSON(object: any): QueryAllProductResponse;
    toJSON(message: QueryAllProductResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllProductResponse>): QueryAllProductResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a order by id. */
    Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    /** Queries a list of order items. */
    OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
    /** Queries a cartitem by id. */
    Cartitem(request: QueryGetCartitemRequest): Promise<QueryGetCartitemResponse>;
    /** Queries a list of cartitem items. */
    CartitemAll(request: QueryAllCartitemRequest): Promise<QueryAllCartitemResponse>;
    /** Queries a product by id. */
    Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>;
    /** Queries a list of product items. */
    ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
    Cartitem(request: QueryGetCartitemRequest): Promise<QueryGetCartitemResponse>;
    CartitemAll(request: QueryAllCartitemRequest): Promise<QueryAllCartitemResponse>;
    Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>;
    ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
