import React from "react";
import GroupButtons from "../molecules/GroupButtons";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
const ButtonsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20 bg-gray-100 p-10">
      <GroupButtons
        titleText="primary"
        variantButton="primary"
        variantText="white"
      />
      <GroupButtons
        titleText="secondary"
        variantButton="secondary"
        variantText="primary"
      />
      <GroupButtons
        titleText="outline"
        variantButton="outline"
        variantText="alt"
      />

      <div className="flex justify-center items-center gap-5">
        <Button color="bg-blue-600">
          <Text size="sm" variant="white">
            custom button
          </Text>
        </Button>
        <Button color="bg-green-600" size="md">
          <Text>custom button</Text>
        </Button>
        <Button  size="lg" className="bg-red-600! rounded-full!">
          <Text size="lg" variant="alt">
             rounded button
          </Text>
        </Button>

        <Button variant="outline" size="lg" className="border-emerald-300!">
          <Text size="lg" variant="primary">
            custom button
          </Text>
        </Button>

        <Button color="bg-yellow-200" size="lg" disabled={true}>
          <Text size="lg" variant="disabled">
            custom disabled button
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default ButtonsSection;
