import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";
import { useRouter } from "next/router";

const AssetPreview = () => {
  const router = useRouter();
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-[center_top_5rem] pb-[100px] mobile:pb-[30px] bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover mobile:bg-cover mt-10 relative z-30 mobile:mt-16">
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
      <section className="mt-36 flex justify-between align-middle max-w-[1300px] mx-auto mobile:flex-col mobile:items-center mobile:mt-16">
        <div className="flex flex-col items-center justify-between text-center">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[86%] mx-auto mb-5">
            Your gateway to global financial and capital markets
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[80%] mx-auto">
            You are no longer dependant on silly Mon-Fri 9am-5pm trading hours.
            24/7 liquidity and transferability granted by machines and
            smart-contracts.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-between">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[60%] mx-auto mb-5">
            Collateralize, trade, lend and self-custody
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[80%] mx-auto">
            Traditional securities now becoming available worldwide,
            permissionless. Harvest all benefits of blockchain that traditional
            markets are incapable of.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between text-center">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[70%] mx-auto mb-5">
            Redeem for stablecoins
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[700px] mx-auto">
            Any verified holder of the tokenized asset can de-tokenize and
            redeem back for stablecoins for off-chain market price and not rely
            on DEX or CEX liquidity.
          </p>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto flex justify-end mt-10">
        <div
          className="pill-btn py-[14px] px-[30px] hover:ease-in duration-100 hover:scale-105 ml-5 text-[14px] flex justify-between items-center"
          onClick={() => router.push("/rwa")}
        >
          <p className="my-0 mr-3">Find out more</p>
          <img src="/images/right-arrow.svg" height={15} width={15} />
        </div>
      </section>
    </div>
  );
};

export default AssetPreview;
