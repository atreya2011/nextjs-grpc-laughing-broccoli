import { UserServiceClient } from "@atreya2011/grpc-client-laughing-brocolli/example_grpc_pb";
import { AddUserRequest, AddUserResponse } from "@atreya2011/grpc-client-laughing-brocolli/example_pb";
import { credentials, Metadata } from "@grpc/grpc-js";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface HomeProps {
  userId: string;
}

export default function Home({ userId }: HomeProps) {
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
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await AddUser();
  return {
    props: {
      userId: res.user?.id,
    },
  };
};

function AddUser() {
  const request = new AddUserRequest();
  const client: UserServiceClient = new UserServiceClient("localhost:10000", credentials.createInsecure());

  const metadata: Metadata = new Metadata();
  metadata.add(
    "Authorization",
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSiBTbWl0aCIsImVtYWlsIjoianNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNjEzMzUwNTAxfQ.g_Ad8T49-PeF0PGWGcYSjlG0Ib3jBHF52bqoMaEXj6td7SlCAJBwtH8UdsFVAX6xT44DQvydOidLI-vgKP9E_Q",
  );

  return new Promise<AddUserResponse.AsObject>((resolve, reject) =>
    client.addUser(request, metadata, (err, user) => (err ? reject(err) : resolve(user.toObject()))),
  );
}
