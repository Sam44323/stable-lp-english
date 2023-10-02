import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";
import { useRouter } from "next/router";
import { assetAxios } from "@/utils/axios";
import axios from "axios";

const AssetPreview = () => {
  const router = useRouter();
  const [assetData, setAssetData] = React.useState<any>([]);

  const queryAssetData = async () => {
    try {
      const prevTimeStamp = window.localStorage.getItem("asset-timestamp");
      // checking if already 60mins have passed
      if (prevTimeStamp) {
        const currentTime = new Date().getTime();
        const diff = currentTime - parseInt(prevTimeStamp);
        const minutes = Math.floor(diff / 1000 / 60);
        if (minutes < 60) {
          const assetData = window.localStorage.getItem("asset-data");
          if (assetData) {
            setAssetData(JSON.parse(assetData));
          }
        }
      }
      const assetPromise = [
        assetAxios.get(
          `?symbol=SGOV&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        ),
        assetAxios.get(`?symbol=BIL&apikey=${process.env.NEXT_PUBLIC_API_KEY}`),
        assetAxios.get(
          `?symbol=NVDA&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        ),
        assetAxios.get(
          `?symbol=AAPL&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        ),
      ];
    } catch (err) {
      console.log(err);
      const assetData = window.localStorage.getItem("asset-data");
      if (assetData) {
        setAssetData(JSON.parse(assetData));
      }
    }
    // try {
    //   const prevTimeStamp = window.localStorage.getItem("nasdaq-timestamp");
    //   // checking if already 10mins have passed
    //   if (prevTimeStamp) {
    //     const currentTime = new Date().getTime();
    //     const diff = currentTime - parseInt(prevTimeStamp);
    //     const minutes = Math.floor(diff / 1000 / 60);
    //     if (minutes < 10) {
    //       const assetData = window.localStorage.getItem("nasdaq-data");
    //       if (assetData) {
    //         setAssetData(JSON.parse(assetData));
    //       }
    //     }
    //   }
    //   const assetPromise = [
    //     nasdaqAxios.get("/quote/SGOV/info?assetclass=etf"),
    //     nasdaqAxios.get("/quote/BIL/info?assetclass=etf"),
    //     nasdaqAxios.get("/quote/AAPL/info?assetclass=stocks"),
    //     nasdaqAxios.get("/quote/NVDA/info?assetclass=stocks"),
    //   ];
    //   const [sgov, bil, aapl, nvda] = await Promise.all(assetPromise);
    //   const data = [
    //     {
    //       name: sgov.data.companyName,
    //       lastSalePrice: sgov.data.primaryData.lastSalePrice,
    //       change: sgov.data.primaryData.percentageChange,
    //       yield: 5.6,
    //     },
    //     {
    //       name: bil.data.companyName,
    //       lastSalePrice: bil.data.primaryData.lastSalePrice,
    //       change: sgov.data.primaryData.percentageChange,
    //       yield: 5.15,
    //     },
    //     {
    //       name: nvda.data.companyName,
    //       lastSalePrice: nvda.data.primaryData.lastSalePrice,
    //       change: nvda.data.primaryData.netChange,
    //       yield: 0.04,
    //     },
    //     {
    //       name: aapl.data.companyName,
    //       lastSalePrice: aapl.data.primaryData.lastSalePrice,
    //       change: aapl.data.primaryData.netChange,
    //       yield: 0.56,
    //     },
    //   ];
    //   setAssetData(data);
    //   window.localStorage.setItem("nasdaq-data", JSON.stringify(data));
    //   window.localStorage.setItem(
    //     "nasdaq-timestamp",
    //     new Date().getTime().toString()
    //   );
    // } catch (err) {
    //   console.log(err);
    //   const assetData = window.localStorage.getItem("nasdaq-data");
    //   if (assetData) {
    //     setAssetData(JSON.parse(assetData));
    //   }
    // }
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
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01"
          change="2%"
          changeType="positive"
        />
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01"
          change="2%"
          changeType="positive"
        />
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01"
          change="2%"
          changeType="positive"
        />
        <AssetPreviewCard
          title="stSGOV"
          status="loaded"
          description="Tokenized iShares 0-3 Month Treasury Bond ETF"
          price="100"
          yieldData="0.01"
          change="2%"
          changeType="positive"
        />
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
