import React from "react";

const HaveMoreQuestions = () => {
  return (
    <div className="gradient-blue-bg 2xl:max-w-screen-2xl max-w-screen-xl mx-auto rounded-3xl md:min-h-[250px]   relative mt-36 overflow-clip mobile:max-w-[90%] mobile:mx-auto">
      <div>
        <img
          src="/images/shapes/stacked-ellipse.png"
          className="absolute left-0 md:max-h-[300px] rounded-3xl mobile:hidden"
        />
      </div>
      <div className="absolute flex flex-row items-start justify-between w-full z-10 max-w-screen-lg mx-auto  left-16 top-7 pt-16 mobile:hidden">
        <div>
          <h1 className="text-white font-roboto">Have more questions?</h1>
          <p className="text-white font-roboto font-400 tracking-wider">
            Contact us and our team will be happy to answer your questions!
          </p>
        </div>
        <div className="pill-btn bg-white tracking-wide font-800 text-blue-btn hover:ease-in duration-100 hover:scale-105 mt-6 px-10 py-3 rounded-full ">
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
