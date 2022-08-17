import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
    };
  }

  componentDidMount = () => {
    this.setState({loading: true});
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=15')
        .then(response => {
          const {results} = response.data;
          this.setState({
            peoples: results,
            loading: false,
          });
        });
    }, 1500);
  };
  render() {
    return (
      <View>
        {this.state.loading ? (
          <ActivityIndicator sizer="large" color="#6ca2f7" />
        ) : null}

        <PeopleList
          peoples={this.state.peoples}
          onPressItem={peopleName => {
            this.props.navigation.navigate('PeopleDetailPage', peopleName);
          }}
        />
      </View>
    );
  }
}
