import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import TermsScreen from "../screens/TermsScreen";
import StarshipScreen from "../screens/StarshipScreen";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";

import { AppRoutes } from "./AppRoutes";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator
      headerMode={"none"}
      mode={"modal"}
      initialRouteName={AppRoutes.LOGIN_SCREEN}
    >
      <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={AppRoutes.TERMS_SCREEN} component={TermsScreen} />
      {/* <Stack.Screen
          name={AppRoutes.STARSHIP_FEED_SCREEN}
          component={StarshipScreen}
        />
        <StarshipStack.Screen
          name={AppRoutes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailScreen}
        /> */}
    </Stack.Navigator>
  );
}
const Navigator = () => {
  const [user, setUser] = useState<boolean>(true);

  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
