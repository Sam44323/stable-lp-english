import Head from "next/head";
import React from "react";

// components
import Hero from "@/components/section/Index/Hero/Hero";
import Acquire from "@/components/common/StablecoinsFromStable/StablecoinsFromStable";
import Joinnow from "@/components/section/Index/Joinnow/Joinnow";
import Tokenizedetails from "@/components/section/Index/Tokenizedetails/Tokenizedetails";
import FAQ from "@/components/section/Index/FAQ/FAQ";
import HaveMoreQuestions from "@/components/section/Index/HaveMoreQuestions/HaveMoreQuestions";
import TrustedPartners from "@/components/section/Index/TrustedPartners/TrustedPartners";

/**
 * @todo: add support for meta-image support for images
 */

export default function Home() {
  return (
    <>
      <Head>
        <title>Stable</title>
        <meta
          name="description"
          content="At Stable, we aim to tokenize government and corporate bonds using our fiat-backed stablecoins with our tokenizing mechanism. This will allow us to bring bonds and real yield to the blockchain, making them accessible to the masses. In the subsequent stages, we plan to tokenize additional real-world assets and ensure that everyone has equal access to them. Our goal is to promote greater financial transparency, liquidity, and stability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Acquire
          title="Stablecoins from Stable"
          description="Stablecoins from Stable are regulated and licensed in the EU, pegged at a fixed rate of 1:1 with a corresponding fiat currency, and offer redemption guarantees. Our stablecoins can be utilized in the same way as you are used to it, plus they grant the ability of almost instant tokenization of assets on Stable’s tokenization platform. We offer three different ways to acquire our stablecoins:"
        />
        <Joinnow />
        <Tokenizedetails />
        <FAQ />
        <HaveMoreQuestions />
        {/* <TrustedPartners /> */}
      </main>
    </>
  );
}
