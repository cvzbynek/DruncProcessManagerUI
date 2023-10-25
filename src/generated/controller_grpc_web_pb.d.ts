import * as grpcWeb from 'grpc-web';

import * as request_response_pb from './request_response_pb';


export class ControllerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ls(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  describe(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  get_children_status(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  get_status(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  describe_fsm(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  execute_fsm_command(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  include(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  exclude(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  take_control(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  surrender_control(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  who_is_in_charge(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

}

export class ControllerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ls(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  describe(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  get_children_status(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  get_status(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  describe_fsm(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  execute_fsm_command(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  include(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  exclude(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  take_control(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  surrender_control(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  who_is_in_charge(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

}

