import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//routes
import {StackOpen} from './stackOpen';

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <StackOpen />
    </NavigationContainer>
  );
};

/**
 * EXPORTS
 */
export {MainRoutes};
