import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";

export default function CardComponent({ props, navigation }) {
  const { id, name, img, specialist } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Description", { id })}
      style={{
        padding: 15,
        flex: 0.5,
        backgroundColor: "rgba(255,255,255,.3)",
        margin: 5,
        borderRadius: 12,
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Avatar
          title={name}
          activeOpacity={0.7}
          avatarStyle={{ borderWidth: 1, borderColor: "white" }}
          rounded
          source={{ uri: img }}
          size="large"
        />
        <Text
          lineBreakMode="tail"
          style={{
            fontSize: 14,
            fontWeight: "bold",
            flexWrap: "wrap",
            color: "rgb(51,71,91)",
            paddingTop: 10,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            opacity: 0.75,
            flexWrap: "wrap",
            color: "#444",
          }}
        >
          {specialist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
