import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Ionicons from '@expo/vector-icons/Ionicons';
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
const Stack = createNativeStackNavigator();
// https://icons.expo.fyi/
export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
