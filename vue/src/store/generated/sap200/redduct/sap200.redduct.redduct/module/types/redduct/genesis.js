/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Order } from '../redduct/order';
import { Cartitem } from '../redduct/cartitem';
import { Product } from '../redduct/product';
export const protobufPackage = 'sap200.redduct.redduct';
const baseGenesisState = { orderCount: 0, cartitemCount: 0, productCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.orderList) {
            Order.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.orderCount !== 0) {
            writer.uint32(48).uint64(message.orderCount);
        }
        for (const v of message.cartitemList) {
            Cartitem.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.cartitemCount !== 0) {
            writer.uint32(32).uint64(message.cartitemCount);
        }
        for (const v of message.productList) {
            Product.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.productCount !== 0) {
            writer.uint32(16).uint64(message.productCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.cartitemList = [];
        message.productList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.orderList.push(Order.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.orderCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.cartitemList.push(Cartitem.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.cartitemCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.productList.push(Product.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.productCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.cartitemList = [];
        message.productList = [];
        if (object.orderList !== undefined && object.orderList !== null) {
            for (const e of object.orderList) {
                message.orderList.push(Order.fromJSON(e));
            }
        }
        if (object.orderCount !== undefined && object.orderCount !== null) {
            message.orderCount = Number(object.orderCount);
        }
        else {
            message.orderCount = 0;
        }
        if (object.cartitemList !== undefined && object.cartitemList !== null) {
            for (const e of object.cartitemList) {
                message.cartitemList.push(Cartitem.fromJSON(e));
            }
        }
        if (object.cartitemCount !== undefined && object.cartitemCount !== null) {
            message.cartitemCount = Number(object.cartitemCount);
        }
        else {
            message.cartitemCount = 0;
        }
        if (object.productList !== undefined && object.productList !== null) {
            for (const e of object.productList) {
                message.productList.push(Product.fromJSON(e));
            }
        }
        if (object.productCount !== undefined && object.productCount !== null) {
            message.productCount = Number(object.productCount);
        }
        else {
            message.productCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.orderList) {
            obj.orderList = message.orderList.map((e) => (e ? Order.toJSON(e) : undefined));
        }
        else {
            obj.orderList = [];
        }
        message.orderCount !== undefined && (obj.orderCount = message.orderCount);
        if (message.cartitemList) {
            obj.cartitemList = message.cartitemList.map((e) => (e ? Cartitem.toJSON(e) : undefined));
        }
        else {
            obj.cartitemList = [];
        }
        message.cartitemCount !== undefined && (obj.cartitemCount = message.cartitemCount);
        if (message.productList) {
            obj.productList = message.productList.map((e) => (e ? Product.toJSON(e) : undefined));
        }
        else {
            obj.productList = [];
        }
        message.productCount !== undefined && (obj.productCount = message.productCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.orderList = [];
        message.cartitemList = [];
        message.productList = [];
        if (object.orderList !== undefined && object.orderList !== null) {
            for (const e of object.orderList) {
                message.orderList.push(Order.fromPartial(e));
            }
        }
        if (object.orderCount !== undefined && object.orderCount !== null) {
            message.orderCount = object.orderCount;
        }
        else {
            message.orderCount = 0;
        }
        if (object.cartitemList !== undefined && object.cartitemList !== null) {
            for (const e of object.cartitemList) {
                message.cartitemList.push(Cartitem.fromPartial(e));
            }
        }
        if (object.cartitemCount !== undefined && object.cartitemCount !== null) {
            message.cartitemCount = object.cartitemCount;
        }
        else {
            message.cartitemCount = 0;
        }
        if (object.productList !== undefined && object.productList !== null) {
            for (const e of object.productList) {
                message.productList.push(Product.fromPartial(e));
            }
        }
        if (object.productCount !== undefined && object.productCount !== null) {
            message.productCount = object.productCount;
        }
        else {
            message.productCount = 0;
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
