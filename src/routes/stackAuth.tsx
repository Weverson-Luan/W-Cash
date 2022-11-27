/**
 * IMPORTS
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import {Home} from '../screens/home';

const Stack = createNativeStackNavigator();

function AppRoutesStackAuthenticates() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

/**
 * EXPORTS
 */
export {AppRoutesStackAuthenticates};
