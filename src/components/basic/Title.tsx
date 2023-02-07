import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TitleProps {
  children?: React.ReactNode;
}

const Title = (props: TitleProps) => {
  const {children} = props;

  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 30,
  },
});

export default Title;
