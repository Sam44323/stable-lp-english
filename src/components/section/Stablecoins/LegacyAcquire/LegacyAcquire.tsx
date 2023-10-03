// need to be changed later for stablecoins
import React from "react";
import classNames from "classnames";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";
import { useRouter } from "next/router";

interface LegacyAcquireProps {
  title: string;
  description: string;
  subHeader?: boolean;
}

const LegacyAcquire: React.FC<LegacyAcquireProps> = ({
  title,
  description,
  subHeader,
}) => {
  const router = useRouter();

  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] overflow-x-hidden bg-no-repeat bg-contain 2xl:bg-contain large-screen:bg-cover  2xl:pt-[5%] mt-4 pt-36 mx-auto relative pb-40 mobile:pb-10 mobile:pt-16 z-10">
      <section className="text-center font-roboto">
        <h1 className="text-6xl font-500 text-blue-text mobile:text-[30px]">
          {title}
        </h1>
        <p
          className={classNames(
            "max-w-3xl mx-auto text-[19px] font-600 font-manrope leading-7 mt-8 text-grey-100 mobile:max-w-[90%] mobile:mx-auto mobile:text-base",
            subHeader ? "text-[20px] font-500" : ""
          )}
        >
          {description}
        </p>
      </section>
      <section className="flex flex-row align-top justify-between mt-16 mobile:mt-0 relative  max-w-[1900px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center">
        <section className="ml-36 mobile:ml-0 mobile:mt-0">
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mobile:my-10 mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/utilize-dex.svg" height={30} width={30} />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0 mobile:text-center">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-xl">
                Utilize a DEX
              </h1>
              <p className="max-w-[390px]  mt-1 font-300 font-be-vietnam-pro leading-7 text-[15px]mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm">
                Utilize Curve, Uni V3 or similar DEXs to exchange your
                cryptocurrencies for our stablecoins. 
              </p>
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:text-center mobile:justify-center mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/mint-rwa.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-xl">
                Mint Stablecoins
              </h1>
              <p className="max-w-[390px] mobile:max-w-[90%] mobile:mx-auto mobile:text-sm  mt-1  font-300 font-be-vietnam-pro leading-7 text-[15px]mobile:text-center">
                Establish an account with us, undergo our AML/KYC verifications,
                and transfer fiat; you will then have the ability to mint or
                redeem our stablecoins at a 1:1 exchange rate.
              </p>
            </div>
            <div
              className="hover:cursor-pointer flex flex-row mobile:justify-center"
              onClick={() => router.push("/mint")}
            >
              <p className="m-0 font-work-sans text-blue-link font-800">
                Go to Mint
              </p>
              <img
                src="/images/right-arrow-blue.svg"
                alt="right-arrow-blue"
                className="ml-1"
              />
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/legacy-swap.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-xl">
                Swap Function
              </h1>
              <p className="max-w-[390px] mobile:max-w-[90%] mobile:mx-auto mobile:text-sm  mt-1 font-300 font-be-vietnam-pro leading-7 text-[15px] mobile:text-center">
                Swap USDT, USDC, or TUSD, and receive back StUSD at the rate of
                1:1, with redemption fees from other issuers deducted from the
                amount received.
              </p>
            </div>
            <div
              className="hover:cursor-pointer flex flex-row mobile:justify-center"
              onClick={() => router.push("/swap")}
            >
              <p className="m-0 font-work-sans text-blue-link font-800">
                Go to Swap
              </p>
              <img
                src="/images/right-arrow-blue.svg"
                alt="right-arrow-blue"
                className="ml-1"
              />
            </div>
          </div>
        </section>
        <img
          src="/images/stablecoin-screen.svg"
          className="absolute right-10 top-16 mobile:hidden"
        />
      </section>
      <Supportedchains />
    </div>
  );
};

export default LegacyAcquire;
