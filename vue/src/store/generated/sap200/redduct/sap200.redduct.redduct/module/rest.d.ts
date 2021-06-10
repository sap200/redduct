export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RedductCartitem {
    creator?: string;
    /** @format uint64 */
    id?: string;
    producthash?: string;
    seller?: string;
    /** @format int32 */
    price?: number;
    /** @format int32 */
    quantity?: number;
}
export interface RedductMsgCreateCartitemResponse {
    /** @format uint64 */
    id?: string;
}
export interface RedductMsgCreateOrderResponse {
    /** @format uint64 */
    id?: string;
}
export interface RedductMsgCreateProductResponse {
    /** @format uint64 */
    id?: string;
}
export declare type RedductMsgDeleteCartitemResponse = object;
export declare type RedductMsgDeleteOrderResponse = object;
export declare type RedductMsgDeleteProductResponse = object;
export declare type RedductMsgUpdateCartitemResponse = object;
export declare type RedductMsgUpdateOrderResponse = object;
export declare type RedductMsgUpdateProductResponse = object;
export interface RedductOrder {
    creator?: string;
    /** @format uint64 */
    id?: string;
    producthash?: string;
    seller?: string;
    deliveryaddress?: string;
    /** @format int32 */
    quantity?: number;
    /** @format int32 */
    status?: number;
    /** @format int32 */
    paid?: number;
    /** @format int32 */
    totalamount?: number;
}
export interface RedductProduct {
    creator?: string;
    /** @format uint64 */
    id?: string;
    ipfshash?: string;
    /** @format int32 */
    quantity?: number;
}
export interface RedductQueryAllCartitemResponse {
    Cartitem?: RedductCartitem[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RedductQueryAllOrderResponse {
    Order?: RedductOrder[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RedductQueryAllProductResponse {
    Product?: RedductProduct[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RedductQueryGetCartitemResponse {
    Cartitem?: RedductCartitem;
}
export interface RedductQueryGetOrderResponse {
    Order?: RedductOrder;
}
export interface RedductQueryGetProductResponse {
    Product?: RedductProduct;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title redduct/cartitem.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCartitemAll
     * @summary Queries a list of cartitem items.
     * @request GET:/sap200/redduct/redduct/cartitem
     */
    queryCartitemAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RedductQueryAllCartitemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCartitem
     * @summary Queries a cartitem by id.
     * @request GET:/sap200/redduct/redduct/cartitem/{id}
     */
    queryCartitem: (id: string, params?: RequestParams) => Promise<HttpResponse<RedductQueryGetCartitemResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOrderAll
     * @summary Queries a list of order items.
     * @request GET:/sap200/redduct/redduct/order
     */
    queryOrderAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RedductQueryAllOrderResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryOrder
     * @summary Queries a order by id.
     * @request GET:/sap200/redduct/redduct/order/{id}
     */
    queryOrder: (id: string, params?: RequestParams) => Promise<HttpResponse<RedductQueryGetOrderResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryProductAll
     * @summary Queries a list of product items.
     * @request GET:/sap200/redduct/redduct/product
     */
    queryProductAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RedductQueryAllProductResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryProduct
     * @summary Queries a product by id.
     * @request GET:/sap200/redduct/redduct/product/{id}
     */
    queryProduct: (id: string, params?: RequestParams) => Promise<HttpResponse<RedductQueryGetProductResponse, RpcStatus>>;
}
export {};
