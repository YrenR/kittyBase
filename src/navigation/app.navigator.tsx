import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home.screen';
import SigInScreen from '../screens/auth/SigIn.screen';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

export const AppNavigator = (): React.ReactElement => {
  const isAuthenticated = false;

  return (
    <NavigationContainer theme={navigatorTheme}>
      {isAuthenticated ? (
        // Private nagigation
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        // Auth
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SigIn" component={SigInScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
