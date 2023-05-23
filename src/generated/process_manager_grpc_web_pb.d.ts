import * as grpcWeb from 'grpc-web';

import * as process_manager_pb from './process_manager_pb';
import * as request_response_pb from './request_response_pb';


export class ProcessManagerClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  boot(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  restart(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  is_alive(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  kill(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  killall(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  flush(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  list_process(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  logs(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<process_manager_pb.LogLine>;

}

export class ProcessManagerPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  boot(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  restart(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  is_alive(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  kill(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  killall(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  flush(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  list_process(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  logs(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<process_manager_pb.LogLine>;

}

