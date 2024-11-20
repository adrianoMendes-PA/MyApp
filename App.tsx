/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stacks/mainStatck';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
