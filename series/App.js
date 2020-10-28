// import { createAppContainer, createStackNavigator } from 'react-navigation';

// import { LoginPage } from "./src/pages/login/LoginPage";


// const AppNavigator = createStackNavigator({
//   'Login': {
//     screen: LoginPage,
//     navigationOptions: {
//       title: 'Bem vindo!',
//     }
//   },
// });

// const AppContainer = createAppContainer(AppNavigator);

// export default AppContainer;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from "./src/pages/login/LoginPage";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;