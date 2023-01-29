import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '@screens/index';

const Stack = createNativeStackNavigator();

const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
