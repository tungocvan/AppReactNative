import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

function TrangChuScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("TrangChuScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>TrangChuScreen</Text>
    </View>
  );
}

export default TrangChuScreen;
