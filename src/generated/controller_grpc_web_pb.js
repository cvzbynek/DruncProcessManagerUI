/**
 * @fileoverview gRPC-Web generated client stub for dunedaq.druncschema
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.1
// source: controller.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var request_response_pb = require('./request_response_pb.js')

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')
const proto = {};
proto.dunedaq = {};
proto.dunedaq.druncschema = require('./controller_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.dunedaq.druncschema.ControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.dunedaq.druncschema.ControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_ls = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/ls',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.ls =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/ls',
      request,
      metadata || {},
      methodDescriptor_Controller_ls,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.ls =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/ls',
      request,
      metadata || {},
      methodDescriptor_Controller_ls);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_describe = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/describe',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.describe =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/describe',
      request,
      metadata || {},
      methodDescriptor_Controller_describe,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.describe =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/describe',
      request,
      metadata || {},
      methodDescriptor_Controller_describe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_get_children_status = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/get_children_status',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.get_children_status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/get_children_status',
      request,
      metadata || {},
      methodDescriptor_Controller_get_children_status,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.get_children_status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/get_children_status',
      request,
      metadata || {},
      methodDescriptor_Controller_get_children_status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_get_status = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/get_status',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.get_status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/get_status',
      request,
      metadata || {},
      methodDescriptor_Controller_get_status,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.get_status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/get_status',
      request,
      metadata || {},
      methodDescriptor_Controller_get_status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_describe_fsm = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/describe_fsm',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.describe_fsm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/describe_fsm',
      request,
      metadata || {},
      methodDescriptor_Controller_describe_fsm,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.describe_fsm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/describe_fsm',
      request,
      metadata || {},
      methodDescriptor_Controller_describe_fsm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_execute_fsm_command = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/execute_fsm_command',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.execute_fsm_command =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/execute_fsm_command',
      request,
      metadata || {},
      methodDescriptor_Controller_execute_fsm_command,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.execute_fsm_command =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/execute_fsm_command',
      request,
      metadata || {},
      methodDescriptor_Controller_execute_fsm_command);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_include = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/include',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.include =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/include',
      request,
      metadata || {},
      methodDescriptor_Controller_include,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.include =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/include',
      request,
      metadata || {},
      methodDescriptor_Controller_include);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_exclude = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/exclude',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.exclude =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/exclude',
      request,
      metadata || {},
      methodDescriptor_Controller_exclude,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.exclude =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/exclude',
      request,
      metadata || {},
      methodDescriptor_Controller_exclude);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_take_control = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/take_control',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.take_control =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/take_control',
      request,
      metadata || {},
      methodDescriptor_Controller_take_control,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.take_control =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/take_control',
      request,
      metadata || {},
      methodDescriptor_Controller_take_control);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_surrender_control = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/surrender_control',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.surrender_control =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/surrender_control',
      request,
      metadata || {},
      methodDescriptor_Controller_surrender_control,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.surrender_control =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/surrender_control',
      request,
      metadata || {},
      methodDescriptor_Controller_surrender_control);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dunedaq.druncschema.Request,
 *   !proto.dunedaq.druncschema.Response>}
 */
const methodDescriptor_Controller_who_is_in_charge = new grpc.web.MethodDescriptor(
  '/dunedaq.druncschema.Controller/who_is_in_charge',
  grpc.web.MethodType.UNARY,
  request_response_pb.Request,
  request_response_pb.Response,
  /**
   * @param {!proto.dunedaq.druncschema.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  request_response_pb.Response.deserializeBinary
);


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.dunedaq.druncschema.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dunedaq.druncschema.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dunedaq.druncschema.ControllerClient.prototype.who_is_in_charge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/who_is_in_charge',
      request,
      metadata || {},
      methodDescriptor_Controller_who_is_in_charge,
      callback);
};


/**
 * @param {!proto.dunedaq.druncschema.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dunedaq.druncschema.Response>}
 *     Promise that resolves to the response
 */
proto.dunedaq.druncschema.ControllerPromiseClient.prototype.who_is_in_charge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dunedaq.druncschema.Controller/who_is_in_charge',
      request,
      metadata || {},
      methodDescriptor_Controller_who_is_in_charge);
};


module.exports = proto.dunedaq.druncschema;
