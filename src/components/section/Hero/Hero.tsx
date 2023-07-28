import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="max-w-5xl relative flex flex-row justify-evenly ml-auto mr-auto mt-48">
      <section>
        <div className="relative">
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={100}
            width={100}
            className="absolute -z-10 -left-16 -top-16"
          />
          <h1 className="text-link-inactive tracking-tighter text-6xl font-500 font-roboto leading-[1.4] m-0">
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
            className="absolute -left-16"
          />
          <p className="font-manrope font-300 w-78 mt-4 leading-[1.6] tracking-wide ml-[7px]">
            Gain access to variety of financial products including government
            bonds, stocks, investment funds, ETF's, and many others.
          </p>
        </div>
        <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px]">
          Get Started
        </div>
      </section>
      <section className="flex flex-col relative align-end -right-7 mt-16">
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
