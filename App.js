import {createStackNavigator} from '@react-navigation/stack';
import PeoplePage from './src/screens/PeoplePage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PeoplePage"
          options={{
            title: 'People',
            headerStyle: {
              backgroundColor: '#6ca2f7',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5',
            },
            headerTitleStyle: {
              fontSize: 30,
              color: 'white',
            },
          }}
          component={PeoplePage}
        />
        <Stack.Screen
          name="PeopleDetailPage"
          options={({route}) => {
            const peopleName = route.params.people.name.first;
            return {
              title: peopleName,
            };
          }}
          component={PeopleDetailPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
