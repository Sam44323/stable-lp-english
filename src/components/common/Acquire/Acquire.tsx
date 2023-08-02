import React from "react";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";

const Acquire = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat bg-contain 2xl:bg-cover 2xl:pt-[5%]  mt-72 pt-36 mx-auto relative pb-40">
      <section className="text-center font-roboto">
        <h1 className="text-5xl font-500 text-blue-text">
          Acquire Stablecoins now!
        </h1>
        <p className="max-w-2xl mx-auto mt-6 font-300 font-manrope leading-7 text-grey-100">
          Our stablecoins are pegged at a fixed rate of 1:1 with a corresponding
          fiat currency. For instance, 1 StUSD equates to 1 USD, while 1 StEUR
          equals EUR. We offer three different ways to acquire our stablecoins:
        </p>
      </section>
      <section className="flex flex-row justify-between max-w-[1900px] mx-auto">
        <section className="ml-36">
          <div>
            <div className="icon-bg">
              <img src="/images/utilize-dex.svg" />
            </div>
            <div className="ml-1 mt-3">
              <h1 className="font-roboto text-xl font-500">Utilize a DEX</h1>
              <p className="max-w-sm  mt-1 font-300 font-manrope leading-7 text-sm">
                Utilize Curve, Uni V3 or similar DEXs to exchange your
                cryptocurrencies for our stablecoins. 
              </p>
            </div>
          </div>
          <div>
            <div className="icon-bg">
              <img src="/images/create-account.svg" />
            </div>
            <div className="ml-1 mt-3">
              <h1 className="font-roboto text-xl font-500">Create Account</h1>
              <p className="max-w-sm  mt-1 font-300 font-manrope leading-7 text-sm">
                Establish an account with us, undergo our AML/KYC verifications,
                and transfer fiat; you will then have the ability to mint/redeem
                our stablecoins at a 1:1 exchange rate.
              </p>
            </div>
          </div>
          <div>
            <div className="icon-bg">
              <img src="/images/swap-function.svg" />
            </div>
            <div className="ml-1 mt-3">
              <h1 className="font-roboto text-xl font-500">Swap Function</h1>
              <p className="max-w-sm  mt-1 font-300 font-manrope leading-7 text-sm">
                Take advantage of the STABLE swap function, enabling the
                conversion of USDT/USDC/TUSD to RWA stablecoins, with
                consideration for Tether or Circle fees during the redemption
                phase.
              </p>
            </div>
          </div>
        </section>
        <img src="/images/macbook.png" className="h-[700] w-[1000]" />
      </section>
      <section className="text-center font-roboto mt-36">
        <h1 className="text-5xl font-500 text-blue-text">We are Multichain!</h1>
        <p className="max-w-5xl mx-auto mt-6 font-300 font-manrope leading-7 text-grey-100">
          Stables platform, tokens, and smart-contracts were intentionally
          designed to be multi-chain, allowing for effortless adoption and
          integration. We are committed to deploying on all EVM-compatible
          chains overtime, enabling Defi users to bring their preferred RWA
          asset to the blockchain of their choice, regardless of whether they
          are using Avalanche, Polygon, Arbitrum, or any other EVM chains…. Our
          unwavering vision has always been to be multi-chain right from the
          start!
        </p>
      </section>
      <Supportedchains />
    </div>
  );
};

export default Acquire;
