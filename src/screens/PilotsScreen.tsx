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

const PilotsScreen = (props) => {
  console.log(props);
  return (
    <AppLayout title="James" withFooter>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </AppLayout>
  );
};

export default PilotsScreen;
