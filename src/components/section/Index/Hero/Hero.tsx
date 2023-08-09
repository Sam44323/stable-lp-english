import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="max-w-8xl relative flex flex-row justify-evenly ml-auto mr-auto mt-48 mobile:max-w-[90%] mobile:mt-36 mobile:flex-col">
      <section>
        <div className="relative mobile:flex mobile:flex-col mobile:w-full mobile:items-center">
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={100}
            width={100}
            className="absolute -z-10 -left-16 -top-16 mobile:hidden"
          />
          <h1 className="text-link-inactive tracking-tighter text-6xl font-500 font-roboto leading-[1.4] m-0 mobile:text-3xl mobile:text-center">
            The easiest way to <br />
            obtain RWA tokens!
          </h1>
        </div>
        <div className="relative">
          <Image
            src="/images/shapes/oval-small.png"
            alt="solid-circle-blue"
            height={10}
            width={10}
            className="absolute -left-16 mobile:hidden"
          />
          <p className="font-manrope font-300 max-w-xl mt-4 leading-[1.6] tracking-wide ml-[7px] mobile:ml-0 mobile:text-center mobile:text-sm">
            Gain access to variety of financial products including government
            bonds, stocks, investment funds,ETF's, and many others.
          </p>
        </div>
        <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px] mobile:max-w-50% mobile:mx-auto">
          Gain Access
        </div>
      </section>
      <section className="flex flex-col relative align-end -right-7 mt-16 mobile:hidden">
        <Image
          src="/images/shapes/masked-circle-pattern.png"
          alt="solid-circle-blue"
          height={300}
          width={300}
        />
        <Image
          src="/images/shapes/oval-small.png"
          alt="solid-circle-blue"
          height={10}
          width={10}
          className="absolute bottom-0 right-0 -z-[1]"
        />
      </section>
    </div>
  );
};

export default Hero;
