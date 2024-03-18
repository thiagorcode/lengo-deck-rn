/* eslint-disable react/react-in-jsx-scope */
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CreateDeck} from '../screens/CreateDeck';
import {Home} from '../screens/Home';
import {StartScreen} from '../screens/Start';
import {RootParamList} from '../types/routes.types';

const Stack = createNativeStackNavigator<RootParamList>();

function AuthStacks() {
  return (
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateDeck" component={CreateDeck} />
    </Stack.Navigator>
  );
}

export default withAuthenticator(AuthStacks);
