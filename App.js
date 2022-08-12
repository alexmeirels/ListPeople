import {createStackNavigator} from '@react-navigation/stack';
import PeoplePage from './src/screens/PeoplePage';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
