import React from 'react'
import { ViewBase, Text } from 'react-native'
import { useStarships } from '../../hooks/useStarships'

const StarshipScreen = () => {
  const { error, isLoading, data } = useStarships()
  if (isLoading) {
    return (
      <Text>Loading…</Text>;
    )
  }
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  )
}

export default StarshipScreen
