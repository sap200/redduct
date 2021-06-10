/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'sap200.redduct.redduct'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateOrder {
  creator: string
  producthash: string
  seller: string
  deliveryaddress: string
  quantity: number
  status: number
  paid: number
  totalamount: number
}

export interface MsgCreateOrderResponse {
  id: number
}

export interface MsgUpdateOrder {
  creator: string
  id: number
  producthash: string
  seller: string
  deliveryaddress: string
  quantity: number
  status: number
  paid: number
  totalamount: number
}

export interface MsgUpdateOrderResponse {}

export interface MsgDeleteOrder {
  creator: string
  id: number
}

export interface MsgDeleteOrderResponse {}

export interface MsgCreateCartitem {
  creator: string
  producthash: string
  seller: string
  price: number
  quantity: number
}

export interface MsgCreateCartitemResponse {
  id: number
}

export interface MsgUpdateCartitem {
  creator: string
  id: number
  producthash: string
  seller: string
  price: number
  quantity: number
}

export interface MsgUpdateCartitemResponse {}

export interface MsgDeleteCartitem {
  creator: string
  id: number
}

export interface MsgDeleteCartitemResponse {}

export interface MsgCreateProduct {
  creator: string
  ipfshash: string
  quantity: number
}

export interface MsgCreateProductResponse {
  id: number
}

export interface MsgUpdateProduct {
  creator: string
  id: number
  ipfshash: string
  quantity: number
}

export interface MsgUpdateProductResponse {}

export interface MsgDeleteProduct {
  creator: string
  id: number
}

export interface MsgDeleteProductResponse {}

const baseMsgCreateOrder: object = { creator: '', producthash: '', seller: '', deliveryaddress: '', quantity: 0, status: 0, paid: 0, totalamount: 0 }

export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.producthash !== '') {
      writer.uint32(18).string(message.producthash)
    }
    if (message.seller !== '') {
      writer.uint32(26).string(message.seller)
    }
    if (message.deliveryaddress !== '') {
      writer.uint32(34).string(message.deliveryaddress)
    }
    if (message.quantity !== 0) {
      writer.uint32(40).int32(message.quantity)
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status)
    }
    if (message.paid !== 0) {
      writer.uint32(56).int32(message.paid)
    }
    if (message.totalamount !== 0) {
      writer.uint32(64).int32(message.totalamount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.producthash = reader.string()
          break
        case 3:
          message.seller = reader.string()
          break
        case 4:
          message.deliveryaddress = reader.string()
          break
        case 5:
          message.quantity = reader.int32()
          break
        case 6:
          message.status = reader.int32()
          break
        case 7:
          message.paid = reader.int32()
          break
        case 8:
          message.totalamount = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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
    if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
      message.deliveryaddress = String(object.deliveryaddress)
    } else {
      message.deliveryaddress = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity)
    } else {
      message.quantity = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status)
    } else {
      message.status = 0
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = Number(object.paid)
    } else {
      message.paid = 0
    }
    if (object.totalamount !== undefined && object.totalamount !== null) {
      message.totalamount = Number(object.totalamount)
    } else {
      message.totalamount = 0
    }
    return message
  },

  toJSON(message: MsgCreateOrder): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.producthash !== undefined && (obj.producthash = message.producthash)
    message.seller !== undefined && (obj.seller = message.seller)
    message.deliveryaddress !== undefined && (obj.deliveryaddress = message.deliveryaddress)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    message.status !== undefined && (obj.status = message.status)
    message.paid !== undefined && (obj.paid = message.paid)
    message.totalamount !== undefined && (obj.totalamount = message.totalamount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = { ...baseMsgCreateOrder } as MsgCreateOrder
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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
    if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
      message.deliveryaddress = object.deliveryaddress
    } else {
      message.deliveryaddress = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity
    } else {
      message.quantity = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid
    } else {
      message.paid = 0
    }
    if (object.totalamount !== undefined && object.totalamount !== null) {
      message.totalamount = object.totalamount
    } else {
      message.totalamount = 0
    }
    return message
  }
}

const baseMsgCreateOrderResponse: object = { id: 0 }

export const MsgCreateOrderResponse = {
  encode(message: MsgCreateOrderResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse
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

  fromJSON(object: any): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateOrderResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = { ...baseMsgCreateOrderResponse } as MsgCreateOrderResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateOrder: object = { creator: '', id: 0, producthash: '', seller: '', deliveryaddress: '', quantity: 0, status: 0, paid: 0, totalamount: 0 }

export const MsgUpdateOrder = {
  encode(message: MsgUpdateOrder, writer: Writer = Writer.create()): Writer {
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
    if (message.deliveryaddress !== '') {
      writer.uint32(42).string(message.deliveryaddress)
    }
    if (message.quantity !== 0) {
      writer.uint32(48).int32(message.quantity)
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status)
    }
    if (message.paid !== 0) {
      writer.uint32(64).int32(message.paid)
    }
    if (message.totalamount !== 0) {
      writer.uint32(72).int32(message.totalamount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder
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
          message.deliveryaddress = reader.string()
          break
        case 6:
          message.quantity = reader.int32()
          break
        case 7:
          message.status = reader.int32()
          break
        case 8:
          message.paid = reader.int32()
          break
        case 9:
          message.totalamount = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder
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
    if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
      message.deliveryaddress = String(object.deliveryaddress)
    } else {
      message.deliveryaddress = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = Number(object.quantity)
    } else {
      message.quantity = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = Number(object.status)
    } else {
      message.status = 0
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = Number(object.paid)
    } else {
      message.paid = 0
    }
    if (object.totalamount !== undefined && object.totalamount !== null) {
      message.totalamount = Number(object.totalamount)
    } else {
      message.totalamount = 0
    }
    return message
  },

  toJSON(message: MsgUpdateOrder): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.producthash !== undefined && (obj.producthash = message.producthash)
    message.seller !== undefined && (obj.seller = message.seller)
    message.deliveryaddress !== undefined && (obj.deliveryaddress = message.deliveryaddress)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    message.status !== undefined && (obj.status = message.status)
    message.paid !== undefined && (obj.paid = message.paid)
    message.totalamount !== undefined && (obj.totalamount = message.totalamount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateOrder>): MsgUpdateOrder {
    const message = { ...baseMsgUpdateOrder } as MsgUpdateOrder
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
    if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
      message.deliveryaddress = object.deliveryaddress
    } else {
      message.deliveryaddress = ''
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = object.quantity
    } else {
      message.quantity = 0
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
    }
    if (object.paid !== undefined && object.paid !== null) {
      message.paid = object.paid
    } else {
      message.paid = 0
    }
    if (object.totalamount !== undefined && object.totalamount !== null) {
      message.totalamount = object.totalamount
    } else {
      message.totalamount = 0
    }
    return message
  }
}

const baseMsgUpdateOrderResponse: object = {}

export const MsgUpdateOrderResponse = {
  encode(_: MsgUpdateOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse
    return message
  },

  toJSON(_: MsgUpdateOrderResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateOrderResponse>): MsgUpdateOrderResponse {
    const message = { ...baseMsgUpdateOrderResponse } as MsgUpdateOrderResponse
    return message
  }
}

const baseMsgDeleteOrder: object = { creator: '', id: 0 }

export const MsgDeleteOrder = {
  encode(message: MsgDeleteOrder, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder
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
    return message
  },

  toJSON(message: MsgDeleteOrder): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteOrder>): MsgDeleteOrder {
    const message = { ...baseMsgDeleteOrder } as MsgDeleteOrder
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
    return message
  }
}

const baseMsgDeleteOrderResponse: object = {}

export const MsgDeleteOrderResponse = {
  encode(_: MsgDeleteOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse
    return message
  },

  toJSON(_: MsgDeleteOrderResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteOrderResponse>): MsgDeleteOrderResponse {
    const message = { ...baseMsgDeleteOrderResponse } as MsgDeleteOrderResponse
    return message
  }
}

const baseMsgCreateCartitem: object = { creator: '', producthash: '', seller: '', price: 0, quantity: 0 }

export const MsgCreateCartitem = {
  encode(message: MsgCreateCartitem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.producthash !== '') {
      writer.uint32(18).string(message.producthash)
    }
    if (message.seller !== '') {
      writer.uint32(26).string(message.seller)
    }
    if (message.price !== 0) {
      writer.uint32(32).int32(message.price)
    }
    if (message.quantity !== 0) {
      writer.uint32(40).int32(message.quantity)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCartitem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCartitem } as MsgCreateCartitem
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.producthash = reader.string()
          break
        case 3:
          message.seller = reader.string()
          break
        case 4:
          message.price = reader.int32()
          break
        case 5:
          message.quantity = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCartitem {
    const message = { ...baseMsgCreateCartitem } as MsgCreateCartitem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateCartitem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.producthash !== undefined && (obj.producthash = message.producthash)
    message.seller !== undefined && (obj.seller = message.seller)
    message.price !== undefined && (obj.price = message.price)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCartitem>): MsgCreateCartitem {
    const message = { ...baseMsgCreateCartitem } as MsgCreateCartitem
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateCartitemResponse: object = { id: 0 }

export const MsgCreateCartitemResponse = {
  encode(message: MsgCreateCartitemResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCartitemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCartitemResponse } as MsgCreateCartitemResponse
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

  fromJSON(object: any): MsgCreateCartitemResponse {
    const message = { ...baseMsgCreateCartitemResponse } as MsgCreateCartitemResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCartitemResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCartitemResponse>): MsgCreateCartitemResponse {
    const message = { ...baseMsgCreateCartitemResponse } as MsgCreateCartitemResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateCartitem: object = { creator: '', id: 0, producthash: '', seller: '', price: 0, quantity: 0 }

export const MsgUpdateCartitem = {
  encode(message: MsgUpdateCartitem, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCartitem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCartitem } as MsgUpdateCartitem
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

  fromJSON(object: any): MsgUpdateCartitem {
    const message = { ...baseMsgUpdateCartitem } as MsgUpdateCartitem
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

  toJSON(message: MsgUpdateCartitem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.producthash !== undefined && (obj.producthash = message.producthash)
    message.seller !== undefined && (obj.seller = message.seller)
    message.price !== undefined && (obj.price = message.price)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCartitem>): MsgUpdateCartitem {
    const message = { ...baseMsgUpdateCartitem } as MsgUpdateCartitem
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

const baseMsgUpdateCartitemResponse: object = {}

export const MsgUpdateCartitemResponse = {
  encode(_: MsgUpdateCartitemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCartitemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCartitemResponse } as MsgUpdateCartitemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateCartitemResponse {
    const message = { ...baseMsgUpdateCartitemResponse } as MsgUpdateCartitemResponse
    return message
  },

  toJSON(_: MsgUpdateCartitemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateCartitemResponse>): MsgUpdateCartitemResponse {
    const message = { ...baseMsgUpdateCartitemResponse } as MsgUpdateCartitemResponse
    return message
  }
}

const baseMsgDeleteCartitem: object = { creator: '', id: 0 }

export const MsgDeleteCartitem = {
  encode(message: MsgDeleteCartitem, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCartitem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCartitem } as MsgDeleteCartitem
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteCartitem {
    const message = { ...baseMsgDeleteCartitem } as MsgDeleteCartitem
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
    return message
  },

  toJSON(message: MsgDeleteCartitem): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCartitem>): MsgDeleteCartitem {
    const message = { ...baseMsgDeleteCartitem } as MsgDeleteCartitem
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
    return message
  }
}

const baseMsgDeleteCartitemResponse: object = {}

export const MsgDeleteCartitemResponse = {
  encode(_: MsgDeleteCartitemResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCartitemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCartitemResponse } as MsgDeleteCartitemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteCartitemResponse {
    const message = { ...baseMsgDeleteCartitemResponse } as MsgDeleteCartitemResponse
    return message
  },

  toJSON(_: MsgDeleteCartitemResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteCartitemResponse>): MsgDeleteCartitemResponse {
    const message = { ...baseMsgDeleteCartitemResponse } as MsgDeleteCartitemResponse
    return message
  }
}

const baseMsgCreateProduct: object = { creator: '', ipfshash: '', quantity: 0 }

export const MsgCreateProduct = {
  encode(message: MsgCreateProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.ipfshash !== '') {
      writer.uint32(18).string(message.ipfshash)
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int32(message.quantity)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.ipfshash = reader.string()
          break
        case 3:
          message.quantity = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateProduct {
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateProduct): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.ipfshash !== undefined && (obj.ipfshash = message.ipfshash)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateProduct>): MsgCreateProduct {
    const message = { ...baseMsgCreateProduct } as MsgCreateProduct
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgCreateProductResponse: object = { id: 0 }

export const MsgCreateProductResponse = {
  encode(message: MsgCreateProductResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateProductResponse } as MsgCreateProductResponse
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

  fromJSON(object: any): MsgCreateProductResponse {
    const message = { ...baseMsgCreateProductResponse } as MsgCreateProductResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateProductResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateProductResponse>): MsgCreateProductResponse {
    const message = { ...baseMsgCreateProductResponse } as MsgCreateProductResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateProduct: object = { creator: '', id: 0, ipfshash: '', quantity: 0 }

export const MsgUpdateProduct = {
  encode(message: MsgUpdateProduct, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct
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

  fromJSON(object: any): MsgUpdateProduct {
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct
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

  toJSON(message: MsgUpdateProduct): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.ipfshash !== undefined && (obj.ipfshash = message.ipfshash)
    message.quantity !== undefined && (obj.quantity = message.quantity)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateProduct>): MsgUpdateProduct {
    const message = { ...baseMsgUpdateProduct } as MsgUpdateProduct
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

const baseMsgUpdateProductResponse: object = {}

export const MsgUpdateProductResponse = {
  encode(_: MsgUpdateProductResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateProductResponse } as MsgUpdateProductResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateProductResponse {
    const message = { ...baseMsgUpdateProductResponse } as MsgUpdateProductResponse
    return message
  },

  toJSON(_: MsgUpdateProductResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateProductResponse>): MsgUpdateProductResponse {
    const message = { ...baseMsgUpdateProductResponse } as MsgUpdateProductResponse
    return message
  }
}

const baseMsgDeleteProduct: object = { creator: '', id: 0 }

export const MsgDeleteProduct = {
  encode(message: MsgDeleteProduct, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProduct {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteProduct {
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct
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
    return message
  },

  toJSON(message: MsgDeleteProduct): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteProduct>): MsgDeleteProduct {
    const message = { ...baseMsgDeleteProduct } as MsgDeleteProduct
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
    return message
  }
}

const baseMsgDeleteProductResponse: object = {}

export const MsgDeleteProductResponse = {
  encode(_: MsgDeleteProductResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProductResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteProductResponse } as MsgDeleteProductResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteProductResponse {
    const message = { ...baseMsgDeleteProductResponse } as MsgDeleteProductResponse
    return message
  },

  toJSON(_: MsgDeleteProductResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteProductResponse>): MsgDeleteProductResponse {
    const message = { ...baseMsgDeleteProductResponse } as MsgDeleteProductResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse>
  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse>
  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse>
  CreateCartitem(request: MsgCreateCartitem): Promise<MsgCreateCartitemResponse>
  UpdateCartitem(request: MsgUpdateCartitem): Promise<MsgUpdateCartitemResponse>
  DeleteCartitem(request: MsgDeleteCartitem): Promise<MsgDeleteCartitemResponse>
  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse>
  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse>
  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateOrder(request: MsgCreateOrder): Promise<MsgCreateOrderResponse> {
    const data = MsgCreateOrder.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateOrder', data)
    return promise.then((data) => MsgCreateOrderResponse.decode(new Reader(data)))
  }

  UpdateOrder(request: MsgUpdateOrder): Promise<MsgUpdateOrderResponse> {
    const data = MsgUpdateOrder.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateOrder', data)
    return promise.then((data) => MsgUpdateOrderResponse.decode(new Reader(data)))
  }

  DeleteOrder(request: MsgDeleteOrder): Promise<MsgDeleteOrderResponse> {
    const data = MsgDeleteOrder.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteOrder', data)
    return promise.then((data) => MsgDeleteOrderResponse.decode(new Reader(data)))
  }

  CreateCartitem(request: MsgCreateCartitem): Promise<MsgCreateCartitemResponse> {
    const data = MsgCreateCartitem.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateCartitem', data)
    return promise.then((data) => MsgCreateCartitemResponse.decode(new Reader(data)))
  }

  UpdateCartitem(request: MsgUpdateCartitem): Promise<MsgUpdateCartitemResponse> {
    const data = MsgUpdateCartitem.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateCartitem', data)
    return promise.then((data) => MsgUpdateCartitemResponse.decode(new Reader(data)))
  }

  DeleteCartitem(request: MsgDeleteCartitem): Promise<MsgDeleteCartitemResponse> {
    const data = MsgDeleteCartitem.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteCartitem', data)
    return promise.then((data) => MsgDeleteCartitemResponse.decode(new Reader(data)))
  }

  CreateProduct(request: MsgCreateProduct): Promise<MsgCreateProductResponse> {
    const data = MsgCreateProduct.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateProduct', data)
    return promise.then((data) => MsgCreateProductResponse.decode(new Reader(data)))
  }

  UpdateProduct(request: MsgUpdateProduct): Promise<MsgUpdateProductResponse> {
    const data = MsgUpdateProduct.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateProduct', data)
    return promise.then((data) => MsgUpdateProductResponse.decode(new Reader(data)))
  }

  DeleteProduct(request: MsgDeleteProduct): Promise<MsgDeleteProductResponse> {
    const data = MsgDeleteProduct.encode(request).finish()
    const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteProduct', data)
    return promise.then((data) => MsgDeleteProductResponse.decode(new Reader(data)))
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
