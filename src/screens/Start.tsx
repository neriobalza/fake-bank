import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Title, Text, Button, Input} from '@components/index';

const Start = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Title>Feka Bank</Title>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          corporis atque laboriosam, ducimus, nam, iusto quasi quod ullam
          eveniet minima itaque! Quisquam nulla inventore numquam totam
          architecto unde harum ipsam.
        </Text>

        <Input label="Email" placeholder="Your email..." />
        <Input
          label="Password"
          placeholder="Your password..."
          isPassword={true}
        />
        <Button title="Send" />
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
