/**
 * IMPORTS
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import {Presetation} from '../screens/presetation ';
import {SignIn} from '../screens/signIn';
import {Home} from '../screens/home';

const Stack = createNativeStackNavigator();

function StackOpen() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

/**
 * EXPORTS
 */
export {StackOpen};
