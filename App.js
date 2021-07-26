import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import Manual_screen from "./screens/Manual_screen";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{ labelStyle: styles.tab_Container, activeTintColor: 'dodgerblue' }}>
        <Tab.Screen
          name='Info'
          component={View}
          options=
          {{
            tabBarIcon: ({ color }) => <Feather name="info" size={20} color={color} />
          }} >
        </Tab.Screen>
        <Tab.Screen
          name='Loop'
          component={View}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name="autorenew" size={20} color={color} />
          }}>
        </Tab.Screen>
        <Tab.Screen
          name='Manual'
          component={Manual_screen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="hand-left-outline" size={20} color={color} />
          }}>
        </Tab.Screen>
        <Tab.Screen
          name='System'
          component={View}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="laptop" size={20} color={color} />
          }}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tab_Container: {
    fontSize: 15,
  },
});
