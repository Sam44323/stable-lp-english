import React from "react";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";

const Tokenizedetails = () => {
  return (
    <>
      <div className="relative mb-16 lg:mb-48">
        <div className="max-w-[800px] mx-auto -translate-x-16 mt-16 mobile:max-w-[80%] mobile:translate-x-0 mobile:flex mobile:flex-col mobile:items-center mobile:mt-5">
          <h1 className="font-roboto text-blue-text text-6xl text-center  leading-[70px] mobile:text-center mobile:text-xl">
            About Us
          </h1>
          <div className="flex justify-between items-center my-16 mobile:flex-col mobile:text-center mobile:mt-4">
            <h1 className="flex-[0.1] text-blue-text leading-[50px] text-[43px] mobile:text-[20px]">
              Fully Regulated
            </h1>
            <p className="flex-[0.8] text-grey-100 font-300 leading-6 text-md font-work-sans text-[17px]">
              EU regulation compliance is an immutable part of our ethos. We
              operate directly/via partners as a fully regulated EU electronic
              money issuer and investment broker company, while also preparing
              for MiCA EU crypto regulation.
            </p>
          </div>
          <div className="flex flex-row-reverse justify-between items-center mobile:flex-col mobile:hidden">
            <h1 className="flex-[0.1] text-blue-text text-right leading-[50px] text-[43px] mobile:text-[20px]">
              We are Multichain!
            </h1>
            <p className="flex-[0.85] text-grey-100 text-[17px] text-md font-300 leading-6 text-right font-work-sans mobile:text-center">
              STABLE’s platform, tokens and smart contracts are designed to be
              multi-chain, allowing frictionless adoption and integration.{" "}
              <br /> <br /> We are committed to staged deployment across all
              EVM-compatible chains, enabling Defi and Trad-fi users to bring
              their chosen currencies and assets to any blockchain, regardless
              of whether they use Avalanche, Polygon, Arbitrum, or any other EVM
              chain. <br /> <br />{" "}
              <span className="font-900">Our vision is multichain!</span>
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
          className="absolute -right-16 -translate-y-[940px] -z-10 mid-screen:hidden mobile:hidden"
        />
      </div>
      <Supportedchains />
    </>
  );
};

export default Tokenizedetails;
