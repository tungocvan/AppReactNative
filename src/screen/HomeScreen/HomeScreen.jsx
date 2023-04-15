import React, { useEffect } from "react";
//import { Text, View } from "react-native";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import styles from "./styles";

import { useSelector } from "react-redux";
// import AccountScreen from "../AccountScreen";
// import ContactScreen from "../ContactScreen";
import { accountsSelector } from "../../redux/reducers/accountSlice";
import TabScreen from "../TabScreen/TabScreen";
//const Tab = createMaterialBottomTabNavigator();
//const Drawer = createDrawerNavigator();
function HomeScreen({ navigation, route }) {
  const statusLogout = useSelector(accountsSelector);
  //console.log("route:", route);
  //console.log("HomeScreen statusLogout:", statusLogout.isLogout);
  useEffect(() => {
    if (statusLogout.isLogout === false) {
      navigation.replace("Login");
    }
  }, [navigation, statusLogout.isLogout]);
  return <TabScreen initRouter="TrangChu" />;
}

export default HomeScreen;
