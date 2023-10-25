import * as jspb from 'google-protobuf'



export class Token extends jspb.Message {
  getToken(): string;
  setToken(value: string): Token;

  getUserName(): string;
  setUserName(value: string): Token;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Token.AsObject;
  static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
  static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Token;
  static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
  export type AsObject = {
    token: string,
    userName: string,
  }
}

