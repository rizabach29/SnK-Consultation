import React, { useState } from "react";
import { StyleSheet, View, Linking } from "react-native";
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
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 36,
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
        <Text
          style={{
            paddingTop: 30,
            lineHeight: 20,
            textAlign: "center",
          }}
        >
          {state.description}
        </Text>
      </View>
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
    backgroundColor: "rgb(255, 125, 125)",
  },
  button: { flex: 1, justifyContent: "flex-end", marginBottom: 24 },
});
