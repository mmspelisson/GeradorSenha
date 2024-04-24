import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'
import { Ionicons } from '@expo/vector-icons'
import { Login } from './pages/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function PasswordsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Passwords" component={Passwords} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="login"
        component={Login}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if(focused){
              return <Ionicons size={size}  color={color} name="person-circle"/>
            }
            return <Ionicons size={size}  color={color} name="person-circle-outline"/>
          }
        }}
      />
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if(focused){
              return <Ionicons size={size}  color={color} name="home"/>
            }
            return <Ionicons size={size}  color={color} name="home-outline"/>
          }
        }}
      />
      <Tab.Screen
        name="passwords"
        component={PasswordsStack}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if(focused){
              return <Ionicons size={size}  color={color} name="lock-closed"/>
            }
            return <Ionicons size={size}  color={color} name="lock-closed-outline"/>
          }
        }}
      />
    </Tab.Navigator>
  );
}
