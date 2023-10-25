import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class PlainText extends jspb.Message {
  getText(): string;
  setText(value: string): PlainText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlainText.AsObject;
  static toObject(includeInstance: boolean, msg: PlainText): PlainText.AsObject;
  static serializeBinaryToWriter(message: PlainText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlainText;
  static deserializeBinaryFromReader(message: PlainText, reader: jspb.BinaryReader): PlainText;
}

export namespace PlainText {
  export type AsObject = {
    text: string,
  }
}

export class PlainTextVector extends jspb.Message {
  getTextList(): Array<string>;
  setTextList(value: Array<string>): PlainTextVector;
  clearTextList(): PlainTextVector;
  addText(value: string, index?: number): PlainTextVector;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlainTextVector.AsObject;
  static toObject(includeInstance: boolean, msg: PlainTextVector): PlainTextVector.AsObject;
  static serializeBinaryToWriter(message: PlainTextVector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlainTextVector;
  static deserializeBinaryFromReader(message: PlainTextVector, reader: jspb.BinaryReader): PlainTextVector;
}

export namespace PlainTextVector {
  export type AsObject = {
    textList: Array<string>,
  }
}

export class Stacktrace extends jspb.Message {
  getTextList(): Array<string>;
  setTextList(value: Array<string>): Stacktrace;
  clearTextList(): Stacktrace;
  addText(value: string, index?: number): Stacktrace;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stacktrace.AsObject;
  static toObject(includeInstance: boolean, msg: Stacktrace): Stacktrace.AsObject;
  static serializeBinaryToWriter(message: Stacktrace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stacktrace;
  static deserializeBinaryFromReader(message: Stacktrace, reader: jspb.BinaryReader): Stacktrace;
}

export namespace Stacktrace {
  export type AsObject = {
    textList: Array<string>,
  }
}

export class StringStringMap extends jspb.Message {
  getMapMap(): jspb.Map<string, string>;
  clearMapMap(): StringStringMap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringStringMap.AsObject;
  static toObject(includeInstance: boolean, msg: StringStringMap): StringStringMap.AsObject;
  static serializeBinaryToWriter(message: StringStringMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringStringMap;
  static deserializeBinaryFromReader(message: StringStringMap, reader: jspb.BinaryReader): StringStringMap;
}

export namespace StringStringMap {
  export type AsObject = {
    mapMap: Array<[string, string]>,
  }
}

export class int_msg extends jspb.Message {
  getValue(): number;
  setValue(value: number): int_msg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): int_msg.AsObject;
  static toObject(includeInstance: boolean, msg: int_msg): int_msg.AsObject;
  static serializeBinaryToWriter(message: int_msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): int_msg;
  static deserializeBinaryFromReader(message: int_msg, reader: jspb.BinaryReader): int_msg;
}

export namespace int_msg {
  export type AsObject = {
    value: number,
  }
}

export class float_msg extends jspb.Message {
  getValue(): number;
  setValue(value: number): float_msg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): float_msg.AsObject;
  static toObject(includeInstance: boolean, msg: float_msg): float_msg.AsObject;
  static serializeBinaryToWriter(message: float_msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): float_msg;
  static deserializeBinaryFromReader(message: float_msg, reader: jspb.BinaryReader): float_msg;
}

export namespace float_msg {
  export type AsObject = {
    value: number,
  }
}

export class string_msg extends jspb.Message {
  getValue(): string;
  setValue(value: string): string_msg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): string_msg.AsObject;
  static toObject(includeInstance: boolean, msg: string_msg): string_msg.AsObject;
  static serializeBinaryToWriter(message: string_msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): string_msg;
  static deserializeBinaryFromReader(message: string_msg, reader: jspb.BinaryReader): string_msg;
}

export namespace string_msg {
  export type AsObject = {
    value: string,
  }
}

