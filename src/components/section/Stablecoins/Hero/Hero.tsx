import React from "react";
import { useRouter } from "next/router";
import { STABLECOINS_FEATURES } from "@/utils/constants";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="gradient-blue-bg-top -mb-10 mobile:mb-0 pb-36">
      <img
        src="/images/shapes/rwa-mesh-right.png"
        alt="solid-circle-blue"
        className="absolute right-0 top-96 mobile:hidden"
      />
      <div className="max-w-6xl mx-auto pt-48  mobile:text-center mobile:flex mobile:flex-col mobile:justify-center mobile:pt-20">
        <h1 className="text-link-inactive text-[50px] max-w-3xl font-500 font-roboto leading-[1.4] m-0 mobile:text-lg mobile:text-center mobile:max-w-none mobile:mx-auto">
          Enter crypto with confidence and enjoy swift and secure tokenization
          of listed securities.
        </h1>
        <div className="mobile:flex mobile:flex-row mobile:justify-center">
          <div
            className="pill-btn hover:ease-in text-lg px-7 duration-100 hover:scale-105 min-w-[190px] mt-5"
            onClick={() => router.push("/acquire-stablecoins")}
          >
            Acquire Stablecoins
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-36 max-w-6xl mx-auto">
        <div className="max-w-xl mobile:max-w-none">
          <h1 className="font-roboto text-3xl text-blue-text mobile:text-center mobile:text-xl">
            About STABLEcoins
          </h1>
          <p className="font-be-vietnam-pro mt-4 font-300  text-grey-100 min-w-[1000px]  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm mobile:leading-9">
            STABLEcoins from STABLE are pegged at a fixed rate of 1:1 with a
            corresponding fiat currency when minting or redeeming. For example,
            1 StUSD = 1 USD, and 1 StEUR = 1 EUR. These STABLEcoins are always
            backed by cash/cash equivalent reserves, which undergo regular
            audits and are reported through Chainlink’s publicly accessible
            Proof of Reserve (PoR) Reports. STABLE’s reserves meet or exceed
            amounts necessary to redeem all STABLEcoins in circulation. Even in
            the event of an on-chain depeg, you can be assured that our
            STABLEcoins will always maintain a 1:1 coin-to-reserve backing and
            can be redeemed under any circumstances.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-screen-lg mx-auto relative z-10 mt-36 mobile:hidden">
        {STABLECOINS_FEATURES.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image src={item.src} alt={item.title} height={190} width={190} />
            <h1 className="font-roboto text-xl text-blue-text m-0">
              {item.title}
            </h1>
            <p className="font-work-sans font-300 mt-1.5 leading-7 text-sm max-w-[240px] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden mobile:flex mobile:flex-col mobile:justify-between mobile:max-w-screen-lg mobile:mx-auto mobile:relative mobile:z-10 mobile:mt-10">
        {STABLECOINS_FEATURES.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Image src={item.src} alt={item.title} height={190} width={190} />
            <h1 className="font-roboto text-xl text-blue-text m-0">
              {item.title}
            </h1>
            <p className="font-work-sans font-300 mt-1.5 leading-7 text-sm max-w-[240px] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center max-w-[80%] mx-auto mt-36">
        <h1 className="font-roboto text-3xl text-blue-text mobile:text-center mobile:text-xl">
          STABLEcoin Utilities
        </h1>
        <p className="font-be-vietnam-pro mt-4 font-300  text-grey-100 min-w-[1000px]  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm mobile:leading-9">
          STABLE's STABLEcoins are perfect for crypto enthusiasts, Defi or
          Tradfi users. <br /> <br /> Not only can they be used as any other
          fiat-backed stablecoin, they also guarantee redemption at a 1:1 ratio
          and represent the fastest, safest tokenization method for listed
          securities/assets on STABLE’s tokenization platform. <br /> <br />  To
          further broaden usage, we will be adding additional use cases,
          including transactional blockchains for our STABLEcoins - enabling
          retail stores or e-shops to manage frictionless, frequent stablecoin
          payments.
        </p>
        <h1 className="font-roboto text-3xl text-blue-text mobile:text-center mobile:text-xl mt-16">
          Regulation
        </h1>
        <p className="font-be-vietnam-pro mt-4 font-300  text-grey-100 min-w-[1000px]  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm mobile:leading-9">
          We are committed to upholding the highest compliance standards to
          prevent money laundering, financing of terrorism and to comply with
          KYC or sanction regulations. <br /> <br />  Prior to mint or redeem
          feature access for stablecoins and our RWA service, all Stable users
          must successfully pass AML and KYC checks. <br /> <br />  As our
          headquarters are located in the EU, we are proud to be one of the
          first stablecoin and RWA issuers to be fully regulated in the European
          Union under MiCA.
          <br /> <br />  The safety of our customers is our top priority.
        </p>
      </div>
    </div>
  );
};

export default Hero;
