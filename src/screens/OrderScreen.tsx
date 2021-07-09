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

const OrderScreen = () => {
  return (
    <AppLayout title="I bought the following starships" withFooter>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </AppLayout>
  );
};

export default OrderScreen;
