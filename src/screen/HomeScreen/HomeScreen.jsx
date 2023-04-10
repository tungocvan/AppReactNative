import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import styles from "./styles";
import BtnIonicons from "../../components/BtnIonicons";
import { useSelector } from "react-redux";
import AccountScreen from "../AccountScreen";
import ContactScreen from "../ContactScreen";
import { accountsSelector } from "../../redux/reducers/accountSlice";
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation, route }) {
  const statusLogout = useSelector(accountsSelector);
  console.log("route:", route);
  console.log("HomeScreen statusLogout:", statusLogout.isLogout);
  useEffect(() => {
    if (statusLogout.isLogout === false) {
      navigation.replace("Login");
    }
  }, [navigation, statusLogout.isLogout]);
  return (
    <Tab.Navigator
      initialRouteName="Account"
      activeColor="green"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <BtnIonicons name="md-people-circle-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <BtnIonicons name="md-people-outline" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
