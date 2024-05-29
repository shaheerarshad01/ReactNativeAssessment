import { Button, Icon, Row } from "native-base";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ClearTextButtonProps } from "../store/interfaces/interfaces";

const ClearTextButton: React.FC<ClearTextButtonProps> = ({
  query,
  clearQuery,
  handleSubmit,
}) => {
  return (
    <Row alignItems={"center"} h="full" space={5}>
      <Icon
        display={query.length > 0 ? "flex" : "none"}
        onPress={clearQuery}
        as={<AntDesign name="closecircle" />}
        color={"danger.700"}
        size="sm"
        ml="2"
      />
      <Button
        disabled={!query}
        rounded="none"
        size="md"
        h="full"
        onPress={handleSubmit}
      >
        Search
      </Button>
    </Row>
  );
};

export default ClearTextButton;
