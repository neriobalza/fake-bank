import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';

interface Props {
  children?: React.ReactNode;
  onPress: () => void;
  text?: string;
}

const Button = (props: Props) => {
  const {onPress, text} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
});

export default Button;
