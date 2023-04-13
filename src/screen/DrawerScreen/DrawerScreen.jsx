import * as React from "react";
import { Button, Text, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../HomeScreen";
import AboutScreen from "../AboutScreen";
import ContactScreen from "../ContactScreen";

function RightDrawerContent() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the right drawer</Text>
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      useLegacyImplementation
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
      drawerContent={(props) => {
        return <CustomDrawerContent {...props} />;
      }}
    >
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
}

const RightDrawer = createDrawerNavigator();

function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      useLegacyImplementation
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="home" size={14} color="black" />
            <Text style={{ paddingHorizontal: 5 }}>Account</Text>
          </View>
        )}
        onPress={() => {
          props.navigation.navigate("Account");
        }}
      />
      <DrawerItem
        label={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="home" size={14} color="black" />
            <Text style={{ paddingHorizontal: 5 }}>About</Text>
          </View>
        )}
        onPress={() => {
          props.navigation.navigate("About");
        }}
      />
      <DrawerItem
        label={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="home" size={14} color="black" />
            <Text style={{ paddingHorizontal: 5 }}>Contact</Text>
          </View>
        )}
        onPress={() => {
          props.navigation.navigate("Contact");
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerScreen() {
  return <RightDrawerScreen />;
}
