import React from "react";
import { STABLECOINS_FEATURES } from "@/utils/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="gradient-blue-bg-top relative mb-44">
      <img
        src="/images/shapes/rwa-mesh-right.png"
        alt="solid-circle-blue"
        className="absolute right-0 top-36"
      />
      <div className="max-w-5xl mx-auto pt-48">
        <h1 className="text-link-inactive tracking-tighter text-4xl max-w-xl font-500 font-roboto leading-[1.4] m-0">
          Stable's stablecoins offers the added advantage of being utilized as a
          convenient medium of exchange for our RWAs.
        </h1>
        <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px] mt-5">
          Acquire Stablecoins
        </div>
      </div>
      <div className="relative z-10 mt-16 max-w-5xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-roboto text-xl text-blue-text">Stablecoins</h1>
          <p className="font-be-vietnam-pro font-300 mt-4 leading-7 text-sm">
            Stablecoins from Stable are pegged at a fixed rate of 1:1 with a
            corresponding fiat currency. For instance, 1 StUSD equates to 1 USD,
            while 1 StEUR equals EUR. These stablecoins are always backed by
            reserves, which undergo regular audits and are reported through
            Chainlink’s publicly accessible Proof of Reserve (PoR) Reports.
            Stables’ reserves meet or exceed the amount necessary to redeem all
            stablecoins in circulation. Even in the event of an on-chain depeg,
            you can rest assured that Stables’ stablecoins will always maintain
            a 1:1 coin-to-asset backing.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-screen-lg mx-auto relative z-10 mt-36">
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
        <div className="max-w-xl ml-auto">
          <h1 className="font-roboto text-xl text-blue-text text-right">
            What can you do with our Stablecoins? 
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 leading-7 text-sm">
            Stable's stablecoins are a top choice for crypto enthusiasts, as
            they can be utilized just like any other fiat-backed stablecoin.
            However, what sets Stable apart is the added benefit of being able
            to use them as a medium of exchange for Stables’ RWAs. This means
            you can effortlessly mint RWAs with them or redeem RWAs for them. To
            further broaden the usage of stablecoins, Stable is setting up
            subnets as payment networks with stablecoins as a gas token and with
            low transaction fees. This will enable retail stores or e-shops to
            connect to stablecoins and make them easy to use for day-to-day
            payments.
          </p>
        </div>
        <div className="max-w-xl mt-16">
          <h1 className="font-roboto text-xl text-blue-text">Regulation</h1>
          <p className="font-be-vietnam-pro font-300 mt-4 leading-7 text-sm">
            At Stable, we are committed to upholding the highest compliance
            standards in order to prevent money laundering, financing of
            terrorism, and to comply with sanctions and KYC regulations. Prior
            to being granted access to our mint/redeem feature for stablecoins
            and our RWA service, all users must successfully pass our AML and
            KYC checks. Since our headquarters are located in EU, we are proud
            to be one of the first stablecoin and RWA issuers to be fully
            regulated in the European Union under MiCA. Above all, the safety of
            our customers is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
