import React, {useEffect} from 'react';
import {Container, IconLoading} from './style';
import {StatusBar, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, NavigationProp} from '@react-navigation/native';

// Define o tipo do RootParamList com as rotas disponíveis
type RootParamList = {
  Home: undefined;
  Login: undefined;
};

export default () => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  // Verifica se o usuário está logado
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // Reseta a navegação para a rota Home
          navigation.reset({
            index: 0, // Define qual rota será exibida no topo do stack
            routes: [{name: 'Home'}],
          });
        } else {
          // Navega para a tela Login
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error);
      }
    };
    checkToken();
  }, [navigation]);

  return (
    <>
      <Container>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
        <Image source={require('../../assets/tfish.png')} />
        <IconLoading size={'large'} />
      </Container>
    </>
  );
};
