import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Line from '../components/Line';
export default class PeopleDetailPage extends React.Component {
  render() {
    const {people} = this.props.route.params;
    return (
      <View style={style.container}>
        <Image source={{uri: people.picture.large}} style={style.avatar} />
        <View style={style.detailContainer}>
          <Line label="Email" content={people.email} />
          <Line label="Cidade" content={people.location.city} />
          <Line label="Tel" content={people.phone} />
          <Line label="Nacionalidade" content={people.nat} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 200,
  },
  container: {
    padding: 15,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});
