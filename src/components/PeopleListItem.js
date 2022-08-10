import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PeopleListItem = props => {
  const {people} = props;
  const {first, last} = people.name;
  return (
    <View style={style.line}>
      <Text style={style.lineText}>{`${first} ${last}`}</Text>
    </View>
  );
};
const style = StyleSheet.create({
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

export default PeopleListItem;
