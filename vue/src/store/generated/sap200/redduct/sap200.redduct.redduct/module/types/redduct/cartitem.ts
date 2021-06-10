/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'sap200.redduct.redduct'

export interface Cartitem {
  creator: string
  id: number
  producthash: string
  seller: string
  price: number
  quantity: number
}

const baseCartitem: object = { creator: '', id: 0, producthash: '', seller: '', price: 0, quantity: 0 }

export const Cartitem = {
  encode(message: Cartitem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.producthash !== '') {
      writer.uint32(26).string(message.producthash)
    }
    if (message.seller !== '') {
      writer.uint32(34).string(message.seller)
    }
    if (message.price !== 0) {
      writer.uint32(40).int32(message.price)
    }
    if (message.quantity !== 0) {
      writer.uint32(48).int32(message.quantity)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Cartitem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCartitem } as Cartitem
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
          message.producthash = reader.string()
          break
        case 4:
          message.seller = reader.string()
          break
        case 5:
          message.price = reader.int32()
          break
        case 6:
          message.quantity = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Cartitem {
    const message = { ...baseCartitem } as Cartitem
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
    if (object.producthash !== undefined && object.producthash !== null) {
      message.producthash = String(object.producthash)
    } else {
      message.producthash = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller)
    } else {
      message.seller = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price)
    } else {
      message.price = 0
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity)
    } else {
      message.quantity = 0
    }
    return message
  },

  toJSON(message: Cartitem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.producthash !== undefined && (obj.producthash = message.producthash)
    message.seller !== undefined && (obj.seller = message.seller)
    message.price !== undefined && (obj.price = message.price)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<Cartitem>): Cartitem {
    const message = { ...baseCartitem } as Cartitem
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
    if (object.producthash !== undefined && object.producthash !== null) {
      message.producthash = object.producthash
    } else {
      message.producthash = ''
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller
    } else {
      message.seller = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = 0
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
