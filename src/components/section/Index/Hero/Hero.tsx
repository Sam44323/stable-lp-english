import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="max-w-5xl relative flex flex-row justify-evenly ml-auto mr-auto mt-36 mobile:max-w-[90%] mobile:mt-36 mobile:flex-col">
      <section className="ml-5 mobile:m-0">
        <div className="relative mobile:flex mobile:flex-col mobile:w-full mobile:items-center">
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={110}
            width={110}
            className="absolute -z-10 -left-44 top-10 mobile:hidden"
          />
          <h1 className="text-link-inactive tracking-tight text-[60px] font-500 font-roboto leading-[1.1] m-0 mobile:text-3xl mobile:text-center">
            Listed securities from traditional markets, Now on-chain!
          </h1>
        </div>
        <div>
          <Image
            src="/images/shapes/oval-small.png"
            alt="solid-circle-blue"
            height={15}
            width={15}
            className="absolute -left-20 mobile:hidden top-[250px]"
          />
          <p className="font-work-sans mobile:min-w-full font-300 max-w-xl mt-4 text-grey-100 leading-[1.4] text-md tracking-wide ml-[7px] mobile:ml-0 mobile:text-center mobile:text-sm">
            Bring your preferred Equities, Bonds, ETFs, and other instruments to
            your favorite blockchain, unleash their maximum potential, and
            elevate your financial possibilities with the best blockchain and
            Defi offer. All you need to do is mint the assets you intend to hold
            with whitelisted fiat-backed stablecoins such as USDC and USDT or
            use our in-house Stablecoins for the quickest and simplest minting
            and redemption experience.
          </p>
        </div>
      </section>
      <section className="flex flex-col relative align-end -right-7 mt-16 mobile:hidden">
        <Image
          src="/images/shapes/masked-circle-pattern.png"
          alt="solid-circle-blue"
          height={900}
          width={900}
        />
        <Image
          src="/images/shapes/oval-small.png"
          alt="solid-circle-blue"
          height={15}
          width={15}
          className="absolute -bottom-11 right-0  -z-[1]"
        />
      </section>
    </div>
  );
};

export default Hero;
