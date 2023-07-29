import React from "react";
import Image from "next/image";

const Acquire = () => {
  return (
    <div className="bg-[url('/images/gradients/gradient-bent.svg')] bg-no-repeat min-h-[800px] h-full w-screen mt-72 pt-36">
      <section className="text-center font-roboto">
        <h1 className="text-5xl font-500">Acquire Stablecoins now!</h1>
        <p className="max-w-2xl mx-auto mt-6 font-300 font-manrope leading-7">
          Our stablecoins are pegged at a fixed rate of 1:1 with a corresponding
          fiat currency. For instance, 1 StUSD equates to 1 USD, while 1 StEUR
          equals EUR. We offer three different ways to acquire our stablecoins:
        </p>
      </section>
    </div>
  );
};

export default Acquire;
