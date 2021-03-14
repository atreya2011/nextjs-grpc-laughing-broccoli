import { UserServiceClient } from "@atreya2011/grpc-proto-laughing-brocolli/example_grpc_web_pb";
import { AddUserRequest } from "@atreya2011/grpc-proto-laughing-brocolli/example_pb";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [userId, setUserId] = useState("");

  const genUserId = () => {
    const addUserRequest = new AddUserRequest();
    const client = new UserServiceClient("http://localhost:10001", null, null);

    client.addUser(
      addUserRequest,
      {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSiBTbWl0aCIsImVtYWlsIjoianNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNjEzMzUwNTAxfQ.g_Ad8T49-PeF0PGWGcYSjlG0Ib3jBHF52bqoMaEXj6td7SlCAJBwtH8UdsFVAX6xT44DQvydOidLI-vgKP9E_Q",
      },
      (err, response) => {
        if (err) {
          console.log(err.message);
        } else {
          const resObj = response.toObject();
          setUserId(resObj.user?.id as string);
        }
      },
    );
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
