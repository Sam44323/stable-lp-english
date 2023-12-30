import React from "react";
import Hero from "@/components/section/Stablecoins/Hero/Hero";
import Acquire from "@/components/common/StablecoinsFromStable/StablecoinsFromStable";
import MintStablecoins from "@/components/section/Stablecoins/MintStablecoins/MintStablecoins";
import Head from "next/head";

const Stablecoins = () => {
  return (
    <>
      <Head>
        <title>Stable | Stablecoins</title>
      </Head>
      <div>
        <Hero />
        <MintStablecoins
          title="How to acquire our stablecoins?"
          description="We offer three different ways to acquire our stablecoins:"
          subHeader
        />
      </div>
    </>
  );
};

export default Stablecoins;
