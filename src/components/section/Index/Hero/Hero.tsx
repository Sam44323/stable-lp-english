import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="max-w-5xl relative flex flex-row justify-evenly ml-auto mr-auto mt-48 mobile:max-w-[90%] mobile:mt-36 mobile:flex-col">
      <section>
        <div className="relative mobile:flex mobile:flex-col mobile:w-full mobile:items-center">
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={140}
            width={140}
            className="absolute -z-10 -left-24 -top-24 mobile:hidden"
          />
          <h1 className="text-link-inactive tracking-tight text-[70px] font-500 font-roboto leading-[1.1] m-0 mobile:text-3xl mobile:text-center">
            The easiest way to <br />
            obtain RWA tokens!
          </h1>
        </div>
        <div className="relative">
          <Image
            src="/images/shapes/oval-small.png"
            alt="solid-circle-blue"
            height={15}
            width={15}
            className="absolute -left-20 mobile:hidden -top-14"
          />
          <p className="font-manrope font-300 max-w-lg mt-4 text-grey-100 leading-[1.6] text-lg tracking-wide ml-[7px] mobile:ml-0 mobile:text-center mobile:text-sm">
            Gain access to variety of financial products including government
            bonds, stocks, investment funds,ETF's, and many others.
          </p>
        </div>
        <div className="pill-btn mt-16 text-lg hover:ease-in duration-100 hover:scale-105 min-w-[200px] mobile:max-w-50% mobile:mx-auto">
          Gain Access
        </div>
      </section>
      <section className="flex flex-col relative align-end -right-7 mt-16 mobile:hidden">
        <Image
          src="/images/shapes/masked-circle-pattern.png"
          alt="solid-circle-blue"
          height={400}
          width={400}
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
