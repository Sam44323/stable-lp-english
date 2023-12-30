import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="gradient-blue-bg-top relative mb-16">
      <img
        src="/images/shapes/rwa-mesh-right.png"
        alt="solid-circle-blue"
        className="absolute right-0 top-48 mobile:hidden"
      />
      <div className="max-w-6xl mx-auto pt-48 mobile:text-center mobile:pt-20">
        <h1 className="text-link-inactive tracking-tighter text-[50px] max-w-3xl font-500 font-roboto leading-[70px] m-0 mobile:text-xl">
          Enjoy greater control and flexibility over your chosen assets through
          tokenization.
        </h1>
        <div
          className="mobile:flex mobile:flex-row mobile:justify-center"
          onClick={() => router.push("/gain-access")}
        >
          <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px] mt-5">
            Acquire Real World Assets
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-16 max-w-6xl mx-auto mid-screen:max-w-none mobile:max-w-none">
        <div className="max-w-xl mid-screen:max-w-none mobile:max-w-none">
          <h1 className="font-roboto text-3xl text-blue-text mid-screen:text-center mobile:text-center mobile:text-xl">
            How Does It Work?
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 text-grey-100 min-w-[700px] mobile:min-w-0 leading-8 text-lg mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm mobile:leading-9">
            The RWA tokenization is executed through a dedicated smart contract
            for each RWA. To mint your favorite tokenized equity, bond, ETF, or
            other instruments, you need to deposit whitelisted fiat-backed
            stablecoins such as USDT, USDC or stablecoins from Stable to a
            specific contract representing a particular asset in a specific
            region, leading to the burning of the stablecoins, acquiring the
            assets, and minting RWA token to you. Note that accepted stablecoins
            differ for each asset. Fees and tokenization times vary based on
            which stablecoin you are using. Stablecoins from Stable are the
            cheapest in fees (no third-party stablecoin issuers fees) and the
            fastest in the time needed to finish the tokenization process.
          </p>
        </div>
        <p className="max-w-xl ml-auto mt-16 font-be-vietnam-pro font-300 text-grey-100 min-w-[700px] leading-8 text-lg mobile:min-w-0 mobile:text-center mobile:max-w-[90%] mobile:mx-auto mobile:text-sm mobile:leading-9">
          Conversely, when you choose to redeem, the asset is sold on the open
          market, after which the corresponding stablecoins are minted to you
          based on the proceeds received. Again, each asset is 1:1 backed and
          reported through Chainlink Proof of Reserves, thus ensuring complete
          transparency and security. Yet again, fees and redemption time vary
          based on for which stablecoin you are redeeming the RWA token.
        </p>
      </div>
    </div>
  );
};

export default Hero;
