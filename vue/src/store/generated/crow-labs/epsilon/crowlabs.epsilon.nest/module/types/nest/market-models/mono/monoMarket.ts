/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.epsilon.nest.marketmodels.mono";

/** Item defines an item on the mono marketplace, listed by a mono seller */
export interface Item {
  itemId: string;
  title: string;
  description: string;
  sellerId: string;
  minPrice: Coin[];
  collateral: Coin[];
}

/** SellOrder defines the sell order placed by a seller in the mono marketplace */
export interface SellOrder {
  sellOrderId: string;
  sellerId: string;
  itemId: string;
}

/** BuyOrder defines the buy order placed by a buyer in the mono Marketplace */
export interface BuyOrder {
  buyOrderId: string;
  buyerId: string;
  itemId: string;
}

const baseItem: object = {
  itemId: "",
  title: "",
  description: "",
  sellerId: "",
};

export const Item = {
  encode(message: Item, writer: Writer = Writer.create()): Writer {
    if (message.itemId !== "") {
      writer.uint32(10).string(message.itemId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.sellerId !== "") {
      writer.uint32(34).string(message.sellerId);
    }
    for (const v of message.minPrice) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseItem } as Item;
    message.minPrice = [];
    message.collateral = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.sellerId = reader.string();
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

  fromJSON(object: any): Item {
    const message = { ...baseItem } as Item;
    message.minPrice = [];
    message.collateral = [];
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = String(object.itemId);
    } else {
      message.itemId = "";
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
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
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

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.itemId !== undefined && (obj.itemId = message.itemId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
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

  fromPartial(object: DeepPartial<Item>): Item {
    const message = { ...baseItem } as Item;
    message.minPrice = [];
    message.collateral = [];
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = "";
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
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
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

const baseSellOrder: object = { sellOrderId: "", sellerId: "", itemId: "" };

export const SellOrder = {
  encode(message: SellOrder, writer: Writer = Writer.create()): Writer {
    if (message.sellOrderId !== "") {
      writer.uint32(10).string(message.sellOrderId);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    if (message.itemId !== "") {
      writer.uint32(26).string(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSellOrder } as SellOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.itemId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellOrder {
    const message = { ...baseSellOrder } as SellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = String(object.sellOrderId);
    } else {
      message.sellOrderId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = String(object.itemId);
    } else {
      message.itemId = "";
    }
    return message;
  },

  toJSON(message: SellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined &&
      (obj.sellOrderId = message.sellOrderId);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<SellOrder>): SellOrder {
    const message = { ...baseSellOrder } as SellOrder;
    if (object.sellOrderId !== undefined && object.sellOrderId !== null) {
      message.sellOrderId = object.sellOrderId;
    } else {
      message.sellOrderId = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = "";
    }
    return message;
  },
};

const baseBuyOrder: object = { buyOrderId: "", buyerId: "", itemId: "" };

export const BuyOrder = {
  encode(message: BuyOrder, writer: Writer = Writer.create()): Writer {
    if (message.buyOrderId !== "") {
      writer.uint32(10).string(message.buyOrderId);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.itemId !== "") {
      writer.uint32(26).string(message.itemId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBuyOrder } as BuyOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyOrderId = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.itemId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyOrder {
    const message = { ...baseBuyOrder } as BuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = String(object.buyOrderId);
    } else {
      message.buyOrderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = String(object.itemId);
    } else {
      message.itemId = "";
    }
    return message;
  },

  toJSON(message: BuyOrder): unknown {
    const obj: any = {};
    message.buyOrderId !== undefined && (obj.buyOrderId = message.buyOrderId);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<BuyOrder>): BuyOrder {
    const message = { ...baseBuyOrder } as BuyOrder;
    if (object.buyOrderId !== undefined && object.buyOrderId !== null) {
      message.buyOrderId = object.buyOrderId;
    } else {
      message.buyOrderId = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.itemId !== undefined && object.itemId !== null) {
      message.itemId = object.itemId;
    } else {
      message.itemId = "";
    }
    return message;
  },
};

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
