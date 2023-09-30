import React from "react";
import AssetPreviewCard from "./AssetPreviewCard";

const AssetPreview = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] overflow-x-hidden bg-no-repeat bg-cover 2xl:bg-cover large-screen:bg-cover  2xl:pt-[5%] mt-4 pt-36 mx-auto relative pb-40 mobile:pb-10 mobile:pt-16 z-10">
      <section>
        <AssetPreviewCard />
      </section>
    </div>
  );
};

export default AssetPreview;
