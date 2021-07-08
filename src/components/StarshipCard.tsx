import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text, Title, Colors, Badge } from "react-native-paper";
import { AppRoutes } from "../navigation/AppRoutes";

export interface StarshipCardProps {
  name: string;
  manufacturer: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
  onPress?: (() => void) | undefined;
}

const StarshipCard = ({ starship }: StarshipCardProps) => {
  const { manufacturer, name, cost_in_credits, hyperdrive_rating } = starship;
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate(AppRoutes.STARSHIP_DETAIL_SCREEN, {
      starshipId: starship,
    });
  }

  return (
    <Card style={styles.containerCard} onPress={handlePress}>
      <Card.Title
        title={name}
        subtitle={manufacturer}
        right={(props) => (
          <Badge style={styles.rating}>{hyperdrive_rating}</Badge>
        )}
      />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title style={styles.price}>{cost_in_credits} credits</Title>
      </Card.Content>
      <Card.Actions>
        {cost_in_credits === "unknown" ? (
          <Button disabled>Not for sale</Button>
        ) : (
          <Button icon="basket" mode="contained" onPress={handlePress}>
            Buy
          </Button>
        )}
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginBottom: 32,
  },
  rating: {
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 10,
  },
  price: {
    textAlign: "center",
  },
});

export default StarshipCard;
