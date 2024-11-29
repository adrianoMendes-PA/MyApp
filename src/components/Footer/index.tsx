import React from 'react';
import {Footer, TextFooter, ButtonIconFooter} from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default () => {
  return (
    <>
      <Footer>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="home" size={18} color="#FFF" />
          <TextFooter>Início</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="chart-line" size={18} color="#FFF" />
          <TextFooter>Atividades</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="dollar-sign" size={18} color="#FFF" />
          <TextFooter>Financeiro</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="user" size={18} color="#FFF" />
          <TextFooter>Perfil</TextFooter>
        </ButtonIconFooter>
        <ButtonIconFooter hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Icon name="tag" size={18} color="#FFF" />
          <TextFooter>Sobre</TextFooter>
        </ButtonIconFooter>
      </Footer>
    </>
  );
};
