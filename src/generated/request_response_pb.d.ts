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

