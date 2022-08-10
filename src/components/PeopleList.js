import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleList = props => {
  const {peoples} = props;
  const textElements = peoples.map(people => {
    const {first} = people.name;
    return (
      <View key={first} style={style.line}>
        <Text style={style.lineText}>{first}</Text>
      </View>
    );
  });
  return <View style={style.container}>{textElements}</View>;
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
  line: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 30,
    paddingLeft: 30,
  },
});

export default PeopleList;
