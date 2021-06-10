/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { Order } from '../redduct/order';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Cartitem } from '../redduct/cartitem';
import { Product } from '../redduct/product';
export const protobufPackage = 'sap200.redduct.redduct';
const baseQueryGetOrderRequest = { id: 0 };
export const QueryGetOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetOrderRequest };
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
        const message = { ...baseQueryGetOrderRequest };
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
        const message = { ...baseQueryGetOrderRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetOrderResponse = {};
export const QueryGetOrderResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Order !== undefined) {
            Order.encode(message.Order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Order = Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetOrderResponse };
        if (object.Order !== undefined && object.Order !== null) {
            message.Order = Order.fromJSON(object.Order);
        }
        else {
            message.Order = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Order !== undefined && (obj.Order = message.Order ? Order.toJSON(message.Order) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetOrderResponse };
        if (object.Order !== undefined && object.Order !== null) {
            message.Order = Order.fromPartial(object.Order);
        }
        else {
            message.Order = undefined;
        }
        return message;
    }
};
const baseQueryAllOrderRequest = {};
export const QueryAllOrderRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllOrderRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllOrderRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllOrderRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllOrderResponse = {};
export const QueryAllOrderResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Order) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllOrderResponse };
        message.Order = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Order.push(Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllOrderResponse };
        message.Order = [];
        if (object.Order !== undefined && object.Order !== null) {
            for (const e of object.Order) {
                message.Order.push(Order.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Order) {
            obj.Order = message.Order.map((e) => (e ? Order.toJSON(e) : undefined));
        }
        else {
            obj.Order = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllOrderResponse };
        message.Order = [];
        if (object.Order !== undefined && object.Order !== null) {
            for (const e of object.Order) {
                message.Order.push(Order.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetCartitemRequest = { id: 0 };
export const QueryGetCartitemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCartitemRequest };
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
        const message = { ...baseQueryGetCartitemRequest };
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
        const message = { ...baseQueryGetCartitemRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCartitemResponse = {};
export const QueryGetCartitemResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Cartitem !== undefined) {
            Cartitem.encode(message.Cartitem, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCartitemResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Cartitem = Cartitem.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCartitemResponse };
        if (object.Cartitem !== undefined && object.Cartitem !== null) {
            message.Cartitem = Cartitem.fromJSON(object.Cartitem);
        }
        else {
            message.Cartitem = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Cartitem !== undefined && (obj.Cartitem = message.Cartitem ? Cartitem.toJSON(message.Cartitem) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCartitemResponse };
        if (object.Cartitem !== undefined && object.Cartitem !== null) {
            message.Cartitem = Cartitem.fromPartial(object.Cartitem);
        }
        else {
            message.Cartitem = undefined;
        }
        return message;
    }
};
const baseQueryAllCartitemRequest = {};
export const QueryAllCartitemRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCartitemRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCartitemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCartitemRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCartitemResponse = {};
export const QueryAllCartitemResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Cartitem) {
            Cartitem.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCartitemResponse };
        message.Cartitem = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Cartitem.push(Cartitem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCartitemResponse };
        message.Cartitem = [];
        if (object.Cartitem !== undefined && object.Cartitem !== null) {
            for (const e of object.Cartitem) {
                message.Cartitem.push(Cartitem.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Cartitem) {
            obj.Cartitem = message.Cartitem.map((e) => (e ? Cartitem.toJSON(e) : undefined));
        }
        else {
            obj.Cartitem = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCartitemResponse };
        message.Cartitem = [];
        if (object.Cartitem !== undefined && object.Cartitem !== null) {
            for (const e of object.Cartitem) {
                message.Cartitem.push(Cartitem.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetProductRequest = { id: 0 };
export const QueryGetProductRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetProductRequest };
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
        const message = { ...baseQueryGetProductRequest };
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
        const message = { ...baseQueryGetProductRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetProductResponse = {};
export const QueryGetProductResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Product !== undefined) {
            Product.encode(message.Product, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetProductResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Product = Product.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetProductResponse };
        if (object.Product !== undefined && object.Product !== null) {
            message.Product = Product.fromJSON(object.Product);
        }
        else {
            message.Product = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Product !== undefined && (obj.Product = message.Product ? Product.toJSON(message.Product) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetProductResponse };
        if (object.Product !== undefined && object.Product !== null) {
            message.Product = Product.fromPartial(object.Product);
        }
        else {
            message.Product = undefined;
        }
        return message;
    }
};
const baseQueryAllProductRequest = {};
export const QueryAllProductRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllProductRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllProductRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllProductRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllProductResponse = {};
export const QueryAllProductResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Product) {
            Product.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllProductResponse };
        message.Product = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Product.push(Product.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllProductResponse };
        message.Product = [];
        if (object.Product !== undefined && object.Product !== null) {
            for (const e of object.Product) {
                message.Product.push(Product.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Product) {
            obj.Product = message.Product.map((e) => (e ? Product.toJSON(e) : undefined));
        }
        else {
            obj.Product = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllProductResponse };
        message.Product = [];
        if (object.Product !== undefined && object.Product !== null) {
            for (const e of object.Product) {
                message.Product.push(Product.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Order(request) {
        const data = QueryGetOrderRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Order', data);
        return promise.then((data) => QueryGetOrderResponse.decode(new Reader(data)));
    }
    OrderAll(request) {
        const data = QueryAllOrderRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'OrderAll', data);
        return promise.then((data) => QueryAllOrderResponse.decode(new Reader(data)));
    }
    Cartitem(request) {
        const data = QueryGetCartitemRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Cartitem', data);
        return promise.then((data) => QueryGetCartitemResponse.decode(new Reader(data)));
    }
    CartitemAll(request) {
        const data = QueryAllCartitemRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'CartitemAll', data);
        return promise.then((data) => QueryAllCartitemResponse.decode(new Reader(data)));
    }
    Product(request) {
        const data = QueryGetProductRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'Product', data);
        return promise.then((data) => QueryGetProductResponse.decode(new Reader(data)));
    }
    ProductAll(request) {
        const data = QueryAllProductRequest.encode(request).finish();
        const promise = this.rpc.request('sap200.redduct.redduct.Query', 'ProductAll', data);
        return promise.then((data) => QueryAllProductResponse.decode(new Reader(data)));
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
