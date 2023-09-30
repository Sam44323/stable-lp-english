import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";

const AssetPreview = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-[center_top_5rem] pb-96 bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover mobile:bg-cover mt-10 relative z-30 mobile:mt-16">
      <section className="max-w-[1200px] mx-auto flex justify-between mobile:flex-col mobile:items-center">
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01%"
          change="2%"
          changeType="positive"
        />
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01%"
          change="2%"
          changeType="positive"
        />
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01%"
          change="2%"
          changeType="positive"
        />
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
      <p>nice</p>
    </div>
  );
};

export default AssetPreview;
