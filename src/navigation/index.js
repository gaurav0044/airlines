import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Airlines from '../screens/airlines';
import AirlineDetails from '../screens/airlinesDetails';
const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Airlines"}
        >
          <Stack.Screen name="Airlines" component={Airlines} />
          <Stack.Screen name="AirlineDetails" component={AirlineDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;