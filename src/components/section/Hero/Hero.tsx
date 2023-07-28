import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="max-w-screen-lg relative">
      <section>
        <div>
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={100}
            width={100}
          />
          <h1 className="text-link-inactive tracking-tighter text-[50] font-[600] font-roboto">
            The easiest way to obtain RWA tokens!
          </h1>
        </div>
        <div>
          <Image
            src="/images/shapes/oval-small.png"
            alt="solid-circle-blue"
            height={10}
            width={10}
          />
          <p className="font-manrope">
            Gain access to variety of financial products including government
            bonds, stocks, investment funds, ETF's, and many others.
          </p>
        </div>
        <div className="pill-btn hover:ease-in duration-100 hover:scale-105">
          Get Started
        </div>
      </section>
      <section className="flex flex-col align-end absolute -right-7">
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
        />
      </section>
    </div>
  );
};

export default Hero;
