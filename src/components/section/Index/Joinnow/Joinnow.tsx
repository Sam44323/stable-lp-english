import React from "react";
import { useRouter } from "next/router";

const Joinnow = () => {
  const router = useRouter();

  return (
    <div className="gradient-blue-bg 2xl:max-w-screen-[1090px] max-w-[1150px] mx-auto rounded-3xl md:min-h-[300px] relative mt-18 mobile:max-w-[90%] mobile:overflow-hidden">
      <div>
        <img
          src="/images/shapes/stacked-ellipse.png"
          className="absolute left-0 md:max-h-[300px] rounded-3xl mobile:hidden"
        />
        <img
          src="/images/shapes/right-border-ellipse.png"
          className="absolute right-0 md:max-h-[300px] z-10 mobile:hidden"
        />
      </div>
      <div className="absolute z-10 max-w-[750px] mx-auto left-16 pt-16 mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:max-w-none mobile:w-full mobile:h-full mobile:p-0 mobile:left-0">
        <h1 className="text-white font-roboto text-5xl">
          Unlock the power of blockchain for tokenized investments.
        </h1>
        <div
          className="pill-btn py-3 px-5 mt-5 text-base  bg-white font-roboto tracking-wide font-500 text-blue-btn hover:ease-in duration-100 hover:scale-105"
          onClick={() => router.push("/get-started")}
        >
          Get Started
        </div>
      </div>
      <div className="relative mobile:hidden">
        <div className="coin-bg px-5 py-4 absolute right-36 z-10 -translate-y-10">
          <img src="/images/coins/eth.png" />
        </div>
        <div className="coin-bg px-[30px] py-4 absolute right-16 top-40 z-10 -translate-y-10">
          <img src="/images/coins/arb.png" />
        </div>
        <div className="coin-bg px-[25px] py-4 absolute right-[240px] top-48 z-10 -translate-y-10">
          <img src="/images/coins/avax.png" />
        </div>
        <img
          src="/images/shapes/large-ellipse-blue.png"
          className="absolute right-0 md:max-h-[300px] rounded-tr-3xl rounded-br-3xl"
        />
        <img
          src="/images/shapes/wave-mask-group.png"
          height={400}
          width={400}
          className="absolute right-[160px] top-32 "
        />
      </div>
    </div>
  );
};

export default Joinnow;
