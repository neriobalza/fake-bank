import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from '@navigation/index';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
