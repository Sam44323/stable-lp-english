import React from "react";

const TrustedPartners = () => {
  return (
    <div className="gradient–blue-bg pb-36">
      <h1 className="text-center text-roboto text-blue-text text-xl  font-700 lg:text-[40px]">
        Trusted Partners
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-evenly mt-16 max-w-[1400px] mx-auto">
        <img
          src="/images/confirmo.png"
          className="mb-16 h-10 lg:h-auto lg:mb-0"
        />
        <img
          src="/images/coinmate.png"
          className="mb-16 h-10 lg:h-auto lg:mb-0"
        />
      </div>
    </div>
  );
};

export default TrustedPartners;
