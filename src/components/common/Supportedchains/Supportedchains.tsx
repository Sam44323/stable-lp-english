import React from "react";

const Supportedchains = () => {
  return (
    <section className="mt-48">
      <h1 className="text-xl font-500 text-center font-roboto text-blue-text">
        Supported Chains
      </h1>
      <div className="flex flex-row justify-between max-w-7xl mx-auto mt-16">
        <img src="/images/chains/ethereum.png" alt="ethereum-chain" />
        <img src="/images/chains/polygon.png" alt="polygon-chain" width={240} />
        <img src="/images/chains/arbitrum.png" alt="arbitrum-chain" />
        <img src="/images/chains/avalanche.png" alt="avalanche-chain" />
      </div>
    </section>
  );
};

export default Supportedchains;
