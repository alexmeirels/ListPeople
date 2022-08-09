import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';

const RenderList = () => {
  const names = ['Joao', 'Maria', 'Pedro', 'Matheus'];

  const textElements = names.map(name => {
    return <Text>{name}</Text>;
  });

  return textElements;
};

const App = () => {
  return (
    <View>
      <Text />
      <Header title="People" />
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
