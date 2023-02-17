import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@hooks/index';
import {RootStackParamList} from '@navigation/index';
import Input from '../basic/Input';
import TextButton from '../basic/TextButton';
import Button from '../basic/Button';

type Props = {
  switchForm: () => void;
};
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const LoginForm = (props: Props) => {
  const {switchForm} = props;
  const {theme} = useTheme();
  const navigation = useNavigation<NavigationProps>();

  const wrappeStyles = {
    ...styles.wrapper,
    backgroundColor: theme.color.foreground,
  };

  const handleSubmit = () => {
    navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <View style={wrappeStyles}>
        <View>
          <Input label="Email" placeholder="Email..." />
          <Input label="Password" placeholder="Password..." isPassword={true} />
          <TextButton
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
            I forgot my password
          </TextButton>
        </View>

        <Button title="Lets go!" elevation={false} onPress={handleSubmit} />

        <TextButton onPress={switchForm} align="center">
          Create an account
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

export default LoginForm;
