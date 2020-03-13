// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen } from './screens/FeedScreen.js'
import { WelcomeScreen } from './screens/WelcomeScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* WELCOME SCREEN */} 
        {/* <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            animationEnabled: false,
            headerTransparent: true,
          }}
        /> */}

        {/* STACK SCREEN */}
        <Stack.Screen 
          name="Jakarta" 
          component={FeedScreen} 
          options={{
            animationEnabled: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;