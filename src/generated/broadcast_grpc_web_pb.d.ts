import * as grpcWeb from 'grpc-web';

import * as broadcast_pb from './broadcast_pb';
import * as generic_pb from './generic_pb';
import * as request_response_pb from './request_response_pb';


export class BroadcastReceiverClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  handle_broadcast(
    request: broadcast_pb.BroadcastMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: generic_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<generic_pb.Empty>;

}

export class BroadcastSenderClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  add_to_broadcast_list(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  remove_from_broadcast_list(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

  get_broadcast_list(
    request: request_response_pb.Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: request_response_pb.Response) => void
  ): grpcWeb.ClientReadableStream<request_response_pb.Response>;

}

export class BroadcastReceiverPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  handle_broadcast(
    request: broadcast_pb.BroadcastMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<generic_pb.Empty>;

}

export class BroadcastSenderPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  add_to_broadcast_list(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  remove_from_broadcast_list(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

  get_broadcast_list(
    request: request_response_pb.Request,
    metadata?: grpcWeb.Metadata
  ): Promise<request_response_pb.Response>;

}

