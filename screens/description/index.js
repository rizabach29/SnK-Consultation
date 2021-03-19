import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function description({ navigation, route }) {
  return (
    <View style={styles.root}>
      <Text>ini description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255, 125, 125)",
    justifyContent: "center",
    alignItems: "center",
  },
});
