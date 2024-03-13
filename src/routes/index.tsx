import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StartScreen} from '../screens/Start';
import {Themes} from '../uikit';

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
