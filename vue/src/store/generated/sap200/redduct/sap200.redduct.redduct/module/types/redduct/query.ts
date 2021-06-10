/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Order } from '../redduct/order'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Cartitem } from '../redduct/cartitem'
import { Product } from '../redduct/product'

export const protobufPackage = 'sap200.redduct.redduct'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetOrderRequest {
  id: number
}

export interface QueryGetOrderResponse {
  Order: Order | undefined
}

export interface QueryAllOrderRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllOrderResponse {
  Order: Order[]
  pagination: PageResponse | undefined
}

export interface QueryGetCartitemRequest {
  id: number
}

export interface QueryGetCartitemResponse {
  Cartitem: Cartitem | undefined
}

export interface QueryAllCartitemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCartitemResponse {
  Cartitem: Cartitem[]
  pagination: PageResponse | undefined
}

export interface QueryGetProductRequest {
  id: number
}

export interface QueryGetProductResponse {
  Product: Product | undefined
}

export interface QueryAllProductRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllProductResponse {
  Product: Product[]
  pagination: PageResponse | undefined
}

const baseQueryGetOrderRequest: object = { id: 0 }

export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetOrderRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = { ...baseQueryGetOrderRequest } as QueryGetOrderRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetOrderResponse: object = {}

export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: Writer = Writer.create()): Writer {
    if (message.Order !== undefined) {
      Order.encode(message.Order, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Order = Order.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromJSON(object.Order)
    } else {
      message.Order = undefined
    }
    return message
  },

  toJSON(message: QueryGetOrderResponse): unknown {
    const obj: any = {}
    message.Order !== undefined && (obj.Order = message.Order ? Order.toJSON(message.Order) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = { ...baseQueryGetOrderResponse } as QueryGetOrderResponse
    if (object.Order !== undefined && object.Order !== null) {
      message.Order = Order.fromPartial(object.Order)
    } else {
      message.Order = undefined
    }
    return message
  }
}

const baseQueryAllOrderRequest: object = {}

export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllOrderRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = { ...baseQueryAllOrderRequest } as QueryAllOrderRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllOrderResponse: object = {}

export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse
    message.Order = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Order.push(Order.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse
    message.Order = []
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllOrderResponse): unknown {
    const obj: any = {}
    if (message.Order) {
      obj.Order = message.Order.map((e) => (e ? Order.toJSON(e) : undefined))
    } else {
      obj.Order = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = { ...baseQueryAllOrderResponse } as QueryAllOrderResponse
    message.Order = []
    if (object.Order !== undefined && object.Order !== null) {
      for (const e of object.Order) {
        message.Order.push(Order.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetCartitemRequest: object = { id: 0 }

export const QueryGetCartitemRequest = {
  encode(message: QueryGetCartitemRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCartitemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCartitemRequest } as QueryGetCartitemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCartitemRequest {
    const message = { ...baseQueryGetCartitemRequest } as QueryGetCartitemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetCartitemRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCartitemRequest>): QueryGetCartitemRequest {
    const message = { ...baseQueryGetCartitemRequest } as QueryGetCartitemRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetCartitemResponse: object = {}

export const QueryGetCartitemResponse = {
  encode(message: QueryGetCartitemResponse, writer: Writer = Writer.create()): Writer {
    if (message.Cartitem !== undefined) {
      Cartitem.encode(message.Cartitem, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCartitemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCartitemResponse } as QueryGetCartitemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cartitem = Cartitem.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCartitemResponse {
    const message = { ...baseQueryGetCartitemResponse } as QueryGetCartitemResponse
    if (object.Cartitem !== undefined && object.Cartitem !== null) {
      message.Cartitem = Cartitem.fromJSON(object.Cartitem)
    } else {
      message.Cartitem = undefined
    }
    return message
  },

  toJSON(message: QueryGetCartitemResponse): unknown {
    const obj: any = {}
    message.Cartitem !== undefined && (obj.Cartitem = message.Cartitem ? Cartitem.toJSON(message.Cartitem) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCartitemResponse>): QueryGetCartitemResponse {
    const message = { ...baseQueryGetCartitemResponse } as QueryGetCartitemResponse
    if (object.Cartitem !== undefined && object.Cartitem !== null) {
      message.Cartitem = Cartitem.fromPartial(object.Cartitem)
    } else {
      message.Cartitem = undefined
    }
    return message
  }
}

const baseQueryAllCartitemRequest: object = {}

export const QueryAllCartitemRequest = {
  encode(message: QueryAllCartitemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCartitemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCartitemRequest } as QueryAllCartitemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCartitemRequest {
    const message = { ...baseQueryAllCartitemRequest } as QueryAllCartitemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCartitemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCartitemRequest>): QueryAllCartitemRequest {
    const message = { ...baseQueryAllCartitemRequest } as QueryAllCartitemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCartitemResponse: object = {}

export const QueryAllCartitemResponse = {
  encode(message: QueryAllCartitemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Cartitem) {
      Cartitem.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCartitemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCartitemResponse } as QueryAllCartitemResponse
    message.Cartitem = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cartitem.push(Cartitem.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCartitemResponse {
    const message = { ...baseQueryAllCartitemResponse } as QueryAllCartitemResponse
    message.Cartitem = []
    if (object.Cartitem !== undefined && object.Cartitem !== null) {
      for (const e of object.Cartitem) {
        message.Cartitem.push(Cartitem.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCartitemResponse): unknown {
    const obj: any = {}
    if (message.Cartitem) {
      obj.Cartitem = message.Cartitem.map((e) => (e ? Cartitem.toJSON(e) : undefined))
    } else {
      obj.Cartitem = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCartitemResponse>): QueryAllCartitemResponse {
    const message = { ...baseQueryAllCartitemResponse } as QueryAllCartitemResponse
    message.Cartitem = []
    if (object.Cartitem !== undefined && object.Cartitem !== null) {
      for (const e of object.Cartitem) {
        message.Cartitem.push(Cartitem.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetProductRequest: object = { id: 0 }

export const QueryGetProductRequest = {
  encode(message: QueryGetProductRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProductRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetProductRequest } as QueryGetProductRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetProductRequest {
    const message = { ...baseQueryGetProductRequest } as QueryGetProductRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetProductRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetProductRequest>): QueryGetProductRequest {
    const message = { ...baseQueryGetProductRequest } as QueryGetProductRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetProductResponse: object = {}

export const QueryGetProductResponse = {
  encode(message: QueryGetProductResponse, writer: Writer = Writer.create()): Writer {
    if (message.Product !== undefined) {
      Product.encode(message.Product, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetProductResponse } as QueryGetProductResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Product = Product.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetProductResponse {
    const message = { ...baseQueryGetProductResponse } as QueryGetProductResponse
    if (object.Product !== undefined && object.Product !== null) {
      message.Product = Product.fromJSON(object.Product)
    } else {
      message.Product = undefined
    }
    return message
  },

  toJSON(message: QueryGetProductResponse): unknown {
    const obj: any = {}
    message.Product !== undefined && (obj.Product = message.Product ? Product.toJSON(message.Product) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetProductResponse>): QueryGetProductResponse {
    const message = { ...baseQueryGetProductResponse } as QueryGetProductResponse
    if (object.Product !== undefined && object.Product !== null) {
      message.Product = Product.fromPartial(object.Product)
    } else {
      message.Product = undefined
    }
    return message
  }
}

const baseQueryAllProductRequest: object = {}

export const QueryAllProductRequest = {
  encode(message: QueryAllProductRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProductRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllProductRequest } as QueryAllProductRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProductRequest {
    const message = { ...baseQueryAllProductRequest } as QueryAllProductRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProductRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllProductRequest>): QueryAllProductRequest {
    const message = { ...baseQueryAllProductRequest } as QueryAllProductRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllProductResponse: object = {}

export const QueryAllProductResponse = {
  encode(message: QueryAllProductResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Product) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllProductResponse } as QueryAllProductResponse
    message.Product = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Product.push(Product.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllProductResponse {
    const message = { ...baseQueryAllProductResponse } as QueryAllProductResponse
    message.Product = []
    if (object.Product !== undefined && object.Product !== null) {
      for (const e of object.Product) {
        message.Product.push(Product.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllProductResponse): unknown {
    const obj: any = {}
    if (message.Product) {
      obj.Product = message.Product.map((e) => (e ? Product.toJSON(e) : undefined))
    } else {
      obj.Product = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllProductResponse>): QueryAllProductResponse {
    const message = { ...baseQueryAllProductResponse } as QueryAllProductResponse
    message.Product = []
    if (object.Product !== undefined && object.Product !== null) {
      for (const e of object.Product) {
        message.Product.push(Product.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a order by id. */
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>
  /** Queries a list of order items. */
  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse>
  /** Queries a cartitem by id. */
  Cartitem(request: QueryGetCartitemRequest): Promise<QueryGetCartitemResponse>
  /** Queries a list of cartitem items. */
  CartitemAll(request: QueryAllCartitemRequest): Promise<QueryAllCartitemResponse>
  /** Queries a product by id. */
  Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse>
  /** Queries a list of product items. */
  ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse> {
    const data = QueryGetOrderRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Order', data)
    return promise.then((data) => QueryGetOrderResponse.decode(new Reader(data)))
  }

  OrderAll(request: QueryAllOrderRequest): Promise<QueryAllOrderResponse> {
    const data = QueryAllOrderRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'OrderAll', data)
    return promise.then((data) => QueryAllOrderResponse.decode(new Reader(data)))
  }

  Cartitem(request: QueryGetCartitemRequest): Promise<QueryGetCartitemResponse> {
    const data = QueryGetCartitemRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Cartitem', data)
    return promise.then((data) => QueryGetCartitemResponse.decode(new Reader(data)))
  }

  CartitemAll(request: QueryAllCartitemRequest): Promise<QueryAllCartitemResponse> {
    const data = QueryAllCartitemRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'CartitemAll', data)
    return promise.then((data) => QueryAllCartitemResponse.decode(new Reader(data)))
  }

  Product(request: QueryGetProductRequest): Promise<QueryGetProductResponse> {
    const data = QueryGetProductRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Product', data)
    return promise.then((data) => QueryGetProductResponse.decode(new Reader(data)))
  }

  ProductAll(request: QueryAllProductRequest): Promise<QueryAllProductResponse> {
    const data = QueryAllProductRequest.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Query', 'ProductAll', data)
    return promise.then((data) => QueryAllProductResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
