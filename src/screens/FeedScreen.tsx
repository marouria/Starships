import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";

import StarshipCard from "../components/StarshipCard";
import { data } from "../../data";

const FeedScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <StarshipCard
        name={item.name}
        manufacturer={item.manufacturer}
        cost_in_credits={item.cost_in_credits}
        hyperdrive_rating={item.hyperdrive_rating}
      />
    );
  };
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FeedScreen;
