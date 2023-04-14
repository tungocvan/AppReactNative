import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

function GioHangScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("GioHangScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>GioHangScreen</Text>
    </View>
  );
}

export default GioHangScreen;
