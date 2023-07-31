import React from "react";
import { Collapse, Card, CardBody, CardTitle } from "reactstrap";

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
    <div>
      <div>
        <h1></h1>
      </div>
      <Collapse isOpen={active} onClick={onClick}>
        <Card
          style={{
            borderColor: "transparent",
          }}
        >
          <CardBody>{description}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
