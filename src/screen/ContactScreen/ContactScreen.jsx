import React from "react";
import { Text, View } from "react-native";
import TabScreen from "../TabScreen/TabScreen";
import styles from "./styles";

function ContactScreen(props) {
  console.log("ContactScreen:", props.initRouter);

  return (
    <View style={styles.container}>
      <Text>ContactScreen</Text>
    </View>
  );
}

export default ContactScreen;
