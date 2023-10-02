import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";
import { useRouter } from "next/router";
import axios from "@/utils/axios";

const AssetPreview = () => {
  const router = useRouter();
  const [assetData, setAssetData] = React.useState<any>([]);

  const queryAssetData = async () => {
    try {
      const response = await axios.get("/v1/platform/asset-data");
      setAssetData(response.data.assetData);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    queryAssetData();
  }, []);

  console.log({
    assetData,
  });

  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-[center_top_5rem] pb-[140px] mobile:pb-[30px] bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover mobile:bg-cover mt-10 relative z-30 mobile:mt-16">
      <section className="max-w-[1200px] mx-auto flex justify-between mobile:flex-col mobile:items-center">
        {assetData.map((asset: any) => (
          <AssetPreviewCard
            title={"st" + asset.assetTicker}
            status="loaded"
            description={asset.assetName}
            price={asset.assetValue}
            yieldData="0.01"
            change={asset.change + "%"}
            changeType={asset.change > 0 ? "positive" : "negative"}
          />
        ))}
      </section>
      <section className="mt-36 flex justify-between align-middle max-w-[1200px] mx-auto mobile:flex-col mobile:items-center mobile:mt-16">
        <div className="flex flex-col items-center justify-between text-center">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[300px] mx-auto mb-5">
            Your gateway to global financial and capital markets
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[300px] mx-auto">
            You are no longer dependant on silly Mon-Fri 9am-5pm trading hours.
            24/7 liquidity and transferability granted by machines and
            smart-contracts.
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-between">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[60%] mx-auto mb-5">
            Collateralize, trade, lend and self-custody
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[300px] mx-auto">
            Traditional securities now becoming available worldwide,
            permissionless. Harvest all benefits of blockchain that traditional
            markets are incapable of.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between text-center">
          <h1 className="text-center text-xl text-blue-text font-500 font-roboto max-w-[90%] mx-auto mb-5">
            Redeem for stablecoins
          </h1>
          <p className="text-grey-100 text-sm font-400 leading-6 max-w-[300px] mx-auto">
            Any verified holder of the tokenized asset can de-tokenize and
            redeem back for stablecoins for off-chain market price and not rely
            on DEX or CEX liquidity.
          </p>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto flex justify-end mt-10 mobile:max-w-[none] mobile:just-center">
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
