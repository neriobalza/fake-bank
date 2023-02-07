import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import Text from './Text';
import {useTheme} from '@hooks/index';

interface InputProps {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
}

const Input = (props: InputProps) => {
  const {label, placeholder, isPassword} = props;
  const {theme} = useTheme();

  const inputStyles = {
    ...styles.input,
    borderBottomColor: theme.color.section,
    color: theme.color.text,
  };

  return (
    <View style={styles.container}>
      {label && (
        <Text size={18} weight="SemiBold">
          {label}
        </Text>
      )}
      <TextInput
        style={inputStyles}
        placeholder={placeholder}
        placeholderTextColor={theme.color.fadedText}
        maxLength={50}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

Input.defaultProps = {
  isPassword: false,
};

const styles = StyleSheet.create({
  container: {gap: 8, marginVertical: 10},

  input: {
    fontSize: 18,
    padding: 0,
    paddingVertical: 4,
    borderBottomWidth: 1.5,
  },
});

export default Input;
