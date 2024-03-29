import React from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

function AccountScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      console.log("AccountScreen");
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  );
}

export default AccountScreen;
