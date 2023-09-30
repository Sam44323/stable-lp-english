import React from "react";

interface AssetPreviewCardProps {
  status: "loaded" | "loading";
  title: string;
  description: string;
  price: string;
  yieldData: string;
  change: string;
  changeType?: "positive" | "negative";
}

const AssetPreviewCard: React.FC<AssetPreviewCardProps> = ({
  title,
  status,
  description,
  price,
  yieldData,
  change,
  changeType,
}) => {
  return (
    <div className="asset-preview-card mobile:mb-10">
      <section>
        <h1 className="text-blue-link text-[26px] font-600">
          {status === "loaded" ? title : "Loading..."}
        </h1>
        <p className="text-blue-text font-300 text-sm leading-[1.4]">
          {status === "loaded" ? description : "Loading..."}
        </p>
      </section>
      <div className="bg-[#C3DEFF] h-[1.7px] mt-11 mb-3"></div>
      <section>
        <p className="text-grey-100 font-700 text-sm leading-[1.4]">
          Price: {price} ({changeType === "positive" ? "+" : "-"}
          {change}% in 24h)
        </p>
        <div
          className="pill-btn hover:cursor-auto hover:bg-blue-pillBtn  text-[15px] tracking-wide font-600 mt-4"
          onClick={() => {}}
        >
          Yield: {yieldData}%
        </div>
      </section>
    </div>
  );
};

export default AssetPreviewCard;
