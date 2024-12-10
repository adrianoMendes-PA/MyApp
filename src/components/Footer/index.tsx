import React from 'react';
import {Footer, TextFooter, ButtonIconFooter} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Definição do RootStackParamList
export type RootStackParamList = {
  Home: undefined;
  Activities: undefined;
  Financial: undefined;
  Perfil: undefined;
  About: undefined;
};

export default () => {
  // Passando os tipos para o useNavigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Footer>
        <ButtonIconFooter
          onPress={() => navigation.navigate('Home')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="home" size={18} color="#FFF" />
          <TextFooter>Início</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter
          onPress={() => navigation.navigate('Activities')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="chart-line" size={18} color="#FFF" />
          <TextFooter>Atividades</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter
          onPress={() => navigation.navigate('Financial')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="dollar-sign" size={18} color="#FFF" />
          <TextFooter>Financeiro</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter
          onPress={() => navigation.navigate('Perfil')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="user" size={18} color="#FFF" />
          <TextFooter>Perfil</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter
          onPress={() => navigation.navigate('About')}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="tag" size={18} color="#FFF" />
          <TextFooter>Sobre</TextFooter>
        </ButtonIconFooter>
      </Footer>
    </>
  );
};
