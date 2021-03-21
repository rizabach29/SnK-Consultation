import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Linking } from "react-native";
import { Text, SocialIcon } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import doctors from "./../../doctor_list.json";
import { useFocusEffect, useRoute } from "@react-navigation/native";

export default description = () => {
  const route = useRoute();
  const { id } = route.params;
  const [state, setState] = useState({});

  const message = `Hi, I’d like to make an appointment for ${state.name} today`;

  useFocusEffect(
    React.useCallback(() => {
      const doctor = doctors.filter((row) => {
        return row.id === id;
      });
      setState(doctor[0]);
    }, [route.params])
  );

  return (
    <View style={styles.root}>
      <View
        style={{
          alignItems: "center",
          paddingTop: 8,
          flex: 1,
        }}
      >
        <Avatar
          source={{ uri: state.img }}
          rounded
          size="xlarge"
          avatarStyle={{ borderWidth: 2, borderColor: "white" }}
        />
        {/* {alert(state.img)} */}
        <Text h3 style={{ paddingTop: 30 }}>
          {state.name}
        </Text>
        <Text style={{ fontWeight: "bold", opacity: 0.5, paddingTop: 3 }}>
          {state.specialist}
        </Text>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 24 }}>
        <Text
          style={{
            lineHeight: 24,
            textAlign: "justify",
            fontSize: 14,
          }}
        >
          {state.description}
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <SocialIcon
          Component={TouchableOpacity}
          onPress={() => {
            Linking.openURL(
              `whatsapp://send?text=${message}&phone=${state.telp}`
            );
          }}
          raised
          type="whatsapp"
          button
          title="Make Appointment"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#eef",
    paddingTop: 24,
    paddingBottom: 16,
    paddingRight: 24,
    paddingLeft: 24,
  },
  button: { justifyContent: "flex-end", marginTop: 24 },
});
