import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useStarships } from "../../hooks/useStarships";
import AppLayout from "../components/AppLayout";
import StarshipCard from "../components/StarshipCard";

const StarshipScreen = () => {
  const { isError, isLoading, data } = useStarships();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <AppLayout title="Starships" withFooter>
      {data.results.map((starship) => {
        return <StarshipCard starship={starship} />;
      })}
    </AppLayout>
  );
};

export default StarshipScreen;
