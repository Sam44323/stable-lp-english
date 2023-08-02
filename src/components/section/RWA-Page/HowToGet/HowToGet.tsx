import React from "react";

const HowToGet = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat bg-cover 2xl:bg-cover 2xl:pt-[5%]  mt-72 pt-16 mx-auto relative pb-16">
      <div className="relative z-10 mt-16 max-w-5xl mx-auto">
        <div className="max-w-xl">
          <h1 className="font-roboto text-xl text-blue-text">
            How to get RWAs?
          </h1>
          <p className="font-be-vietnam-pro font-300 mt-4 leading-7 text-sm">
            To access Stable's Real World Assets (RWAs), users must acquire
            Stable's stablecoins initially. Once users have stablecoins, they
            can utilize them for RWAs minting or redeeming by interacting with
            dedicated smart-staking.
          </p>
        </div>
        <p className="max-w-xl ml-auto mt-16 font-be-vietnam-pro font-300 leading-7 text-sm">
          This process involves burning the stablecoins, buying assets for
          backing, and minting an RWA token. With a focus on transparency and
          1:1 asset backing, each RWA token is fully backed by an equivalent
          amount of assets that is representing. This means that 100 StTSLA
          tokens are backed by 100 TSLA shares in Stable's custody, which is
          reported through Chainlinks Proof of Reserve.
        </p>
      </div>
      <section className="mt-48">
        <h1 className="text-xl font-500 text-center font-roboto text-blue-text">
          Supported Chains
        </h1>
        <div className="flex flex-row justify-between max-w-7xl mx-auto mt-16">
          <img src="/images/chains/ethereum.png" alt="ethereum-chain" />
          <img
            src="/images/chains/polygon.png"
            alt="polygon-chain"
            width={240}
          />
          <img src="/images/chains/arbitrum.png" alt="arbitrum-chain" />
          <img src="/images/chains/avalanche.png" alt="avalanche-chain" />
        </div>
      </section>
    </div>
  );
};

export default HowToGet;
