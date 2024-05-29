import { Box, HStack, Heading, Icon, Row } from "native-base";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TableProps } from "../../store/interfaces/interfaces";

const Column: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <HStack
      borderWidth={1}
      borderColor="blue.500"
      justifyContent="space-between"
      bg="blue.50"
    >
      {columns?.map((item, index) => {
        const [sort, setSort] = useState("asc");

        const toggleSort = () => {
          if (sort == "asc") {
            setSort("desc");
          } else {
            setSort("asc");
          }
        };
        return (
          <Row
            alignItems={"center"}
            key={item.id}
            flex={1}
            borderRightWidth={columns.length - 1 === index ? 0 : 1}
          >
            <Heading color="blue.700" size={"md"} p={2}>
              {item.name}
            </Heading>
            {item.is_sortable && (
              <Icon
                onPress={toggleSort}
                as={
                  <FontAwesome
                    name={sort == "asc" ? "sort-alpha-asc" : "sort-alpha-desc"}
                  />
                }
              />
            )}
          </Row>
        );
      })}
    </HStack>
  );
};

export default React.memo(Column);
