import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import { useStarships } from "../../hooks/useStarships";
import { StarshipCard } from "../components";

import AppLayout from "../components/AppLayout";

const StarshipDetailScreen = () => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <AppLayout title="Starship" withFooter>
      <Button title="Go back" onPress={goBack} />
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </AppLayout>
  );
};

export default StarshipDetailScreen;
