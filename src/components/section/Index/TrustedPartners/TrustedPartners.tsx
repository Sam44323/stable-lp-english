import React from "react";

const TrustedPartners = () => {
  return (
    <div className="mt-36 pb-36 gradient–blue-bg">
      <h1 className="text-center mt-5 text-blue-text font-roboto tracking-wide font-500 mb-5 mobile:text-xl">
        Trusted Partners
      </h1>
      <div className="flex flex-row justify-between max-w-6xl mx-auto mt-16 mobile:hidden">
        <img src="/images/chains/ethereum.png" alt="ethereum-chain" />
        <img src="/images/chains/polygon.png" alt="polygon-chain" width={240} />
        <img src="/images/chains/avalanche.png" alt="avalanche-chain" />
      </div>
      <div className="mobile:flex mobile:flex-col mobile:justify-between mobile:align-middle mobile:w-fit mobile:mx-auto mobileL:mt-16 hidden">
        <img
          src="/images/chains/ethereum.png"
          alt="ethereum-chain"
          width={240}
          className="mt-0"
        />
        <img
          src="/images/chains/polygon.png"
          alt="polygon-chain"
          width={240}
          className="mt-10"
        />
        <img
          src="/images/chains/avalanche.png"
          alt="avalanche-chain"
          width={240}
          className="mt-10"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;