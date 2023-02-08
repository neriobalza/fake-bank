import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Layout,
  Button,
  Text,
  TextLink,
  SwitchTheme,
  Title,
} from '@components/index';

const Start = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <SwitchTheme />
        </View>

        <View style={styles.main}>
          <View style={styles.logo}>
            <Title size={50}>Fake Bank</Title>
            <Text size={18}>Not a real bank.</Text>
          </View>

          <Button title="Sign In" />

          <View style={styles.mainLinks}>
            <Text>Aren't an user yet?</Text>
            <TextLink link="SignUp">Sign Up</TextLink>
          </View>
        </View>

        <View style={styles.footer}>
          <Text size={14}>Handcrafted by @neriobalza.</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  header: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  main: {
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 100,
  },

  logo: {
    alignItems: 'center',
  },

  mainLinks: {
    alignItems: 'center',
  },

  footer: {
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default Start;
