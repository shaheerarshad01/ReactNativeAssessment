import React from "react";
import Column from "./Column";
import Row from "./Row";
import { FlatList, Text } from "native-base";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { TableProps } from "../../store/interfaces/interfaces";
import SearchInput from "../SearchInput";

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const query = useSelector((state: RootState) => state.data.searchQuery);
  return (
    <React.Fragment>
      <SearchInput />
      <Column columns={columns} data={data} />
      <FlatList
        ListEmptyComponent={
          query.length > 0 ? (
            <Text fontWeight={"semibold"} textAlign={"center"} mt="1">
              No Data found against : <Text color={"red.400"}>{query}</Text>
            </Text>
          ) : null
        }
        showsVerticalScrollIndicator={false}
        initialNumToRender={50}
        data={data}
        keyExtractor={(data) => data.key}
        renderItem={({ item, index }) => <Row item={item} index={index + 1} />}
      />
    </React.Fragment>
  );
};

export default React.memo(Table);
