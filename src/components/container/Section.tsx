import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

const Section = (props: Props) => {
  const {} = props;

  return (
    <View style={styles.section}>
      <Text>Section</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {},
});

export default Section;
