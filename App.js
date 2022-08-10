import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

const App = props => {
  const [peoples, setPeoples] = useState([]);

  const ComponentDidMount = () => {
    axios.get('https://randomuser.me/api/?nat=br&results=5').then(response => {
      const {results} = response.data;
      setPeoples(results);
    });
  };
  //ComponentDidMount();
  const renderList = () => {
    const textElements = peoples.map(people => {
      const {first} = people.name;
      return <Text key={first}>{first}</Text>;
    });
    return textElements;
  };
  return (
    <View>
      <Text />
      <Header title="Peoples" />
      {renderList()}
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
