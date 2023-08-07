import React from "react";

const Hero = () => {
  return (
    <div className="gradient-blue-bg-top relative mb-44">
      <img
        src="/images/shapes/rwa-mesh-right.png"
        alt="solid-circle-blue"
        className="absolute right-0 top-36 mobile:hidden"
      />
      <div className="max-w-5xl mx-auto pt-48 mobile:text-center mobile:pt-20">
        <h1 className="text-link-inactive tracking-tighter text-4xl max-w-lg font-500 font-roboto leading-[1.4] m-0 mobile:text-xl">
          Tokenize your assets and obtain more control and flexibility over
          them.
        </h1>
        <div className="mobile:flex mobile:flex-row mobile:justify-center">
          <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px] mt-5">
            Gain Access to RWA
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-16 max-w-5xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-roboto text-xl text-blue-text mobile:text-center">
            How Does It Work?
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 leading-7 text-sm mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
            The RWA tokenizing mechanism on Stable platform is executed through
            a dedicated smart-contract for each RWA. Participants may use Stable
            stablecoins (StUSD, StEUR, etc.) to interact with a specific
            contract of their choice, representing a particular asset in a
            specific region, leading to the burning of the stablecoins and
            releasing the corresponding funds from our cash reserve to purchase
            the selected asset.
          </p>
        </div>
        <p className="max-w-xl ml-auto mt-16 font-be-vietnam-pro font-300 leading-7 text-sm mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
          The RWA tokenizing mechanism on Stable platform is executed through a
          dedicated smart-contract for each RWA. Participants may use Stable
          stablecoins (StUSD, StEUR, etc.) to interact with a specific contract
          of their choice, representing a particular asset in a specific region,
          leading to the burning of the stablecoins and releasing the
          corresponding funds from our cash reserve to purchase the selected
          asset.
        </p>
      </div>
      <img
        src="/images/rwa-flow.png"
        className="max-w-screen-lg mx-auto mt-36 mobile:hidden"
        height={500}
        width={1200}
        alt="redeem-flow"
      />
      <img
        src="/images/rwa-flow.png"
        className="hidden max-w-screen-lg mx-auto mt-36 mobile:block"
        height={100}
        width={300}
        alt="redeem-flow"
      />
    </div>
  );
};

export default Hero;
