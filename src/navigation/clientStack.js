import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SalonHomeScreen from '../screens/SalonHomeScreen';

const Client = createStackNavigator();

export function ClientStack({navigation, route}) {
  return (
    <Client.Navigator>
      <Client.Screen
        name="SalonHomeScreen"
        component={SalonHomeScreen}
        options={() => ({headerShown: false})}
      />
    </Client.Navigator>
  );
}
