import Head from "next/head";
import React from "react";

const Index = (props: any) => {
  return (
    <div>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
          <main>
            <div className="text-2xl">
                hello world
            </div>
          </main>
    </div>
  );
};

export default Index;