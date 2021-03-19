import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-elements";

export default function CardComponent({ props, navigation }) {
  const { id, name, img, specialist } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Description", { props: props })}
      style={{
        padding: 15,
        flex: 0.5,
        backgroundColor: "rgba(255,255,255,.05)",
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
            color: "white",
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
            color: "white",
          }}
        >
          {specialist}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
