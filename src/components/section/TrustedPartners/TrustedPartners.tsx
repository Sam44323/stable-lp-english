import React from "react";

const TrustedPartners = () => {
  return (
    <div className="mt-36">
      <h1 className="text-center mt-5 text-blue-text font-roboto tracking-wide font-500 mb-5">
        Trusted Partners
      </h1>
      <div className="flex flex-row justify-between max-w-6xl mx-auto mt-16">
        <img src="/images/chains/ethereum.png" alt="ethereum-chain" />
        <img src="/images/chains/polygon.png" alt="polygon-chain" width={240} />
        <img src="/images/chains/avalanche.png" alt="avalanche-chain" />
      </div>
    </div>
  );
};

export default TrustedPartners;
