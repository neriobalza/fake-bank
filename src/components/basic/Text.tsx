import React from 'react';
import {Text as ReactText} from 'react-native';
import {useTheme} from '@hooks/index';

interface TextProps {
  children?: React.ReactNode;
  size?: 16 | 18 | 20;
  weight?: 'Light' | 'Regular' | 'Medium' | 'SemiBold';
  color?: string;
}

const Text = (props: TextProps) => {
  const {size, weight, children, color} = props;
  const {theme} = useTheme();

  let textStyles = {
    fontSize: size,
    color: color || theme.color.text,
    fontFamily: `OpenSans-${weight}`,
  };

  return <ReactText style={textStyles}>{children}</ReactText>;
};

Text.defaultProps = {
  size: 16,
  weight: 'Regular',
};

export default Text;
