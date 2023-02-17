import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Title from '../basic/Title';
import {useTheme} from '@hooks/index';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
};

const Header = (props: Props) => {
  const {title} = props;
  const {theme} = useTheme();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Icon
            name="chevron-left"
            size={theme.spacing.l}
            color={theme.color.text}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Title weight="SemiBold">{title}</Title>
      </View>

      <View style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    height: 50,
    // backgroundColor: 'white',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default Header;
