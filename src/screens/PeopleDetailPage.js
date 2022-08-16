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
          <View style={style.line}>
            <Text style={[style.cell, style.label]}>Email: </Text>
            <Text style={style.cell}>{people.email}</Text>
          </View>
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
});
