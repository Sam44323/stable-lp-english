import React from "react";
import AccordionItem from "@/components/common/AccordionItem/AccordionItem";
import { FAQ_DATA } from "@/utils/constants";

const FAQ = () => {
  const [activeAccordionItem, setActiveAccordionItem] =
    React.useState<number>(-1);

  return (
    <div className="mt-[400px] relative">
      <img
        src="/images/shapes/faq-ellipse.png"
        className="absolute left-0 -z-10"
      />
      <h1 className="text-center mt-5 text-blue-text font-roboto tracking-wide font-500 mb-5">
        FAQ's
      </h1>
      <div className="max-w-[80vw] mx-auto">
        {FAQ_DATA.map((item, index) => (
          <AccordionItem
            {...item}
            key={index}
            active={activeAccordionItem === index}
            onClick={() => {
              if (activeAccordionItem === index) {
                setActiveAccordionItem(-1);
                return;
              }
              setActiveAccordionItem(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
