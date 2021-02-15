// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var protoc$gen$openapiv2_options_annotations_pb = require('./protoc-gen-openapiv2/options/annotations_pb.js');

function serialize_example_AddUserRequest(arg) {
  if (!(arg instanceof example_pb.AddUserRequest)) {
    throw new Error('Expected argument of type example.AddUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_AddUserRequest(buffer_arg) {
  return example_pb.AddUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ListUsersRequest(arg) {
  if (!(arg instanceof example_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type example.ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ListUsersRequest(buffer_arg) {
  return example_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_User(arg) {
  if (!(arg instanceof example_pb.User)) {
    throw new Error('Expected argument of type example.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_User(buffer_arg) {
  return example_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  addUser: {
    path: '/example.UserService/AddUser',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.AddUserRequest,
    responseType: example_pb.User,
    requestSerialize: serialize_example_AddUserRequest,
    requestDeserialize: deserialize_example_AddUserRequest,
    responseSerialize: serialize_example_User,
    responseDeserialize: deserialize_example_User,
  },
  listUsers: {
    path: '/example.UserService/ListUsers',
    requestStream: false,
    responseStream: true,
    requestType: example_pb.ListUsersRequest,
    responseType: example_pb.User,
    requestSerialize: serialize_example_ListUsersRequest,
    requestDeserialize: deserialize_example_ListUsersRequest,
    responseSerialize: serialize_example_User,
    responseDeserialize: deserialize_example_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
