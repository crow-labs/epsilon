/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "crowlabs.epsilon.nest.marketmodels.mono";

/** Evidence defines evidence for a dispute/rebutal in the mono marketplace */
export interface Evidence {
  evidenceId: string;
  disputeId: string;
  externalLink: string;
}

/** Rebuttal defines the rebutal for a raised dispute in the mono marketplace */
export interface Rebuttal {
  rebuttalId: string;
  disputeId: string;
  evidenceId: string;
}

/** Dispute defines a dispute over a mono markeplace exchange of physical goods */
export interface Dispute {
  disputeId: string;
  title: string;
  description: string;
  evidenceId: string;
}

/** Sentence defines the outcome of a dispute */
export interface Sentence {
  voteId: string;
  plaintifGuilty: boolean;
  defendantGuilty: boolean;
  plaintifBlacklisted: boolean;
  defendantBlacklisted: boolean;
  plaintifJailTime: number;
  defendantJailTime: number;
  amountToReturn: number;
}

/** Vote defines the vote that is cast for a MonoDispute */
export interface Vote {
  voteId: string;
  voterId: string;
  disputeId: string;
  voteInfo: Sentence | undefined;
}

const baseEvidence: object = {
  evidenceId: "",
  disputeId: "",
  externalLink: "",
};

export const Evidence = {
  encode(message: Evidence, writer: Writer = Writer.create()): Writer {
    if (message.evidenceId !== "") {
      writer.uint32(10).string(message.evidenceId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.externalLink !== "") {
      writer.uint32(26).string(message.externalLink);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEvidence } as Evidence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.externalLink = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Evidence {
    const message = { ...baseEvidence } as Evidence;
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = String(object.evidenceId);
    } else {
      message.evidenceId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = String(object.externalLink);
    } else {
      message.externalLink = "";
    }
    return message;
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.evidenceId !== undefined && (obj.evidenceId = message.evidenceId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.externalLink !== undefined &&
      (obj.externalLink = message.externalLink);
    return obj;
  },

  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = { ...baseEvidence } as Evidence;
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = object.evidenceId;
    } else {
      message.evidenceId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = object.externalLink;
    } else {
      message.externalLink = "";
    }
    return message;
  },
};

const baseRebuttal: object = { rebuttalId: "", disputeId: "", evidenceId: "" };

export const Rebuttal = {
  encode(message: Rebuttal, writer: Writer = Writer.create()): Writer {
    if (message.rebuttalId !== "") {
      writer.uint32(10).string(message.rebuttalId);
    }
    if (message.disputeId !== "") {
      writer.uint32(18).string(message.disputeId);
    }
    if (message.evidenceId !== "") {
      writer.uint32(26).string(message.evidenceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Rebuttal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRebuttal } as Rebuttal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttalId = reader.string();
          break;
        case 2:
          message.disputeId = reader.string();
          break;
        case 3:
          message.evidenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rebuttal {
    const message = { ...baseRebuttal } as Rebuttal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = String(object.rebuttalId);
    } else {
      message.rebuttalId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = String(object.evidenceId);
    } else {
      message.evidenceId = "";
    }
    return message;
  },

  toJSON(message: Rebuttal): unknown {
    const obj: any = {};
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.evidenceId !== undefined && (obj.evidenceId = message.evidenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<Rebuttal>): Rebuttal {
    const message = { ...baseRebuttal } as Rebuttal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = object.evidenceId;
    } else {
      message.evidenceId = "";
    }
    return message;
  },
};

const baseDispute: object = {
  disputeId: "",
  title: "",
  description: "",
  evidenceId: "",
};

export const Dispute = {
  encode(message: Dispute, writer: Writer = Writer.create()): Writer {
    if (message.disputeId !== "") {
      writer.uint32(10).string(message.disputeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.evidenceId !== "") {
      writer.uint32(34).string(message.evidenceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Dispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDispute } as Dispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputeId = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.evidenceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dispute {
    const message = { ...baseDispute } as Dispute;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
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
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = String(object.evidenceId);
    } else {
      message.evidenceId = "";
    }
    return message;
  },

  toJSON(message: Dispute): unknown {
    const obj: any = {};
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.evidenceId !== undefined && (obj.evidenceId = message.evidenceId);
    return obj;
  },

  fromPartial(object: DeepPartial<Dispute>): Dispute {
    const message = { ...baseDispute } as Dispute;
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
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
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = object.evidenceId;
    } else {
      message.evidenceId = "";
    }
    return message;
  },
};

const baseSentence: object = {
  voteId: "",
  plaintifGuilty: false,
  defendantGuilty: false,
  plaintifBlacklisted: false,
  defendantBlacklisted: false,
  plaintifJailTime: 0,
  defendantJailTime: 0,
  amountToReturn: 0,
};

export const Sentence = {
  encode(message: Sentence, writer: Writer = Writer.create()): Writer {
    if (message.voteId !== "") {
      writer.uint32(10).string(message.voteId);
    }
    if (message.plaintifGuilty === true) {
      writer.uint32(16).bool(message.plaintifGuilty);
    }
    if (message.defendantGuilty === true) {
      writer.uint32(24).bool(message.defendantGuilty);
    }
    if (message.plaintifBlacklisted === true) {
      writer.uint32(32).bool(message.plaintifBlacklisted);
    }
    if (message.defendantBlacklisted === true) {
      writer.uint32(40).bool(message.defendantBlacklisted);
    }
    if (message.plaintifJailTime !== 0) {
      writer.uint32(48).uint64(message.plaintifJailTime);
    }
    if (message.defendantJailTime !== 0) {
      writer.uint32(56).uint64(message.defendantJailTime);
    }
    if (message.amountToReturn !== 0) {
      writer.uint32(64).uint64(message.amountToReturn);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Sentence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSentence } as Sentence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = reader.string();
          break;
        case 2:
          message.plaintifGuilty = reader.bool();
          break;
        case 3:
          message.defendantGuilty = reader.bool();
          break;
        case 4:
          message.plaintifBlacklisted = reader.bool();
          break;
        case 5:
          message.defendantBlacklisted = reader.bool();
          break;
        case 6:
          message.plaintifJailTime = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.defendantJailTime = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.amountToReturn = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Sentence {
    const message = { ...baseSentence } as Sentence;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.plaintifGuilty !== undefined && object.plaintifGuilty !== null) {
      message.plaintifGuilty = Boolean(object.plaintifGuilty);
    } else {
      message.plaintifGuilty = false;
    }
    if (
      object.defendantGuilty !== undefined &&
      object.defendantGuilty !== null
    ) {
      message.defendantGuilty = Boolean(object.defendantGuilty);
    } else {
      message.defendantGuilty = false;
    }
    if (
      object.plaintifBlacklisted !== undefined &&
      object.plaintifBlacklisted !== null
    ) {
      message.plaintifBlacklisted = Boolean(object.plaintifBlacklisted);
    } else {
      message.plaintifBlacklisted = false;
    }
    if (
      object.defendantBlacklisted !== undefined &&
      object.defendantBlacklisted !== null
    ) {
      message.defendantBlacklisted = Boolean(object.defendantBlacklisted);
    } else {
      message.defendantBlacklisted = false;
    }
    if (
      object.plaintifJailTime !== undefined &&
      object.plaintifJailTime !== null
    ) {
      message.plaintifJailTime = Number(object.plaintifJailTime);
    } else {
      message.plaintifJailTime = 0;
    }
    if (
      object.defendantJailTime !== undefined &&
      object.defendantJailTime !== null
    ) {
      message.defendantJailTime = Number(object.defendantJailTime);
    } else {
      message.defendantJailTime = 0;
    }
    if (object.amountToReturn !== undefined && object.amountToReturn !== null) {
      message.amountToReturn = Number(object.amountToReturn);
    } else {
      message.amountToReturn = 0;
    }
    return message;
  },

  toJSON(message: Sentence): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.plaintifGuilty !== undefined &&
      (obj.plaintifGuilty = message.plaintifGuilty);
    message.defendantGuilty !== undefined &&
      (obj.defendantGuilty = message.defendantGuilty);
    message.plaintifBlacklisted !== undefined &&
      (obj.plaintifBlacklisted = message.plaintifBlacklisted);
    message.defendantBlacklisted !== undefined &&
      (obj.defendantBlacklisted = message.defendantBlacklisted);
    message.plaintifJailTime !== undefined &&
      (obj.plaintifJailTime = message.plaintifJailTime);
    message.defendantJailTime !== undefined &&
      (obj.defendantJailTime = message.defendantJailTime);
    message.amountToReturn !== undefined &&
      (obj.amountToReturn = message.amountToReturn);
    return obj;
  },

  fromPartial(object: DeepPartial<Sentence>): Sentence {
    const message = { ...baseSentence } as Sentence;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.plaintifGuilty !== undefined && object.plaintifGuilty !== null) {
      message.plaintifGuilty = object.plaintifGuilty;
    } else {
      message.plaintifGuilty = false;
    }
    if (
      object.defendantGuilty !== undefined &&
      object.defendantGuilty !== null
    ) {
      message.defendantGuilty = object.defendantGuilty;
    } else {
      message.defendantGuilty = false;
    }
    if (
      object.plaintifBlacklisted !== undefined &&
      object.plaintifBlacklisted !== null
    ) {
      message.plaintifBlacklisted = object.plaintifBlacklisted;
    } else {
      message.plaintifBlacklisted = false;
    }
    if (
      object.defendantBlacklisted !== undefined &&
      object.defendantBlacklisted !== null
    ) {
      message.defendantBlacklisted = object.defendantBlacklisted;
    } else {
      message.defendantBlacklisted = false;
    }
    if (
      object.plaintifJailTime !== undefined &&
      object.plaintifJailTime !== null
    ) {
      message.plaintifJailTime = object.plaintifJailTime;
    } else {
      message.plaintifJailTime = 0;
    }
    if (
      object.defendantJailTime !== undefined &&
      object.defendantJailTime !== null
    ) {
      message.defendantJailTime = object.defendantJailTime;
    } else {
      message.defendantJailTime = 0;
    }
    if (object.amountToReturn !== undefined && object.amountToReturn !== null) {
      message.amountToReturn = object.amountToReturn;
    } else {
      message.amountToReturn = 0;
    }
    return message;
  },
};

const baseVote: object = { voteId: "", voterId: "", disputeId: "" };

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.voteId !== "") {
      writer.uint32(10).string(message.voteId);
    }
    if (message.voterId !== "") {
      writer.uint32(18).string(message.voterId);
    }
    if (message.disputeId !== "") {
      writer.uint32(26).string(message.disputeId);
    }
    if (message.voteInfo !== undefined) {
      Sentence.encode(message.voteInfo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = reader.string();
          break;
        case 2:
          message.voterId = reader.string();
          break;
        case 3:
          message.disputeId = reader.string();
          break;
        case 4:
          message.voteInfo = Sentence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = String(object.voteId);
    } else {
      message.voteId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = String(object.voterId);
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = String(object.disputeId);
    } else {
      message.disputeId = "";
    }
    if (object.voteInfo !== undefined && object.voteInfo !== null) {
      message.voteInfo = Sentence.fromJSON(object.voteInfo);
    } else {
      message.voteInfo = undefined;
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.voteInfo !== undefined &&
      (obj.voteInfo = message.voteInfo
        ? Sentence.toJSON(message.voteInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = "";
    }
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = "";
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = "";
    }
    if (object.voteInfo !== undefined && object.voteInfo !== null) {
      message.voteInfo = Sentence.fromPartial(object.voteInfo);
    } else {
      message.voteInfo = undefined;
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
