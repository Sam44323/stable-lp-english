import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="max-w-5xl relative flex flex-row justify-evenly ml-auto mr-auto mt-48 mobile:max-w-[90%] mobile:mt-36 mobile:flex-col min-h-[80vh]">
      <h1 className="text-link-inactive tracking-tight text-[50px] font-500 font-roboto leading-[1.1] m-0 mobile:text-3xl mobile:text-center">
        Coming Soon
      </h1>
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

export default Error;
