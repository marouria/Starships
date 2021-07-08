import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useStarships } from "../../hooks/useStarships";
import AppLayout from "../components/AppLayout";
import StarshipCard from "../components/StarshipCard";
import { AppRoutes } from "../navigation/AppRoutes";

const StarshipScreen = () => {
  const { isError, isLoading, data } = useStarships();
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate(AppRoutes.TERMS_SCREEN);
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error</Text>;
  }

  // console.log(data.results.map((starship) => (starship.model, starship.cost_in_credits)));

  return (
    <AppLayout title="Starships" withFooter>
      {data.results.map((starship) => {
        return (
          <StarshipCard
            name={starship.name}
            onPress={handlePress}
            manufacturer={starship.model}
            cost_in_credits={starship.cost_in_credits}
            hyperdrive_rating={starship.hyperdrive_rating}
          />
        );
      })}
    </AppLayout>
  );
};

export default StarshipScreen;
