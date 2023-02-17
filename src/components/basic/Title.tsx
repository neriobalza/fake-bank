import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from '@hooks/index';

interface TitleProps {
  children?: React.ReactNode;
  size?: 24 | 30 | 36 | 50;
  weight: 'SemiBold' | 'Bold';
  align: 'left' | 'center' | 'right';
}

const Title = (props: TitleProps) => {
  const {children, size, weight, align} = props;
  const {theme} = useTheme();

  const titleStyles = {
    color: theme.color.text,
    fontSize: size,
    fontFamily: `OpenSans-${weight}`,
    marginBottom: 5,
    textAlign: align,
  };

  return (
    <View>
      <Text style={titleStyles}>{children}</Text>
    </View>
  );
};

Title.defaultProps = {
  size: 24,
  weight: 'Bold',
  align: 'left',
};

export default Title;
