import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function home({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>ini home</Text>
      <Button
        title="Description"
        onPress={() => {
          navigation.navigate("Description");
        }}
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
