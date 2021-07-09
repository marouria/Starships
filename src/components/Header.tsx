import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Appbar, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";
import { theme } from "../theme/theme";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} subtitle="Subtitle" />
    </Appbar.Header>
  );
};

export default Header;
