import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text, Header, Input, Button} from '@components/index';
import {useTheme} from '@hooks/index';

const ForgotPassword = () => {
  const {theme} = useTheme();

  const sectionStyles = {
    ...styles.section,
    backgroundColor: theme.color.foreground,
  };

  return (
    <Layout>
      <Header title="Forgot Password" />

      <View style={styles.container}>
        <View style={sectionStyles}>
          <Input label="Email" placeholder="Email..." />
          <Button title="Send" />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  section: {
    padding: 24,
    paddingVertical: 40,
    borderRadius: 16,
    elevation: 5,
    gap: 16,
    marginBottom: 60,
  },
});

export default ForgotPassword;
