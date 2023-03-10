import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from '../basic/Input';
import TextButton from '../basic/TextButton';
import Button from '../basic/Button';
import {useTheme} from '@hooks/index';
type Props = {
  switchForm: () => void;
};

const SignUpForm = (props: Props) => {
  const {switchForm} = props;
  const {theme} = useTheme();

  const wrappeStyles = {
    ...styles.wrapper,
    backgroundColor: theme.color.foreground,
  };

  return (
    <View style={styles.container}>
      <View style={wrappeStyles}>
        <View>
          <Input label="Email" placeholder="Email..." />
          <Input label="Password" placeholder="Password..." isPassword={true} />
        </View>

        <Button title="Create now!" elevation={false} />

        <TextButton onPress={switchForm} align="center">
          I already have an account.
        </TextButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 60,
  },
  wrapper: {
    padding: 24,
    paddingVertical: 40,
    borderRadius: 16,
    elevation: 5,
    gap: 16,
  },
});

export default SignUpForm;
