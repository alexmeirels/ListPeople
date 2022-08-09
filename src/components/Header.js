import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => {
  return (
    <View style={style.container}>
      <Text style={style.textTitle}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#24c6e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 30,
  },
});

export default Header;
