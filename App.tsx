import React from 'react';
import type {PropsWithChildren} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from './src/uikit/colors';
import {RoutesStack} from './src/routes';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

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
      <RoutesStack />
    </SafeAreaView>
  );
}

export default App;
