import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@hooks/index';
import Text from './Text';

interface LinkProps {
  children?: React.ReactNode;
  title?: string;
  onPress?: () => void;
  align?: 'left' | 'center' | 'right';
}

const TextLink = (props: LinkProps) => {
  const {children, title, onPress, align} = props;
  const {theme} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <Text weight="SemiBold" color={theme.color.button} align={align}>
        {children ? children : title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextLink;
