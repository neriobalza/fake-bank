import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Aaa = () => {
  return <></>;
};

const AppNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Aaa} />
      <Tab.Screen name="Transactions" component={Aaa} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
