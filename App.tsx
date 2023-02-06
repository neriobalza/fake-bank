import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, ThemeProvider} from '@contexts/index';
import {AppNavigation} from '@navigation/index';

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <AppNavigation />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
