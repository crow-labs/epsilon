/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { MonoItem } from "../../../nest/market-models/mono/monoMarket";
import { MonoVote } from "../../../nest/market-models/mono/monoDispute";

export const protobufPackage = "crowlabs.epsilon.nest.marketmodels.mono";

/** MonoBuyer defines a buyer in a marketplace where each listing has a quanity of one */
export interface MonoBuyer {
  name: string;
  buyerId: string;
  status: string;
  address: string;
  activeOrderId: number[];
  completedOrderId: number[];
}

/** MonoSeller defines a seller in the mono marketplace */
export interface MonoSeller {
  name: string;
  sellerId: string;
  status: string;
  address: string;
  activeOrderId: number[];
  activeItems: MonoItem[];
  completedOrderId: number[];
}

/** MonoVoter defines a voter for the mono marketplace */
export interface MonoVoter {
  name: string;
  voterId: string;
  status: string;
  address: string;
  activeVotes: MonoVote[];
  completedVotes: MonoVote[];
}

const baseMonoBuyer: object = {
  name: "",
  buyerId: "",
  status: "",
  address: "",
  activeOrderId: 0,
  completedOrderId: 0,
};

export const MonoBuyer = {
  encode(message: MonoBuyer, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.buyerId !== "") {
      writer.uint32(18).string(message.buyerId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    writer.uint32(42).fork();
    for (const v of message.activeOrderId) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.completedOrderId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoBuyer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoBuyer } as MonoBuyer;
    message.activeOrderId = [];
    message.completedOrderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.buyerId = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeOrderId.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeOrderId.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.completedOrderId.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.completedOrderId.push(
              longToNumber(reader.uint64() as Long)
            );
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoBuyer {
    const message = { ...baseMonoBuyer } as MonoBuyer;
    message.activeOrderId = [];
    message.completedOrderId = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = String(object.buyerId);
    } else {
      message.buyerId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.activeOrderId !== undefined && object.activeOrderId !== null) {
      for (const e of object.activeOrderId) {
        message.activeOrderId.push(Number(e));
      }
    }
    if (
      object.completedOrderId !== undefined &&
      object.completedOrderId !== null
    ) {
      for (const e of object.completedOrderId) {
        message.completedOrderId.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: MonoBuyer): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.buyerId !== undefined && (obj.buyerId = message.buyerId);
    message.status !== undefined && (obj.status = message.status);
    message.address !== undefined && (obj.address = message.address);
    if (message.activeOrderId) {
      obj.activeOrderId = message.activeOrderId.map((e) => e);
    } else {
      obj.activeOrderId = [];
    }
    if (message.completedOrderId) {
      obj.completedOrderId = message.completedOrderId.map((e) => e);
    } else {
      obj.completedOrderId = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MonoBuyer>): MonoBuyer {
    const message = { ...baseMonoBuyer } as MonoBuyer;
    message.activeOrderId = [];
    message.completedOrderId = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = object.buyerId;
    } else {
      message.buyerId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.activeOrderId !== undefined && object.activeOrderId !== null) {
      for (const e of object.activeOrderId) {
        message.activeOrderId.push(e);
      }
    }
    if (
      object.completedOrderId !== undefined &&
      object.completedOrderId !== null
    ) {
      for (const e of object.completedOrderId) {
        message.completedOrderId.push(e);
      }
    }
    return message;
  },
};

const baseMonoSeller: object = {
  name: "",
  sellerId: "",
  status: "",
  address: "",
  activeOrderId: 0,
  completedOrderId: 0,
};

export const MonoSeller = {
  encode(message: MonoSeller, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sellerId !== "") {
      writer.uint32(18).string(message.sellerId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    writer.uint32(42).fork();
    for (const v of message.activeOrderId) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.activeItems) {
      MonoItem.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.completedOrderId) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoSeller {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoSeller } as MonoSeller;
    message.activeOrderId = [];
    message.activeItems = [];
    message.completedOrderId = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.sellerId = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeOrderId.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.activeOrderId.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 6:
          message.activeItems.push(MonoItem.decode(reader, reader.uint32()));
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.completedOrderId.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.completedOrderId.push(
              longToNumber(reader.uint64() as Long)
            );
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoSeller {
    const message = { ...baseMonoSeller } as MonoSeller;
    message.activeOrderId = [];
    message.activeItems = [];
    message.completedOrderId = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = String(object.sellerId);
    } else {
      message.sellerId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.activeOrderId !== undefined && object.activeOrderId !== null) {
      for (const e of object.activeOrderId) {
        message.activeOrderId.push(Number(e));
      }
    }
    if (object.activeItems !== undefined && object.activeItems !== null) {
      for (const e of object.activeItems) {
        message.activeItems.push(MonoItem.fromJSON(e));
      }
    }
    if (
      object.completedOrderId !== undefined &&
      object.completedOrderId !== null
    ) {
      for (const e of object.completedOrderId) {
        message.completedOrderId.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: MonoSeller): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.sellerId !== undefined && (obj.sellerId = message.sellerId);
    message.status !== undefined && (obj.status = message.status);
    message.address !== undefined && (obj.address = message.address);
    if (message.activeOrderId) {
      obj.activeOrderId = message.activeOrderId.map((e) => e);
    } else {
      obj.activeOrderId = [];
    }
    if (message.activeItems) {
      obj.activeItems = message.activeItems.map((e) =>
        e ? MonoItem.toJSON(e) : undefined
      );
    } else {
      obj.activeItems = [];
    }
    if (message.completedOrderId) {
      obj.completedOrderId = message.completedOrderId.map((e) => e);
    } else {
      obj.completedOrderId = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MonoSeller>): MonoSeller {
    const message = { ...baseMonoSeller } as MonoSeller;
    message.activeOrderId = [];
    message.activeItems = [];
    message.completedOrderId = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.sellerId !== undefined && object.sellerId !== null) {
      message.sellerId = object.sellerId;
    } else {
      message.sellerId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.activeOrderId !== undefined && object.activeOrderId !== null) {
      for (const e of object.activeOrderId) {
        message.activeOrderId.push(e);
      }
    }
    if (object.activeItems !== undefined && object.activeItems !== null) {
      for (const e of object.activeItems) {
        message.activeItems.push(MonoItem.fromPartial(e));
      }
    }
    if (
      object.completedOrderId !== undefined &&
      object.completedOrderId !== null
    ) {
      for (const e of object.completedOrderId) {
        message.completedOrderId.push(e);
      }
    }
    return message;
  },
};

const baseMonoVoter: object = {
  name: "",
  voterId: "",
  status: "",
  address: "",
};

export const MonoVoter = {
  encode(message: MonoVoter, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    for (const v of message.activeVotes) {
      MonoVote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.completedVotes) {
      MonoVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoVoter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoVoter } as MonoVoter;
    message.activeVotes = [];
    message.completedVotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.status = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.activeVotes.push(MonoVote.decode(reader, reader.uint32()));
          break;
        case 6:
          message.completedVotes.push(MonoVote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoVoter {
    const message = { ...baseMonoVoter } as MonoVoter;
    message.activeVotes = [];
    message.completedVotes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.activeVotes !== undefined && object.activeVotes !== null) {
      for (const e of object.activeVotes) {
        message.activeVotes.push(MonoVote.fromJSON(e));
      }
    }
    if (object.completedVotes !== undefined && object.completedVotes !== null) {
      for (const e of object.completedVotes) {
        message.completedVotes.push(MonoVote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MonoVoter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.status !== undefined && (obj.status = message.status);
    message.address !== undefined && (obj.address = message.address);
    if (message.activeVotes) {
      obj.activeVotes = message.activeVotes.map((e) =>
        e ? MonoVote.toJSON(e) : undefined
      );
    } else {
      obj.activeVotes = [];
    }
    if (message.completedVotes) {
      obj.completedVotes = message.completedVotes.map((e) =>
        e ? MonoVote.toJSON(e) : undefined
      );
    } else {
      obj.completedVotes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MonoVoter>): MonoVoter {
    const message = { ...baseMonoVoter } as MonoVoter;
    message.activeVotes = [];
    message.completedVotes = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.activeVotes !== undefined && object.activeVotes !== null) {
      for (const e of object.activeVotes) {
        message.activeVotes.push(MonoVote.fromPartial(e));
      }
    }
    if (object.completedVotes !== undefined && object.completedVotes !== null) {
      for (const e of object.completedVotes) {
        message.completedVotes.push(MonoVote.fromPartial(e));
      }
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
