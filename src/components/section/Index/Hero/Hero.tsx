import React from "react";
import Image from "next/image";
import { PLATFORM_FEATURES_LIST } from "@/utils/constants";

const Hero: React.FC = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = React.useState(0);

  // rotate the carousel every x-sec within 0-3 index
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => {
        if (prev === 3) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[1150px] relative flex flex-row justify-evenly ml-auto mr-auto mt-36 mobile:max-w-[90%] mobile:mt-36 mobile:flex-col">
      <section className="ml-5 mobile:m-0">
        <div className="relative mobile:flex mobile:flex-col mobile:w-full mobile:items-center">
          <Image
            src="/images/shapes/solid-circle-blue.png"
            alt="solid-circle-blue"
            height={110}
            width={110}
            className="absolute -z-10 -left-[200px] -top-16 mobile:hidden"
          />
          <h1 className="text-link-inactive tracking-tight -top-10 text-[60px] absolute mobile:relative mobile:max-w-[100px] min-w-[750px] large-screen:min-w-[800px] max-w-[800px] mobile:min-w-full font-500 font-roboto leading-[1.1] m-0 mobile:text-3xl mobile:text-center">
            Combining traditional market securities with DeFi’s on Chain
            Flexibility.
          </h1>
        </div>
        <div>
          <Image
            src="/images/shapes/oval-small.png"
            alt="solid-circle-blue"
            height={15}
            width={15}
            className="absolute -left-[50px] mobile:hidden top-[200px]"
          />
          <p className="font-work-sans mobile:min-w-full min-h-[90px] font-300 max-w-xl mt-[250px] mobile:mt-10 text-grey-100 leading-[1.4] text-md tracking-wide ml-[7px] mobile:ml-0 mobile:text-center mobile:text-sm">
            {PLATFORM_FEATURES_LIST[currentCarouselIndex]}
          </p>
          <div className="flex flex-row items-center justify-between max-w-[250px] ml-1 mt-1">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`
                h-[6px] w-[50px] rounded-[10px]
                transform transition-all duration-500
                hover:cursor-pointer
              ${
                currentCarouselIndex !== index ? "bg-[#EDF5FF]" : "bg-[#0160FE]"
              }
              `}
                ></div>
              ))}
          </div>
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
          className="absolute -bottom-11 right-36  -z-[1]"
        />
      </section>
    </div>
  );
};

export default Hero;
