import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, Text, Title, Colors, Badge } from "react-native-paper";

export interface StarshipCardProps {
  name: string;
  manufacturer: string;
  cost_in_credits: string;
  hyperdrive_rating: string;
}

const StarshipCard = ({ name, manufacturer, cost_in_credits, hyperdrive_rating }: StarshipCardProps) => {

  const handlePress = () => {
    alert("Buy!");
  };

  return (
    <Card style={styles.containerCard}>
      <Card.Title
      title={name}
      subtitle={manufacturer}
      right={(props) => <Badge style={styles.rating}>{hyperdrive_rating}</Badge>}
      />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title style={styles.price}>{cost_in_credits} credits</Title>
      </Card.Content>
      <Card.Actions>
        {cost_in_credits === "unknown" ? (
          <Button disabled>Not for sale</Button>
        ) : (
            <Button icon="basket" mode="contained" onPress={handlePress}>Buy</Button>
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
