import React from "react";
import Hero from "@/components/section/Stablecoins/Hero/Hero";
import Acquire from "@/components/common/StablecoinsFromStable/StablecoinsFromStable";
import LegacyAcquire from "@/components/section/Stablecoins/LegacyAcquire/LegacyAcquire";
import Head from "next/head";

const Stablecoins = () => {
  return (
    <>
      <Head>
        <title>Stable | Stablecoins</title>
      </Head>
      <div>
        <Hero />
        {/**
         * Needs to be changed
         */}
        {/* <Acquire
          title="How to acquire our stablecoins?"
          description="We offer three different ways to acquire our stablecoins:"
          subHeader
        /> */}
        <LegacyAcquire
          title="How to acquire our stablecoins?"
          description="We offer three different ways to acquire our stablecoins:"
          subHeader
        />
      </div>
    </>
  );
};

export default Stablecoins;
