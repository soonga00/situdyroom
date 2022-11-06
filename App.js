import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Register1Screen from "./screens/Register1Screen";

const Stack = createNativeStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register1" component={Register1Screen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;