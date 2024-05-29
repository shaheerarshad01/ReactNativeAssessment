import React from "react";
import { LogBox, SafeAreaView, StyleSheet } from "react-native";
import Table from "./components/Table/Table";
import { RootState } from "./store";
import { useSelector } from "react-redux";
import { columns } from "./json";
import { Box } from "native-base";

const App: React.FC = () => {
  const state = useSelector((state: RootState) => state.data);
  let data = state.searchQuery.length > 1 ? state.filteredItems : state.items;
  LogBox.ignoreAllLogs();
  return (
    <Box mx={"2"}>
      <SafeAreaView>
        <Table data={data} columns={columns} />
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default App;
