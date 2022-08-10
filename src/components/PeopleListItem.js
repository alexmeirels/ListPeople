import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const PeopleListItem = props => {
  const {people} = props;
  const {first, last} = people.name;
  const {thumbnail} = people.picture;
  return (
    <TouchableOpacity>
      <View style={style.line}>
        <Image style={style.avatar} source={{uri: thumbnail}} />
        <Text style={style.lineText}>{`${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  line: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 30,
    paddingLeft: 30,
    flex: 7,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 30,
    borderRadius: 50,
  },
});

export default PeopleListItem;
