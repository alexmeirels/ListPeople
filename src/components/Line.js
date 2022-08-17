import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Line = ({label, content}) => {
  return (
    <View style={style.line}>
      <Text style={[style.cell, style.styleLabel]}>{label}</Text>
      <Text style={style.cell}>{content}</Text>
    </View>
  );
};

const style = StyleSheet.create({
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
  styleLabel: {
    fontWeight: 'bold',
  },
});

export default Line;
