import React from "react";
import { Collapse, Card, CardBody, CardTitle } from "reactstrap";
import classNames from "classnames";

interface AccordionItemProps {
  active: boolean;
  title: string;
  description: string | string[];
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  active,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "bg-white rounded-3xl py-[5px] px-[19px] mb-5 shadow-custom-card hover:cursor-pointer hover:border-blue-400",
        active ? "border-2 border-blue-400 py-[30px]" : "border-2 border-white"
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          "flex items-center justify-between",
          active && "pb-4"
        )}
      >
        <h1 className="m-0 text-blue-text text-lg font-be-vietnam-pro tracking-wide">
          {title}
        </h1>
        <img
          src={
            active ? "/images/active-arrow.svg" : "/images/inactive-arrow.svg"
          }
          className={classNames(
            "mt-1 transition-all duration-100 ease-in-out",
            active ? "mr-10 mb-1" : "mr-0"
          )}
        />
      </div>
      <Collapse isOpen={active} onClick={onClick}>
        <Card
          style={{
            borderColor: "transparent",
          }}
        >
          {Array.isArray(description) ? (
            <div>
              {description.map((item, index) => (
                <p
                  key={index}
                  className="max-w-[90%] font-work-sans font-400 leading-8 text-[#6F6C90] text-sm"
                >
                  <span className="font-manrope font-800 text-black mr-1">
                    {index + 1}.
                  </span>
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <p className="max-w-[90%] font-work-sans leading-8 text-[#6F6C90] text-sm">
              {description}
            </p>
          )}
        </Card>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
