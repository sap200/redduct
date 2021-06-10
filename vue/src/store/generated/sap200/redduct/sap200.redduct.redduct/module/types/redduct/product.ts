/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.redduct.redduct'

export interface Product {
  creator: string
  id: number
  ipfshash: string
  quantity: number
}

const baseProduct: object = { creator: '', id: 0, ipfshash: '', quantity: 0 }

export const Product = {
  encode(message: Product, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.ipfshash !== '') {
      writer.uint32(26).string(message.ipfshash)
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int32(message.quantity)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseProduct } as Product
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.ipfshash = reader.string()
          break
        case 4:
          message.quantity = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Product {
    const message = { ...baseProduct } as Product
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.ipfshash !== undefined && object.ipfshash !== null) {
      message.ipfshash = String(object.ipfshash)
    } else {
      message.ipfshash = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity)
    } else {
      message.quantity = 0
    }
    return message
  },

  toJSON(message: Product): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.ipfshash !== undefined && (obj.ipfshash = message.ipfshash)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = { ...baseProduct } as Product
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.ipfshash !== undefined && object.ipfshash !== null) {
      message.ipfshash = object.ipfshash
    } else {
      message.ipfshash = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity
    } else {
      message.quantity = 0
    }
    return message
  }
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
