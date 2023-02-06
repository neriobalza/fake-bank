import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// type Props = {};

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Fake Bank</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08080E',
    padding: 20,
  },
});

export default LoginForm;
