import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
interface props {
  titleText: string;
  variantButton: "primary" | "secondary" | "outline";
  variantText: "secondary" | "disabled" | "white" | "primary" | "alt";
}

const GroupButtons = ({
  titleText,
  variantButton = "secondary",
  variantText = "primary",
}: props) => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-10 mb-10">
        <Button variant={variantButton}>
          <Text variant={variantText} size="sm" center={true}>
            {`small ${titleText}`}
          </Text>
        </Button>

        <Button variant={variantButton} size="md">
          <Text variant={variantText} center={true}>
            {`medium ${titleText}`}
          </Text>
        </Button>

        <Button variant={variantButton} size="lg">
          <Text variant={variantText} size="lg" center={true}>
            {`larg ${titleText}`}
          </Text>
        </Button>

        <Button variant={variantButton} size="lg" disabled={true}>
          <Text variant={variantText} size="lg" center={true}>
            larg disabled
          </Text>
        </Button>
      </div>
    </>
  );
};

export default GroupButtons;
