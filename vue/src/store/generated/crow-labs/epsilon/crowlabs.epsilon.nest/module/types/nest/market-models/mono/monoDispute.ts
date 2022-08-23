/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "crowlabs.epsilon.nest.marketmodels.mono";

/** MonoEvidence defines evidence for a dispute/rebutal in the mono marketplace */
export interface MonoEvidence {
  evidenceId: number;
  disputeId: number;
  externalLink: string;
}

/** MonoRebuttal defines the rebutal for a raised dispute in the mono marketplace */
export interface MonoRebuttal {
  rebuttalId: number;
  disputeId: number;
  evidence: MonoEvidence | undefined;
}

/** monoDispute defines a dispute over a mono markeplace exchange of physical goods */
export interface MonoDispute {
  diputeId: number;
  title: string;
  description: string;
  evidence: MonoEvidence | undefined;
}

/** MonoFundDistribution defines a structure to divide distributed funds in */
export interface MonoFundDistribution {
  plaintifAmount: Coin[];
  defendantAmount: Coin[];
}

/** MonoSentence defines the outcome of a dispute */
export interface MonoSentence {
  voteId: number;
  plaintifGuilty: boolean;
  defendantGuilty: boolean;
  plainttifBlacklisted: boolean;
  defendantBlacklisted: boolean;
  fundDistr: MonoFundDistribution | undefined;
}

/** MonoVote defines the vote that is cast for a MonoDispute */
export interface MonoVote {
  voterId: number;
  disputeId: number;
  buyerId: MonoSentence | undefined;
}

const baseMonoEvidence: object = {
  evidenceId: 0,
  disputeId: 0,
  externalLink: "",
};

export const MonoEvidence = {
  encode(message: MonoEvidence, writer: Writer = Writer.create()): Writer {
    if (message.evidenceId !== 0) {
      writer.uint32(8).uint64(message.evidenceId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(16).uint64(message.disputeId);
    }
    if (message.externalLink !== "") {
      writer.uint32(26).string(message.externalLink);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoEvidence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoEvidence } as MonoEvidence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.disputeId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MonoEvidence {
    const message = { ...baseMonoEvidence } as MonoEvidence;
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = Number(object.evidenceId);
    } else {
      message.evidenceId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = String(object.externalLink);
    } else {
      message.externalLink = "";
    }
    return message;
  },

  toJSON(message: MonoEvidence): unknown {
    const obj: any = {};
    message.evidenceId !== undefined && (obj.evidenceId = message.evidenceId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.externalLink !== undefined &&
      (obj.externalLink = message.externalLink);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoEvidence>): MonoEvidence {
    const message = { ...baseMonoEvidence } as MonoEvidence;
    if (object.evidenceId !== undefined && object.evidenceId !== null) {
      message.evidenceId = object.evidenceId;
    } else {
      message.evidenceId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.externalLink !== undefined && object.externalLink !== null) {
      message.externalLink = object.externalLink;
    } else {
      message.externalLink = "";
    }
    return message;
  },
};

const baseMonoRebuttal: object = { rebuttalId: 0, disputeId: 0 };

export const MonoRebuttal = {
  encode(message: MonoRebuttal, writer: Writer = Writer.create()): Writer {
    if (message.rebuttalId !== 0) {
      writer.uint32(8).uint64(message.rebuttalId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(16).uint64(message.disputeId);
    }
    if (message.evidence !== undefined) {
      MonoEvidence.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoRebuttal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoRebuttal } as MonoRebuttal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebuttalId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.evidence = MonoEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoRebuttal {
    const message = { ...baseMonoRebuttal } as MonoRebuttal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = Number(object.rebuttalId);
    } else {
      message.rebuttalId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = MonoEvidence.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },

  toJSON(message: MonoRebuttal): unknown {
    const obj: any = {};
    message.rebuttalId !== undefined && (obj.rebuttalId = message.rebuttalId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence
        ? MonoEvidence.toJSON(message.evidence)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoRebuttal>): MonoRebuttal {
    const message = { ...baseMonoRebuttal } as MonoRebuttal;
    if (object.rebuttalId !== undefined && object.rebuttalId !== null) {
      message.rebuttalId = object.rebuttalId;
    } else {
      message.rebuttalId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = MonoEvidence.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },
};

const baseMonoDispute: object = { diputeId: 0, title: "", description: "" };

export const MonoDispute = {
  encode(message: MonoDispute, writer: Writer = Writer.create()): Writer {
    if (message.diputeId !== 0) {
      writer.uint32(8).uint64(message.diputeId);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.evidence !== undefined) {
      MonoEvidence.encode(message.evidence, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoDispute {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoDispute } as MonoDispute;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.diputeId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.evidence = MonoEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoDispute {
    const message = { ...baseMonoDispute } as MonoDispute;
    if (object.diputeId !== undefined && object.diputeId !== null) {
      message.diputeId = Number(object.diputeId);
    } else {
      message.diputeId = 0;
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
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = MonoEvidence.fromJSON(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },

  toJSON(message: MonoDispute): unknown {
    const obj: any = {};
    message.diputeId !== undefined && (obj.diputeId = message.diputeId);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.evidence !== undefined &&
      (obj.evidence = message.evidence
        ? MonoEvidence.toJSON(message.evidence)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoDispute>): MonoDispute {
    const message = { ...baseMonoDispute } as MonoDispute;
    if (object.diputeId !== undefined && object.diputeId !== null) {
      message.diputeId = object.diputeId;
    } else {
      message.diputeId = 0;
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
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = MonoEvidence.fromPartial(object.evidence);
    } else {
      message.evidence = undefined;
    }
    return message;
  },
};

const baseMonoFundDistribution: object = {};

export const MonoFundDistribution = {
  encode(
    message: MonoFundDistribution,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.plaintifAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.defendantAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoFundDistribution {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoFundDistribution } as MonoFundDistribution;
    message.plaintifAmount = [];
    message.defendantAmount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plaintifAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defendantAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoFundDistribution {
    const message = { ...baseMonoFundDistribution } as MonoFundDistribution;
    message.plaintifAmount = [];
    message.defendantAmount = [];
    if (object.plaintifAmount !== undefined && object.plaintifAmount !== null) {
      for (const e of object.plaintifAmount) {
        message.plaintifAmount.push(Coin.fromJSON(e));
      }
    }
    if (
      object.defendantAmount !== undefined &&
      object.defendantAmount !== null
    ) {
      for (const e of object.defendantAmount) {
        message.defendantAmount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MonoFundDistribution): unknown {
    const obj: any = {};
    if (message.plaintifAmount) {
      obj.plaintifAmount = message.plaintifAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.plaintifAmount = [];
    }
    if (message.defendantAmount) {
      obj.defendantAmount = message.defendantAmount.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.defendantAmount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MonoFundDistribution>): MonoFundDistribution {
    const message = { ...baseMonoFundDistribution } as MonoFundDistribution;
    message.plaintifAmount = [];
    message.defendantAmount = [];
    if (object.plaintifAmount !== undefined && object.plaintifAmount !== null) {
      for (const e of object.plaintifAmount) {
        message.plaintifAmount.push(Coin.fromPartial(e));
      }
    }
    if (
      object.defendantAmount !== undefined &&
      object.defendantAmount !== null
    ) {
      for (const e of object.defendantAmount) {
        message.defendantAmount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMonoSentence: object = {
  voteId: 0,
  plaintifGuilty: false,
  defendantGuilty: false,
  plainttifBlacklisted: false,
  defendantBlacklisted: false,
};

export const MonoSentence = {
  encode(message: MonoSentence, writer: Writer = Writer.create()): Writer {
    if (message.voteId !== 0) {
      writer.uint32(8).uint64(message.voteId);
    }
    if (message.plaintifGuilty === true) {
      writer.uint32(16).bool(message.plaintifGuilty);
    }
    if (message.defendantGuilty === true) {
      writer.uint32(24).bool(message.defendantGuilty);
    }
    if (message.plainttifBlacklisted === true) {
      writer.uint32(32).bool(message.plainttifBlacklisted);
    }
    if (message.defendantBlacklisted === true) {
      writer.uint32(40).bool(message.defendantBlacklisted);
    }
    if (message.fundDistr !== undefined) {
      MonoFundDistribution.encode(
        message.fundDistr,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoSentence {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoSentence } as MonoSentence;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.plaintifGuilty = reader.bool();
          break;
        case 3:
          message.defendantGuilty = reader.bool();
          break;
        case 4:
          message.plainttifBlacklisted = reader.bool();
          break;
        case 5:
          message.defendantBlacklisted = reader.bool();
          break;
        case 6:
          message.fundDistr = MonoFundDistribution.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoSentence {
    const message = { ...baseMonoSentence } as MonoSentence;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = Number(object.voteId);
    } else {
      message.voteId = 0;
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
      object.plainttifBlacklisted !== undefined &&
      object.plainttifBlacklisted !== null
    ) {
      message.plainttifBlacklisted = Boolean(object.plainttifBlacklisted);
    } else {
      message.plainttifBlacklisted = false;
    }
    if (
      object.defendantBlacklisted !== undefined &&
      object.defendantBlacklisted !== null
    ) {
      message.defendantBlacklisted = Boolean(object.defendantBlacklisted);
    } else {
      message.defendantBlacklisted = false;
    }
    if (object.fundDistr !== undefined && object.fundDistr !== null) {
      message.fundDistr = MonoFundDistribution.fromJSON(object.fundDistr);
    } else {
      message.fundDistr = undefined;
    }
    return message;
  },

  toJSON(message: MonoSentence): unknown {
    const obj: any = {};
    message.voteId !== undefined && (obj.voteId = message.voteId);
    message.plaintifGuilty !== undefined &&
      (obj.plaintifGuilty = message.plaintifGuilty);
    message.defendantGuilty !== undefined &&
      (obj.defendantGuilty = message.defendantGuilty);
    message.plainttifBlacklisted !== undefined &&
      (obj.plainttifBlacklisted = message.plainttifBlacklisted);
    message.defendantBlacklisted !== undefined &&
      (obj.defendantBlacklisted = message.defendantBlacklisted);
    message.fundDistr !== undefined &&
      (obj.fundDistr = message.fundDistr
        ? MonoFundDistribution.toJSON(message.fundDistr)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoSentence>): MonoSentence {
    const message = { ...baseMonoSentence } as MonoSentence;
    if (object.voteId !== undefined && object.voteId !== null) {
      message.voteId = object.voteId;
    } else {
      message.voteId = 0;
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
      object.plainttifBlacklisted !== undefined &&
      object.plainttifBlacklisted !== null
    ) {
      message.plainttifBlacklisted = object.plainttifBlacklisted;
    } else {
      message.plainttifBlacklisted = false;
    }
    if (
      object.defendantBlacklisted !== undefined &&
      object.defendantBlacklisted !== null
    ) {
      message.defendantBlacklisted = object.defendantBlacklisted;
    } else {
      message.defendantBlacklisted = false;
    }
    if (object.fundDistr !== undefined && object.fundDistr !== null) {
      message.fundDistr = MonoFundDistribution.fromPartial(object.fundDistr);
    } else {
      message.fundDistr = undefined;
    }
    return message;
  },
};

const baseMonoVote: object = { voterId: 0, disputeId: 0 };

export const MonoVote = {
  encode(message: MonoVote, writer: Writer = Writer.create()): Writer {
    if (message.voterId !== 0) {
      writer.uint32(8).uint64(message.voterId);
    }
    if (message.disputeId !== 0) {
      writer.uint32(16).uint64(message.disputeId);
    }
    if (message.buyerId !== undefined) {
      MonoSentence.encode(message.buyerId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MonoVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMonoVote } as MonoVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voterId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.disputeId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.buyerId = MonoSentence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MonoVote {
    const message = { ...baseMonoVote } as MonoVote;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = Number(object.voterId);
    } else {
      message.voterId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = Number(object.disputeId);
    } else {
      message.disputeId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = MonoSentence.fromJSON(object.buyerId);
    } else {
      message.buyerId = undefined;
    }
    return message;
  },

  toJSON(message: MonoVote): unknown {
    const obj: any = {};
    message.voterId !== undefined && (obj.voterId = message.voterId);
    message.disputeId !== undefined && (obj.disputeId = message.disputeId);
    message.buyerId !== undefined &&
      (obj.buyerId = message.buyerId
        ? MonoSentence.toJSON(message.buyerId)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MonoVote>): MonoVote {
    const message = { ...baseMonoVote } as MonoVote;
    if (object.voterId !== undefined && object.voterId !== null) {
      message.voterId = object.voterId;
    } else {
      message.voterId = 0;
    }
    if (object.disputeId !== undefined && object.disputeId !== null) {
      message.disputeId = object.disputeId;
    } else {
      message.disputeId = 0;
    }
    if (object.buyerId !== undefined && object.buyerId !== null) {
      message.buyerId = MonoSentence.fromPartial(object.buyerId);
    } else {
      message.buyerId = undefined;
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
