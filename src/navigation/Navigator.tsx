import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import TermsScreen from "../screens/TermsScreen";
import StarshipScreen from "../screens/StarshipScreen";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";

import { AppRoutes } from "./AppRoutes";

const Stack = createStackNavigator();
const StarshipStack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={"none"}
        mode={"modal"}
        initialRouteName={AppRoutes.LOGIN_SCREEN}
      >
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={AppRoutes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen
          name={AppRoutes.STARSHIP_FEED_SCREEN}
          component={StarshipScreen}
        />
        <StarshipStack.Screen
          name={AppRoutes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailScreen}
        />
        <StarshipStack.Screen
          name={AppRoutes.PILOT_SCREEN}
          component={PilotScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
