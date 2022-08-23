/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.epsilon.nest.marketmodels.mono";

/** MonoItem defines an item on the mono marketplace, listed by a mono seller */
export interface MonoItem {
  itemId: number;
  title: string;
  description: string;
  sellerAddress: string;
  minPrice: Coin[];
  collateral: Coin[];
}

/** MonoSellOrder defines the sell order placed by a seller in the mono marketplace */
export interface MonoSellOrder {
  sellOrderId: number;
  sellerId: number;
  itemId: number;
}

/** MonoBuyOrder defines the buy order placed by a buyer in the mono Marketplace */
export interface MonoBuyOrder {
  buyOrderId: number;
  buyerId: number;
  itemId: number;
}

const baseMonoItem: object = {
  itemId: 0,
  title: "",
  description: "",
  sellerAddress: "",
};

export const MonoItem = {
  encode(message: MonoItem, writer: Writer = Writer.create()): Writer {
    if (message.itemId !== 0) {
      writer.uint32(8).uint64(message.itemId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.sellerAddress !== "") {
      writer.uint32(34).string(message.sellerAddress);
    }
    for (const v of message.minPrice) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoItem {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoItem } as MonoItem;
    message.minPrice = [];
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.sellerAddress = reader.string();
          break;
        case 5:
          message.minPrice.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoItem {
    const message = { ...baseMonoItem } as MonoItem;
    message.minPrice = [];
    message.collateral = [];
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
      message.sellerAddress = String(object.sellerAddress);
    } else {
      message.sellerAddress = "";
    }
    if (object.minPrice !== undefined && object.minPrice !== null) {
      for (const e of object.minPrice) {
        message.minPrice.push(Coin.fromJSON(e));
      }
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MonoItem): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.sellerAddress !== undefined &&
      (obj.sellerAddress = message.sellerAddress);
    if (message.minPrice) {
      obj.minPrice = message.minPrice.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.minPrice = [];
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.collateral = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MonoItem>): MonoItem {
    const message = { ...baseMonoItem } as MonoItem;
    message.minPrice = [];
    message.collateral = [];
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.sellerAddress !== undefined && object.sellerAddress !== null) {
      message.sellerAddress = object.sellerAddress;
    } else {
      message.sellerAddress = "";
    }
    if (object.minPrice !== undefined && object.minPrice !== null) {
      for (const e of object.minPrice) {
        message.minPrice.push(Coin.fromPartial(e));
      }
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      for (const e of object.collateral) {
        message.collateral.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMonoSellOrder: object = { sellOrderId: 0, sellerId: 0, itemId: 0 };

export const MonoSellOrder = {
  encode(message: MonoSellOrder, writer: Writer = Writer.create()): Writer {
    if (message.sellOrderId !== 0) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    if (message.sellerId !== 0) {
      writer.uint32(16).uint64(message.sellerId);
    }
    if (message.itemId !== 0) {
      writer.uint32(24).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoSellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoSellOrder } as MonoSellOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sellerId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoSellOrder {
    const message = { ...baseMonoSellOrder } as MonoSellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = Number(object.sellOrderId);
    } else {
      message.sellOrderId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = Number(object.sellerId);
    } else {
      message.sellerId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    return message;
  },

  toJSON(message: MonoSellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoSellOrder>): MonoSellOrder {
    const message = { ...baseMonoSellOrder } as MonoSellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = 0;
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    return message;
  },
};

const baseMonoBuyOrder: object = { buyOrderId: 0, buyerId: 0, itemId: 0 };

export const MonoBuyOrder = {
  encode(message: MonoBuyOrder, writer: Writer = Writer.create()): Writer {
    if (message.buyOrderId !== 0) {
      writer.uint32(8).uint64(message.buyOrderId);
    }
    if (message.buyerId !== 0) {
      writer.uint32(16).uint64(message.buyerId);
    }
    if (message.itemId !== 0) {
      writer.uint32(24).uint64(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoBuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoBuyOrder } as MonoBuyOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.buyerId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.itemId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoBuyOrder {
    const message = { ...baseMonoBuyOrder } as MonoBuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = Number(object.buyOrderId);
    } else {
      message.buyOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = Number(object.buyerId);
    } else {
      message.buyerId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = Number(object.itemId);
    } else {
      message.itemId = 0;
    }
    return message;
  },

  toJSON(message: MonoBuyOrder): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoBuyOrder>): MonoBuyOrder {
    const message = { ...baseMonoBuyOrder } as MonoBuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = 0;
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
