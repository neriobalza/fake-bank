import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Start} from '@screens/index';

const Stack = createNativeStackNavigator();

const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
