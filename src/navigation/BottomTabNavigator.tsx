import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PilotsScreen from "../screens/PilotsScreen";
import StarshipScreen from "../screens/StarshipScreen";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";
import OrderScreen from "../screens/OrderScreen";
import { theme } from "../theme/theme";

import { AppRoutes } from "./AppRoutes";

const Tab = createMaterialBottomTabNavigator();
const StarshipStack = createStackNavigator();

function StarshipNavigator() {
  return (
    <StarshipStack.Navigator>
      <StarshipStack.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipScreen}
      />
      <StarshipStack.Screen
        name={AppRoutes.STARSHIP_DETAIL_SCREEN}
        component={StarshipDetailScreen}
      />
    </StarshipStack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: theme.colors.background }}
      activeColor={theme.colors.active}
      inactiveColor={theme.colors.inactive}
    >
      <Tab.Screen
        name={AppRoutes.STARSHIP_FEED_SCREEN}
        component={StarshipNavigator}
        options={{
          tabBarIcon: "rocket",
        }}
      />
      <Tab.Screen
        name={AppRoutes.PILOT_PROFILE}
        component={PilotsScreen}
        options={{
          tabBarIcon: "space-invaders",
        }}
      />
      <Tab.Screen
        name={AppRoutes.ORDER_SCREEN}
        component={OrderScreen}
        options={{
          tabBarIcon: "basket",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
