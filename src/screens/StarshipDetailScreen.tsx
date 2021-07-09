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

import AppLayout from "../components/AppLayout";

const StarshipDetailScreen = (props) => {
  const { name } = props.route.params.starshipId;

  return (
    <AppLayout title={name} withFooter>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </AppLayout>
  );
};

export default StarshipDetailScreen;
