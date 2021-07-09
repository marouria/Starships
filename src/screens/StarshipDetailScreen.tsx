import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Card,
  View,
  ScrollView,
  Button,
} from "react-native";

import AppLayout from "../components/AppLayout";

const StarshipDetailScreen = () => {
  const {
    name,
    passengers,
    max_atmosphering_speed,
    model,
    pilots,
    starship_class,
  } = props.route.params.starshipId;

  return (
    <AppLayout title={name} withFooter>
      <Text>{passengers}</Text>
      <Text>{pilots}</Text>
      <Text>{starship_class}</Text>
      <Text>{max_atmosphering_speed}</Text>
      <Text>{model}</Text>
    </AppLayout>
  );
};

export default StarshipDetailScreen;
