import React from "react";
import { useRouter } from "next/router";

const AcquireFlowContent = () => {
  const router = useRouter();

  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-[center_top_5rem] pb-36 mt-80 -mb-36 bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover mobile:bg-cover relative z-30 mobile:mt-16">
      {/* <img
        src="/images/rwa-flow.png"
        className="max-w-screen-lg mx-auto mt-16 mobile:hidden -translate-y-48 mobile:translate-y-0"
        alt="redeem-flow"
      /> */}
      {/* <div className=" flex justify-center w-fit mx-auto"> */}
      <div
        className="bg-[url('/images/rwa-flow.png')] bg-contain
      h-[700px] mobile:hidden w-[1200px] bg-no-repeat mx-auto -translate-y-[200px] mobile:translate-y-0
      pb-4 rounded-[10px]
      "
      ></div>
      {/* </div> */}
      <img
        src="/images/rwa-flow.png"
        className="hidden max-w-screen-lg mx-auto mt-16 mobile:block"
        height={300}
        width={300}
        alt="redeem-flow"
      />
      <section className="max-w-[1300px] mx-auto -mt-36 mobile:mt-16">
        <div className="flex flex-col items-center mobile:text-center">
          <h1 className="text-5xl font-500 mb-3 text-blue-text mobile:text-[17px] font-roboto">
            Acquire our Real-World Assets
          </h1>
          <p className="font-manrope text-grey-100 text-lg font-600 tracking-wide mobile:text-[15px]">
            Stable offers two methods of RWA token acquisition:
          </p>
        </div>
        <section className="flex flex-row align-top justify-between mt-40 mobile:mt-0 relative  max-w-[1900px] mx-auto mobile:flex-col mobile:align-middle mobile:justify-center -translate-y-16">
          <section className="ml-36 mobile:ml-0 mobile:mt-16">
            <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center mobile:my-10 mb-4">
              <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
                <div className="icon-bg">
                  <img src="/images/mint-rwa.svg" height={30} width={30} />
                </div>
              </div>
              <div className="ml-1 mt-3 mobile:ml-0">
                <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-[17px]">
                  Mint RWAs
                </h1>
                <p className="max-w-[300px] mobile:max-w-none  mt-1 font-300 font-manrope leading-7 text-sm mobile:text-center mobile:text-[14px]">
                  Mint or Redeem tokens of your favorite instrument through our
                  platform at parity with the off-chain market price.
                </p>
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
            </div>
            <div className="flex flex-row align-middle mobile:justify-center">
              <div className="bg-[#C3DEFF] h-[1.7px] mt-11 mb-3 flex-[0.3]"></div>
              <p className="mb-0 mt-[30px] mx-1.5 font-roboto font-500 text-xl">
                OR
              </p>
              <div className="bg-[#C3DEFF] h-[1.7px] mt-11 mb-3 flex-[0.3]"></div>
            </div>
            <div className="mobile:flex mobile:flex-col mobile:align-middle mobile:justify-center my-16">
              <div className="w-full mobile:flex mobile:align-middle mobile:justify-center">
                <div className="icon-bg">
                  <img src="/images/utilize-dex.svg" />
                </div>
              </div>
              <div className="ml-1 mt-3 mobile:ml-0">
                <h1 className="font-roboto text-[26px] font-500 mobile:text-center mobile:text-[17px]">
                  Utilize a DEX
                </h1>
                <p className="max-w-xs mobile:max-w-none  mt-1  font-300 font-manrope leading-7 text-base  mobile:text-center mobile:text-[14px]">
                  Utilize Curve, Uni V3 or similar DEXs to exchange your
                  cryptocurrencies for our rwa’s. 
                </p>
              </div>
            </div>
          </section>
          <img
            src="/images/rwa-page.svg"
            height={800}
            width={800}
            className="absolute -right-4 top-0 mobile:hidden"
          />
        </section>
      </section>
    </div>
  );
};

export default AcquireFlowContent;
