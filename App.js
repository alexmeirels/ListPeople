import {createAppContainer, createStackNavigator} from 'react-navigation';

import PeoplePage from './src/screens/PeoplePage';

const AppNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage,
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
