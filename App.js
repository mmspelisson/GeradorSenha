import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes'
import { Text, StyleSheet, View, Image } from 'react-native'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

