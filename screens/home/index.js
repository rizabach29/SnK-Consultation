import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import doctors from "../../doctor_list.json";
import Card from "../../component/Card";
import { FlatList } from "react-native";

export default function home({ navigation }) {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
      <SearchBar
        placeholder="Search for Doctor"
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        style={{ padding: 10 }}
        data={doctors}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card props={item} navigation={navigation} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(125, 225, 125)",
    justifyContent: "center",
    alignItems: "center",
  },
});
