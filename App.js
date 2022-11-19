import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Register1Screen from "./screens/Register1Screen";
import Register3Screen from "./screens/Register3Screen";
import FindIDScreen from "./screens/FindIDScreen";
import FindPWScreen from "./screens/FindPWScreen";
import CertifyLoadingScreen from "./screens/CertifyLoadingScreen";
import MainScreen from "./screens/MainScreen";
import ReservationMainScreen from "./screens/ResevationMainScreen";
import ReservationFourScreen from "./screens/ReservationFourScreen";
import ReservationSixScreen from "./screens/ResevationSixScreen";
import CheckReservationScreen from "./screens/CheckReservationScreen";

const Stack = createNativeStackNavigator();

function App() {

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register1" component={Register1Screen} />
      <Stack.Screen name="Register3" component={Register3Screen} />
      <Stack.Screen name="Find ID" component={FindIDScreen} />
      <Stack.Screen name="Find PW" component={FindPWScreen} />
      <Stack.Screen name="Certify Loading" component={CertifyLoadingScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Main Reservation" component={ReservationMainScreen} />
      <Stack.Screen name="Four Reservation" component={ReservationFourScreen} />
      <Stack.Screen name="Six Reservation" component={ReservationSixScreen} />
      <Stack.Screen name="Check Reservation" component={CheckReservationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;