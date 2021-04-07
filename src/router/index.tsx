import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HOME_STACK_PATHS } from './paths';
import { HOME_STACK_ROUTES } from './routes';

const Stack = createStackNavigator();
const Router: React.FC = () => {
  return (
    // const loading = false

    // if (loading) {
    //   return <SplashScreen />;
    // }

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_STACK_PATHS.HOME}
        headerMode="none"
      >
        {HOME_STACK_ROUTES.map((route) => {
          return <Stack.Screen {...route} key={route.name} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
