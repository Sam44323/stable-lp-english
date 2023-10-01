import React from "react";
import Hero from "@/components/section/RWA-Page/Hero/Hero";
import HowToGet from "@/components/section/RWA-Page/HowToGet/HowToGet";
import Head from "next/head";
import AcquireFlowContent from "@/components/section/RWA-Page/AcquireFlowContent/AcquireFlowContent";

const RWA = () => {
  return (
    <>
      <Head>
        <title>Stable | RWA</title>
      </Head>
      <div>
        <Hero />
        <AcquireFlowContent />
        <HowToGet />
      </div>
    </>
  );
};

export default RWA;
