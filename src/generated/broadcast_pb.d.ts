import * as jspb from 'google-protobuf'

import * as generic_pb from './generic_pb';
import * as request_response_pb from './request_response_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class KafkaBroadcastHandlerConfiguration extends jspb.Message {
  getKafkaAddress(): string;
  setKafkaAddress(value: string): KafkaBroadcastHandlerConfiguration;

  getTopic(): string;
  setTopic(value: string): KafkaBroadcastHandlerConfiguration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KafkaBroadcastHandlerConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: KafkaBroadcastHandlerConfiguration): KafkaBroadcastHandlerConfiguration.AsObject;
  static serializeBinaryToWriter(message: KafkaBroadcastHandlerConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KafkaBroadcastHandlerConfiguration;
  static deserializeBinaryFromReader(message: KafkaBroadcastHandlerConfiguration, reader: jspb.BinaryReader): KafkaBroadcastHandlerConfiguration;
}

export namespace KafkaBroadcastHandlerConfiguration {
  export type AsObject = {
    kafkaAddress: string,
    topic: string,
  }
}

export class Emitter extends jspb.Message {
  getProcess(): string;
  setProcess(value: string): Emitter;

  getSession(): string;
  setSession(value: string): Emitter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Emitter.AsObject;
  static toObject(includeInstance: boolean, msg: Emitter): Emitter.AsObject;
  static serializeBinaryToWriter(message: Emitter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Emitter;
  static deserializeBinaryFromReader(message: Emitter, reader: jspb.BinaryReader): Emitter;
}

export namespace Emitter {
  export type AsObject = {
    process: string,
    session: string,
  }
}

export class BroadcastMessage extends jspb.Message {
  getEmitter(): Emitter | undefined;
  setEmitter(value?: Emitter): BroadcastMessage;
  hasEmitter(): boolean;
  clearEmitter(): BroadcastMessage;

  getType(): BroadcastType;
  setType(value: BroadcastType): BroadcastMessage;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): BroadcastMessage;
  hasData(): boolean;
  clearData(): BroadcastMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastMessage.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastMessage): BroadcastMessage.AsObject;
  static serializeBinaryToWriter(message: BroadcastMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastMessage;
  static deserializeBinaryFromReader(message: BroadcastMessage, reader: jspb.BinaryReader): BroadcastMessage;
}

export namespace BroadcastMessage {
  export type AsObject = {
    emitter?: Emitter.AsObject,
    type: BroadcastType,
    data?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class BroadcastRequest extends jspb.Message {
  getBroadcastReceiverAddress(): string;
  setBroadcastReceiverAddress(value: string): BroadcastRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastRequest): BroadcastRequest.AsObject;
  static serializeBinaryToWriter(message: BroadcastRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastRequest;
  static deserializeBinaryFromReader(message: BroadcastRequest, reader: jspb.BinaryReader): BroadcastRequest;
}

export namespace BroadcastRequest {
  export type AsObject = {
    broadcastReceiverAddress: string,
  }
}

export class BroadcastResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): BroadcastResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastResponse): BroadcastResponse.AsObject;
  static serializeBinaryToWriter(message: BroadcastResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastResponse;
  static deserializeBinaryFromReader(message: BroadcastResponse, reader: jspb.BinaryReader): BroadcastResponse;
}

export namespace BroadcastResponse {
  export type AsObject = {
    success: boolean,
  }
}

export enum BroadcastType { 
  ACK = 0,
  RECEIVER_REMOVED = 1,
  RECEIVER_ADDED = 2,
  SERVER_READY = 3,
  SERVER_SHUTDOWN = 4,
  TEXT_MESSAGE = 15,
  COMMAND_EXECUTION_START = 5,
  COMMAND_RECEIVED = 16,
  COMMAND_EXECUTION_SUCCESS = 6,
  EXCEPTION_RAISED = 7,
  UNHANDLED_EXCEPTION_RAISED = 8,
  STATUS_UPDATE = 9,
  SUBPROCESS_STATUS_UPDATE = 10,
  DEBUG = 11,
  CHILD_COMMAND_EXECUTION_START = 12,
  CHILD_COMMAND_EXECUTION_SUCCESS = 13,
  CHILD_COMMAND_EXECUTION_FAILED = 14,
  FSM_STATUS_UPDATE = 17,
}
