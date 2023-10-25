import * as jspb from 'google-protobuf'

import * as request_response_pb from './request_response_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class FSMCommand extends jspb.Message {
  getCommandName(): string;
  setCommandName(value: string): FSMCommand;

  getArgumentsMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearArgumentsMap(): FSMCommand;

  getChildrenNodesList(): Array<string>;
  setChildrenNodesList(value: Array<string>): FSMCommand;
  clearChildrenNodesList(): FSMCommand;
  addChildrenNodes(value: string, index?: number): FSMCommand;

  getData(): string;
  setData(value: string): FSMCommand;
  hasData(): boolean;
  clearData(): FSMCommand;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FSMCommand.AsObject;
  static toObject(includeInstance: boolean, msg: FSMCommand): FSMCommand.AsObject;
  static serializeBinaryToWriter(message: FSMCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FSMCommand;
  static deserializeBinaryFromReader(message: FSMCommand, reader: jspb.BinaryReader): FSMCommand;
}

export namespace FSMCommand {
  export type AsObject = {
    commandName: string,
    argumentsMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    childrenNodesList: Array<string>,
    data?: string,
  }

  export enum DataCase { 
    _DATA_NOT_SET = 0,
    DATA = 4,
  }
}

export class FSMCommandResponse extends jspb.Message {
  getSuccessful(): FSMCommandResponseCode;
  setSuccessful(value: FSMCommandResponseCode): FSMCommandResponse;

  getCommandName(): string;
  setCommandName(value: string): FSMCommandResponse;

  getData(): google_protobuf_any_pb.Any | undefined;
  setData(value?: google_protobuf_any_pb.Any): FSMCommandResponse;
  hasData(): boolean;
  clearData(): FSMCommandResponse;

  getChildrenSuccessfulMap(): jspb.Map<string, FSMCommandResponseCode>;
  clearChildrenSuccessfulMap(): FSMCommandResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FSMCommandResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FSMCommandResponse): FSMCommandResponse.AsObject;
  static serializeBinaryToWriter(message: FSMCommandResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FSMCommandResponse;
  static deserializeBinaryFromReader(message: FSMCommandResponse, reader: jspb.BinaryReader): FSMCommandResponse;
}

export namespace FSMCommandResponse {
  export type AsObject = {
    successful: FSMCommandResponseCode,
    commandName: string,
    data?: google_protobuf_any_pb.Any.AsObject,
    childrenSuccessfulMap: Array<[string, FSMCommandResponseCode]>,
  }
}

export class Argument extends jspb.Message {
  getName(): string;
  setName(value: string): Argument;

  getPresence(): Argument.Presence;
  setPresence(value: Argument.Presence): Argument;

  getType(): Argument.Type;
  setType(value: Argument.Type): Argument;

  getDefaultValue(): google_protobuf_any_pb.Any | undefined;
  setDefaultValue(value?: google_protobuf_any_pb.Any): Argument;
  hasDefaultValue(): boolean;
  clearDefaultValue(): Argument;

  getChoicesList(): Array<google_protobuf_any_pb.Any>;
  setChoicesList(value: Array<google_protobuf_any_pb.Any>): Argument;
  clearChoicesList(): Argument;
  addChoices(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getHelp(): string;
  setHelp(value: string): Argument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Argument.AsObject;
  static toObject(includeInstance: boolean, msg: Argument): Argument.AsObject;
  static serializeBinaryToWriter(message: Argument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Argument;
  static deserializeBinaryFromReader(message: Argument, reader: jspb.BinaryReader): Argument;
}

export namespace Argument {
  export type AsObject = {
    name: string,
    presence: Argument.Presence,
    type: Argument.Type,
    defaultValue?: google_protobuf_any_pb.Any.AsObject,
    choicesList: Array<google_protobuf_any_pb.Any.AsObject>,
    help: string,
  }

  export enum Presence { 
    MANDATORY = 0,
    OPTIONAL = 1,
  }

  export enum Type { 
    INT = 0,
    FLOAT = 1,
    STRING = 2,
  }

  export enum DefaultValueCase { 
    _DEFAULT_VALUE_NOT_SET = 0,
    DEFAULT_VALUE = 4,
  }
}

export class FSMCommandDescription extends jspb.Message {
  getName(): string;
  setName(value: string): FSMCommandDescription;

  getDataTypeList(): Array<string>;
  setDataTypeList(value: Array<string>): FSMCommandDescription;
  clearDataTypeList(): FSMCommandDescription;
  addDataType(value: string, index?: number): FSMCommandDescription;

  getHelp(): string;
  setHelp(value: string): FSMCommandDescription;

  getReturnType(): string;
  setReturnType(value: string): FSMCommandDescription;

  getArgumentsList(): Array<Argument>;
  setArgumentsList(value: Array<Argument>): FSMCommandDescription;
  clearArgumentsList(): FSMCommandDescription;
  addArguments(value?: Argument, index?: number): Argument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FSMCommandDescription.AsObject;
  static toObject(includeInstance: boolean, msg: FSMCommandDescription): FSMCommandDescription.AsObject;
  static serializeBinaryToWriter(message: FSMCommandDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FSMCommandDescription;
  static deserializeBinaryFromReader(message: FSMCommandDescription, reader: jspb.BinaryReader): FSMCommandDescription;
}

export namespace FSMCommandDescription {
  export type AsObject = {
    name: string,
    dataTypeList: Array<string>,
    help: string,
    returnType: string,
    argumentsList: Array<Argument.AsObject>,
  }
}

export class FSMCommandsDescription extends jspb.Message {
  getType(): string;
  setType(value: string): FSMCommandsDescription;

  getName(): string;
  setName(value: string): FSMCommandsDescription;

  getSession(): string;
  setSession(value: string): FSMCommandsDescription;
  hasSession(): boolean;
  clearSession(): FSMCommandsDescription;

  getCommandsList(): Array<FSMCommandDescription>;
  setCommandsList(value: Array<FSMCommandDescription>): FSMCommandsDescription;
  clearCommandsList(): FSMCommandsDescription;
  addCommands(value?: FSMCommandDescription, index?: number): FSMCommandDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FSMCommandsDescription.AsObject;
  static toObject(includeInstance: boolean, msg: FSMCommandsDescription): FSMCommandsDescription.AsObject;
  static serializeBinaryToWriter(message: FSMCommandsDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FSMCommandsDescription;
  static deserializeBinaryFromReader(message: FSMCommandsDescription, reader: jspb.BinaryReader): FSMCommandsDescription;
}

export namespace FSMCommandsDescription {
  export type AsObject = {
    type: string,
    name: string,
    session?: string,
    commandsList: Array<FSMCommandDescription.AsObject>,
  }

  export enum SessionCase { 
    _SESSION_NOT_SET = 0,
    SESSION = 3,
  }
}

export class Status extends jspb.Message {
  getName(): string;
  setName(value: string): Status;

  getState(): string;
  setState(value: string): Status;

  getSubState(): string;
  setSubState(value: string): Status;

  getInError(): boolean;
  setInError(value: boolean): Status;

  getIncluded(): boolean;
  setIncluded(value: boolean): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Status.AsObject;
  static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
  static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Status;
  static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
  export type AsObject = {
    name: string,
    state: string,
    subState: string,
    inError: boolean,
    included: boolean,
  }
}

export class ChildrenStatus extends jspb.Message {
  getChildrenStatusList(): Array<Status>;
  setChildrenStatusList(value: Array<Status>): ChildrenStatus;
  clearChildrenStatusList(): ChildrenStatus;
  addChildrenStatus(value?: Status, index?: number): Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChildrenStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ChildrenStatus): ChildrenStatus.AsObject;
  static serializeBinaryToWriter(message: ChildrenStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChildrenStatus;
  static deserializeBinaryFromReader(message: ChildrenStatus, reader: jspb.BinaryReader): ChildrenStatus;
}

export namespace ChildrenStatus {
  export type AsObject = {
    childrenStatusList: Array<Status.AsObject>,
  }
}

export enum FSMCommandResponseCode { 
  INVALID_TRANSITION = 0,
  SUCCESSFUL = 1,
  UNSUCCESSFUL = 2,
}
