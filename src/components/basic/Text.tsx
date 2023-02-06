import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';

interface TextProps {
  children?: React.ReactNode;
  size?: 16 | 18 | 20;
  weight?: '300' | '400' | '500';
}

const Text = (props: TextProps) => {
  const {size, weight, children} = props;
  let textStyles = {
    fontWeight: weight,
    fontSize: size,
  };

  return <RNText style={[textStyles, styles.text]}>{children}</RNText>;
};

Text.defaultProps = {
  size: 16,
  weight: '400',
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    color: 'white',
  },
});

export default Text;
