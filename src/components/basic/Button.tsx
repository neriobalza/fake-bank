import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {useTheme} from '@hooks/index';

interface Props {
  onPress?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const {onPress, title, children} = props;
  const {theme} = useTheme();

  const buttonStyles = {
    backgroundColor: theme.color.button,
    ...styles.button,
  };

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={buttonStyles}
        activeOpacity={0.75}>
        <Text size={20} color={theme.color.white}>
          {children ? children : title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginVertical: 10,
  },
});

export default Button;
