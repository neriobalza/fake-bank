import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, ThemeProvider} from '@contexts/index';
import {MainNavigation} from '@navigation/index';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <MainNavigation />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
