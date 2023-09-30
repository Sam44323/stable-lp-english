import React from "react";

const AssetPreviewCard = () => {
  return (
    <div className="asset-preview-card">
      <section>
        <h1 className="text-blue-link text-[26px] font-600">stSGOV</h1>
        <p className="text-blue-text font-300 text-sm leading-[1.4]">
          Tokenized iShares 0-3 Month Treasury Bond ETF
        </p>
      </section>
      <div className="bg-[#C3DEFF] h-[1.7px] mt-11 mb-3"></div>
      <section>
        <p className="text-grey-100 font-700 text-sm leading-[1.4]">
          Price: 100 (+2% in 24h)
        </p>
        <div
          className="pill-btn hover:cursor-auto hover:bg-blue-pillBtn  text-[15px] tracking-wide font-600 mt-4"
          onClick={() => {}}
        >
          Yield: 0.01%
        </div>
      </section>
    </div>
  );
};

export default AssetPreviewCard;
