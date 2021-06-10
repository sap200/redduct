/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'sap200.redduct.redduct';
const baseOrder = { creator: '', id: 0, producthash: '', seller: '', deliveryaddress: '', quantity: 0, status: 0, paid: 0, totalamount: 0 };
export const Order = {
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
        const message = { ...baseOrder };
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
