import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Start} from '@screens/index';
import type {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
  );
};

export default Navigation;
