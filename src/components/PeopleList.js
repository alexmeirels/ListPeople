import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
  const {peoples, onPressItem} = props;
  return (
    <FlatList
      style={style.container}
      data={peoples}
      renderItem={({item}) => (
        <PeopleListItem people={item} navigate={onPressItem} />
      )}
      keyExtractor={item => item.name.first}
    />
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

export default PeopleList;
