import React from "react";
import Hero from "@/components/section/Stablecoins/Hero/Hero";
import Acquire from "@/components/common/Acquire/Acquire";
import Head from "next/head";

const Stablecoins = () => {
  return (
    <>
      <Head>
        <title>Stable | Stablecoins</title>
      </Head>
      <div>
        <Hero />
        <Acquire />
      </div>
    </>
  );
};

export default Stablecoins;
