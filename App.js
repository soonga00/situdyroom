import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Register1Screen from "./screens/Register1Screen";
import Register2Screen from "./screens/Register2Screen";
import FindIDScreen from "./screens/FindIDScreen";
import FindPWScreen from "./screens/FindPWScreen";
import axios from "axios";
const Stack = createNativeStackNavigator();



function App() {

  const callApi = async () => {
    axios.get("/api").then((res) => { console.log(res.data.test) });
  };

  useEffect(() => {
    callApi();
  }, []);

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register1" component={Register1Screen} />
      <Stack.Screen name="Register2" component={Register2Screen} />
      <Stack.Screen name="Find ID" component={FindIDScreen} />
      <Stack.Screen name="Find PW" component={FindPWScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default App;