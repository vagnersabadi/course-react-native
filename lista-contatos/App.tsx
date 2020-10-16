import PeoplePage from "./src/pages/PeoplePage";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pessoas"
          component={PeoplePage}
          options={{
            headerStyle: {
              backgroundColor: "#6ca2f7",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
