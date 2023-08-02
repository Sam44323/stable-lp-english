import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="gradient-blue-bg-top min-h-[100vh] relative">
      <section>
        <div className="relative">
          <img
            src="/images/shapes/rwa-mesh-right.png"
            alt="solid-circle-blue"
            className="absolute right-0 top-36"
          />
          <div className="max-w-4xl mx-auto pt-48">
            <h1 className="text-link-inactive tracking-tighter text-4xl max-w-lg font-500 font-roboto leading-[1.4] m-0">
              Tokenize your assets and obtain more control and flexibility over
              them.
            </h1>
            <div className="pill-btn hover:ease-in duration-100 hover:scale-105 min-w-[190px] mt-5">
              Gain Access to RWA
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
