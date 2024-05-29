import React, { useState } from "react";
import { Input, Icon } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/actions/dataActions";
import { AppDispatch, RootState } from "../store";
import { Alert } from "react-native";
import ClearTextButton from "./ClearTextButton";

const SearchInput: React.FC = () => {
  const state = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch<AppDispatch>();

  const [query, setQuery] = useState("");

  const handleChange = (text: string) => {
    setQuery(text);
  };
  const handleSubmit = () => {
    const filteredItems = state.items.filter(
      (item) => item.name.toLowerCase() == query.toLowerCase()
    );
    if (filteredItems.length < 1) {
      Alert.alert(
        "This user name does not exist! Please specify an existing user name!"
      );
    } else {
      dispatch(setSearchQuery(query));
    }
  };

  const clearQuery = () => {
    setQuery("");
    dispatch(setSearchQuery(""));
  };
  return (
    <Input
      my={5}
      type="text"
      w="100%"
      rounded="none"
      h="12"
      size="md"
      placeholderTextColor="muted.400"
      value={query}
      onChangeText={handleChange}
      InputLeftElement={
        <Icon
          as={<AntDesign name="search1" />}
          color={query.length > 0 ? "black" : "muted.400"}
          size="md"
          ml="2"
        />
      }
      InputRightElement={
        <ClearTextButton
          query={query}
          handleSubmit={handleSubmit}
          clearQuery={clearQuery}
        />
      }
      placeholder="Username"
    />
  );
};

export default React.memo(SearchInput);
