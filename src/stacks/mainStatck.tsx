import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import CadastroUser from '../screens/Register/RegisterUser';
import Home from '../screens/Home';

// TELAS DE CADASTRO
import RegisterTanque from '../screens/Register/RegisterTanque';
import RegisterPeixe from '../screens/Register/RegisterPeixe';

// TELAS DE DETALHES
import DetailsTanque from '../screens/Details/DetailsTanque';
import DetailsPeixe from '../screens/Details/DetailsPeixe';

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

    <Stack.Screen name="RegisterTanque" component={RegisterTanque} />
    <Stack.Screen name="RegisterPeixe" component={RegisterPeixe} />

    <Stack.Screen name="DetailsTanque" component={DetailsTanque} />
    <Stack.Screen name="DetailsPeixe" component={DetailsPeixe} />
  </Stack.Navigator>
);
