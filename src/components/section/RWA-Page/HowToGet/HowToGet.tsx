import React from "react";
import { useRouter } from "next/router";
import Supportedchains from "@/components/common/Supportedchains/Supportedchains";

const HowToGet = () => {
  const router = useRouter();

  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat bg-contain 2xl:bg-cover 2xl:pt-[5%]  mt-0 pt-16 mx-auto relative pb-36 mobile:pb-10 mobile:mt-48">
      <div className="relative z-10 mt-16 max-w-5xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-roboto text-3xl text-blue-text mobile:text-center">
            How to get RWAs?
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 text-grey-100 min-w-[800px] mobile:min-w-0  leading-8 text-lg mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
            To be able to mint, redeem or act as arbitrageur for Stable's Real
            World Assets (RWAs), you must first create an account with us and
            successfully complete our KYC and AML checks. Once it’s all done,
            you are free to unleash the maximum potential of RWAs.
          </p>
        </div>
        <p className="max-w-xl ml-auto mt-16 font-be-vietnam-pro font-300 text-grey-100 min-w-[800px] mobile:min-w-0  leading-8 text-lg mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
          The actual process involves burning the stablecoins, buying the assets
          for backing, and minting the RWA token. With a focus on transparency
          and 1:1 asset backing, each RWA token is fully backed by an equivalent
          amount of assets that is representing. This means that 100 StTSLA
          tokens are backed by 100 TSLA shares in Stable's custody, which is
          reported through Chainlinks Proof of Reserve.
        </p>
      </div>
      <Supportedchains />
      <div className="gradient-blue-bg 2xl:max-w-screen-2xl max-w-[1200px] mx-auto rounded-3xl md:min-h-[200px] overflow-clip relative mt-48 mobile:max-w-[90%] mobile:overflow-hidden">
        <div>
          <img
            src="/images/shapes/stacked-ellipse.png"
            className="absolute left-0 md:max-h-[300px] rounded-3xl mobile:hidden"
          />
        </div>
        <div className="absolute flex flex-row  items-center justify-between w-full z-10 max-w-screen-lg mx-auto left-16 pt-16 mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:max-w-none mobile:w-full mobile:h-full mobile:p-0 mobile:left-0">
          <div className="h-fit">
            <h1 className="text-white font-roboto text-5xl">
              Mint or Redeem RWAs
            </h1>
            <p className="text-white font-roboto font-500 text-[18px] ml-1 tracking-wide">
              Sign up and unlock the capabilities ...
            </p>
          </div>
          <div
            className="pill-btn py-3 px-5 text-base  bg-white font-roboto tracking-wide font-500 text-blue-btn hover:ease-in duration-100 hover:scale-105"
            onClick={() => router.push("/gain-access")}
          >
            Acquire Real World Assets
          </div>
        </div>
        <img
          src="/images/shapes/large-ellipse-blue.png"
          className="absolute right-0 md:max-h-[300px] rounded-tr-3xl rounded-br-3xl"
        />
      </div>
    </div>
  );
};

export default HowToGet;
