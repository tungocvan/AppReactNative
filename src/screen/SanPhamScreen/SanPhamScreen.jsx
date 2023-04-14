import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

function SanPhamScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("SanPhamScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>SanPhamScreen</Text>
    </View>
  );
}

export default SanPhamScreen;
