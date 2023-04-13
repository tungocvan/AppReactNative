import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import styles from "./styles";
import AccountScreen from "../AccountScreen";
import AboutScreen from "../AboutScreen";
import ContactScreen from "../ContactScreen";
import BtnIonicons from "../../components/BtnIonicons";
const Tab = createMaterialBottomTabNavigator();

function TabScreen(props) {
  console.log(props.initRouter);
  return (
    <Tab.Navigator
      initialRouteName={props.initRouter}
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
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
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

export default TabScreen;
