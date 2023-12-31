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
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] large-screen:bg-[center_top] overflow-x-hidden bg-no-repeat bg-contain 2xl:bg-contain large-screen:bg-cover  2xl:pt-[5%] mt-4 pt-36 mx-auto relative pb-40 mobile:pb-10 mobile:pt-16 z-10">
      <section className="text-center font-roboto">
        <h1 className="text-6xl font-500 text-blue-text mobile:text-[30px] large-screen:mt-36">
          {title}
        </h1>
        <p
          className={classNames(
            "max-w-3xl mx-auto text-[19px] font-300 font-be-vietnam-pro leading-7 mt-8 text-grey-100 mobile:max-w-[90%] mobile:mx-auto mobile:text-base",
            subHeader ? "text-[20px] font-300" : ""
          )}
        >
          {description}
        </p>
      </section>
      <section className="flex flex-row align-top justify-between mt-16 mobile:mt-0 relative  max-w-[1600px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center">
        <section className="ml-36 mobile:ml-0 mobile:mt-0">
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mobile:my-10 mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/utilize-dex.svg" height={30} width={30} />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0 mobile:text-center">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-xl">
                Create Your <br /> STABLEcoin Account
              </h1>
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
                Complete AML/KYC <br />
                verification
              </h1>
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
                Transfer Fiat to <br /> Your Account
              </h1>
            </div>
          </div>
        </section>
        <img
          src="/images/stablecoin-screen.svg"
          className="absolute right-10 top-0 mobile:hidden"
        />
      </section>
      {/**
       * @description will be added
       */}
      {/* <section className="flex flex-row align-top justify-between mt-16 mobile:mt-0 relative max-w-[1900px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center">
        <img
          src="/images/stablecoin-bridge.svg"
          className="absolute left-10 top-0 mobile:hidden"
        />
        <div className="max-w-[600px] ml-auto mt-36 mobile:mt-16">
          <h1 className="font-roboto text-[40px] font-500 mobile:text-center mobile:text-xl">
            Swap
            <br /> STABLEcoins
          </h1>
          <p className="max-w-[80%] font-be-vietnam-pro text-grey-100 font-300 mobile:min-w-[90%] mobile:mx-auto mobile:text-center">
            Send us USDT, USDC, or TUSD, and receive back StUSD at the rate of
            1:1 minus third party issuer redemption fees.
          </p>
        </div>
      </section> */}
      <div className="mt-48 mobile:mt-14">
        <Supportedchains />
      </div>
    </div>
  );
};

export default LegacyAcquire;
