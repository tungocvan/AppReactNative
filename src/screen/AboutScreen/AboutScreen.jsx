import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function AboutScreen(props) {
  console.log("AboutScreen:");
  return (
    <View style={styles.container}>
      <Text>AboutScreen</Text>
    </View>
  );
}

export default AboutScreen;
