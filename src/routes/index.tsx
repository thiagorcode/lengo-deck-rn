/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStacksRoutes from './authStacks.routes';
import {CreateDeckScreen} from '../screens/CreateDeck';
import {HomeScreen} from '../screens/Home';
import {StartScreen} from '../screens/Start';
import {RootParamList} from '../types/routes.types';
import {Themes} from '../uikit';

const Stack = createNativeStackNavigator<RootParamList>();

export function RoutesStack() {
  return (
    <NavigationContainer
      theme={{
        colors: Themes,
        dark: true,
      }}>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateDeck" component={CreateDeckScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
