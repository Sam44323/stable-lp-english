import React from "react";
import AccordionItem from "@/components/common/AccordionItem/AccordionItem";
import { FAQ_DATA } from "@/utils/constants";

const FAQ = () => {
  const activeAccordionData = React.useRef<number>(-1);

  return (
    <div className="mt-[400px] relative">
      <img
        src="/images/shapes/faq-ellipse.png"
        className="absolute left-0 -z-10"
      />
      <h1 className="text-center mt-5 text-blue-text font-roboto tracking-wide font-500">
        FAQ's
      </h1>
      <div>
        {FAQ_DATA.map((item, index) => (
          <AccordionItem
            {...item}
            key={index}
            active={activeAccordionData.current === index}
            onClick={() => (activeAccordionData.current = index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
