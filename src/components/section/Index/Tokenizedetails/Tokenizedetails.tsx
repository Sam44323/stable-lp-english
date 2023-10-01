import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";

const Tokenizedetails = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <div className="max-w-[700px] mx-auto mt-16 mobile:max-w-[80%] mobile:translate-x-0 mobile:flex mobile:flex-col mobile:items-center mobile:mt-5">
          <h1 className="font-roboto text-blue-text text-[45px] text-center  leading-[70px] mobile:text-center mobile:text-xl">
            About Us
          </h1>
          <div className="flex justify-between items-center my-16 mobile:flex-col mobile:text-center mobile:mt-4">
            <h1 className="flex-[0.1] text-blue-text leading-[50px]">
              Fully Regulated
            </h1>
            <p className="flex-[0.8] text-grey-100 font-300 leading-6 text-md font-work-sans">
              Compliance with EU regulations are on top of our priority list. We
              operate directly or via our partners as fully regulated EU
              electronic money issuer, investment broker company and we are also
              preparing for MiCA EU crypto regulation.
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between items-center mobile:flex-col mobile:hidden">
            <h1 className="flex-[0.1] text-blue-text text-right leading-[50px]">
              We are Multichain!
            </h1>
            <p className="flex-[0.85] text-grey-100 text-md font-300 leading-6 text-right font-work-sans mobile:text-center">
              Stable’s platform, tokens, and smart contracts were intentionally
              designed to be multi-chain, allowing for effortless adoption and
              integration. We are committed to deploying on all EVM-compatible
              chains over time, enabling Defi and non-Defi users to bring their
              preferred currencies and assets from traditional financial markets
              to the blockchain of their choice, regardless of whether they are
              using Avalanche, Polygon, Arbitrum, or any other EVM chain. Our
              vision has always been to be multi-chain right from the start!
            </p>
          </div>
          <div className="hidden mobile:flex mobile:flex-col mobile:text-center">
            <h1 className="flex-[0.1] text-blue-text text-right leading-[50px] mobile:text-center">
              We are Multichain!
            </h1>
            <p className="flex-[0.85] text-grey-100 text-md font-300 leading-6 text-right font-work-sans mobile:text-center">
              Stable’s platform, tokens, and smart contracts were intentionally
              designed to be multi-chain, allowing for effortless adoption and
              integration. We are committed to deploying on all EVM-compatible
              chains over time, enabling Defi and non-Defi users to bring their
              preferred currencies and assets from traditional financial markets
              to the blockchain of their choice, regardless of whether they are
              using Avalanche, Polygon, Arbitrum, or any other EVM chain. Our
              vision has always been to be multi-chain right from the start!
            </p>
          </div>
        </div>
        <img
          src="/images/shapes/ellipse-with-masks.png"
          className="absolute -right-0 -translate-y-[950px] -z-10 mid-screen:hidden mobile:hidden"
        />
      </div>
      <Supportedchains />
    </>
  );
};

export default Tokenizedetails;
