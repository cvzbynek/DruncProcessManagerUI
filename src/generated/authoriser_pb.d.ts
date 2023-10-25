import * as jspb from 'google-protobuf'

import * as token_pb from './token_pb';


export class AuthoriserRequest extends jspb.Message {
  getToken(): token_pb.Token | undefined;
  setToken(value?: token_pb.Token): AuthoriserRequest;
  hasToken(): boolean;
  clearToken(): AuthoriserRequest;

  getAction(): ActionType;
  setAction(value: ActionType): AuthoriserRequest;

  getSystem(): SystemType;
  setSystem(value: SystemType): AuthoriserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthoriserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthoriserRequest): AuthoriserRequest.AsObject;
  static serializeBinaryToWriter(message: AuthoriserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthoriserRequest;
  static deserializeBinaryFromReader(message: AuthoriserRequest, reader: jspb.BinaryReader): AuthoriserRequest;
}

export namespace AuthoriserRequest {
  export type AsObject = {
    token?: token_pb.Token.AsObject,
    action: ActionType,
    system: SystemType,
  }
}

export enum ActionType { 
  ACTION_UNSPECIFIED = 0,
  READ = 1,
  CREATE = 2,
  DELETE = 3,
}
export enum SystemType { 
  CONTROLLER = 0,
  PROCESS_MANAGER = 1,
}
