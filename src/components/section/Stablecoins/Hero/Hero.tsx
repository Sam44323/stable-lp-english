import React from "react";

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
    </div>
  );
};

export default Hero;
