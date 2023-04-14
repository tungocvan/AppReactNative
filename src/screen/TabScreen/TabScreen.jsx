import React from "react";
import { Text, View } from "react-native";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import TrangChuScreen from "../TrangChuScreen";
import GioHangScreen from "../GioHangScreen";
import TaiKhoanScreen from "../TaiKhoanScreen";
import SanPhamScreen from "../SanPhamScreen";
import BtnIonicons from "../../components/BtnIonicons";
//const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

function TabScreen(props) {
  //  console.log(props.initRouter);
  return (
    <Tab.Navigator
      initialRouteName={props.initRouter}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#694fad",
          padding: 0,
          minHeight: 70,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#e5780b",
        tabBarItemStyle: {
          display: "flex",
          paddingVertical: 10,
        },
      }}
    >
      <Tab.Screen
        name="TrangChu"
        component={TrangChuScreen}
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color }) => (
            <BtnIonicons name="home-outline" color={color} size={36} />
          ),
        }}
      />

      <Tab.Screen
        name="SanPham"
        component={SanPhamScreen}
        options={{
          tabBarLabel: "Sản Phẩm",
          tabBarIcon: ({ color }) => (
            <BtnIonicons name="add-circle-outline" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="GioHang"
        component={GioHangScreen}
        options={{
          tabBarLabel: "Giỏ Hàng",
          // tabBarItemStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <BtnIonicons name="cart-outline" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="TaiKhoan"
        component={TaiKhoanScreen}
        options={{
          tabBarLabel: "Tài Khoản",
          tabBarIcon: ({ color }) => (
            <BtnIonicons
              name="md-people-circle-outline"
              color={color}
              size={36}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabScreen;
