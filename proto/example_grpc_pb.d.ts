// package: example
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as example_pb from "./example_pb";
import * as protoc_gen_openapiv2_options_annotations_pb from "./protoc-gen-openapiv2/options/annotations_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addUser: IUserServiceService_IAddUser;
    listUsers: IUserServiceService_IListUsers;
}

interface IUserServiceService_IAddUser extends grpc.MethodDefinition<example_pb.AddUserRequest, example_pb.User> {
    path: "/example.UserService/AddUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.AddUserRequest>;
    requestDeserialize: grpc.deserialize<example_pb.AddUserRequest>;
    responseSerialize: grpc.serialize<example_pb.User>;
    responseDeserialize: grpc.deserialize<example_pb.User>;
}
interface IUserServiceService_IListUsers extends grpc.MethodDefinition<example_pb.ListUsersRequest, example_pb.User> {
    path: "/example.UserService/ListUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<example_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<example_pb.User>;
    responseDeserialize: grpc.deserialize<example_pb.User>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    addUser: grpc.handleUnaryCall<example_pb.AddUserRequest, example_pb.User>;
    listUsers: grpc.handleServerStreamingCall<example_pb.ListUsersRequest, example_pb.User>;
}

export interface IUserServiceClient {
    addUser(request: example_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    addUser(request: example_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    addUser(request: example_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    listUsers(request: example_pb.ListUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.User>;
    listUsers(request: example_pb.ListUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.User>;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public addUser(request: example_pb.AddUserRequest, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    public addUser(request: example_pb.AddUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    public addUser(request: example_pb.AddUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.User) => void): grpc.ClientUnaryCall;
    public listUsers(request: example_pb.ListUsersRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.User>;
    public listUsers(request: example_pb.ListUsersRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.User>;
}
