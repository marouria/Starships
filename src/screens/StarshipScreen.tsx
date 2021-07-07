import React from "react";
import { View, Text } from "react-native";

import UseStarships from "../../hooks/UseStarships";

const StarshipScreen = () => {
  const { error, isLoading } = UseStarships();
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
};

export default StarshipScreen;
