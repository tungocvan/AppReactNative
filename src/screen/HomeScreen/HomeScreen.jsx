import React, { useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import { accountsSelector } from "../../redux/reducers/accountSlice";

function HomeScreen({ navigation }) {
  const statusLogout = useSelector(accountsSelector);
  console.log("HomeScreen statusLogout:", statusLogout.isLogout);
  useEffect(() => {
    if (statusLogout.isLogout === false) {
      navigation.replace("Login");
    }
  }, [navigation, statusLogout.isLogout]);
  return (
    <View style={styles.container}>
      <Text>HomeScreen2</Text>
    </View>
  );
}

export default HomeScreen;
