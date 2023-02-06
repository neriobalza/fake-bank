import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {useTheme} from '@hooks/index';

const Layout = ({children}: PropsWithChildren) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.color.background,
        ...styles.container,
      }}>
      <StatusBar barStyle="light-content" backgroundColor="#08080E" />

      <>{children}</>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
