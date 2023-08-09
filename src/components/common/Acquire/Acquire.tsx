import React from "react";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";

const Acquire = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat bg-contain 2xl:bg-cover 2xl:pt-[5%] mt-4   pt-36 mx-auto relative pb-40 mobile:pb-10 mobile:pt-16 -z-10">
      <section className="text-center font-roboto">
        <h1 className="text-6xl font-500 text-blue-text mobile:text-[30px]">
          Acquire Stablecoins now!
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-[17px] font-300 font-manrope leading-7 text-grey-100 mobile:max-w-[90%] mobile:mx-auto mobile:text-base">
          Our stablecoins are pegged at a fixed rate of 1:1 with a corresponding
          fiat currency. For instance, 1 StUSD equates to 1 USD, while 1 StEUR
          equals EUR. We offer three different ways to acquire our stablecoins:
        </p>
      </section>
      <section className="flex flex-row justify-between max-w-[1900px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center">
        <section className="ml-36 mobile:ml-0 mobile:mt-16">
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mobile:my-10 mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/utilize-dex.svg" height={30} width={30} />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Utilize a DEX
              </h1>
              <p className="max-w-[240px]  mt-1 font-300 font-manrope leading-7 text-sm mobile:text-center">
                Utilize Curve, Uni V3 or similar DEXs to exchange your
                cryptocurrencies for our stablecoins. 
              </p>
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/create-account.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Create Account
              </h1>
              <p className="max-w-xs  mt-1  font-300 font-manrope leading-7 text-base  mobile:text-center">
                Establish an account with us, undergo our AML/KYC verifications,
                and transfer fiat; you will then have the ability to mint or
                redeem our stablecoins at a 1:1 exchange rate.
              </p>
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/swap-function.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Swap Function
              </h1>
              <p className="max-w-[290px]  mt-1 font-300 font-manrope leading-7 text-sm mobile:text-center">
                Send us USDT, USDC, or TUSD, and receive back StUSD at the rate
                of 1:1(deduction of redemption fees charged by issuers).
              </p>
            </div>
          </div>
        </section>
        <img
          src="/images/macbook.png"
          className="h-[700] w-[1000] mobile:hidden"
        />
      </section>
      <section className="text-center font-roboto mt-36">
        <h1 className="text-6xl font-500 text-blue-text mobile:text-3xl">
          We are Multichain!
        </h1>
        <p className="max-w-5xl mx-auto mt-10 font-300  text-lg font-manrope leading-8 text-grey-100 mobile:max-w-[80%] mobile:mx-auto mobile:text-sm mobile:leading-8">
          Stable’s platform, tokens, and smart contracts were intentionally
          designed to be multi-chain, allowing for effortless adoption and
          integration. We are committed to deploying on all EVM-compatible
          chains over time, enabling Defi and non-Defi users to bring their
          preferred RWA asset to the blockchain of their choice, regardless of
          whether they are using Avalanche, Polygon, Arbitrum, or any other EVM
          chain. Our vision has always been to be multi-chain right from the
          start!
        </p>
      </section>
      <Supportedchains />
    </div>
  );
};

export default Acquire;
