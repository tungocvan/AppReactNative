//import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
//import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { Text, View, Modal } from "react-native";
//import { createDrawerNavigator } from "@react-navigation/drawer";

//import Ionicons from '@expo/vector-icons/Ionicons';

import LoginScreen from "./screen/LoginScreen";
import DrawerScreen from "./screen/DrawerScreen";
//import ContactScreen from "./screen/ContactScreen";
//import HomeScreen from "./screen/HomeScreen";
//import BtnIonicons from "./components/BtnIonicons";
const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

// https://icons.expo.fyi/
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
