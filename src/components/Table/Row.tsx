import { Box, HStack, Text } from "native-base";
import React from "react";
import { highlightText } from "../../helper/helper";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { RowProps } from "../../store/interfaces/interfaces";

const Row: React.FC<RowProps> = ({ item, index }) => {
  const query = useSelector((state: RootState) => state.data.searchQuery);
  return (
    <HStack
      key={index}
      borderWidth={1}
      borderColor="blue.500"
      justifyContent="space-between"
      bg={index % 2 === 0 ? "blue.100" : "blue.200"}
    >
      <Box flex={1} borderRightWidth={1}>
        <Text px={"0.5"} py={2} textAlign="center">
          {highlightText(item.name, query)}
        </Text>
      </Box>
      <Box flex={1} borderRightWidth={1}>
        <Text py={2} textAlign="center">
          {item.stars}
        </Text>
      </Box>
      <Box flex={1}>
        <Text py={2} textAlign="center">
          {item.bananas}
        </Text>
      </Box>
    </HStack>
  );
};

export default React.memo(Row);
