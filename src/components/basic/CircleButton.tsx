import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import {useTheme} from '@hooks/index';

interface CircleButtonProps {
  name?: string;
}

const CircleButton = (props: CircleButtonProps) => {
  const {name} = props;
  const {theme} = useTheme();

  console.log(name);

  const buttonStyles = {
    ...styles.button,
    backgroundColor: theme.color.circleButton,
  };

  const iconStyles = {
    color: theme.color.text,
  };

  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={0.75}>
      <Icon name={name as string} size={30} style={iconStyles} />
    </TouchableOpacity>
  );
};

CircleButton.defaultProps = {
  name: 'alert',
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default CircleButton;
