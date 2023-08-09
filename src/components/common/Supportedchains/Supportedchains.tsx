import React from "react";

const Supportedchains = () => {
  return (
    <section className="mt-20">
      <h1 className="text-[27px] font-500 text-center font-roboto text-blue-text mobile:text-xl">
        Supported Chains
      </h1>
      <div className="flex flex-row justify-between max-w-[1190px] mx-auto mt-16 mobile:hidden">
        <img
          src="/images/chains/ethereum.png"
          alt="ethereum-chain"
          style={{
            height: "50px",
            width: "190px",
          }}
        />
        <img
          src="/images/chains/polygon.png"
          alt="polygon-chain"
          style={{
            height: "50px",
            width: "200px",
          }}
        />
        <img
          src="/images/chains/arbitrum.png"
          alt="arbitrum-chain"
          style={{
            height: "50px",
            width: "190px",
          }}
        />
        <img
          src="/images/chains/avalanche.png"
          alt="avalanche-chain"
          style={{
            height: "50px",
            width: "240px",
          }}
        />
      </div>
      <div className="mobile:flex mobile:flex-col mobile:justify-between mobile:align-middle mobile:w-fit mobile:mx-auto mobileL:mt-16 hidden">
        <img
          src="/images/chains/ethereum.png"
          alt="ethereum-chain"
          width={240}
          className="mt-10"
        />
        <img
          src="/images/chains/polygon.png"
          alt="polygon-chain"
          width={240}
          className="mobile:mt-10"
        />
        <img
          src="/images/chains/arbitrum.png"
          alt="arbitrum-chain"
          width={240}
          className="mt-10"
        />
        <img
          src="/images/chains/avalanche.png"
          alt="avalanche-chain"
          width={240}
          className="mobile:mt-10"
        />
      </div>
    </section>
  );
};

export default Supportedchains;
