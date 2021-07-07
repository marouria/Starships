import React from 'react';
import { useQuery } from 'react-query';
import {Text} from 'react-native';

// 1. fetch pour recup la data
// 2. usequery (hook) pour fetch, cache & update
// 3. UseStarships (custom hook)

async function fetchData() {
  const res = await fetch(`https://swapi.dev/api/starships/`);
  const json = await res.json();
  return json;
}

function UseStarships() {
  const { isLoading, isError} = useQuery(['starships'], fetchData);
  // if (isLoading) {
  // return <Text>Loading..</Text>;
  // }
  // if (isError) {
  // return <Text>error</Text>;
  // }
};

export default UseStarships
