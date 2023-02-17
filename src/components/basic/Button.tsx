import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {useTheme} from '@hooks/index';

interface Props {
  onPress?: () => void;
  title?: string;
  children?: React.ReactNode;
  elevation?: boolean;
}

const Button = (props: Props) => {
  const {onPress, title, children, elevation} = props;
  const {theme} = useTheme();

  const buttonStyles = {
    ...styles.button,
    backgroundColor: theme.color.button,
    elevation: elevation ? 5 : 0,
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

Button.defaultProps = {
  elevation: true,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 10,
  },
});

export default Button;
