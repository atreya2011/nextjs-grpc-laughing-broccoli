import { AddUserRequest, UserServiceClient } from "@atreya2011/grpc-protobuf-ts-laughing-brocolli/example";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { RpcOptions, UnaryCall } from "@protobuf-ts/runtime-rpc";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("");

  const genUserId = async () => {
    const options: RpcOptions = {
      interceptors: [
        {
          // adds auth header to unary requests
          interceptUnary(next, method, input, options: RpcOptions): UnaryCall {
            if (!options.meta) {
              options.meta = {};
            }
            options.meta["Authorization"] =
              "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSiBTbWl0aCIsImVtYWlsIjoianNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNjEzMzUwNTAxfQ.g_Ad8T49-PeF0PGWGcYSjlG0Ib3jBHF52bqoMaEXj6td7SlCAJBwtH8UdsFVAX6xT44DQvydOidLI-vgKP9E_Q";
            return next(method, input, options);
          },
        },
      ],
    };

    const transport = new GrpcWebFetchTransport({
      ...options,
      baseUrl: "http://localhost:10001",
    });

    const client = new UserServiceClient(transport);
    const addUserRequest = {} as AddUserRequest;
    const { response } = await client.addUser(addUserRequest);
    setUserId(response.user?.id as string);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="p-3 text-5xl">
          Welcome to <a href="https://nextjs.org">Next.js! gRPC Example</a>
        </h1>
        <p className="p-3 text-xl">
          Generated User ID is: <strong>{userId}</strong>
        </p>
        <button className="flex ml-3 bg-indigo-600 text-white rounded-md p-2 hover:bg-indigo-900" onClick={genUserId}>
          Generate User ID
        </button>
      </main>
    </div>
  );
}
