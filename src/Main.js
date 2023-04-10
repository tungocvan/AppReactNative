import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Modal } from "react-native";
//import { createDrawerNavigator } from "@react-navigation/drawer";

//import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from "react-redux";
import { Logout } from "./redux/reducers/accountSlice";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import AccountScreen from "./screen/AccountScreen";
import BtnIonicons from "./components/BtnIonicons";
const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Modal>
      <View>
        <Text>List</Text>
      </View>
    </Modal>
  );
}
// https://icons.expo.fyi/
export default function Main() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handlerLogout = () => {
    dispatch(Logout());
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <BtnIonicons
                onPress={() => setShow(!show)}
                name="list"
                color="green"
              />
            ),
            headerRight: () => (
              <BtnIonicons
                onPress={handlerLogout}
                name="ios-exit-outline"
                color="green"
              />
            ),
          }}
        />
        <Stack.Screen
          name="MyModal"
          component={MyDrawer}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
