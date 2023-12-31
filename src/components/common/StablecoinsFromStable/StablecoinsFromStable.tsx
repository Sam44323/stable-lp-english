import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

interface AcquireProps {
  title: string;
  description: string;
  subHeader?: boolean;
}

const Acquire: React.FC<AcquireProps> = ({ title, description, subHeader }) => {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden bg-no-repeat bg-contain 2xl:bg-contain large-screen:bg-cover large-screen:mt-20  2xl:pt-[5%] pt-0 z-10 mx-auto relative pb-10 mobile:pb-10 mobile:pt-16 mobile:mt-10">
      <section className="text-center font-roboto">
        <h1 className="text-6xl font-500 text-blue-text mobile:text-[30px]">
          {title}
        </h1>
        <p
          className={classNames(
            "max-w-[800px] mx-auto text-[18px] font-300 font-manrope leading-7 mt-3 text-grey-100 mobile:max-w-[90%] mobile:mx-auto mobile:text-base",
            subHeader ? "text-[24px] font-500" : ""
          )}
        >
          {description}
        </p>
      </section>
      <section className="flex flex-row align-top justify-between mt-40 mobile:mt-0 relative  max-w-[1400px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center -translate-y-16">
        <section className="ml-36 mobile:ml-0 mobile:mt-16">
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mobile:my-10 mb-6">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/utilize-dex.svg" height={30} width={30} />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Safe
              </h1>
              <p className="max-w-[300px] mobile:max-w-[90%] mobile:mx-auto  mt-1 font-300 font-manrope leading-7 text-sm mobile:text-center">
                Regulated and licensed in the EU, pegged at a fixed rate of 1:1
                with a corresponding fiat currency and redemption guarantees.
              </p>
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mb-6">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/mint-rwa.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Transparent
              </h1>
              <p className="max-w-xs mt-1 mobile:max-w-[90%] mobile:mx-auto font-300 font-manrope leading-7 text-sm  mobile:text-center">
                STABLE’s backing for each STABLEcoin is reported through
                publicly accessible Chainlink Proof of Reserve.
              </p>
            </div>
          </div>
          <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mb-16">
            <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
              <div className="icon-bg">
                <img src="/images/multi-currency.svg" />
              </div>
            </div>
            <div className="ml-1 mt-3 mobile:ml-0">
              <h1 className="font-roboto text-[26px] font-500 mobile:text-center">
                Multi-Currency
              </h1>
              <p className="max-w-[290px] mobile:max-w-[90%] mobile:mx-auto  mt-1 font-300 font-manrope leading-7 text-sm mobile:text-center">
                We already support multiple stablecoins including stUSD, stEUR,
                and stCZK. We will add more as we grow.
              </p>
            </div>
          </div>
          <div
            className="pill-btn py-[14px] px-[30px] hover:ease-in duration-100 hover:scale-105 -mt-5 text-[14px] flex justify-between items-center mobile:mx-auto"
            onClick={() => router.push("/stablecoins")}
          >
            <p className="my-0 mr-3">Discover more</p>
            <img src="/images/right-arrow.svg" height={15} width={15} />
          </div>
        </section>
        <img
          src="/images/coin-group.svg"
          className="absolute right-36 top-7 mobile:hidden large-screen:right-11"
        />
      </section>
    </div>
  );
};

export default Acquire;
