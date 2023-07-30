import React from "react";

const Joinnow = () => {
  return (
    <div className="gradient-blue-bg 2xl:max-w-screen-2xl max-w-screen-xl mx-auto rounded-3xl md:min-h-[300px]   relative mt-36">
      <img
        src="/images/shapes/stacked-ellipse.png"
        className="absolute left-0 md:max-h-[300px] rounded-3xl"
      />
      <img
        src="/images/shapes/right-border-ellipse.png"
        className="absolute right-0 md:max-h-[300px] z-10"
      />
      <div className="relative">
        <img
          src="/images/shapes/large-ellipse-blue.png"
          className="absolute right-0 md:max-h-[300px] rounded-tr-3xl rounded-br-3xl"
        />
        <img
          src="/images/shapes/wave-mask-group.png"
          height={400}
          width={400}
          className="absolute right-[160px] top-32 "
        />
      </div>
    </div>
  );
};

export default Joinnow;
