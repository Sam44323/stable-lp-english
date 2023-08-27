import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Tokenizedetails = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <div className="max-w-[800px] mx-auto text-left 2xl:-translate-x-80 -translate-x-48 mt-16 mobile:max-w-[80%] mobile:translate-x-0 mobile:flex mobile:flex-col mobile:items-center">
          <h1 className="font-roboto text-blue-text text-[50px] max-w-3xl  leading-[70px] mobile:text-center mobile:text-xl">
            Tokenize your favorite assets and get more control and flexibility
            over them.
          </h1>
          <p className="text-grey-100 font-work-sans font-400 leading-7 text-[17px] mt-10 mobile:text-center">
            Bring your preferred equities, bonds, ETFs, and other instruments to
            your favorite blockchain, and take control of your favorite assets.
            This will allow you to unleash their maximum potential, and elevate
            their financial possibilities in the world of Defi. All you need to
            do is utilize our in-house Stablecoins for the minting, which is the
            quickest and simplest way to gain exposure to the assets you intend
            to hold.
          </p>
          <div
            className="pill-btn font-roboto tracking-wide font-500 text-white hover:ease-in duration-100 hover:scale-105 mt-6 flex align-middle"
            onClick={() => router.push("/find-out-more")}
          >
            <p className="m-0 text-lg font-work-sans px-4 py-1 font-700">
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
