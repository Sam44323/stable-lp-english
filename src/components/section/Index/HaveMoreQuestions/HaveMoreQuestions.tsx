import React from "react";
import { useRouter } from "next/router";

const HaveMoreQuestions = () => {
  const router = useRouter();

  return (
    <div className="gradient-blue-bg mb-36 2xl:max-w-screen-2xl max-w-[1200px] mx-auto rounded-3xl md:min-h-[250px]   relative overflow-clip mobile:max-w-[1200px] mobile:mx-auto mobile:pb-10">
      <div>
        <img
          src="/images/shapes/stacked-ellipse.png"
          className="absolute left-0 md:max-h-[300px] rounded-3xl mobile:hidden"
        />
      </div>
      <div className="absolute flex flex-row items-start justify-between w-full z-10 max-w-screen-lg mx-auto  left-16 top-7 pt-10 mobile:hidden">
        <div>
          <h1 className="text-white font-roboto text-5xl">
            Have more questions?
          </h1>
          <p className="text-white font-roboto font-400 tracking-wider mt-10">
            Contact us and our team will be happy to answer your questions!
          </p>
        </div>
        <div
          className="pill-btn bg-white tracking-wide font-800 text-blue-btn hover:ease-in duration-100 hover:scale-105 mt-6 px-10 py-3 rounded-full"
          onClick={() => {
            window.open("mailto:info@stablefinance.co", "_blank");
          }}
        >
          Get in touch!
        </div>
      </div>
      <div className="hidden mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:h-full mobile:pt-10">
        <div>
          <h1 className="text-white font-roboto mobile:text-center">
            Have more questions?
          </h1>
          <p className="text-white font-roboto font-400 tracking-wider mobile:text-center">
            Contact us and our team will be happy to answer your questions!
          </p>
        </div>
        <div className="pill-btn bg-white tracking-wide font-800 text-blue-btn hover:ease-in duration-100 hover:scale-105 mt-6 px-10 py-3 rounded-full ">
          Get in touch!
        </div>
      </div>
      <div className="relative">
        <img
          src="/images/shapes/large-ellipse-blue.png"
          className="absolute right-0 md:max-h-[300px] rounded-tr-3xl rounded-br-3xl mobile:hidden"
        />
      </div>
    </div>
  );
};

export default HaveMoreQuestions;
