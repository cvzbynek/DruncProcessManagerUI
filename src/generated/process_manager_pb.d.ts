import * as jspb from 'google-protobuf'

import * as request_response_pb from './request_response_pb';


export class ProcessRestriction extends jspb.Message {
  getAllowedHostsList(): Array<string>;
  setAllowedHostsList(value: Array<string>): ProcessRestriction;
  clearAllowedHostsList(): ProcessRestriction;
  addAllowedHosts(value: string, index?: number): ProcessRestriction;

  getAllowedHostTypesList(): Array<string>;
  setAllowedHostTypesList(value: Array<string>): ProcessRestriction;
  clearAllowedHostTypesList(): ProcessRestriction;
  addAllowedHostTypes(value: string, index?: number): ProcessRestriction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessRestriction.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessRestriction): ProcessRestriction.AsObject;
  static serializeBinaryToWriter(message: ProcessRestriction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessRestriction;
  static deserializeBinaryFromReader(message: ProcessRestriction, reader: jspb.BinaryReader): ProcessRestriction;
}

export namespace ProcessRestriction {
  export type AsObject = {
    allowedHostsList: Array<string>,
    allowedHostTypesList: Array<string>,
  }
}

export class CommandNotificationMessage extends jspb.Message {
  getUser(): string;
  setUser(value: string): CommandNotificationMessage;

  getCommand(): string;
  setCommand(value: string): CommandNotificationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommandNotificationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CommandNotificationMessage): CommandNotificationMessage.AsObject;
  static serializeBinaryToWriter(message: CommandNotificationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommandNotificationMessage;
  static deserializeBinaryFromReader(message: CommandNotificationMessage, reader: jspb.BinaryReader): CommandNotificationMessage;
}

export namespace CommandNotificationMessage {
  export type AsObject = {
    user: string,
    command: string,
  }
}

export class GenericNotificationMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): GenericNotificationMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericNotificationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GenericNotificationMessage): GenericNotificationMessage.AsObject;
  static serializeBinaryToWriter(message: GenericNotificationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericNotificationMessage;
  static deserializeBinaryFromReader(message: GenericNotificationMessage, reader: jspb.BinaryReader): GenericNotificationMessage;
}

export namespace GenericNotificationMessage {
  export type AsObject = {
    message: string,
  }
}

export class ExceptionNotification extends jspb.Message {
  getErrorText(): string;
  setErrorText(value: string): ExceptionNotification;

  getStackTraceList(): Array<ExceptionNotification.StackLine>;
  setStackTraceList(value: Array<ExceptionNotification.StackLine>): ExceptionNotification;
  clearStackTraceList(): ExceptionNotification;
  addStackTrace(value?: ExceptionNotification.StackLine, index?: number): ExceptionNotification.StackLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExceptionNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ExceptionNotification): ExceptionNotification.AsObject;
  static serializeBinaryToWriter(message: ExceptionNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExceptionNotification;
  static deserializeBinaryFromReader(message: ExceptionNotification, reader: jspb.BinaryReader): ExceptionNotification;
}

export namespace ExceptionNotification {
  export type AsObject = {
    errorText: string,
    stackTraceList: Array<ExceptionNotification.StackLine.AsObject>,
  }

  export class StackLine extends jspb.Message {
    getLineText(): string;
    setLineText(value: string): StackLine;

    getLineNumber(): string;
    setLineNumber(value: string): StackLine;

    getFile(): string;
    setFile(value: string): StackLine;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StackLine.AsObject;
    static toObject(includeInstance: boolean, msg: StackLine): StackLine.AsObject;
    static serializeBinaryToWriter(message: StackLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StackLine;
    static deserializeBinaryFromReader(message: StackLine, reader: jspb.BinaryReader): StackLine;
  }

  export namespace StackLine {
    export type AsObject = {
      lineText: string,
      lineNumber: string,
      file: string,
    }
  }

}

export class LogRequest extends jspb.Message {
  getQuery(): ProcessQuery | undefined;
  setQuery(value?: ProcessQuery): LogRequest;
  hasQuery(): boolean;
  clearQuery(): LogRequest;

  getHowFar(): number;
  setHowFar(value: number): LogRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogRequest): LogRequest.AsObject;
  static serializeBinaryToWriter(message: LogRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRequest;
  static deserializeBinaryFromReader(message: LogRequest, reader: jspb.BinaryReader): LogRequest;
}

export namespace LogRequest {
  export type AsObject = {
    query?: ProcessQuery.AsObject,
    howFar: number,
  }
}

export class LogLine extends jspb.Message {
  getUuid(): ProcessUUID | undefined;
  setUuid(value?: ProcessUUID): LogLine;
  hasUuid(): boolean;
  clearUuid(): LogLine;

  getLine(): string;
  setLine(value: string): LogLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogLine.AsObject;
  static toObject(includeInstance: boolean, msg: LogLine): LogLine.AsObject;
  static serializeBinaryToWriter(message: LogLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogLine;
  static deserializeBinaryFromReader(message: LogLine, reader: jspb.BinaryReader): LogLine;
}

export namespace LogLine {
  export type AsObject = {
    uuid?: ProcessUUID.AsObject,
    line: string,
  }
}

export class ProcessUUID extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): ProcessUUID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessUUID.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessUUID): ProcessUUID.AsObject;
  static serializeBinaryToWriter(message: ProcessUUID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessUUID;
  static deserializeBinaryFromReader(message: ProcessUUID, reader: jspb.BinaryReader): ProcessUUID;
}

export namespace ProcessUUID {
  export type AsObject = {
    uuid: string,
  }
}

export class ProcessMetadata extends jspb.Message {
  getUuid(): ProcessUUID | undefined;
  setUuid(value?: ProcessUUID): ProcessMetadata;
  hasUuid(): boolean;
  clearUuid(): ProcessMetadata;

  getUser(): string;
  setUser(value: string): ProcessMetadata;

  getSession(): string;
  setSession(value: string): ProcessMetadata;

  getName(): string;
  setName(value: string): ProcessMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessMetadata): ProcessMetadata.AsObject;
  static serializeBinaryToWriter(message: ProcessMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessMetadata;
  static deserializeBinaryFromReader(message: ProcessMetadata, reader: jspb.BinaryReader): ProcessMetadata;
}

export namespace ProcessMetadata {
  export type AsObject = {
    uuid?: ProcessUUID.AsObject,
    user: string,
    session: string,
    name: string,
  }
}

export class ProcessQuery extends jspb.Message {
  getUuidsList(): Array<ProcessUUID>;
  setUuidsList(value: Array<ProcessUUID>): ProcessQuery;
  clearUuidsList(): ProcessQuery;
  addUuids(value?: ProcessUUID, index?: number): ProcessUUID;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): ProcessQuery;
  clearNamesList(): ProcessQuery;
  addNames(value: string, index?: number): ProcessQuery;

  getUser(): string;
  setUser(value: string): ProcessQuery;

  getSession(): string;
  setSession(value: string): ProcessQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessQuery): ProcessQuery.AsObject;
  static serializeBinaryToWriter(message: ProcessQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessQuery;
  static deserializeBinaryFromReader(message: ProcessQuery, reader: jspb.BinaryReader): ProcessQuery;
}

export namespace ProcessQuery {
  export type AsObject = {
    uuidsList: Array<ProcessUUID.AsObject>,
    namesList: Array<string>,
    user: string,
    session: string,
  }
}

export class ProcessDescription extends jspb.Message {
  getMetadata(): ProcessMetadata | undefined;
  setMetadata(value?: ProcessMetadata): ProcessDescription;
  hasMetadata(): boolean;
  clearMetadata(): ProcessDescription;

  getEnvMap(): jspb.Map<string, string>;
  clearEnvMap(): ProcessDescription;

  getExecutableAndArgumentsList(): Array<ProcessDescription.ExecAndArgs>;
  setExecutableAndArgumentsList(value: Array<ProcessDescription.ExecAndArgs>): ProcessDescription;
  clearExecutableAndArgumentsList(): ProcessDescription;
  addExecutableAndArguments(value?: ProcessDescription.ExecAndArgs, index?: number): ProcessDescription.ExecAndArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessDescription.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessDescription): ProcessDescription.AsObject;
  static serializeBinaryToWriter(message: ProcessDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessDescription;
  static deserializeBinaryFromReader(message: ProcessDescription, reader: jspb.BinaryReader): ProcessDescription;
}

export namespace ProcessDescription {
  export type AsObject = {
    metadata?: ProcessMetadata.AsObject,
    envMap: Array<[string, string]>,
    executableAndArgumentsList: Array<ProcessDescription.ExecAndArgs.AsObject>,
  }

  export class StringList extends jspb.Message {
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): StringList;
    clearValuesList(): StringList;
    addValues(value: string, index?: number): StringList;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringList.AsObject;
    static toObject(includeInstance: boolean, msg: StringList): StringList.AsObject;
    static serializeBinaryToWriter(message: StringList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringList;
    static deserializeBinaryFromReader(message: StringList, reader: jspb.BinaryReader): StringList;
  }

  export namespace StringList {
    export type AsObject = {
      valuesList: Array<string>,
    }
  }


  export class ExecAndArgs extends jspb.Message {
    getExec(): string;
    setExec(value: string): ExecAndArgs;

    getArgsList(): Array<string>;
    setArgsList(value: Array<string>): ExecAndArgs;
    clearArgsList(): ExecAndArgs;
    addArgs(value: string, index?: number): ExecAndArgs;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecAndArgs.AsObject;
    static toObject(includeInstance: boolean, msg: ExecAndArgs): ExecAndArgs.AsObject;
    static serializeBinaryToWriter(message: ExecAndArgs, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecAndArgs;
    static deserializeBinaryFromReader(message: ExecAndArgs, reader: jspb.BinaryReader): ExecAndArgs;
  }

  export namespace ExecAndArgs {
    export type AsObject = {
      exec: string,
      argsList: Array<string>,
    }
  }

}

export class ProcessInstance extends jspb.Message {
  getProcessDescription(): ProcessDescription | undefined;
  setProcessDescription(value?: ProcessDescription): ProcessInstance;
  hasProcessDescription(): boolean;
  clearProcessDescription(): ProcessInstance;

  getProcessRestriction(): ProcessRestriction | undefined;
  setProcessRestriction(value?: ProcessRestriction): ProcessInstance;
  hasProcessRestriction(): boolean;
  clearProcessRestriction(): ProcessInstance;

  getStatusCode(): ProcessInstance.StatusCode;
  setStatusCode(value: ProcessInstance.StatusCode): ProcessInstance;

  getReturnCode(): number;
  setReturnCode(value: number): ProcessInstance;

  getUuid(): ProcessUUID | undefined;
  setUuid(value?: ProcessUUID): ProcessInstance;
  hasUuid(): boolean;
  clearUuid(): ProcessInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessInstance.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessInstance): ProcessInstance.AsObject;
  static serializeBinaryToWriter(message: ProcessInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessInstance;
  static deserializeBinaryFromReader(message: ProcessInstance, reader: jspb.BinaryReader): ProcessInstance;
}

export namespace ProcessInstance {
  export type AsObject = {
    processDescription?: ProcessDescription.AsObject,
    processRestriction?: ProcessRestriction.AsObject,
    statusCode: ProcessInstance.StatusCode,
    returnCode: number,
    uuid?: ProcessUUID.AsObject,
  }

  export enum StatusCode { 
    RUNNING = 0,
    DEAD = 1,
  }
}

export class BootRequest extends jspb.Message {
  getProcessDescription(): ProcessDescription | undefined;
  setProcessDescription(value?: ProcessDescription): BootRequest;
  hasProcessDescription(): boolean;
  clearProcessDescription(): BootRequest;

  getProcessRestriction(): ProcessRestriction | undefined;
  setProcessRestriction(value?: ProcessRestriction): BootRequest;
  hasProcessRestriction(): boolean;
  clearProcessRestriction(): BootRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BootRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BootRequest): BootRequest.AsObject;
  static serializeBinaryToWriter(message: BootRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BootRequest;
  static deserializeBinaryFromReader(message: BootRequest, reader: jspb.BinaryReader): BootRequest;
}

export namespace BootRequest {
  export type AsObject = {
    processDescription?: ProcessDescription.AsObject,
    processRestriction?: ProcessRestriction.AsObject,
  }
}

export class ProcessInstanceList extends jspb.Message {
  getValuesList(): Array<ProcessInstance>;
  setValuesList(value: Array<ProcessInstance>): ProcessInstanceList;
  clearValuesList(): ProcessInstanceList;
  addValues(value?: ProcessInstance, index?: number): ProcessInstance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcessInstanceList.AsObject;
  static toObject(includeInstance: boolean, msg: ProcessInstanceList): ProcessInstanceList.AsObject;
  static serializeBinaryToWriter(message: ProcessInstanceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcessInstanceList;
  static deserializeBinaryFromReader(message: ProcessInstanceList, reader: jspb.BinaryReader): ProcessInstanceList;
}

export namespace ProcessInstanceList {
  export type AsObject = {
    valuesList: Array<ProcessInstance.AsObject>,
  }
}

