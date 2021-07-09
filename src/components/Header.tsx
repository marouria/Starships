import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Appbar, Colors } from "react-native-paper";
import { StyleSheet } from "react-native";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const navigation = useNavigation();
  function goBack() {
    navigation.goBack();
  }

  return (
    <Appbar.Header style={styles.headerContainer}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} subtitle="Subtitle" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.yellow700,
  },
});

export default Header;
