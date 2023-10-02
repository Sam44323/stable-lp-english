import React from "react";
import { useRouter } from "next/router";
import { STABLECOINS_FEATURES } from "@/utils/constants";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="gradient-blue-bg-top relative mb-44">
      <img
        src="/images/shapes/rwa-mesh-right.png"
        alt="solid-circle-blue"
        className="absolute right-0 top-36 mobile:hidden"
      />
      <div className="max-w-6xl mx-auto pt-48 mobile:text-center mobile:pt-20">
        <h1 className="text-link-inactive text-[50px] max-w-3xl font-500 font-roboto leading-[1.4] m-0 mobile:text-lg">
          Enter crypto with guarantees and enjoy fast and safe tokenization of
          listed securities.
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
      <div className="relative z-10 mt-16 max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-roboto text-3xl text-blue-text mobile:text-center">
            About Stablecoins
          </h1>
          <p className="font-be-vietnam-pro mt-4 font-300  text-grey-100 min-w-[700px]  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
            Stablecoins from Stable are pegged at a fixed rate of 1:1 with a
            corresponding fiat currency when minting or redeeming. For instance,
            1 StUSD equals 1 USD, and 1 StEUR equals 1 EUR. These stablecoins
            are always backed by cash or cash equivalent reserves, which undergo
            regular audits and are reported through Chainlink’s publicly
            accessible Proof of Reserve (PoR) Reports. Stable’s reserves meet or
            exceed the amount necessary to redeem all stablecoins in
            circulation. Even in the event of an on-chain depeg, you can rest
            assured that our stablecoins will always maintain a 1:1
            coin-to-reserve backing and can be redeemed under any circumstances.
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
      <div className="hidden mobile:flex mobile:flex-col mobile:justify-between mobile:max-w-screen-lg mobile:mx-auto mobile:relative mobile:z-10 mobile:mt-36">
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
      <div className="relative z-10 mt-36 max-w-5xl mx-auto">
        <div className="max-w-[680px] ml-auto">
          <h1 className="font-roboto text-3xl text-blue-text text-right mobile:text-center">
            What can you do with our Stablecoins? 
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 text-grey-100 min-w-[700px] mr-36  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
            Stable's stablecoins are a top choice for crypto enthusiasts, Defi,
            or non-Defi users since they can be utilized just like any other
            fiat-backed stablecoin. However, what sets us apart is the ability
            to guarantee redemption at a 1:1 ratio and the ability to utilize
            them for the fastest and safest tokenization of listed securities
            and assets on Stable’s tokenization platform. To further broaden the
            usage of stablecoins, at Stable, we will be adding additional use
            cases along the way, such as transactional blockchains for our
            stablecoins, to enable retail stores or e-shops to connect to
            stablecoins and make them easy to use for day-to-day payments.
          </p>
        </div>
        <div className="max-w-xl mt-20">
          <h1 className="font-roboto text-3xl text-blue-text mobile:text-center">
            Regulation
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 text-grey-100 min-w-[700px]  mobile:min-w-0 text-lg leading-8 mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
            We are committed to upholding the highest compliance standards in
            order to prevent money laundering, financing of terrorism and to
            comply with sanctions and KYC regulations. Prior to being granted
            access to our mint or redeem feature for stablecoins and our RWA
            service, all users must successfully pass our AML and KYC checks.
            Since our headquarters are located in the EU, we are proud to be one
            of the first stablecoin and RWA issuers to be fully regulated in the
            European Union under MiCA. Above all, the safety of our customers is
            our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
