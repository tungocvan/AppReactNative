import * as React from "react";
import { Text, View, Dimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/reducers/accountSlice";
import HomeScreen from "../HomeScreen";
//import AboutScreen from "../AboutScreen";
//import ContactScreen from "../ContactScreen";
//import { BottomTabBar } from "@react-navigation/bottom-tabs";

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
      screenOptions={{
        drawerPosition: "left",
        drawerStyle: {
          backgroundColor: "#c6cbef",
          width: 240,
          top: 10,
          flex: 1,
        },
      }}
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
  const chieuCaoManHinh = Dimensions.get("window").height;
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(Logout());
  };
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          alignItems: "flex-end",
          height: chieuCaoManHinh - 90,
        }}
      >
        <View style={{ width: "100%" }}>
          <DrawerItem
            label={() => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="home-outline" color="balck" size={16} />
                <Text style={{ paddingHorizontal: 5 }}>Trang Chủ</Text>
              </View>
            )}
            onPress={() => {
              props.navigation.navigate("TrangChu");
            }}
          />
          <DrawerItem
            label={() => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="add-circle-outline" color="balck" size={16} />
                <Text style={{ paddingHorizontal: 5 }}>Sản Phẩm</Text>
              </View>
            )}
            onPress={() => {
              props.navigation.navigate("SanPham");
            }}
          />
          <DrawerItem
            label={() => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="md-people-circle-outline"
                  color="balck"
                  size={16}
                />
                <Text style={{ paddingHorizontal: 5 }}>Tài Khoản</Text>
              </View>
            )}
            onPress={() => {
              props.navigation.navigate("TaiKhoan");
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "green",
            color: "black",
          }}
        >
          <DrawerItem
            label={() => (
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="exit-outline" size={20} color="black" />
                <Text style={{ paddingHorizontal: 5, fontSize: 20 }}>
                  Đăng Xuất
                </Text>
              </View>
            )}
            onPress={() => {
              handlerLogout();
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerScreen() {
  return <RightDrawerScreen />;
}
