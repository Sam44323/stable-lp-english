import React from "react";

const Supportedchains = () => {
  return (
    <section className="mt-10">
      <h1 className="text-[24px] font-500 text-center font-roboto text-blue-text mobile:text-xl">
        Supported Chains
      </h1>
      <div className="flex flex-row justify-between max-w-[1190px] mx-auto -mt-5 mobile:hidden">
        <img
          src="/images/chains/ethereum.svg"
          alt="ethereum-chain"
          style={{
            height: "200px",
            width: "280px",
          }}
        />
        <img
          src="/images/chains/polygon.svg"
          alt="polygon-chain"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
        <img
          src="/images/chains/arbitrum.svg"
          alt="arbitrum-chain"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
        <img
          src="/images/chains/avalanche.svg"
          alt="avalanche-chain"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
      </div>
      <div className="mobile:flex mobile:flex-col mobile:justify-between mobile:align-middle mobile:w-fit mobile:mx-auto mobileL:mt-16 hidden">
        <img
          src="/images/chains/ethereum.svg"
          alt="ethereum-chain"
          style={{
            width: "200px",
          }}
          className="mt-10"
        />
        <img
          src="/images/chains/polygon.svg"
          alt="polygon-chain"
          style={{
            width: "200px",
          }}
          className="mobile:mt-10"
        />
        <img
          src="/images/chains/arbitrum.svg"
          alt="arbitrum-chain"
          style={{
            width: "200px",
          }}
          className="mt-14"
        />
        <img
          src="/images/chains/avalanche.svg"
          alt="avalanche-chain"
          style={{
            width: "200px",
          }}
          className="mobile:mt-14"
        />
      </div>
    </section>
  );
};

export default Supportedchains;
