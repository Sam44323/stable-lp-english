import React from "react";
import Image from "next/image";

const Tokenizedetails = () => {
  return (
    <>
      <div className="relative">
        <div className="max-w-[700px] mx-auto text-left 2xl:-translate-x-80 -translate-x-48 mt-28 mobile:max-w-[80%] mobile:translate-x-0 mobile:flex mobile:flex-col mobile:items-center">
          <h1 className="font-roboto text-blue-text text-4xl max-w-lg leading-[50px] mobile:text-center mobile:text-xl">
            Tokenize your assets and get more control and flexibility over them.
          </h1>
          <p className="text-grey-100 font-work-sans text-[15px] mt-10 mobile:text-center">
            The RWA tokenizing mechanism on the Stable platform is executed
            through a dedicated smart-contract for each RWA. Participants may
            use the dedicated Stable stablecoins (StUSD, StEUR, etc.) to
            interact with a specific contract of their choice, representing a
            particular asset in a specific region, leading to the burning of the
            stablecoins and releasing of the corresponding funds from the cash
            reserve to purchase the selected asset.
          </p>
          <div className="pill-btn font-roboto tracking-wide font-500 text-white hover:ease-in duration-100 hover:scale-105 mt-6 flex align-middle">
            <p className="m-0 text-sm font-work-sans px-1 py-1">
              Find out more
            </p>
            <Image
              src="/images/right-arrow.svg"
              alt="right-arrow"
              height={18}
              width={18}
              className="ml-3"
            />
          </div>
        </div>
        <img
          src="/images/shapes/ellipse-with-masks.png"
          className="absolute right-0 -translate-y-[700px] -z-10 mobile:hidden"
        />
      </div>
    </>
  );
};

export default Tokenizedetails;
