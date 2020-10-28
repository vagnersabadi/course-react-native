import { createAppContainer, createStackNavigator } from 'react-navigation';

import { LoginPage } from "./src/pages/login/LoginPage";

rea

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'Bem vindo!',
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;