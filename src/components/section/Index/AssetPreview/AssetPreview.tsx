import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";

const AssetPreview = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] overflow-x-hidden bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover  2xl:pt-[5%] mt-4 pt-36 mx-auto relative pb-40 mobile:pb-10 mobile:pt-16 z-10">
      <section>
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01%"
          change="2%"
          changeType="positive"
        />
      </section>
    </div>
  );
};

export default AssetPreview;
