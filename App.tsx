import {Authenticator} from '@aws-amplify/ui-react-native';
import {Amplify} from 'aws-amplify';
import {AuthModeStrategyType, DataStore, syncExpression} from 'aws-amplify/datastore';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import amplifyconfig from './src/amplifyconfiguration.json';
import {Deck} from './src/models';
import {RoutesStack} from './src/routes';
import {Colors} from './src/uikit/colors';
process.env.NODE_ENV = 'dev';
Amplify.configure(amplifyconfig);

DataStore.configure({
  authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  syncExpressions: [
    syncExpression(Deck, () => {
      console.log('Sync');
      return deck => deck;
    }),
  ],
});
DataStore.start();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.bgPrimary : Colors.bgPrimary,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Authenticator.Provider>
        <Authenticator>
          <RoutesStack />
        </Authenticator>
      </Authenticator.Provider>
    </SafeAreaView>
  );
}

export default App;
