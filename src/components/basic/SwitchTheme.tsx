import React from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import {useTheme} from '@hooks/index';

const SwitchTheme = () => {
  const {theme, switchThemeMode, darkMode} = useTheme();

  const switchTheme = () => {
    switchThemeMode();
  };

  const trackColor = {
    false: theme.color.fadedText,
    true: theme.color.fadedText,
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={trackColor}
        thumbColor={theme.color.white}
        style={styles.switch}
        onValueChange={switchTheme}
        value={darkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  switch: {
    alignSelf: 'flex-start',
  },
});

export default SwitchTheme;
