import * as jspb from 'google-protobuf'

import * as token_pb from './token_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class Request extends jspb.Message {
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): Request;
  hasToken(): boolean;
  clearToken(): Request;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Request;
  hasData(): boolean;
  clearData(): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    token?: token_pb.Token.AsObject,
    data?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 2,
  }
}

export class Response extends jspb.Message {
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): Response;
  hasToken(): boolean;
  clearToken(): Response;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): Response;
  hasData(): boolean;
  clearData(): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    token?: token_pb.Token.AsObject,
    data?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 2,
  }
}

export class CommandDescription extends jspb.Message {
  getName(): string;
  setName(value: string): CommandDescription;

  getDataTypeList(): Array<string>;
  setDataTypeList(value: Array<string>): CommandDescription;
  clearDataTypeList(): CommandDescription;
  addDataType(value: string, index?: number): CommandDescription;

  getHelp(): string;
  setHelp(value: string): CommandDescription;

  getReturnType(): string;
  setReturnType(value: string): CommandDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandDescription.AsObject;
  static toObject(includeInstance: boolean, msg: CommandDescription): CommandDescription.AsObject;
  static serializeBinaryToWriter(message: CommandDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandDescription;
  static deserializeBinaryFromReader(message: CommandDescription, reader: jspb.BinaryReader): CommandDescription;
}

export namespace CommandDescription {
  export type AsObject = {
    name: string,
    dataTypeList: Array<string>,
    help: string,
    returnType: string,
  }
}

export class Description extends jspb.Message {
  getType(): string;
  setType(value: string): Description;

  getName(): string;
  setName(value: string): Description;

  getSession(): string;
  setSession(value: string): Description;
  hasSession(): boolean;
  clearSession(): Description;

  getCommandsList(): Array<CommandDescription>;
  setCommandsList(value: Array<CommandDescription>): Description;
  clearCommandsList(): Description;
  addCommands(value?: CommandDescription, index?: number): CommandDescription;

  getBroadcast(): google_protobuf_any_pb.Any | undefined;
  setBroadcast(value?: google_protobuf_any_pb.Any): Description;
  hasBroadcast(): boolean;
  clearBroadcast(): Description;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Description.AsObject;
  static toObject(includeInstance: boolean, msg: Description): Description.AsObject;
  static serializeBinaryToWriter(message: Description, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Description;
  static deserializeBinaryFromReader(message: Description, reader: jspb.BinaryReader): Description;
}

export namespace Description {
  export type AsObject = {
    type: string,
    name: string,
    session?: string,
    commandsList: Array<CommandDescription.AsObject>,
    broadcast?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum SessionCase { 
    _SESSION_NOT_SET = 0,
    SESSION = 3,
  }

  export enum BroadcastCase { 
    _BROADCAST_NOT_SET = 0,
    BROADCAST = 5,
  }
}

