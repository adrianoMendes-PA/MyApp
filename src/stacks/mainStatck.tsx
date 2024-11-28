import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import CadastroUser from '../screens/CadastroUser';
import Home from '../screens/Home';

// TELAS DE CADASTRO
import CadastroTanque from '../screens/Register/RegisterTanque';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="CadastroUser" component={CadastroUser} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />

    <Stack.Screen name="CadastroTanque" component={CadastroTanque} />
  </Stack.Navigator>
);
