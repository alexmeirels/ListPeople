import {createStackNavigator} from '@react-navigation/stack';
import PeoplePage from './src/screens/PeoplePage';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PeoplePage" component={PeoplePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
