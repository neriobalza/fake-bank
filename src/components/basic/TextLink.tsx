import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@hooks/index';
import Text from './Text';

interface LinkProps {
  children?: React.ReactNode;
  link?: string;
  options?: object;
}

const TextLink = (props: LinkProps) => {
  const {children, link} = props;
  const {theme} = useTheme();

  const goTo = () => {
    if (link) {
      console.log(link);
      // navigation.navigate(link);
    }
  };

  return (
    <TouchableOpacity onPress={goTo} activeOpacity={0.75}>
      <Text weight="SemiBold" color={theme.color.button}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TextLink;
