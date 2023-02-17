import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigation from './AppNavigation';
import {Start, Login, ForgotPassword} from '@screens/index';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Home" component={Start} />
      <Stack.Screen name="Auth" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="App" component={AppNavigation} />
    </Stack.Navigator>
  );
};

export default Navigation;
