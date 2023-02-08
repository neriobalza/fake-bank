import React, {useState, createContext} from 'react';
import {theme, darkTheme} from '@utils/index';

export const ThemeContext = createContext({
  theme: theme,
  switchThemeMode: () => {},
  darkMode: false,
});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchThemeMode = () => {
    setDarkMode(!darkMode);
  };

  const valueContext = {
    theme: darkMode ? darkTheme : theme,
    switchThemeMode,
    darkMode,
  };

  return (
    <ThemeContext.Provider value={valueContext}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
