import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

function AccountScreen(props) {
  console.log("AccountScreen:", props.initRouter);
  return (
    <View style={styles.container}>
      <Text>AccountScreen</Text>
    </View>
  );
}

export default AccountScreen;
