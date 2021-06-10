/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'sap200.redduct.redduct';
const baseMsgCreateOrder = { creator: '', producthash: '', seller: '', deliveryaddress: '', quantity: 0, status: 0, paid: 0, totalamount: 0 };
export const MsgCreateOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.producthash !== '') {
            writer.uint32(18).string(message.producthash);
        }
        if (message.seller !== '') {
            writer.uint32(26).string(message.seller);
        }
        if (message.deliveryaddress !== '') {
            writer.uint32(34).string(message.deliveryaddress);
        }
        if (message.quantity !== 0) {
            writer.uint32(40).int32(message.quantity);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.paid !== 0) {
            writer.uint32(56).int32(message.paid);
        }
        if (message.totalamount !== 0) {
            writer.uint32(64).int32(message.totalamount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.producthash = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                case 4:
                    message.deliveryaddress = reader.string();
                    break;
                case 5:
                    message.quantity = reader.int32();
                    break;
                case 6:
                    message.status = reader.int32();
                    break;
                case 7:
                    message.paid = reader.int32();
                    break;
                case 8:
                    message.totalamount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = String(object.producthash);
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
            message.deliveryaddress = String(object.deliveryaddress);
        }
        else {
            message.deliveryaddress = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = Number(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = Number(object.paid);
        }
        else {
            message.paid = 0;
        }
        if (object.totalamount !== undefined && object.totalamount !== null) {
            message.totalamount = Number(object.totalamount);
        }
        else {
            message.totalamount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.producthash !== undefined && (obj.producthash = message.producthash);
        message.seller !== undefined && (obj.seller = message.seller);
        message.deliveryaddress !== undefined && (obj.deliveryaddress = message.deliveryaddress);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.status !== undefined && (obj.status = message.status);
        message.paid !== undefined && (obj.paid = message.paid);
        message.totalamount !== undefined && (obj.totalamount = message.totalamount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = object.producthash;
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
            message.deliveryaddress = object.deliveryaddress;
        }
        else {
            message.deliveryaddress = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = object.paid;
        }
        else {
            message.paid = 0;
        }
        if (object.totalamount !== undefined && object.totalamount !== null) {
            message.totalamount = object.totalamount;
        }
        else {
            message.totalamount = 0;
        }
        return message;
    }
};
const baseMsgCreateOrderResponse = { id: 0 };
export const MsgCreateOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateOrderResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateOrder = { creator: '', id: 0, producthash: '', seller: '', deliveryaddress: '', quantity: 0, status: 0, paid: 0, totalamount: 0 };
export const MsgUpdateOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.producthash !== '') {
            writer.uint32(26).string(message.producthash);
        }
        if (message.seller !== '') {
            writer.uint32(34).string(message.seller);
        }
        if (message.deliveryaddress !== '') {
            writer.uint32(42).string(message.deliveryaddress);
        }
        if (message.quantity !== 0) {
            writer.uint32(48).int32(message.quantity);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.paid !== 0) {
            writer.uint32(64).int32(message.paid);
        }
        if (message.totalamount !== 0) {
            writer.uint32(72).int32(message.totalamount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.producthash = reader.string();
                    break;
                case 4:
                    message.seller = reader.string();
                    break;
                case 5:
                    message.deliveryaddress = reader.string();
                    break;
                case 6:
                    message.quantity = reader.int32();
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                case 8:
                    message.paid = reader.int32();
                    break;
                case 9:
                    message.totalamount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = String(object.producthash);
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
            message.deliveryaddress = String(object.deliveryaddress);
        }
        else {
            message.deliveryaddress = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = Number(object.status);
        }
        else {
            message.status = 0;
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = Number(object.paid);
        }
        else {
            message.paid = 0;
        }
        if (object.totalamount !== undefined && object.totalamount !== null) {
            message.totalamount = Number(object.totalamount);
        }
        else {
            message.totalamount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.producthash !== undefined && (obj.producthash = message.producthash);
        message.seller !== undefined && (obj.seller = message.seller);
        message.deliveryaddress !== undefined && (obj.deliveryaddress = message.deliveryaddress);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        message.status !== undefined && (obj.status = message.status);
        message.paid !== undefined && (obj.paid = message.paid);
        message.totalamount !== undefined && (obj.totalamount = message.totalamount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = object.producthash;
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.deliveryaddress !== undefined && object.deliveryaddress !== null) {
            message.deliveryaddress = object.deliveryaddress;
        }
        else {
            message.deliveryaddress = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = 0;
        }
        if (object.paid !== undefined && object.paid !== null) {
            message.paid = object.paid;
        }
        else {
            message.paid = 0;
        }
        if (object.totalamount !== undefined && object.totalamount !== null) {
            message.totalamount = object.totalamount;
        }
        else {
            message.totalamount = 0;
        }
        return message;
    }
};
const baseMsgUpdateOrderResponse = {};
export const MsgUpdateOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateOrderResponse };
        return message;
    }
};
const baseMsgDeleteOrder = { creator: '', id: 0 };
export const MsgDeleteOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteOrderResponse = {};
export const MsgDeleteOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteOrderResponse };
        return message;
    }
};
const baseMsgCreateCartitem = { creator: '', producthash: '', seller: '', price: 0, quantity: 0 };
export const MsgCreateCartitem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.producthash !== '') {
            writer.uint32(18).string(message.producthash);
        }
        if (message.seller !== '') {
            writer.uint32(26).string(message.seller);
        }
        if (message.price !== 0) {
            writer.uint32(32).int32(message.price);
        }
        if (message.quantity !== 0) {
            writer.uint32(40).int32(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCartitem };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.producthash = reader.string();
                    break;
                case 3:
                    message.seller = reader.string();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                case 5:
                    message.quantity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = String(object.producthash);
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.producthash !== undefined && (obj.producthash = message.producthash);
        message.seller !== undefined && (obj.seller = message.seller);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = object.producthash;
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        return message;
    }
};
const baseMsgCreateCartitemResponse = { id: 0 };
export const MsgCreateCartitemResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCartitemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCartitemResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCartitemResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateCartitem = { creator: '', id: 0, producthash: '', seller: '', price: 0, quantity: 0 };
export const MsgUpdateCartitem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.producthash !== '') {
            writer.uint32(26).string(message.producthash);
        }
        if (message.seller !== '') {
            writer.uint32(34).string(message.seller);
        }
        if (message.price !== 0) {
            writer.uint32(40).int32(message.price);
        }
        if (message.quantity !== 0) {
            writer.uint32(48).int32(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCartitem };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.producthash = reader.string();
                    break;
                case 4:
                    message.seller = reader.string();
                    break;
                case 5:
                    message.price = reader.int32();
                    break;
                case 6:
                    message.quantity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = String(object.producthash);
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.producthash !== undefined && (obj.producthash = message.producthash);
        message.seller !== undefined && (obj.seller = message.seller);
        message.price !== undefined && (obj.price = message.price);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.producthash !== undefined && object.producthash !== null) {
            message.producthash = object.producthash;
        }
        else {
            message.producthash = '';
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        return message;
    }
};
const baseMsgUpdateCartitemResponse = {};
export const MsgUpdateCartitemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCartitemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateCartitemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCartitemResponse };
        return message;
    }
};
const baseMsgDeleteCartitem = { creator: '', id: 0 };
export const MsgDeleteCartitem = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCartitem };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteCartitem };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteCartitemResponse = {};
export const MsgDeleteCartitemResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCartitemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteCartitemResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCartitemResponse };
        return message;
    }
};
const baseMsgCreateProduct = { creator: '', ipfshash: '', quantity: 0 };
export const MsgCreateProduct = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.ipfshash !== '') {
            writer.uint32(18).string(message.ipfshash);
        }
        if (message.quantity !== 0) {
            writer.uint32(24).int32(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateProduct };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.ipfshash = reader.string();
                    break;
                case 3:
                    message.quantity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.ipfshash !== undefined && object.ipfshash !== null) {
            message.ipfshash = String(object.ipfshash);
        }
        else {
            message.ipfshash = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.ipfshash !== undefined && (obj.ipfshash = message.ipfshash);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.ipfshash !== undefined && object.ipfshash !== null) {
            message.ipfshash = object.ipfshash;
        }
        else {
            message.ipfshash = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        return message;
    }
};
const baseMsgCreateProductResponse = { id: 0 };
export const MsgCreateProductResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateProductResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateProductResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateProductResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateProduct = { creator: '', id: 0, ipfshash: '', quantity: 0 };
export const MsgUpdateProduct = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.ipfshash !== '') {
            writer.uint32(26).string(message.ipfshash);
        }
        if (message.quantity !== 0) {
            writer.uint32(32).int32(message.quantity);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateProduct };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.ipfshash = reader.string();
                    break;
                case 4:
                    message.quantity = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.ipfshash !== undefined && object.ipfshash !== null) {
            message.ipfshash = String(object.ipfshash);
        }
        else {
            message.ipfshash = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = Number(object.quantity);
        }
        else {
            message.quantity = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.ipfshash !== undefined && (obj.ipfshash = message.ipfshash);
        message.quantity !== undefined && (obj.quantity = message.quantity);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.ipfshash !== undefined && object.ipfshash !== null) {
            message.ipfshash = object.ipfshash;
        }
        else {
            message.ipfshash = '';
        }
        if (object.quantity !== undefined && object.quantity !== null) {
            message.quantity = object.quantity;
        }
        else {
            message.quantity = 0;
        }
        return message;
    }
};
const baseMsgUpdateProductResponse = {};
export const MsgUpdateProductResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateProductResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateProductResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateProductResponse };
        return message;
    }
};
const baseMsgDeleteProduct = { creator: '', id: 0 };
export const MsgDeleteProduct = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteProduct };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteProduct };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteProductResponse = {};
export const MsgDeleteProductResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteProductResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteProductResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteProductResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateOrder(request) {
        const data = MsgCreateOrder.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateOrder', data);
        return promise.then((data) => MsgCreateOrderResponse.decode(new Reader(data)));
    }
    UpdateOrder(request) {
        const data = MsgUpdateOrder.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateOrder', data);
        return promise.then((data) => MsgUpdateOrderResponse.decode(new Reader(data)));
    }
    DeleteOrder(request) {
        const data = MsgDeleteOrder.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteOrder', data);
        return promise.then((data) => MsgDeleteOrderResponse.decode(new Reader(data)));
    }
    CreateCartitem(request) {
        const data = MsgCreateCartitem.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateCartitem', data);
        return promise.then((data) => MsgCreateCartitemResponse.decode(new Reader(data)));
    }
    UpdateCartitem(request) {
        const data = MsgUpdateCartitem.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateCartitem', data);
        return promise.then((data) => MsgUpdateCartitemResponse.decode(new Reader(data)));
    }
    DeleteCartitem(request) {
        const data = MsgDeleteCartitem.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteCartitem', data);
        return promise.then((data) => MsgDeleteCartitemResponse.decode(new Reader(data)));
    }
    CreateProduct(request) {
        const data = MsgCreateProduct.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'CreateProduct', data);
        return promise.then((data) => MsgCreateProductResponse.decode(new Reader(data)));
    }
    UpdateProduct(request) {
        const data = MsgUpdateProduct.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'UpdateProduct', data);
        return promise.then((data) => MsgUpdateProductResponse.decode(new Reader(data)));
    }
    DeleteProduct(request) {
        const data = MsgDeleteProduct.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Msg', 'DeleteProduct', data);
        return promise.then((data) => MsgDeleteProductResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
