import React from "react";
import { Collapse, Card, CardBody, CardTitle } from "reactstrap";

interface AccordionItemProps {
  active: boolean;
  title: string;
  description: string;
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
      <Collapse isOpen={active} onClick={onClick}>
        <Card
          style={{
            borderColor: "transparent",
          }}
        >
          <CardTitle>{title}</CardTitle>
          <CardBody>{description}</CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
