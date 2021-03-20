import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import doctors from "../../doctor_list.json";
import Card from "../../component/Card";
import { FlatList } from "react-native";

export default home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    setDataSource(doctors);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = doctors.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setDataSource(doctors);
      setSearch(text);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
      <SearchBar
        placeholder="Search for Doctor"
        onChangeText={(search) => {
          searchFilterFunction(search);
        }}
        onClear={() => {
          searchFilterFunction("");
        }}
        value={search}
      />
      <FlatList
        style={{ padding: 10 }}
        data={dataSource}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card props={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(125, 225, 125)",
    justifyContent: "center",
    alignItems: "center",
  },
});
