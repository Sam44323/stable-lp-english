import React from "react";
import Image from "next/image";

const Acquire = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat bg-contain 2xl:bg-cover 2xl:pt-80 min-h-[1900px] h-full mt-72 pt-36 mx-auto relative">
      <section className="text-center font-roboto">
        <h1 className="text-5xl font-500">Acquire Stablecoins now!</h1>
        <p className="max-w-2xl mx-auto mt-6 font-300 font-manrope leading-7">
          Our stablecoins are pegged at a fixed rate of 1:1 with a corresponding
          fiat currency. For instance, 1 StUSD equates to 1 USD, while 1 StEUR
          equals EUR. We offer three different ways to acquire our stablecoins:
        </p>
      </section>
      <section className="flex flex-row justify-between max-w-[1900px] mx-auto">
        <section></section>
        <img src="/images/macbook.png" className="h-[700] w-[1000]" />
      </section>
    </div>
  );
};

export default Acquire;
