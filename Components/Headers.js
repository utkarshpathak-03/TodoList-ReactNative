import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Shopping list',
};

const Styles = StyleSheet.create({
  header: {
    height: 40,
    padding: 5,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default Header;
