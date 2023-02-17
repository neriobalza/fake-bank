import React from 'react';
import {Text as ReactText} from 'react-native';
import {useTheme} from '@hooks/index';

interface TextProps {
  children?: React.ReactNode;
  size?: 14 | 16 | 18 | 20;
  weight?: 'Light' | 'Regular' | 'Medium' | 'SemiBold';
  color?: string;
  align: 'left' | 'center' | 'right';
}

const Text = (props: TextProps) => {
  const {size, weight, children, color, align} = props;
  const {theme} = useTheme();

  let textStyles = {
    fontSize: size,
    color: color || theme.color.text,
    fontFamily: `OpenSans-${weight}`,
    textAlign: align,
  };

  return <ReactText style={textStyles}>{children}</ReactText>;
};

Text.defaultProps = {
  size: 16,
  weight: 'Regular',
  align: 'left',
};

export default Text;
