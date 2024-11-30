import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import CadastroUser from '../screens/Register/RegisterUser';
import Home from '../screens/Home';

// TELAS DE CADASTRO
import RegisterTanque from '../screens/Register/RegisterTanque';
import RegisterPeixe from '../screens/Register/RegisterPeixe';
import RegisterRacao from '../screens/Register/RegisterRacao';
import RegisterTarefas from '../screens/Register/RegisterTarefas';

// TELAS DE DETALHES
import DetailsTanque from '../screens/Details/DetailsTanque';
import DetailsPeixe from '../screens/Details/DetailsPeixe';

// FOOTER
import Activities from '../screens/Activities';
import Financial from '../screens/Financial';
import Perfil from '../screens/Perfil';
import About from '../screens/About';

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
    <Stack.Screen name="RegisterRacao" component={RegisterRacao} />
    <Stack.Screen name="RegisterTarefas" component={RegisterTarefas} />

    <Stack.Screen name="DetailsTanque" component={DetailsTanque} />
    <Stack.Screen name="DetailsPeixe" component={DetailsPeixe} />

    <Stack.Screen name="Activities" component={Activities} />
    <Stack.Screen name="Financial" component={Financial} />
    <Stack.Screen name="Perfil" component={Perfil} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);
