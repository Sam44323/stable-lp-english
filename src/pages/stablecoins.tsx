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
          title="Mint STABLEcoins"
          description="Three simple steps to enjoy access to mint/redeem our STABLEcoins at 1:1 exchange rate."
          subHeader
        />
      </div>
    </>
  );
};

export default Stablecoins;
