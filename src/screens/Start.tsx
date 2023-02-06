import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@components/index';

const Start = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>hola</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Start;
