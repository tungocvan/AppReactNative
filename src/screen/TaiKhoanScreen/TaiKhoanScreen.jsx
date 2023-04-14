import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

function TaiKhoanScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("TaiKhoanScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>TaiKhoanScreen</Text>
    </View>
  );
}

export default TaiKhoanScreen;
