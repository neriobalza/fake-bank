import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, ThemeProvider} from '@contexts/index';
import {Navigation} from '@navigation/index';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
