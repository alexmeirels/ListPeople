import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <View style={style.container}>
      <Text>Hello</Text>
      <Header />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
