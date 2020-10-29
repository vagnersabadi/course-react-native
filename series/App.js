import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginPage } from "./src/pages/login/LoginPage";

const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          title: "Series!",
          headerTintColor: 'white',
          headerStyle: {
              backgroundColor: '#6ca2f7',
              borderBottomWidth: 1,
              borderBottomColor: '#C5C5C5',
          },
          headerTitleStyle: {
              color: 'white',
              fontSize: 30,
          }
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Bem vindo!' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;