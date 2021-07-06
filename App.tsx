import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { Card } from 'react-native-paper';
import FeedScreen from './src/screens/FeedScreen';
import TermsScreen from './src/screens/TermsScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useStarships } from './hooks/useStarships';

const queryClient = new QueryClient()

const App = () => {
  return (
    // <LoginScreen />
    // <TermsScreen />
    <FeedScreen />
    // <QueryClientProvider client={queryClient}>...</QueryClientProvider>
   );
};

export default App;
