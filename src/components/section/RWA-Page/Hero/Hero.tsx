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
          Tokenize your favorite assets and obtain more control and flexibility
          over them.
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
            The RWA tokenization is executed through a dedicated smart contract
            for each RWA. To mint your favorite tokenized equity, bond, ETF, or
            other instrument, you need to deposit StUSD, StEUR, or other
            stablecoins from Stable to a specific contract representing a
            particular asset in a specific region, leading to the burning of the
            stablecoins, acquiring the assets, and minting RWA token to you.
          </p>
        </div>
        <p className="max-w-xl ml-auto mt-16 font-be-vietnam-pro font-300 leading-7 text-sm mobile:text-center mobile:max-w-[90%] mobile:mx-auto">
          Conversely, when you choose to redeem, the asset is sold on the open
          market, with the corresponding stablecoins minted to you based on the
          proceeds received. Again each asset is 1:1 backed and reported through
          Chainlink Proof of Reserves, thus ensuring complete transparency and
          security.
        </p>
      </div>
      <img
        src="/images/rwa-flow.png"
        className="max-w-screen-lg mx-auto mt-36 mobile:hidden"
        height={800}
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
