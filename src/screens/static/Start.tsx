import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/index';
import {
  Layout,
  Button,
  Text,
  TextButton,
  SwitchTheme,
  Title,
} from '@components/index';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Start = (props: Props) => {
  const {navigation} = props;

  const navigateToSignIn = () => {
    navigation.navigate('Auth', {isNew: false});
  };

  const navigateToSignUnp = () => {
    navigation.navigate('Auth', {isNew: true});
  };

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

          <Button title="Sign In" onPress={navigateToSignIn} />

          <View style={styles.mainLinks}>
            <Text>Aren't an user yet?</Text>
            <TextButton title="Sign Up" onPress={navigateToSignUnp} />
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
    paddingHorizontal: 24,
    marginBottom: 100,
  },

  logo: {
    alignItems: 'center',
    // marginBottom: 30,
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
